
<template>
  <div>  
    <strong>Vue</strong>
    <div>count <span>{{count}}</span></div>
    <div>index <span>{{index}}</span></div>
    <item v-for="item in items" v-bind:key="item" v-bind:item="item" v-bind:onClick="onClick"></item>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Item from "./Item.vue";
  import {getCount} from "../count";

  const count = getCount();

  export default Vue.extend({
    data: function() {
      return {
        count: count,
        index: -1,
        items: new Array(count).fill(0).map((v, i) => (i + 1)),
      }
    },
    methods: {
      onClick: function (index) {
        this.index = index;
      }
    },
    components: {
      Item,
    }
  });
</script>

<style lang="scss"></style>
