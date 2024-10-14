<script>
	import Decrement from './decrement.svelte'
	import { store } from './store.svelte'
</script>

{store.count}
<button onclick={() => store.count++}> + </button>

<Decrement />
