import { defineStore } from 'pinia'
import { getBeers, getBeerById, getRandomBeer } from '../services/beerService'

export const useBeerStore = defineStore('beer', {
  state: () => ({
    beers: [],
    selectedBeer: null,
    randomBeer: null,
    isLoading: false,
    error: null
  }),

  actions: {
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