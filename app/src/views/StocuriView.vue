<script setup>
import { onMounted } from 'vue'
import { useStocuriStore } from '../stores/stocuri.js'

const store = useStocuriStore()

onMounted(() => {
  store.fetchStocuri()
})
</script>

<template>
  <div>
    <h1>Stocuri</h1>

    <p v-if="store.loading">Se încarcă...</p>

    <div v-else>
      <p>Total produse: {{ store.totalProduse }}</p>

      <div v-if="store.stocCritic.length > 0">
        <p>Stoc critic: {{ store.stocCritic.map(s => s.nume).join(', ') }}</p>
      </div>

      <div v-for="stoc in store.stocuri" :key="stoc.id">
        <p>{{ stoc.nume }} — {{ stoc.cantitate }} {{ stoc.unitate }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>