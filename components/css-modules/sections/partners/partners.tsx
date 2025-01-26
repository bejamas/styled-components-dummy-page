'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './partners.module.css';
import { PartnersProps } from './partners.types';
import { Section } from '../../elements/section/section';
import { Heading, Text } from '../../elements/typography/typography';

export const Partners: React.FC<PartnersProps> = ({
  title,
  subtitle,
  partners,
  background = 'white',
  variant = 'grid',
  showNames = true,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (variant === 'carousel' && trackRef.current) {
      const track = trackRef.current;
      let animationFrameId: number;
      
      const animate = () => {
        if (track) {
          const fullWidth = track.scrollWidth / 2;
          const currentScroll = Number(track.dataset.scroll || '0');
          
          track.style.transform = `translateX(${-currentScroll}px)`;
          const nextScroll = currentScroll + 0.5;
          
          track.dataset.scroll = nextScroll >= fullWidth ? '0' : nextScroll.toString();
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      // Initialize scroll position
      track.dataset.scroll = '0';
      animate();

      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }
  }, [variant]);

  const renderPartnerItem = (partner: typeof partners[0], index: number, isDuplicate = false) => (
    <div key={`${index}${isDuplicate ? '-duplicate' : ''}`} className={styles.partner_item}>
      {partner.href ? (
        <Link href={partner.href} className={styles.partner_link}>
          <Image
            src={partner.logo.src}
            alt={partner.logo.alt}
            width={160}
            height={80}
            className={styles.partner_logo}
          />
          {showNames && (
            <div className={styles.partner_info}>
              <Text className={styles.partner_name}>{partner.name}</Text>
              {partner.description && (
                <Text variant="small" className={styles.partner_description}>
                  {partner.description}
                </Text>
              )}
            </div>
          )}
        </Link>
      ) : (
        <>
          <Image
            src={partner.logo.src}
            alt={partner.logo.alt}
            width={160}
            height={80}
            className={styles.partner_logo}
          />
          {showNames && (
            <div className={styles.partner_info}>
              <Text className={styles.partner_name}>{partner.name}</Text>
              {partner.description && (
                <Text variant="small" className={styles.partner_description}>
                  {partner.description}
                </Text>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );

  return (
    <Section background={background} padding="large">
      <div className={styles.partners}>
        <div className={styles.partners_header}>
          <Heading level="h2" className={styles.partners_title}>
            {title}
          </Heading>
          {subtitle && (
            <Text variant="large" className={styles.partners_subtitle}>
              {subtitle}
            </Text>
          )}
        </div>
        <div className={styles.partners_container} data-variant={variant} ref={scrollRef}>
          <div className={styles.partners_track} ref={trackRef}>
            <div className={styles.partners_track_inner}>
              {partners.map((partner, index) => renderPartnerItem(partner, index))}
            </div>
            {variant === 'carousel' && (
              <div className={styles.partners_track_inner}>
                {partners.map((partner, index) => renderPartnerItem(partner, index, true))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};
