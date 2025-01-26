'use client';

import React from 'react';
import styles from './contact.module.css';
import { Section } from '../../elements/section/section';
import { Heading, Text } from '../../elements/typography/typography';
import { Input, Textarea, Select, Checkbox } from '../../elements/form/form';
import { Button } from '../../elements/button/button';

interface ContactFormProps {
  title: string;
  subtitle?: string;
  background?: 'white' | 'gray';
}

export const ContactForm: React.FC<ContactFormProps> = ({ title, subtitle, background = 'white' }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
      newsletter: formData.get('newsletter') === 'on',
    };

    console.log('Form submitted:', data);
  };

  return (
    <Section background={background} padding="large">
      <div className={styles.contact}>
        <div className={styles.contact_header}>
          <Heading level="h2" className={styles.contact_title}>
            {title}
          </Heading>
          {subtitle && (
            <Text variant="large" className={styles.contact_subtitle}>
              {subtitle}
            </Text>
          )}
        </div>
        <form className={styles.contact_form} onSubmit={handleSubmit}>
          <div className={styles.form_grid}>
            <Input label="Name" name="name" type="text" required placeholder="Your name" />
            <Input label="Email" name="email" type="email" required placeholder="your@email.com" />
          </div>
          <Select
            label="Subject"
            name="subject"
            required
            options={[
              { value: '', label: 'Select a subject' },
              { value: 'general', label: 'General Inquiry' },
              { value: 'support', label: 'Technical Support' },
              { value: 'feedback', label: 'Feedback' },
            ]}
          />
          <Textarea label="Message" name="message" required placeholder="Your message..." />
          <Checkbox label="Subscribe to our newsletter" name="newsletter" />
          <Button type="submit" variant="primary">
            Send Message
          </Button>
        </form>
      </div>
    </Section>
  );
};
