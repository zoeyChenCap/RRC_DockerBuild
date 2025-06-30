import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroContainer = styled.div`
  position: relative;
  width: 100vw;  // 使用视窗宽度，占满整个屏幕宽度
  height: 70vh;   // 经典比例：占视窗高度的50%
  margin-left: calc(-50vw + 50%);  // 突破父容器限制，居中显示
  border-radius: 0;  // 去掉圆角，更适合全宽显示
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    height: 40vh;  // 移动端稍微小一点
  }
  
  @media (max-width: 480px) {
    height: 35vh;  // 小屏幕设备更紧凑
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  color: white;
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HeroImage: React.FC<HeroImageProps> = ({ imageUrl, heading, description, alt = "Hero image" }) => (
  <HeroContainer>
    <BackgroundImage src={imageUrl} alt={alt} />
    <Overlay>
      <Title>{heading}</Title>
      {description && <Description>{description}</Description>}
    </Overlay>
  </HeroContainer>
);
