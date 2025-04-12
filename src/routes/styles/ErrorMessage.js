import styled from "styled-components"

export const ErrorContainer = styled.div`
  color: #ff4d4d;
  margin: auto;
  width: 300px;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ErrorTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`

export const ErrorMessage = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #ff9999;
`

export const BackButton = styled.button`
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  background-color: #2a5298;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`