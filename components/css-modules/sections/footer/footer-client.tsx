'use client';

import React, { useState } from 'react';
import styles from './footer.module.css';
import { Button } from '../../elements/button/button';
import { Text } from '../../elements/typography/typography';

export const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus('success');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.newsletter}>
      <Text weight="medium" className={styles.newsletter_title}>
        Subscribe to our newsletter
      </Text>
      <div className={styles.newsletter_form}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className={styles.newsletter_input}
          required
        />
        <Button type="submit" variant="primary" size="sm" isLoading={status === 'loading'}>
          Subscribe
        </Button>
      </div>
      {status === 'success' && (
        <Text variant="body" className={styles.newsletter_success}>
          Thanks for subscribing!
        </Text>
      )}
    </form>
  );
};
