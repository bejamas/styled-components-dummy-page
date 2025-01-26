export interface BaseFieldProps {
  label: string;
  error?: string;
  helper?: string;
  required?: boolean;
  id?: string;
  hideLabel?: boolean;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, BaseFieldProps {
  variant?: 'default' | 'filled' | 'outlined' | 'minimal';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconClick?: () => void;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, BaseFieldProps {
  variant?: 'default' | 'filled' | 'outlined' | 'minimal';
  maxLength?: number;
  showCount?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>, BaseFieldProps {
  variant?: 'default' | 'filled' | 'outlined' | 'minimal';
  options: Array<{ value: string; label: string }>;
}

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>, BaseFieldProps {
  variant?: 'default' | 'switch';
  description?: string;
} 