<script lang="ts">
	import type { Snippet } from 'svelte'
	import { dev } from '$app/environment'

	let { children, title = 'dev' }: { children: Snippet; title?: string } = $props()
</script>

{#if dev}
	<fieldset class="dev">
		<legend> {title} </legend>
		{@render children()}
	</fieldset>
{/if}

<style>
	fieldset {
		border: 2px dashed var(--surface-4);
		padding: 0rem 0.5rem 0.5rem 0.5rem;
		color: var(--surface-4);
	}
	legend {
		padding-inline: 0.5rem;
	}
</style>
