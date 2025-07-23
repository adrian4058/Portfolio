import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 600px;
  height: auto;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 0.75rem;
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  @media screen and (min-width: 1050px) {
    height: 600px;
  }
`;

export const CardImg = styled.img`
  border-radius: 0.75rem 0.75rem 0 0;
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center;
`;

export const CardInfo = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.bgcard};
  border-top: 3px solid ${({ theme }) => theme.primary};
  flex-direction: column;
  padding: 1.25rem;
  flex: 1;
  justify-content: space-between;
  height: auto;

  .content-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.3;
    color: ${({ theme }) => theme.primary};
    margin: 0 0 0.5rem 0;
    flex-shrink: 0;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.4;
    margin: 0 0 0.75rem 0;
    flex-shrink: 1;
  }

  @media screen and (min-width: 1050px) {
    height: calc(100% - 250px);
    overflow: hidden;

    .content-section {
      overflow: hidden;
    }

    p {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
`;
export const CardLinks = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  align-content: center;
  gap: 0.8rem;
  padding-top: 0.5rem;
  flex-shrink: 0;
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

export const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin: 0.5rem 0 0 0;
  flex-shrink: 0;

  @media screen and (min-width: 1050px) {
    max-height: 60px;
    overflow: hidden;
  }
`;

export const TechTag = styled.span`
  background-color: ${({ theme }) => theme.primary}20;
  color: ${({ theme }) => theme.primary};
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.7rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.primary}40;
  line-height: 1.2;
  white-space: nowrap;
  flex-shrink: 0;
`;

export const CategoryBadge = styled.span`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 1rem;
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  align-self: flex-start;
  margin-bottom: 0.4rem;
  flex-shrink: 0;
`;
