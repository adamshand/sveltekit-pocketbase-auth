<script>
	import { page } from '$app/stores'

	const breadcrumbParts = $page.url.pathname.split('/').filter(Boolean).slice(0, -1)
</script>

<nav aria-label="Breadcrumb">
	<a href="/">Home</a> &gt;
	{#each breadcrumbParts as part, index}
		<a href={`/${breadcrumbParts.slice(0, index + 1).join('/')}`}>
			{part}
		</a>
		{#if index < breadcrumbParts.length - 1}<span> &gt; </span>{/if}
	{/each}
</nav>

<style>
	nav {
		color: var(--lightFaded);
		font-size: 0.85rem;
		font-weight: 600;
	}
	a {
		font-weight: 200;
		text-decoration: none;
		color: var(--lightFaded);
		text-transform: capitalize;
	}
	a:hover {
		color: var(--accentHover);
	}
</style>
