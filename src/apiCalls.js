export const getCharacters = () => {
  return fetch('https://fedeperin-harry-potter-api-en.herokuapp.com/characters')
  .then(response => {
    if (!response.ok) {
      throw new Error('Oh, no Something is going wrong!')
    } else {
      return response.json()
    }
  })
} 