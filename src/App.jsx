import { useState } from 'react'
import { GlobalStyle } from './styles/global'
import { Container } from './styles/Home'
import { SearchBar } from './components/SearchBar'
import { User } from './components/User'

// Função 'pai' App
function App() {
  const [user, setUser] = useState()
  // é um estado para colocar valor e renderizar em outro lugar
   
  return ( // <> fragment, elemento vazio, só pra envolver react sem interferir em nada.
    <Container> 
      <SearchBar setUser={setUser} />
      {/* função filho,  recebe info, renderiza só se existe algo */}
     {user && <User user={user} /> }
      <GlobalStyle />
    </Container>
  )
}

export default App
