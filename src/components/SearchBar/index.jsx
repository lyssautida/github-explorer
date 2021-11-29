import { useRef } from 'react'
import { FiSearch } from 'react-icons/fi'
import { toast, ToastContainer } from 'react-toastify'
import { Container } from './styles'

export function SearchBar({setUser, setUserRepos}) {
  const inputRef = useRef()

  function getUserData(event) {
    event.preventDefault()
    
    try {
      fetch(`https://api.github.com/users/${inputRef.current.value}`)
        .then(response => response.json())
        .then(data => {
          if (data.message === 'Not Found') {
            setUser(null)
            setUserRepos(null)
            toast.error('Usuário não encontrado', {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              pauseOnFocusLoss: false,
              draggable: true,
              progress: undefined,
              theme:'dark'
              });
          } else {
            setUser(data)
         
       
            
            fetch(
              `https://api.github.com/users/${inputRef.current.value}/repos`
            )
              .then(response => response.json())
              .then(data => setUserRepos(data))
          }
        })
   

    } catch (error) {
      console.error(error)
    }
}

  return (
  <Container>
      <h1>GitHub Explorer</h1>

      <form onSubmit={getUserData}>
        <div>
          <span>github.com/</span>
          <input type='text' ref={inputRef} />
        </div>
        
          <button type='submbit'>
            <FiSearch />
          </button>
      </form>
      <ToastContainer
      />
      </Container>
      )
}