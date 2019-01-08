<template>
  <div class="vuex">
    {{this.$store.state.defaultData}}
    <button type="button" @click="add(2)">增加</button>
    <button type="button" @click="reduce(2)">减少</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Vuex",
  methods: {
    ...mapActions(["add", "reduce"])
  }
}
</script>

<style scoped>

</style>