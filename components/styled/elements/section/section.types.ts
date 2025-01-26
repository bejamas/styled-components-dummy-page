import React from 'react';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The content to be rendered inside the section
   */
  children: React.ReactNode;

  /**
   * Controls the background color of the section
   */
  background?: 'white' | 'gray' | 'dark' | 'transparent' | 'gradient';
  
  /**
   * Controls the vertical padding of the section
   */
  padding?: 'none' | 'small' | 'medium' | 'large';
  
  /**
   * If true, allows the section to span the full width of the viewport
   */
  dataFullBleed?: boolean;

  /**
   * Additional CSS classes to apply to the section
   */
  className?: string;
} 