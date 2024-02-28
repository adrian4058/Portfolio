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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  @media screen and (min-width: 1050px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
