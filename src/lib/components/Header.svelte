<script lang="ts">
	import { getOpenmojiUrl } from '$lib'
	import { page } from '$app/stores'
	import FavIcon from '$lib/components/FavIcon.svelte'

	// FIXME: use pb.getFileUrl()
	const baseUrl = 'https://pb.haume.nz/api/files/systemprofiles0/rpsz300dhu7spdm/'
</script>

<header>
	<a href="/">
		<img alt="pig face" src={getOpenmojiUrl('1F437')} />
	</a>

	<a href="/app">experiments</a>

	<span>
		{#if $page.data.user?.id}
			<!-- required or hovering on link logs out -->
			<a data-sveltekit-preload-data="false" href="/sign/out">sign out</a>
		{:else}
			<a href="/sign/in">sign in</a>
		{/if}
	</span>
</header>

<style>
	header {
		text-align: center;
		font-size: 1.5rem;
		font-weight: bold;
		padding: 0.5rem;
		background-color: var(--surface-2);
		color: var(--brand);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	header > a > img {
		height: 2rem;
		&:hover {
			rotate: -15deg;
			transform: scale(1.1);
		}
	}
	header > span > a {
		padding: 0.2rem 1rem;
		font-size: 0.9rem;
		color: var(--brand);
		border: 1px solid var(--pink-9);
		border-radius: 0.25rem;
		&:hover {
			color: var(--pink-9);
			text-decoration: none;
		}
	}
</style>
