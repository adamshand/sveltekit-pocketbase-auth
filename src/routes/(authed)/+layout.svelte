<script>
	import Header from '$lib/components/Header.svelte';
	let { children } = $props()
</script>

<Header />
<main class="flex-1">
    {@render children()}
</main>
<footer class="footer bg-neutral text-neutral-content p-10 h-max flex-none">
    Footer
</footer>
