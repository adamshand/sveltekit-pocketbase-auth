<script lang="ts">
	import { pb } from '$lib/pocketbase.svelte'

	let { id }: { id?: string } = $props()
	let promise: any = $state({})

	$effect(() => {
		if (id) {
			promise = pb.collection('quotes_public').getList(1, 1, {
				filter: `id = "${id}"`,
			})
		} else {
			promise = pb.collection('quotes_public').getList(1, 1, {
				sort: '@random',
			})
		}
	})
</script>

{#await promise then quote}
	{#if quote?.items?.length}
		{@const q = quote.items[0]}
		<blockquote cite={'https://adam.nz/id/' + q.id} class="quote">
			{@html q.content.trim()}
			<footer>&mdash; {@html q.author.trim()}</footer>
		</blockquote>
	{/if}
{:catch e}
	<p style="color: var(--brand)">{e.message}</p>
{/await}

<!-- 
@component  

## Quote

Gets a random quote from `pb.haume.nz`.

## Props

- `id` - returns a specific quote matching the PocketBase id

-->
<style>
	:global(.quote p, .quote div) {
		display: inline;
		color: inherit;
		font-style: italic;
	}
	blockquote,
	footer,
	p {
		display: inline;
		margin: 0;
		padding: 0;
		border: 0;
		color: inherit;
		font-style: italic;
	}
	footer {
		max-width: 100%;
		display: inline-block;
		word-wrap: break-word;
		font-style: normal;
	}
</style>
