import React from 'react';
import styles from './grid.module.css';
import { GridProps } from './grid.types';

export const Grid: React.FC<GridProps> = ({ children, minItemWidth, gap, columns, style, ...props }) => (
  <div
    className={styles.grid}
    style={{
      ...(columns && {
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }),
      ...(minItemWidth &&
        !columns && {
          gridTemplateColumns: `repeat(auto-fill, minmax(${minItemWidth}, 1fr))`,
        }),
      ...(gap && { gap }),
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);
