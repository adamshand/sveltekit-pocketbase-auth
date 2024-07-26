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
	img {
		width: 5rem;
		margin-inline: auto;
	}
</style>
