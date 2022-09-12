// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

function Name() {
  const [name, setName] = React.useState('')

  const onNameChange = e => {
    setName(e.target.value)
  }

  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  )
}

// 🐨 accept `animal` and `onAnimalChange` props to this component
function FavoriteAnimal({animal, onAnimalChange}) {
  // 💣 delete this, it's now managed by the App
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input id="animal" value={animal} onChange={onAnimalChange} />
    </div>
  )
}

// 🐨 uncomment this
function Display({animal}) {
  return <div>{` your favorite animal is: ${animal}!`}</div>
}

// 💣 remove this component in favor of the new one

function App() {
  // 🐨 add a useState for the animal

  const [animal, setAnimal] = React.useState('')

  const onAnimalChange = e => {
    setAnimal(e.target.value)
  }
  return (
    <form>
      <Name />
      {/* 🐨 pass the animal and onAnimalChange prop here (similar to the Name component above) */}
      <FavoriteAnimal animal={animal} onAnimalChange={onAnimalChange} />
      {/* 🐨 pass the animal prop here */}
      <Display animal={animal} />
    </form>
  )
}

export default App
