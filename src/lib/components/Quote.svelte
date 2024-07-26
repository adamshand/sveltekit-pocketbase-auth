<script lang="ts">
	import { page } from '$app/stores'
</script>

{#if $page.data.quote}
	{@const quote = $page.data.quote}
	<div class="quote">
		<i>{@html quote.content}</i> &mdash;&nbsp;{quote.author}
	</div>
{/if}

<style>
	.quote,
	:global(.quote div, .quote p) {
		font-size: 0.9rem;
		color: var(--pink-2);
		font-weight: lighter;
		/* font-size: 0.85rem; */
	}
	:global(.quote div, .quote p) {
		display: inline;
	}
</style>
