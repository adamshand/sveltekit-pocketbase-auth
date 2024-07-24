<script lang="ts">
	import { getOpenmojiUrl } from '$lib';
	import FavIcon from '$lib/components/FavIcon.svelte';
	import Header from '$lib/components/Header.svelte';

	import 'open-props/open-props.min.css';
	import 'open-props/normalize.min.css';
	import 'open-props/buttons.min.css';
	import '$lib/style.css';

	let { children, data } = $props();
	const baseUrl = 'https://pb.haume.nz/api/files/systemprofiles0/rpsz300dhu7spdm/';
</script>

<FavIcon />

<div>
	<Header />
	<main>
		{#if data.user?.avatar}
			{@const src = baseUrl + data.user.avatar}
			<img alt={data.user.name} {src} title={data.user.name} />
		{:else}
			<img alt="pig face" src={getOpenmojiUrl('1F437')} />
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

	main {
		margin-inline: auto;
		max-width: max(calc(100%-1rem), 66ch);
		padding: 1rem;
	}
	main > img {
		margin: auto;
		width: 11rem;
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
