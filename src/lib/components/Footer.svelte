<script lang="ts">
	import Quote from '$lib/components/Quote.svelte'
</script>

<footer>
	<div>
		<Quote />
	</div>
</footer>

<style>
	footer {
		padding: 0.5rem;
		border-top: 1px dashed var(--surface-4);
		text-align: center;
	}
	div {
		margin-inline: auto;
		max-width: max(100vw - 5rem, 66ch);
	}
</style>
