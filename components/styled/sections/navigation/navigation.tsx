'use client';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Logo } from '../../elements/logo/logo';
import { NavigationClient } from './navigation-client';
import { Button } from '../../elements/button/button';
import { NavigationProps } from './navigation.types';

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.space[4]} ${theme.section.paddingX}`};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  flex-shrink: 0;
`;

const DesktopNav = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[8]};
  margin: 0 ${({ theme }) => theme.space[8]};

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gray[600]};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
  }
`;

const CtaContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Navigation: React.FC<NavigationProps> = ({ links, ctaText, ctaHref }) => {
  return (
    <Header>
      <Nav>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        {/* Desktop Navigation */}
        <DesktopNav>
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </DesktopNav>

        {ctaText && (
          <CtaContainer>
            <Button href={ctaHref} variant="primary" size="sm">
              {ctaText}
            </Button>
          </CtaContainer>
        )}

        {/* Mobile Navigation */}
        <NavigationClient links={links} ctaText={ctaText} ctaHref={ctaHref} />
      </Nav>
    </Header>
  );
};
