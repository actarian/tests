<script>
  import { getCount } from '../count';
import Item from './Item.svelte';

  export const count = getCount();
  export let index = -1;
  export const items = new Array(count).fill(0).map((v, i) => (i + 1))

  export function onClick($index) {
    index = $index;
  }
</script>

<style></style>

<div>  
  <strong>Svelte</strong>
  <div>count <span>{count}</span></div>
  <div>index <span>{index}</span></div>
  {#each items as item (item)}
    <Item item={item} onClick={onClick} />
	{/each}
</div>
