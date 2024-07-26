<script lang="ts">
	import { page } from '$app/stores'
	import { getOpenmojiUrl } from '$lib'
</script>

<h1>
	Welcome <br />
	{#if $page.data.user}
		{$page.data.user?.name.split(' ')[0] ?? ''}
	{:else}
		Stranger
	{/if}
</h1>

<a href="https://github.com/adamshand/sveltekit-pocketbase-auth">
	<img alt="pig face" src={getOpenmojiUrl('E045')} />
</a>

<style>
	a {
		margin-inline: auto;
	}
	img {
		width: 5rem;
		&:hover {
			rotate: 7deg;
			transform: scale(1.1);
		}
	}
</style>
