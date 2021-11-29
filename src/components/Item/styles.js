import styled from 'styled-components'

export const Container = styled.li`
  width: 100%;
  background: var(--shape-light);
  border-radius: 5px;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  h2 {
    font-size: 1.1rem;
    color: var(--text);
  }

  p {
    color: var(--text-secondary);
  }

  a {
    color: var(--blue);
  }
`
