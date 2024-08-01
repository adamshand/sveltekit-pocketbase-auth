<script lang="ts">
	import Quote from '$lib/components/Quote.svelte'
</script>

<footer>
	<div>
		<!-- <Quote id="5v4vesjd1944x56" /> -->
		<Quote />
	</div>
</footer>

<style>
	footer {
		padding: 0.5rem;
		/* border-top: 1px dashed var(--surface-4); */
		background-color: var(--surface-2);
		color: var(--text-2);
		text-align: center;
		font-size: smaller;
	}
	div {
		margin-inline: auto;
		max-width: max(100vw - 5rem, 66ch);
	}
</style>
