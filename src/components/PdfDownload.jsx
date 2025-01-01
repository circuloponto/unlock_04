import React from 'react';
import styled from 'styled-components';

const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  background: rgb(230, 129, 29);
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  position: absolute;
  bottom: calc(var(--cell-size) * 1);
  right: calc(var(--cell-size) * 1);
  z-index: 2500;

  &:hover {
    background: rgb(250, 149, 49);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    color: white;
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 16px;
    height:16px;
  }
`;

const PdfDownload = ({ pdf }) => {
  return (
    <DownloadButton 
      href={`/assets/pdfs/${pdf.filename}`}
      download={pdf.name}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z" fill="white"/>
      </svg>
      {pdf.name}
    </DownloadButton>
  );
};

export default PdfDownload;
