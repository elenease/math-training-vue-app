<template>
  <div class="alert alert-primary">
    <h3>Success: {{ stats.success }}</h3>
    <h3>Errors: {{ stats.errors }}</h3>
    <hr>
    <button class="btn btn-primary" @click="$emit('repeat')">
      Repeat
    </button>
    <button class="btn btn-primary" @click="$emit('nextLevel')">
      Next Level
    </button>
  </div>
</template>

<script>
export default {
  props: ['stats']
};
</script>

<style scoped>
.alert {
  text-align: center;
}
h3, .btn {
  margin: 20px 0;
}
</style>
