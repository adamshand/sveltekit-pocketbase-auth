<script>
	const routes = Object.keys(import.meta.glob('/src/routes/**/+page.svelte'))
		.filter((route) => route.includes('/src/routes/app/'))
		.map((route) => {
			const parts = route.split('/')
			const appIndex = parts.indexOf('app')
			return parts[appIndex + 1]
		})
</script>

<p>Below are some experiments and learnings.</p>

<section>
	{#each routes as route}
		<div>
			<a href="/app/{route}">{route}</a>
		</div>
	{/each}
</section>

<style>
	p {
		margin-inline: auto;
		text-align: center;
	}
	section {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
	}
	div {
		display: grid;
		place-content: center;

		width: 9rem;
		aspect-ratio: 1;
		background-color: var(--surface-3);
		padding: 1rem;

		border-radius: 0.5rem;
		font-size: 1.5rem;
		font-weight: bold;
	}
</style>
