'use client';

import React from 'react';
import styled, { css } from 'styled-components';
import { InputProps, TextareaProps, SelectProps, CheckboxProps } from './form.types';

interface InputStylesProps {
  $variant?: 'default' | 'filled' | 'outlined' | 'minimal';
  $error?: boolean;
  $hasLeftIcon?: boolean;
  $hasRightIcon?: boolean;
}

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
  position: relative;
`;

const Label = styled.label<{ $required?: boolean; $hidden?: boolean }>`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[700]};

  ${({ $required }) =>
    $required &&
    css`
      &::after {
        content: '*';
        color: #dc3545;
        margin-left: 0.25rem;
      }
    `}

  ${({ $hidden }) =>
    $hidden &&
    css`
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    `}
`;

const inputStyles = css<InputStylesProps>`
  width: 100%;
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[4]}`};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.background};
  font-size: 1rem;
  transition: all 0.2s ease;
  color: ${({ theme }) => theme.colors.foreground};

  ${({ $variant }) =>
    $variant === 'filled' &&
    css`
      background: ${({ theme }) => theme.colors.gray[100]};
      border-color: transparent;
    `}

  ${({ $variant }) =>
    $variant === 'outlined' &&
    css`
      border-width: 2px;
    `}

  ${({ $variant }) =>
    $variant === 'minimal' &&
    css`
      border-color: transparent;
      padding-left: 0;
      padding-right: 0;
      border-radius: 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
    `}

  ${({ $error }) =>
    $error &&
    css`
      border-color: #dc3545;
    `}

  ${({ $hasLeftIcon }) =>
    $hasLeftIcon &&
    css`
      padding-left: 2.5rem;
    `}

  ${({ $hasRightIcon }) =>
    $hasRightIcon &&
    css`
      padding-right: 2.5rem;
    `}

  &:focus-visible {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accentHover};
  }
`;

const StyledInput = styled.input<InputStylesProps>`
  ${inputStyles}
`;

const StyledTextarea = styled.textarea<InputStylesProps>`
  ${inputStyles}
`;

const StyledSelect = styled.select<InputStylesProps>`
  ${inputStyles}
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const InputIcon = styled.div<{ $position: 'left' | 'right'; $clickable?: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  color: ${({ theme }) => theme.colors.gray[500]};
  ${({ $position }) =>
    $position === 'left' &&
    css`
      left: 0;
    `}
  ${({ $position }) =>
    $position === 'right' &&
    css`
      right: 0;
    `}
  ${({ $clickable }) =>
    $clickable &&
    css`
      cursor: pointer;
    `}
`;

const TextareaFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space[3]};
`;

const StyledCheckbox = styled.input<{ $variant?: 'switch' }>`
  ${({ $variant }) =>
    $variant === 'switch'
      ? css`
          position: relative;
          width: 3rem;
          height: 1.5rem;
          border-radius: 1rem;
          background: ${({ theme }) => theme.colors.gray[300]};
          transition: background-color 0.2s;
          cursor: pointer;
          appearance: none;
          margin: 0;

          &:checked {
            background: ${({ theme }) => theme.colors.accent};
          }

          &::before {
            content: '';
            position: absolute;
            left: 0.125rem;
            top: 0.125rem;
            width: 1.25rem;
            height: 1.25rem;
            border-radius: 50%;
            background: white;
            transition: transform 0.2s;
          }

          &:checked::before {
            transform: translateX(1.5rem);
          }
        `
      : css`
          width: 18px;
          height: 18px;
          margin-top: 2px;
        `}
`;

const Helper = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const Error = styled.span`
  font-size: 0.875rem;
  color: #dc3545;
`;

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helper,
  className,
  variant,
  leftIcon,
  rightIcon,
  iconClick,
  hideLabel,
  required,
  ...props
}) => (
  <FormGroup>
    <Label $hidden={hideLabel} $required={required}>
      {label}
    </Label>
    <InputWrapper>
      {leftIcon && <InputIcon $position="left">{leftIcon}</InputIcon>}
      <StyledInput
        className={className}
        $variant={variant}
        $error={!!error}
        $hasLeftIcon={!!leftIcon}
        $hasRightIcon={!!rightIcon}
        {...props}
      />
      {rightIcon && (
        <InputIcon $position="right" $clickable={!!iconClick} onClick={iconClick}>
          {rightIcon}
        </InputIcon>
      )}
    </InputWrapper>
    {helper && !error && <Helper>{helper}</Helper>}
    {error && <Error>{error}</Error>}
  </FormGroup>
);

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  helper,
  className,
  variant,
  hideLabel,
  required,
  maxLength,
  showCount,
  value,
  ...props
}) => (
  <FormGroup>
    <Label $hidden={hideLabel} $required={required}>
      {label}
    </Label>
    <StyledTextarea
      className={className}
      $variant={variant}
      $error={!!error}
      maxLength={maxLength}
      value={value}
      {...props}
    />
    {showCount && maxLength && (
      <TextareaFooter>
        {String(value).length} / {maxLength}
      </TextareaFooter>
    )}
    {helper && !error && <Helper>{helper}</Helper>}
    {error && <Error>{error}</Error>}
  </FormGroup>
);

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  error,
  helper,
  className,
  variant,
  hideLabel,
  required,
  ...props
}) => (
  <FormGroup>
    <Label $hidden={hideLabel} $required={required}>
      {label}
    </Label>
    <StyledSelect className={className} $variant={variant} $error={!!error} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
    {helper && !error && <Helper>{helper}</Helper>}
    {error && <Error>{error}</Error>}
  </FormGroup>
);

export const Checkbox: React.FC<CheckboxProps> = ({ label, error, className, variant, description, ...props }) => (
  <CheckboxGroup>
    <StyledCheckbox
      type="checkbox"
      className={className}
      $variant={variant === 'switch' ? 'switch' : undefined}
      {...props}
    />
    <Label>
      {label}
      {description && <Helper as="div">{description}</Helper>}
      {error && <Error> - {error}</Error>}
    </Label>
  </CheckboxGroup>
);
