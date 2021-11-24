import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { Container } from './styles'

export function SearchBar() {
  const [searchedValue, setSearchedValue] = useState('')

  function getUserData(event) {
    event.preventDefault()
    
    try {
      fetch(`https://api.github.com/users/${searchedValue}`)
        .then(response => response.json())
        .then(data => console.log(data))
    } catch (error) {
      console.log(error)
    }
}

  return (
  <Container>
      <h1>GitHub Explorer</h1>

      <form onSubmit={getUserData}>
        <div>
          <span>github.com/</span>
          <input type='text' value={searchedValue} onChange={e => setSearchedValue(e.target.value)}/>
        </div>
        
          <button type='submbit'>
            <FiSearch />
          </button>
         </form>
      </Container>
      )
}