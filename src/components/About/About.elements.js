import styled from "styled-components";

export const AboutSection = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.bgabout};
  padding: 5rem 0;
  h3 {
    font-size: 1.5rem;
    line-height: 2rem;
    text-decoration: underline;
  }
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
  padding-top: 3rem;
  div {
    display: flex;
    width: 100%;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  ul li::marker {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primary};
  }
  ul li {
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding: 0.5rem 0;
    width: 100%;
  }
  ul li span {
    font-size: 1rem;
    line-height: 1.5rem;
    font-style: italic;
    opacity: 0.6;
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 720px) {
    div {
      flex-direction: column;
    }
    ul {
      display: flex;
      flex-wrap: no-wrap;
    }
    ul li {
      font-size: 1.125rem;
      line-height: 1.75rem;
      padding: 0.5rem 0;
      margin: 0 0.5rem;
      width: 40%;
    }
  }
  @media screen and (min-width: 1050px) {
    div {
      flex-direction: column;
    }
    ul li {
      font-size: 1.125rem;
      line-height: 1.75rem;
      padding: 0.5rem 0;
      margin: 0 0.5rem;
      width: 48%;
    }
  }
`;

export const Experience = styled.div`
  div {
    display: flex;
    flex-wrap: wrap;
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
  ul li span u {
    font-style: normal;
  }
  ul li span p {
    font-style: normal;
    padding: 1rem 0;
  }
  @media screen and (max-width: 1050px) {
    div {
      flex-direction: column;
    }
  }
`;

export const Technologies = styled.div`
  padding-top: 3rem;
  h3 {
    padding-bottom: 1rem;
  }
`;

export const Tools = styled.div``;
