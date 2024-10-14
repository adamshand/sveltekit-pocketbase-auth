<script>
	import { store } from './store.svelte.js'
</script>

{store.count}
<button onclick={() => store.count--}> - </button>
