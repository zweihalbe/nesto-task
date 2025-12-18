<script setup lang="ts">
const HOURS_COLUMNS = 25;
const hours = [...Array(HOURS_COLUMNS).keys()];
</script>

<template>
  <div class="timeline">
    <table class="timeline-table">
      <thead>
        <tr>
          <th
            v-for="hour in hours"
            :key="hour"
            class="timeline-col"
          >
            {{ hour % 24 }}
          </th>
        </tr>
      </thead>
    </table>
    <div class="timeline-content-wrapper">
      <div class="timeline-content">
        <slot />
      </div>
      <div class="timeline-content-col">
        <div
          v-for="hour in hours"
          :key="hour"
          class="timeline-content-col-item"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  --number-cols: 25;
  margin: 10px;
  position: relative;
}

.timeline-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  height: 30px;
}

.timeline-table thead {
  height: 100%;
}

.timeline-col {
  border-left: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  font-size: 0.75rem;
  font-weight: normal;
  width: calc(100% / var(--number-cols, 25));
}

.timeline-col:first-child {
  border-left: none;
}

.timeline-col:last-child {
  border-right: none;
}

.timeline-content-wrapper {
  position: relative;
  height: 150px;
  width: 100%;
}

.timeline-content {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.timeline-content-col {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
}

.timeline-content-col-item {
  flex: 1;
  border-right: 1px solid #e0e0e0;
  background-color: #fff;
}

.timeline-content-col-item:first-child {
  border-left: none;
}

.timeline-content-col-item:last-child {
  border-right: none;
}
</style>
