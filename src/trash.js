const BreadcrumbsNav = styled.nav`
  position: fixed;
  bottom: 50px;
  height: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  gap: 10px;
  z-index: 2001;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  opacity: ${props => props.$menuOpen ? '0' : '1'};
  pointer-events: ${props => props.$menuOpen ? 'none' : 'auto'};
  transition: opacity 0s ease;
`;

const HorizontalBreadcrumbs = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const BreadcrumbButton = styled.button`
  width: ${props => props.$isMain ? '16px' : '12px'};
  height: ${props => props.$isMain ? '16px' : '12px'};
  border-radius: 50%;
  border: ${props => props.$isMain ? '2px' : '2px'} solid;
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;