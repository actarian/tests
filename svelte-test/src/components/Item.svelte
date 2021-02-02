
<script>
  export let item;
  export let onClick;

  export function selfOnClick(index) {
    onClick(index);
  }
</script>

<style></style>

<div class="item" on:click={selfOnClick(item)}>{item}</div>
