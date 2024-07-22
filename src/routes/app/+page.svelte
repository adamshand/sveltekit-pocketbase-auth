<script>
	import { pbUser } from '$lib/pocketbase.svelte';

	let firstName = $derived(pbUser()?.name.toLowerCase().split(' ')[0]);
	$inspect('/app/+page.svelte', pbUser()?.email);
</script>

<h1>hi {firstName}!</h1>
<!-- <h1>hi !</h1> -->
