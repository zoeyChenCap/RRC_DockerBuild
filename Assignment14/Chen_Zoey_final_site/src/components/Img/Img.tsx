import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  display: block;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    height: 150px;
  }
`;

export const Img: React.FC<ImgProps> = ({ src, alt, width, height, className, ...rest }) => (
  <StyledImg
    src={src}
    alt={alt}
    style={{
      width: width || '100%',
      height: height || '200px'
    }}
    className={className}
    {...rest}
  />
);
