<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { organization, schedule } from './domain/data'
  import { collectStores, collectStoreShifts } from './domain/utils'
  
  import Card from './components/Card.vue'
  import StoreSelector from './components/StoreSelector.vue'
  import Timetable from './components/Timetable.vue'
  
  const stores = collectStores(organization)
  const storeNames = stores.map(s => s.name)
  const selectedStore = ref(storeNames[0] || '')
  
  const currentEmployees = computed(() => {
    const store = stores.find(s => s.name === selectedStore.value)
    if (!store) return {}
    return collectStoreShifts(store, schedule)
  })
  </script>

<template>
  <h1>Nesto Task</h1>
  <Card>
    <template #header>
      <StoreSelector
        v-model="selectedStore"
        :stores="storeNames"
      />
    </template>

    <Timetable :employees="currentEmployees" />
  </Card>
</template>
