'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { TestimonialsProps } from './testimonials.types';
import { Section } from '../../layout/section';
import { Heading, Text } from '../../elements/typography/typography';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.section.paddingX};
`;

const Header = styled.div`
  text-align: center;
  max-width: 640px;
  margin: 0 auto ${({ theme }) => theme.space[16]};
`;

const StyledTitle = styled(Heading)`
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const StyledSubtitle = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space[8]};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const StarRating = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[1]};
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const Star = styled.svg<{ $filled: boolean }>`
  width: 20px;
  height: 20px;
  color: ${({ theme, $filled }) => ($filled ? '#fbbf24' : theme.colors.gray[300])};
`;

interface StarRatingProps {
  rating: number;
}

const Rating: React.FC<StarRatingProps> = ({ rating }) => (
  <StarRating aria-label={`${rating} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((star) => (
      <Star key={star} $filled={star <= rating} viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </Star>
    ))}
  </StarRating>
);

const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.space[8]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[6]};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.08);
  }
`;

const Quote = styled.blockquote`
  margin: 0;
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};
`;

const Avatar = styled(Image)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[1]};
`;

const AuthorName = styled(Text)`
  color: ${({ theme }) => theme.colors.foreground};
`;

const AuthorTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const Testimonials: React.FC<TestimonialsProps> = ({
  title,
  subtitle,
  testimonials,
  background = 'white',
  variant = 'grid',
}) => {
  return (
    <Section background={background}>
      <Container>
        <Header>
          <StyledTitle level="h2">{title}</StyledTitle>
          {subtitle && <StyledSubtitle variant="large">{subtitle}</StyledSubtitle>}
        </Header>
        <Grid>
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              {testimonial.rating && <Rating rating={testimonial.rating} />}
              <Quote>{testimonial.quote}</Quote>
              <Author>
                <Avatar
                  src={testimonial.author.avatar.src}
                  alt={testimonial.author.avatar.alt}
                  width={48}
                  height={48}
                />
                <AuthorInfo>
                  <AuthorName weight="medium">{testimonial.author.name}</AuthorName>
                  <AuthorTitle variant="small">
                    {testimonial.author.title}, {testimonial.author.company}
                  </AuthorTitle>
                </AuthorInfo>
              </Author>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
