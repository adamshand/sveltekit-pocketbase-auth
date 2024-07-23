<script lang="ts">
	import { getOpenmojiUrl } from '$lib';
	import FavIcon from '$lib/components/FavIcon.svelte';
	import '$lib/style.css';

	let { children, data } = $props();
	const baseUrl = 'https://pb.haume.nz/api/files/systemprofiles0/rpsz300dhu7spdm/';
</script>

<FavIcon />

<div>
	<header>
		<a href="/">
			<img alt="pig face" src={getOpenmojiUrl('1F437')} />
		</a>

		play.adam.nz

		<span>
			{#if data.user?.id}
				<!-- required or hovering on link logs out -->
				<a data-sveltekit-preload-data="false" href="/sign/out">sign out</a>
			{:else}
				<a href="/sign/in">sign in</a>
			{/if}
		</span>
	</header>

	<main>
		{#if data.user?.avatar}
			{@const src = baseUrl + data.user.avatar}
			<img alt={data.user.name} {src} title={data.user.name} />
		{/if}

		{@render children()}
	</main>

	<footer>If you walk without questions, you might as well not be there. — Tom Brown Jr.</footer>
</div>

<style>
	div {
		min-height: 100vh;
		min-height: 100dvh; /* better for mobile? */
		min-width: 380px;

		display: grid;
		grid-template-rows: auto 1fr auto;
		gap: 1rem;

		background-color: var(--surface-1);
	}
	header {
		text-align: center;
		font-size: 1.5rem;
		font-weight: bold;
		padding: 0.5rem;
		background-color: var(--surface-2);
		color: var(--pink-4);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	header > a > img {
		height: 2rem;
	}
	header > span > a {
		padding: 0.2rem 1rem;
		font-size: 0.9rem;
		color: var(--pink-4);
		border: 1px solid var(--pink-9);
		border-radius: 0.25rem;
		&:hover {
			background-color: var(--pink-0);
			color: var(--pink-9);
		}
	}
	main {
		margin-inline: auto;
		max-width: max(calc(100%-1rem), 66ch);
		padding: 1rem;
	}
	main > img {
		margin: auto;
		border-radius: 50%;
		margin-bottom: 1rem;
	}
	footer {
		padding: 0.5rem;
		border-top: 1px dashed var(--surface-4);
		text-align: center;
		color: pink;
		font-weight: lighter;
		font-size: smaller;
	}
</style>
