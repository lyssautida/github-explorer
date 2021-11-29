import { Container } from './styles'

export function Item({ repo } ) {
  return (


    <Container key={repo.id}>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <a target='_blank' rel='noreferrer' href={repo.html_url}>Acessar repositório</a>
      </Container>

  

  )
}
