import styled from 'styled-components'

export const Container = styled.main`
width: 100%;
background: var(--shape);
border-radius: 10px;
border-bottom: 10px solid var(--blue);

div {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 1rem;

  button {
    display: flex;
    align-items: center;
    color: var(--text-secondary);
    background: var(--shape-light);
    padding: 0.3rem 0.5rem;
    border-radius: 8px;
    transition: filter 0.3s ease;

    &:hover {
      filter: brightness(80%);
    }
  }

  h1 {
    font-size: 1.5rem;
    color: var(--text);
  }
}

ul {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;


  li {
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
      color:var(--text)
    }

    p {
      color: var(--text-secondary)
    }

    a {
      color: var(--blue);
    }
  }
}
`