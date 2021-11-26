import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: clearInterval;
  background: var(--shape);
  border-radius: 10px;
  gap: 0.2rem;

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: 4px solid var(--blue);
    margin-bottom: 0.5rem;
  }

  h1 {
    font-size: 2rem;
    color: var(--text);
  }

  h2 {
    font-size: 2rem;
    color: var(--text-secondary);
  }

  p {
    margin: 10px 0;
    font-size: 1rem;
    text-align: justify;
    color: var(--text-secondary);
    line-height: 1.5;
  }

  section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    div,
    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0%.5rem;
      border-radius: 10px;
      transition: background-color 0.4s ease;

      &:hover {
        background-color: var(--shape-light);
        user-select: none;
        /* não deixa selecionar com mouse */
      }

      strong {
        font-size: 1.5rem;
        color: var(--text);
      }

      span {
        font-size: 0%.8rem;
        color: var(--text-secondary);
      }
    }
  }
`
