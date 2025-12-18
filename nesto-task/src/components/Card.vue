<template>
  <div class="card">
    <header v-if="$slots.header" class="card-header">
      <slot name="header" />
    </header>

    <div class="card-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  word-wrap: break-word;
  border-radius: .25rem;
  margin-bottom: 20px;
  box-shadow: 0 0 0 1px rgba(20, 20, 31, .05), 0 1px 3px 0 rgba(20, 20, 31, .15);
}
.card-header {
  padding: 1rem;
  margin-bottom: 0;
  border-bottom: 1px solid rgba(20, 20, 31, .12);
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
