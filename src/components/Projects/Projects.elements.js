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
  max-width: 480px; /* Limita el ancho máximo para mantener proporciones */

  @media screen and (min-width: 1050px) {
    max-width: none; /* En desktop, la grid controla el tamaño */
  }
`;
