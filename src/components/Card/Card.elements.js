import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border: 1px solid ${({ theme }) => theme.primary};
  border-width: 1px;
  border-radius: 0.75rem;
  @media screen and (min-width: 1050px) {
    width: 48%;
  }
`;

export const CardImg = styled.img`
  border-radius: 0.75rem 0.75rem 0 0;
  width: 100%;
  height: 50vh !important;
  object-fit: Cover;
  object-position: top;
`;

export const CardInfo = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.bgcard};
  border-top: 3px solid ${({ theme }) => theme.primary};
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 0 0 0.75rem 0.75rem;
  padding: 1.25rem;
  h3 {
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.primary};
  }
  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const CardLinks = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  align-content: center;
  padding-top: 0.5rem;
  gap: 0.8rem;
  a {
    display: flex;
    justify-content: start;
    align-items: center;
    align-content: center;
    gap: 0.5rem;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 0.375rem;
    border-width: 2px;
    padding: 0.5rem 1rem;
    svg {
      width: 1.3rem;
      height: 1.3rem;
    }
  }
`;

export const CodeLink = styled.a`
  color: ${({ theme }) => theme.primary};
`;

export const DemoLink = styled.a`
  color: #eee;
  background-color: ${({ theme }) => theme.primary};
`;
