export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TextVariant = 'body' | 'small' | 'large';
export type TextWeight = 'normal' | 'medium' | 'bold';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: HeadingLevel;
  weight?: TextWeight;
}

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant;
  weight?: TextWeight;
} 