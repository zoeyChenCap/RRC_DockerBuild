import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const CardContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  border: 1px solid #e9ecef;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    border-radius: 8px;
  }
`;

const CardHeader = styled.div`
  padding: 1.5rem 1.5rem 0.5rem 1.5rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CardBody = styled.div`
  padding: 0.5rem 1.5rem 1.5rem 1.5rem;
`;

const CardContent = styled.div`
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: #666;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Card: React.FC<CardProps> = ({ title, content, className, ...rest }) => (
  <CardContainer className={className} {...rest}>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardBody>
      <CardContent>{content}</CardContent>
    </CardBody>
  </CardContainer>
);
