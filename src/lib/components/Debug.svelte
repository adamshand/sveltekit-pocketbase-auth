<script lang="ts">
	import type { Snippet } from 'svelte';
	import { dev } from '$app/environment';

	let { children, title = 'dev' }: { children: Snippet; title?: string } = $props();
</script>

{#if dev}
	<fieldset class="dev">
		<legend> {title} </legend>
		{@render children()}
	</fieldset>
{/if}

<style>
	fieldset {
		border: 1px solid var(--brand);
		padding: 0rem 0.5rem 0.5rem 0.5rem;
	}
	legend {
		padding-inline: 0.5rem;
		color: var(--brand);
	}
</style>
