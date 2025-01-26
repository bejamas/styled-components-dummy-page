export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Controls the vertical padding of the section
   */
  padding?: 'none' | 'small' | 'large';
  
  /**
   * Controls the background color of the section
   */
  background?: 'white' | 'gray' | 'dark' | 'transparent';
  
  /**
   * If true, allows the section to span the full width of the viewport
   */
  dataFullBleed?: boolean;
}
