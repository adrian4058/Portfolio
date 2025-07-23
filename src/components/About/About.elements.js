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
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
  }

  ul::before {
    content: "";
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.primary};
    opacity: 0.3;
  }

  ul li {
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding: 1.5rem 0 1.5rem 60px;
    flex-direction: column;
    position: relative;
    border-left: none;
  }

  ul li::before {
    content: "";
    position: absolute;
    left: 11px;
    top: 1.75rem;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
    border: 3px solid ${({ theme }) => theme.bgabout};
    z-index: 1;
  }

  .experience-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    width: 100%;
    min-height: 1.5rem;

    > svg {
      color: ${({ theme }) => theme.primary};
      font-size: 1.4rem;
      flex-shrink: 0;
      width: 1.4rem;
      height: 1.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .experience-title {
    font-weight: 600;
    color: ${({ theme }) => theme.text};
    margin: 0;
    font-size: 1.1rem;
    line-height: 1.4;
    flex: 1;
    display: flex;
    align-items: center;
  }

  ul li span {
    font-size: 1rem;
    line-height: 1.5rem;
    display: flex;
    flex-direction: column;
    margin-top: 0.25rem;
  }

  ul li span u {
    font-style: normal;
    font-weight: 600;
    color: #22d3ee;
    text-decoration: none;
  }

  ul li span p {
    font-style: normal;
    padding: 1rem 0 0 0;
    color: ${({ theme }) => theme.textabout};
    opacity: 0.9;
  }

  ul li span .experience-date {
    font-size: 0.875rem;
    font-weight: 500;
    color: #0891b2;
    margin-top: 0.25rem;
    font-style: normal;
  }

  ul li span .experience-location {
    font-size: 0.8rem;
    font-weight: 400;
    color: ${({ theme }) => theme.textabout};
    margin-top: 0.125rem;
    font-style: italic;
    opacity: 0.8;
  }

  @media screen and (max-width: 1050px) {
    ul::before {
      left: 15px;
    }

    ul li {
      padding-left: 50px;
    }

    ul li::before {
      left: 6px;
      top: 1.1rem;
      width: 16px;
      height: 16px;
    }

    .experience-header {
      gap: 0.6rem;
      margin-bottom: 0.6rem;
      min-height: 1.3rem;

      > svg {
        font-size: 1.2rem;
        width: 1.2rem;
        height: 1.2rem;
      }
    }

    .experience-title {
      font-size: 1rem;
      line-height: 1.2;
    }
  }

  @media screen and (max-width: 480px) {
    ul::before {
      left: 12px;
    }

    ul li {
      padding-left: 40px;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }

    ul li::before {
      left: 4px;
      top: 1.05rem;
      width: 14px;
      height: 14px;
    }

    .experience-header {
      gap: 0.5rem;
      min-height: 1.2rem;

      > svg {
        font-size: 1.1rem;
        width: 1.1rem;
        height: 1.1rem;
      }
    }

    .experience-title {
      font-size: 0.95rem;
      line-height: 1.2;
    }

    ul li span .experience-date {
      font-size: 0.8rem;
    }

    ul li span .experience-location {
      font-size: 0.75rem;
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
