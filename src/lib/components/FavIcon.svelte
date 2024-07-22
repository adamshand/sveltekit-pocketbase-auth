<script lang="ts">
	import { dev } from '$app/environment';
	import { getOpenmojiUrl } from '$lib';
</script>

<svelte:head>
	{#if dev}
		<link href={getOpenmojiUrl('1F437')} rel="icon" />
		<!-- <link href="/favicon.png" rel="icon" /> -->
	{:else}
		<link href={getOpenmojiUrl('1F6E9')} rel="icon" />
		<!-- <script
			data-website-id={umamiTrackingCode}
			defer
			src="https://umami.haume.nz/script.js"
		></script> -->
	{/if}
</svelte:head>
