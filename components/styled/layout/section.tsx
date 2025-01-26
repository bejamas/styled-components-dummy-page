import React from 'react';
import styled from 'styled-components';

interface SectionProps {
  children: React.ReactNode;
  background?: 'white' | 'gray' | 'gradient';
}

const StyledSection = styled.section<{ $background: string }>`
  padding: 96px 0;
  background: ${(props) => {
    switch (props.$background) {
      case 'gray':
        return '#F9FAFB';
      case 'gradient':
        return 'linear-gradient(to bottom right, #F9FAFB, #E5E7EB)';
      default:
        return '#FFFFFF';
    }
  }};
`;

export const Section: React.FC<SectionProps> = ({ children, background = 'white' }) => {
  return <StyledSection $background={background}>{children}</StyledSection>;
};
