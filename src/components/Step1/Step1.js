import React from 'react'

import {
  Step1Container,
  Title,
  Step1TableContainer,
  CreateCharacter,
  CreatedCharacter,
  CreatedCharacterText
} from './Step1.style'

const Step1 = (props) => {
  return (
    <Step1Container>
      <Title>Create or Choose your Character</Title>
      <Step1TableContainer>
        <CreateCharacter title='Create Character' />
        <CreatedCharacter>
          <CreatedCharacterText>Drorderogs Darkshaper</CreatedCharacterText>
        </CreatedCharacter>
      </Step1TableContainer>
    </Step1Container>
  )
}

export default Step1
