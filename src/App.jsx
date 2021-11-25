import { GlobalStyle } from './styles/global'
import { Container } from './styles/Home'
import { SearchBar } from './components/SearchBar'
import { User } from './components/User'

function App() {
  return ( // <> fragment, elemento vazio, só pra envolver react sem interferir em nada.
    <Container> 
      <SearchBar />
      <User />
      <GlobalStyle />
    </Container>
  )
}

export default App
