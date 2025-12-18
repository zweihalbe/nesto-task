<script setup lang="ts">
const props = defineProps<{
  label: string;
  start: number;
  end: number;
  row?: number;
}>();

const HOURS_COLUMNS = 25;
const COLUMN_WIDTH = 100 / HOURS_COLUMNS;
const ROW_HEIGHT = 35;
const ROW_OFFSET = 8;


const startHour = Math.floor(props.start / 60);
const endHour = Math.floor(props.end / 60) + 1;

const left = `${startHour * COLUMN_WIDTH}%`;
const width = `${(endHour - startHour) * COLUMN_WIDTH}%`;
const top = props.row !== undefined 
  ? `${props.row * ROW_HEIGHT + ROW_OFFSET}px` 
  : '1rem';
</script>

<template>
  <div class="item" :style="{ left, width, top }">
    {{ label }}
  </div>
</template>

<style scoped>
.item {
  position: absolute;
  background: #2db2c1;
  padding: 0.25rem 0;
  font-size: 0.8rem;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 0.25rem;
  text-align: center;
}
</style>
