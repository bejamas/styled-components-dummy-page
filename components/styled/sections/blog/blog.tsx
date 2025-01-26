'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { BlogGridProps } from './blog.types';
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

const Grid = styled.div<{ $columns: number }>`
  display: grid;
  gap: ${({ theme }) => theme.space[8]};
  grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: ${({ $columns }) => ($columns === 3 ? 'repeat(2, 1fr)' : `repeat(${$columns}, 1fr)`)};
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.08);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 16/9;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const Category = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.space[4]};
  left: ${({ theme }) => theme.space[4]};
  background: ${({ theme }) => theme.colors.accent};
  color: black;
  font-size: 0.875rem;
  font-weight: 500;
  padding: ${({ theme }) => `${theme.space[1]} ${theme.space[3]}`};
  border-radius: ${({ theme }) => theme.radius.full};
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.space[6]};
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.space[4]};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
`;

const Avatar = styled(Image)`
  border-radius: 50%;
`;

const PostTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.space[2]};
  color: ${({ theme }) => theme.colors.foreground};
`;

const Excerpt = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  line-height: 1.6;
`;

export const BlogGrid: React.FC<BlogGridProps> = ({ title, subtitle, posts, background = 'white', columns = 3 }) => {
  return (
    <Section background={background}>
      <Container>
        <Header>
          <StyledTitle level="h2">{title}</StyledTitle>
          {subtitle && <StyledSubtitle variant="large">{subtitle}</StyledSubtitle>}
        </Header>
        <Grid $columns={columns}>
          {posts.map((post, index) => (
            <Card key={index} href={post.href}>
              <ImageContainer>
                <StyledImage
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <Category>{post.category}</Category>
              </ImageContainer>
              <Content>
                <Meta>
                  <Author>
                    <Avatar src={post.author.avatar.src} alt={post.author.avatar.alt} width={24} height={24} />
                    <span>{post.author.name}</span>
                  </Author>
                  <time>{post.date}</time>
                </Meta>
                <PostTitle>{post.title}</PostTitle>
                <Excerpt>{post.excerpt}</Excerpt>
              </Content>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
