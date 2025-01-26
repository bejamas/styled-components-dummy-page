import React from 'react';
import styles from './testimonials.module.css';
import { TestimonialsProps } from './testimonials.types';
import { Section } from '../../elements/section/section';
import { Heading, Text } from '../../elements/typography/typography';
import Image from 'next/image';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className={styles.rating} aria-label={`${rating} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((star) => (
      <svg key={star} className={styles.star} data-filled={star <= rating} viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export const Testimonials: React.FC<TestimonialsProps> = ({
  title,
  subtitle,
  testimonials,
  background = 'white',
  variant = 'grid',
}) => {
  return (
    <Section background={background} padding="large">
      <div className={styles.testimonials}>
        <div className={styles.testimonials_header}>
          <Heading level="h2" className={styles.testimonials_title}>
            {title}
          </Heading>
          {subtitle && (
            <Text variant="large" className={styles.testimonials_subtitle}>
              {subtitle}
            </Text>
          )}
        </div>
        <div className={styles.testimonials_container} data-variant={variant}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonial_card} data-variant={variant}>
              {testimonial.rating && <StarRating rating={testimonial.rating} />}
              <blockquote className={styles.testimonial_quote}>{testimonial.quote}</blockquote>
              <div className={styles.testimonial_author}>
                <Image
                  src={testimonial.author.avatar.src}
                  alt={testimonial.author.avatar.alt}
                  width={48}
                  height={48}
                  className={styles.author_avatar}
                />
                <div className={styles.author_info}>
                  <Text weight="medium" className={styles.author_name}>
                    {testimonial.author.name}
                  </Text>
                  <Text variant="small" className={styles.author_title}>
                    {testimonial.author.title}, {testimonial.author.company}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
