'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FooterProps } from './footer.types';
import { Logo } from '../../elements/logo/logo';
import { NewsletterSignup } from './footer-client';
import { Text } from '../../elements/typography/typography';

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.gray[100]};
  padding: ${({ theme }) => `${theme.space[16]} 0 ${theme.space[8]}`};
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.section.paddingX};
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${({ theme }) => theme.space[16]};
  margin-bottom: ${({ theme }) => theme.space[16]};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[8]};
  }
`;

const BrandSection = styled.div`
  max-width: 320px;
`;

const Tagline = styled(Text)`
  margin: ${({ theme }) => `${theme.space[4]} 0 ${theme.space[8]}`};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space[8]};

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.space[6]};
  font-size: ${({ theme }) => theme.space[4]};
  font-weight: 600;
  letter-spacing: -0.01em;
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gray[600]};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
  }
`;

const BottomSection = styled.div`
  padding-top: ${({ theme }) => theme.space[8]};
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space[4]};
    text-align: center;
  }
`;

const Copyright = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const BottomLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: ${({ theme }) => theme.space[6]};
`;

export const Footer: React.FC<FooterProps> = ({ columns, bottomLinks }) => {
  return (
    <FooterWrapper>
      <Container>
        <TopSection>
          <BrandSection>
            <Logo />
            <Tagline variant="body">Building better experiences with modern components</Tagline>
            <NewsletterSignup />
          </BrandSection>
          <Columns>
            {columns.map((column, index) => (
              <div key={index}>
                <ColumnTitle weight="medium">{column.title}</ColumnTitle>
                <LinksList>
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <FooterLink href={link.href}>{link.label}</FooterLink>
                    </li>
                  ))}
                </LinksList>
              </div>
            ))}
          </Columns>
        </TopSection>
        <BottomSection>
          <Copyright variant="small">© {new Date().getFullYear()} Your Company. All rights reserved.</Copyright>
          <BottomLinks>
            {bottomLinks.map((link, index) => (
              <li key={index}>
                <FooterLink href={link.href}>{link.label}</FooterLink>
              </li>
            ))}
          </BottomLinks>
        </BottomSection>
      </Container>
    </FooterWrapper>
  );
};
