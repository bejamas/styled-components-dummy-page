'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../elements/button/button';
import { Text } from '../../elements/typography/typography';

const NewsletterForm = styled.form`
  margin-top: ${({ theme }) => theme.space[8]};
`;

const NewsletterTitle = styled(Text)`
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const FormContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[2]};
`;

const Input = styled.input`
  flex: 1;
  min-width: 0;
  padding: ${({ theme }) => `${theme.space[2]} ${theme.space[3]}`};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: 0.875rem;
`;

const SuccessMessage = styled(Text)`
  margin-top: ${({ theme }) => theme.space[2]};
  color: ${({ theme }) => theme.colors.accent};
`;

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
    <NewsletterForm onSubmit={handleSubmit}>
      <NewsletterTitle weight="medium">Subscribe to our newsletter</NewsletterTitle>
      <FormContainer>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <Button type="submit" variant="primary" size="sm" isLoading={status === 'loading'}>
          Subscribe
        </Button>
      </FormContainer>
      {status === 'success' && <SuccessMessage variant="body">Thanks for subscribing!</SuccessMessage>}
    </NewsletterForm>
  );
};
