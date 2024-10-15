<script lang="ts">
	// import { getOpenmojiUrl } from '$lib'
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'

	// FIXME: use pb.getFileUrl()
	const baseUrl = 'https://pb.haume.nz/api/files/systemprofiles0/rpsz300dhu7spdm/'
	let isAuthenticated = $derived($page.data.user?.id)
</script>

<header>
	<a href="/">
		<!-- <img alt="pig face" src={getOpenmojiUrl('1F437')} /> -->
	</a>

	<a href="/app">experiments</a>

	<span>
		{#if isAuthenticated}
			<button onclick={() => goto('/sign/out')}>sign out</button>
		{:else}
			<button onclick={() => goto('/sign/in')}>sign in</button>
		{/if}
	</span>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		font-size: 1.5rem;
		font-weight: bold;
		padding: 0.5rem;
		background-color: var(--surface-2);
		color: var(--brand);
	}
	header img {
		height: 2.5rem;
		&:hover {
			rotate: -15deg;
			transform: scale(1.1);
		}
	}
	a {
		text-decoration: none;
	}
</style>
