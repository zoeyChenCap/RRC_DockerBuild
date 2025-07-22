import React from 'react';

export interface LabelProps {
  text: string;
  htmlFor?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}