<template>
  <div id="app">
    <button @click="increaseCnt">Add</button>{{count}}
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import data from './data'
export default {
  name: "app",
  computed: mapState({
    count: "count"
  }),
  methods: {
    ...mapActions(['increaseCnt'])
  }
};
</script>

<style>
</style>
