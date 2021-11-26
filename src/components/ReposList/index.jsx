import { FiArrowLeft } from 'react-icons/fi'
import { Container } from './styles'

export function ReposList({ user, userRepos }) {


  return (
   <Container>
    <div>
     <button type='button'>
      <FiArrowLeft />
       Voltar
    
     </button>
     <h1>Repositório de {user.name}</h1>
    </div>

      <ul>
      {userRepos.map(repo=>(
         <li key={repo.id}>
          <h2>{repo.name}</h2>
          <p>{repo.description}</p>
          <a target='_blank' rel='noreferrer' href={repo.html_url}>Acessar repositório</a>
          </li>
  ))}
      </ul>
   </Container>
 )
}