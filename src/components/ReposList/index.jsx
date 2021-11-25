import { FiArrowLeft } from 'react-icons/fi'
import { Container } from './styles'

export function ReposList() {
  return (
   <Container>
    <div>
    <button type='button'>
      <FiArrowLeft />
      Voltar
    
    </button>
    <h1>Repositório de Lyssa</h1>
      </div>

      <ul>
        <li>
          <h2>Nome do repositório</h2>
          <p>Descrição do repositório</p>
          <a href='/'>Acessar repositório</a>
        </li>
      </ul>
   </Container>
 )
}