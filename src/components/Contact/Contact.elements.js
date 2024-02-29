import styled from "styled-components";

export const ContactSection = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.bgabout};
  padding: 5rem 0;
  color: ${({ theme }) => theme.text};
  h2 {
    font-size: 2.5rem;
    span {
      color: ${({ theme }) => theme.primary};
    }
  }
  a {
    cursor: pointer;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  width: 85vw;
`;

export const ContactTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 1.5rem;
`;

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  width: 90%;
  background-color: ${({ theme }) => theme.bgform};
  border-radius: 0.75rem;
  gap: 0.75rem;
  max-width: 28rem;
  button{
    cursor: pointer;
    font-size: .875rem;
    line-height: 1.25rem;
    width: 100%;
    height: 2.5rem
    margin-top: 0.25rem
    display: flex;
    user-select: none;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    border-radius: 0.375rem;
    border-width: 2px;
    border-color: transparent;
    background-color: rgb(0 181 232 / 1);
    padding: 0.5rem 1rem;
    font-size: .875rem;
    line-height: 1.25rem;
    font-weight: 500;
    letter-spacing: .05em;
  }
`;

export const FormInputLabel = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.25rem;
  color: ${({ theme }) => theme.text};

  input,
  textarea {
    outline: none;
    margin-top: 0.25rem;
    border-radius: 0.375rem;
    border-width: 1px;
    user-select: none;
    padding: 0.5rem 0.75rem;
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    background-color: ${({ theme }) => theme.bgcard};
    border-color: ${({ theme }) => theme.bcolorinput};
    color: ${({ theme }) => theme.text};
  }

  input::placeholder,
  textarea::placeholder {
    color: gray; /
  }

  input {
    border-style: solid;
  }

  textarea {
    resize: none;
    height: 13rem;
  }
`;

export const ContactPersonalInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  padding-top: 2rem;
  img {
    width: 60%;
    padding: 1rem 0;
  }
  @media screen and (min-width: 1050px) {
    padding-top: 0rem;
  }
`;

export const ContactData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  a,
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: inherit;
    text-decoration: none;
    svg {
      width: 1.5rem;
      height: auto;
      fill: ${({ theme }) => theme.primary};
    }
  }
`;

export const ContactSocialMedia = styled.div`
  display: flex;
  gap: 1rem;
  a {
    svg {
      width: 1.75rem;
      height: auto;
      fill: ${({ theme }) => theme.primary};
    }
  }
`;

export const FormAndContactInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1050px) {
    flex-direction: row;
  }
`;
