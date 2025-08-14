import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 2rem;
`;

const HeroImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 10rem;
  left: 12rem;
  max-width: 500px;
  z-index: 2;
`;

const HeroHeading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroDescription = styled.div`
  font-size: 1.2rem;
  color: white;
  margin: 0;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HeroImage: React.FC<HeroImageProps> = ({ imageUrl, alt, heading, description }) => (
  <HeroContainer>
    <HeroImg src={imageUrl} alt={alt} />
    <HeroContent>
      <HeroHeading>{heading}</HeroHeading>
      <HeroDescription dangerouslySetInnerHTML={{ __html: description || '' }} />
    </HeroContent>
  </HeroContainer>
);
