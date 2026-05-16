import styled from "styled-components";

export const ProjectsSection = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bgc};
  padding: 5rem 0;
  color: ${({ theme }) => theme.text};
  h2 {
    font-size: 2.5rem;
    span {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  width: 85vw;
`;

export const CardSection = styled.div`
  padding-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  justify-items: center;
  align-items: stretch;

  @media screen and (min-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    justify-items: stretch;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 480px;

  @media screen and (min-width: 1050px) {
    max-width: none;
  }
`;

export const OtherProjectsSection = styled.div`
  margin-top: 3rem;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.primary}30;
  padding-top: 2rem;

  h4 {
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.text};
    opacity: 0.5;
    margin-bottom: 1rem;
  }
`;

export const OtherProjectsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const OtherProjectItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem;
  font-size: 0.85rem;

  .title {
    font-weight: 600;
    color: ${({ theme }) => theme.text};
  }

  .detail {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.text};
    opacity: 0.65;
  }

  .tech {
    font-size: 0.72rem;
    color: ${({ theme }) => theme.text};
    opacity: 0.4;
    font-style: italic;
  }
`;
