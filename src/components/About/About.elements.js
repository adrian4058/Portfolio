import styled from "styled-components";

export const AboutSection = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.bgabout};
  padding: 5rem 0;
`;

export const AboutContent = styled.div`
  max-width: 1000px;
  width: 85vw;
  color: ${({ theme }) => theme.text};
`;

export const AboutMe = styled.div`
  h2 {
    font-size: 2.5rem;
    span {
      color: ${({ theme }) => theme.primary};
    }
  }
  p {
    line-height: 1.75rem;
    font-size: 0.98rem;
    color: ${({ theme }) => theme.textabout};
    span {
      font-weight: 600;
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const AboutEducation = styled.div`
  padding-top: 3rem;
  width: 100%;
`;

export const Education = styled.div`
  div {
    display: flex;
    width: 100;
  }
  h3 {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  ul li::marker {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primary};
  }
  ul li {
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding: 0.5rem 0;
    flex-direction: column;
  }
  ul li span {
    font-size: 1rem;
    line-height: 1.5rem;
    font-style: italic;
    opacity: 0.6;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 1050px) {
    div {
      flex-direction: column;
    }
  }
`;

export const Technologies = styled.div``;

export const Tools = styled.div``;
