<script lang="ts">
	import { dev } from '$app/environment'
	// import { getOpenmojiUrl } from '$lib'
</script>

<svelte:head>
	{#if dev}
		<!-- <link href={getOpenmojiUrl('1F437')} rel="icon" /> -->
	{:else}
		<!-- <link href={getOpenmojiUrl('1F6E9')} rel="icon" /> -->
	{/if}
</svelte:head>
