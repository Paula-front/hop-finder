import axios from 'axios'

const API_URL = 'https://punkapi-alxiw.amvera.io/v3'

const normalizeBeer = (beer) => ({
  id: beer.id,
  name: beer.name || 'Unknown Beer',
  brewery: 'BrewDog',
  style: beer.tagline || 'Craft Beer',
  tagline: beer.tagline || 'Craft Beer Explorer',
  description: beer.description || 'No description available.',
  abv: beer.abv || 0,
  ibu: beer.ibu || 0,
  image: beer.image_url || beer.image || '',
  firstBrewed: beer.first_brewed || 'Unknown',
  foodPairing: beer.food_pairing || [],
  brewersTips: beer.brewers_tips || '',
  ingredients: beer.ingredients || null,
  rating: 4.7
})

export const getBeers = async (page = 1) => {
  const { data } = await axios.get(`${API_URL}/beers`, {
    params: { page }
  })

  return data.map(normalizeBeer)
}

export const getBeerById = async (id) => {
  const { data } = await axios.get(`${API_URL}/beers/${id}`)

  return normalizeBeer(data)
}

export const getRandomBeer = async () => {
  const { data } = await axios.get(`${API_URL}/beers/random`)

  return normalizeBeer(data)
}