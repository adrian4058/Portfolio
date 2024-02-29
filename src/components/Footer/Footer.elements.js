import styled from "styled-components";

export const FooterSection = styled.footer`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  font-style: italic;
  a {
    margin-left: 0.3rem;
    text-dedcoration: underline;
    cursor: pointer;
    color: ${({ theme }) => theme.primary};
  }
`;

export const FooterContent = styled.div``;
