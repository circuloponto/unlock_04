import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: #75b1e10a;
  transition: opacity 0.3s ease;
`;

const SlideSection = ({ children, style, className }) => (
  <Section style={style} className={className}>
    {children}
  </Section>
);

export default SlideSection;
