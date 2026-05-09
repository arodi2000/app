import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    points: 1250,
    currentLevel: 1,
    completedUnits: ['Unidad 1', 'Unidad 2'],
    achievements: ['Halcón de Bronce', 'Explorador Cultural'],
    lastModuleVisited: 'Cultura'
  }),
  actions: {
    addPoints(amount) {
      this.points += amount
    },
    completeUnit(unitName) {
      if (!this.completedUnits.includes(unitName)) {
        this.completedUnits.push(unitName)
      }
    },
    setLevel(level) {
      this.currentLevel = level
    }
  }
})