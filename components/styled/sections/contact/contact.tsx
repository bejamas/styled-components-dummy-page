'use client';

import React from 'react';
import styled from 'styled-components';
import { Section } from '../../layout/section';
import { Heading, Text } from '../../elements/typography/typography';
import { Input, Textarea, Select, Checkbox } from '../../elements/form/form';
import { Button } from '../../elements/button/button';
import { ContactFormProps } from './contact.types';

const Container = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.section.paddingX};
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space[12]};
`;

const StyledTitle = styled(Heading)`
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const StyledSubtitle = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[6]};
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[6]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactForm: React.FC<ContactFormProps> = ({ title, subtitle, background = 'white', onSubmit }) => {
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

    onSubmit?.(data);
  };

  return (
    <Section background={background}>
      <Container>
        <Header>
          <StyledTitle level="h2">{title}</StyledTitle>
          {subtitle && <StyledSubtitle variant="large">{subtitle}</StyledSubtitle>}
        </Header>

        <Form onSubmit={handleSubmit}>
          <FormGrid>
            <Input label="Name" name="name" type="text" required placeholder="Your name" />
            <Input label="Email" name="email" type="email" required placeholder="your@email.com" />
          </FormGrid>

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
        </Form>
      </Container>
    </Section>
  );
};
