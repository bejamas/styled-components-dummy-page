import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './blog.module.css';
import { BlogGridProps } from './blog.types';
import { Section } from '../../elements/section/section';
import { Heading, Text } from '../../elements/typography/typography';

export const BlogGrid: React.FC<BlogGridProps> = ({ title, subtitle, posts, background = 'white', columns = 3 }) => {
  return (
    <Section background={background} padding="large">
      <div className={styles.blog}>
        <div className={styles.blog_header}>
          <Heading level="h2" className={styles.blog_title}>
            {title}
          </Heading>
          {subtitle && (
            <Text variant="large" className={styles.blog_subtitle}>
              {subtitle}
            </Text>
          )}
        </div>
        <div className={styles.blog_grid} data-columns={columns}>
          {posts.map((post, index) => (
            <Link key={index} href={post.href} className={styles.blog_card}>
              <div className={styles.card_image}>
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.image}
                />
                <span className={styles.category}>{post.category}</span>
              </div>
              <div className={styles.card_content}>
                <div className={styles.meta}>
                  <div className={styles.author}>
                    <Image
                      src={post.author.avatar.src}
                      alt={post.author.avatar.alt}
                      width={24}
                      height={24}
                      className={styles.avatar}
                    />
                    <span>{post.author.name}</span>
                  </div>
                  <time className={styles.date}>{post.date}</time>
                </div>
                <h3 className={styles.post_title}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};
