<script lang="ts">
	import { pb } from '$lib/pocketbase.svelte'

	let promise: any = $state({})

	$effect(() => {
		promise = pb.collection('adam').getList(1, 1, {
			filter: `format = "quote"`,
			sort: '@random',
		})
	})
</script>

<section class="quote">
	{#await promise then quote}
		{#if quote.items}
			{@const q = quote.items[0]}
			<div class="text">{@html q.content}</div>
			<div class="author">&mdash; {q.author}</div>
		{/if}
	{:catch e}
		<p style="color: red">{e.message}</p>
	{/await}
</section>

<!-- 
@component  

## Quote

Gets a random quote from `pb.haume.nz`.

## Props

None.
-->

<style>
	section,
	:global(.quote div, .quote p) {
		display: inline;
		margin-bottom: 0;
		font-style: italic;
		color: inherit; /* not sure why this is necessary, but without it sometimes the color is bright white */
	}
	.text {
		font-style: italic;
	}
	.author {
		display: inline-block;
		max-width: 100%;
		word-wrap: break-word;
	}
</style>
