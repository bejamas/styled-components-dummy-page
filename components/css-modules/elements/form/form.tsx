import React from 'react';
import styles from './form.module.css';
import { InputProps, TextareaProps, SelectProps, CheckboxProps } from './form.types';

export const Input: React.FC<InputProps> = ({ label, error, helper, className, ...props }) => (
  <div className={styles.form_group}>
    <label className={styles.label}>{label}</label>
    <input className={`${styles.input} ${className || ''}`} data-error={!!error} {...props} />
    {helper && !error && <span className={styles.helper}>{helper}</span>}
    {error && <span className={styles.error}>{error}</span>}
  </div>
);

export const Textarea: React.FC<TextareaProps> = ({ label, error, helper, className, ...props }) => (
  <div className={styles.form_group}>
    <label className={styles.label}>{label}</label>
    <textarea className={`${styles.textarea} ${className || ''}`} data-error={!!error} {...props} />
    {helper && !error && <span className={styles.helper}>{helper}</span>}
    {error && <span className={styles.error}>{error}</span>}
  </div>
);

export const Select: React.FC<SelectProps> = ({ label, options, error, helper, className, ...props }) => (
  <div className={styles.form_group}>
    <label className={styles.label}>{label}</label>
    <select className={`${styles.select} ${className || ''}`} data-error={!!error} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {helper && !error && <span className={styles.helper}>{helper}</span>}
    {error && <span className={styles.error}>{error}</span>}
  </div>
);

export const Checkbox: React.FC<CheckboxProps> = ({ label, error, className, ...props }) => (
  <div className={styles.checkbox_group}>
    <input type="checkbox" className={`${styles.checkbox} ${className || ''}`} {...props} />
    <label className={styles.label}>
      {label}
      {error && <span className={styles.error}> - {error}</span>}
    </label>
  </div>
);
