<script setup lang="ts">
  import { computed } from 'vue'
  import Timeline from './Timeline.vue'
  import TimelineItem from './TimelineItem.vue'
  import type { Shift } from '../domain/models'
  
  const props = defineProps<{
    employees: Record<string, Shift[]>
  }>()
  
  const allShifts = computed(() => {
    return Object.keys(props.employees).flatMap((employee, index) => {
      const employeeShifts = props.employees[employee] ?? []
      return employeeShifts.map(shift => ({
        employee,
        shift,
        row: index,
      }))
    })
  })
  </script>

<template>
  <Timeline>
    <TimelineItem
      v-for="item in allShifts"
      :key="`${item.employee}-${item.shift.start}`"
      :label="item.employee"
      :start="item.shift.start"
      :end="item.shift.end"
      :row="item.row"
    />
  </Timeline>
</template>
