<script lang="ts">
	import FavIcon from '$lib/components/FavIcon.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import Header from '$lib/components/Header.svelte'

	import { getAvatarUrl } from '$lib/pocketbase.svelte'
	import { getOpenmojiUrl } from '$lib'

	import '@picocss/pico/css/pico.pink.min.css'
	import '@picocss/pico/css/pico.colors.min.css'
	import '$lib/style.css'

	let { children, data } = $props()
</script>

<FavIcon />

<div>
	<Header />
	<main>
		{#if data.user?.avatar}
			<img alt={data.user.name} src={getAvatarUrl(data.user)} title={data.user.name} />
		{:else if data.user}
			<!-- logged in but no avatar -->
			<img alt="lotus flower" src={getOpenmojiUrl('1F464')} />
		{:else}
			<img alt="lotus flower" src={getOpenmojiUrl('1FAB7')} />
		{/if}

		{@render children()}
	</main>

	<Footer />
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
		/* width: min(calc(100% - 2rem), 66ch); */
		padding: 1rem;

		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	main > img {
		margin-inline: auto;
		width: 11rem;
		border-radius: 50%;
	}
</style>
