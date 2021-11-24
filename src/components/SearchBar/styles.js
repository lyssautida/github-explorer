import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background: var(--shape);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 3rem;
  gap: 1rem;

  h1 {
    color: var(--text);
    font-size: 2.5rem;
    @media (max-width: 400px) {
      font-size: 2rem;
    }
  }

  form {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    width: 100%auto;

    div {
      width: 60%;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-widtth: 720px) {
        width: 80%;
      }
      span {
        border-radius: 20px 0 0 20px;
        border: none;
        padding: 0.5rem 0.3rem 0.5rem 0.8rem;
        font-size: 1rem;
        background-color: gray;
      }

      input {
        width: 100%;
        border-radius: 0 20px 20px 0;
        border: none;
        padding: 0.5rem 0.8rem 0.5rem 0.1rem;
        font-size: 1rem;
      }
    }

    button {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%50%;
      border: 0;
      background: var(--green);
      color: white;
      transition: filter 0.3s ease;

      &:hover {
        filter: brightness(110%);
      }
    }
  }
`
