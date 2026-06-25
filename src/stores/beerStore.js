import { defineStore } from 'pinia'
import { getBeers, getBeerById, getRandomBeer } from '../services/beerService'

const FAVORITES_KEY = 'hopFinderFavorites'

export const useBeerStore = defineStore('beer', {
  state: () => ({
    beers: [],
    selectedBeer: null,
    randomBeer: null,
    favorites: JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [],
    isLoading: false,
    error: null
  }),

  getters: {
    favoritesCount: (state) => state.favorites.length,

    isFavorite: (state) => {
      return (beerId) => state.favorites.some((beer) => beer.id === beerId)
    }
  },

  actions: {
    saveFavorites() {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(this.favorites))
    },

    toggleFavorite(beer) {
      const exists = this.favorites.some((item) => item.id === beer.id)

      if (exists) {
        this.favorites = this.favorites.filter((item) => item.id !== beer.id)
      } else {
        this.favorites.push(beer)
      }

      this.saveFavorites()
    },

    async fetchBeers(page = 1) {
      this.isLoading = true
      this.error = null

      try {
        this.beers = await getBeers(page)
      } catch (error) {
        this.error = 'No se pudieron cargar las cervezas.'
        console.error(error)
      } finally {
        this.isLoading = false
      }
    },

    async fetchBeerById(id) {
      this.isLoading = true
      this.error = null

      try {
        this.selectedBeer = await getBeerById(id)
      } catch (error) {
        this.error = 'No se pudo cargar el detalle de la cerveza.'
        console.error(error)
      } finally {
        this.isLoading = false
      }
    },

    async fetchRandomBeer() {
      this.isLoading = true
      this.error = null

      try {
        this.randomBeer = await getRandomBeer()
      } catch (error) {
        this.error = 'No se pudo cargar una cerveza aleatoria.'
        console.error(error)
      } finally {
        this.isLoading = false
      }
    }
  }
})