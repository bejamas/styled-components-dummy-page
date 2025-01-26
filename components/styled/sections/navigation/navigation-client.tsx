'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Button } from '../../elements/button/button';
import { NavigationProps } from './navigation.types';

const MobileNav = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ToggleButton = styled.button`
  display: none;
  padding: ${({ theme }) => theme.space[2]};
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ToggleIcon = styled.span<{ $isOpen: boolean }>`
  display: block;
  width: 24px;
  height: 2px;
  background: ${({ $isOpen, theme }) => ($isOpen ? 'transparent' : theme.colors.foreground)};
  position: relative;
  transition: background-color 0.2s;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.foreground};
    transition: transform 0.2s;
  }

  &::before {
    top: -6px;
    transform: ${({ $isOpen }) => ($isOpen ? 'translateY(6px) rotate(45deg)' : 'none')};
  }

  &::after {
    bottom: -6px;
    transform: ${({ $isOpen }) => ($isOpen ? 'translateY(-6px) rotate(-45deg)' : 'none')};
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 57px;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.space[2]};
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
  transition: transform 0.3s ease;
  z-index: 40;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const MobileLink = styled(Link)`
  display: block;
  padding: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.gray[600]};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
  }
`;

const MobileCta = styled(Button)`
  margin-top: ${({ theme }) => theme.space[4]};
`;

export const NavigationClient: React.FC<NavigationProps> = ({ links, ctaText, ctaHref }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MobileNav>
      <ToggleButton onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label="Toggle menu">
        <ToggleIcon $isOpen={isOpen} />
      </ToggleButton>

      <MobileMenu $isOpen={isOpen}>
        <MobileLinks>
          {links.map((link) => (
            <MobileLink key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </MobileLink>
          ))}
          {ctaText && (
            <MobileCta href={ctaHref} variant="primary" size="sm">
              {ctaText}
            </MobileCta>
          )}
        </MobileLinks>
      </MobileMenu>
    </MobileNav>
  );
};
