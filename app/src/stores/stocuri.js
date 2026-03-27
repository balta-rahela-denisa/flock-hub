import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStocuriStore = defineStore('stocuri', () => {
  const stocuri = ref([])
  const loading = ref(false)
  const error = ref(null)

  const totalProduse = computed(() => stocuri.value.length)

  const stocCritic = computed(() =>
    stocuri.value.filter(s => s.cantitate <= s.pragMinim)
  )

  async function fetchStocuri() {
    loading.value = true
    try {
      // sem 2: înlocuiești cu axios.get('/api/stocuri')
      const { getStocuri } = await import('../services/stocuriService.js')
      stocuri.value = await getStocuri()
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  async function addStoc(stoc) {
    const { createStoc } = await import('../services/stocuriService.js')
    const nou = await createStoc(stoc)
    stocuri.value.push(nou)
  }

  async function updateStoc(id, date) {
    const { editStoc } = await import('../services/stocuriService.js')
    const actualizat = await editStoc(id, date)
    const index = stocuri.value.findIndex(s => s.id === id)
    if (index !== -1) stocuri.value[index] = actualizat
  }

  async function deleteStoc(id) {
    const { removeStoc } = await import('../services/stocuriService.js')
    await removeStoc(id)
    stocuri.value = stocuri.value.filter(s => s.id !== id)
  }

  return {
    stocuri, loading, error,
    totalProduse, stocCritic,
    fetchStocuri, addStoc, updateStoc, deleteStoc
  }
})