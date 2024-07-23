<script lang="ts">
	import { dev } from '$app/environment';
	import { getOpenmojiUrl } from '$lib';

	const umamiTrackingCode = '';
</script>

<svelte:head>
	{#if dev}
		<link href={getOpenmojiUrl('1F437')} rel="icon" />
	{:else}
		<link href={getOpenmojiUrl('1F6E9')} rel="icon" />
		{#if umamiTrackingCode}
			<script
				data-website-id={umamiTrackingCode}
				defer
				src="https://umami.haume.nz/script.js"
			></script>
		{/if}
	{/if}
</svelte:head>
