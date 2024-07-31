<script lang="ts">
	import { page } from '$app/stores'
</script>

{#if $page.data.quote}
	{@const quote = $page.data.quote}
	<section>
		<div class="quote">{@html quote.content}</div>
		<div class="author">&mdash;&nbsp;{quote.author}</div>
	</section>
{/if}

<!-- 
@component  

## Quote

Pulls a quote from `$page.data.quote` which is loaded in by `+layout.server.ts`

## Props

None.
-->

<style>
	:global(section div, section p) {
		display: inline;
		margin-bottom: 0;
		font-style: italic;
	}
	section {
		margin: 0;
	}
	.quote {
		font-style: italic;
	}
</style>
