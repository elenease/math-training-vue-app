<template>
  <div class="alert alert-secondary">
    <h3>Are you ready?</h3>
    <!-- $emit - спец. метод, кот. генерирует события. Через него можно передавать и параметры -->
    <button
      class="btn btn-success"
      @click="$emit('onStart')"
    >
      Start
    </button>
  </div>
</template>

<script>
export default {
  methods: {

  }
};
</script>

<style scoped>
.alert {
  text-align: center;
}
h3, .btn {
  margin: 30px 0;
}
</style>
