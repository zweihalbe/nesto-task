<script setup lang="ts">
defineProps<{
  stores: string[];
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>

<template>
  <select
    :value="modelValue"
    @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
  >
    <option v-for="store in stores" :key="store" :value="store">
      Time table {{ store }}
    </option>
  </select>
</template>