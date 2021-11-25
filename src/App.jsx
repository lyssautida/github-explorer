import { useState } from 'react'
import { GlobalStyle } from './styles/global'
import { Container } from './styles/Home'

import { SearchBar } from './components/SearchBar'
import { User } from './components/User'
import { ReposList } from './components/ReposList'

// Função 'pai' App
function App() {
  const [user, setUser] = useState()
  // é um estado para colocar valor e renderizar em outro lugar
  const [userRepos, setUserRepos] = useState()
   
  return ( // <> fragment, elemento vazio, só pra envolver react sem interferir em nada.
    <Container>
       {/* função filho,  recebe info, renderiza só se existe algo */}
      <SearchBar setUser={setUser} setUserRepos={setUserRepos} />
     
      {user && <User user={user} userRepos={userRepos} />}
      <ReposList />
      
      <GlobalStyle />

    </Container>
  )
}

export default App
