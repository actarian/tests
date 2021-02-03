
<template>
  <div class="item" v-on:click="selfOnClick(item)">{{item}}</div>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    props: ['item', 'onClick'], 
    methods: {
      selfOnClick: function (index) {
        this.onClick(index);
      }
    },
  });
</script>

<style lang="scss"></style>
