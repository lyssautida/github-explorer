import { useState } from 'react'
import { GlobalStyle } from './styles/global'
import { Container } from './styles/Home'
import 'react-toastify/dist/ReactToastify.css'

import { SearchBar } from './components/SearchBar'
import { User } from './components/User'
import { ReposList } from './components/ReposList'


// Função 'pai' App
function App() {
  const [user, setUser] = useState()
  // é um estado para colocar valor e renderizar em outro lugar
  const [userRepos, setUserRepos] = useState()
  const [isReposListActive, setIsReposListActive] = useState(false)
   
  return ( // <> fragment, elemento vazio, só pra envolver react sem interferir em nada.
    <Container>
       {/* função filho,  recebe info, renderiza só se existe algo */}
      <SearchBar setUser={setUser} setUserRepos={setUserRepos} />

      {isReposListActive ? (
        userRepos &&
        <ReposList
          user={user}
          userRepos={userRepos}
          setIsReposListActive={setIsReposListActive}
        />
      )
        : user && (
          <User
          user={user}
          userRepos={userRepos}
            setIsReposListActive={setIsReposListActive}
          />
      ) }
     
        
      <GlobalStyle />

    </Container>
  )
}

export default App
