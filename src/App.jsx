import { GlobalStyle } from './styles/global'
import { SearchBar } from './components/SearchBar'
import { Container } from './styles/Home'

function App() {
  return ( // <> fragment, elemento vazio, só pra envolver react sem interferir em nada.
    <Container> 
            <SearchBar />
      <GlobalStyle />
    </Container>
  )
}

export default App
