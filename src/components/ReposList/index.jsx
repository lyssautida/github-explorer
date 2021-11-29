import { FiArrowLeft } from 'react-icons/fi'
import { Container } from './styles'
import { Item } from '../Item'


export function ReposList({ repo, user, userRepos, setIsReposListActive }) {


  return (
   <Container>
    <div>
     <button type='button' onClick={() => setIsReposListActive(false)}>
    
      <FiArrowLeft />
       Voltar
    
     </button>
     <h1>Repositório de {user.name}</h1>
    </div>

      <ul>

          {
          userRepos.map(repo => (
            <Item repo={repo} />))
          }

      </ul>
   </Container>
 )
}