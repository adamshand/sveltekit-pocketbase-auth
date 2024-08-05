<script>
	import { browser } from '$app/environment'
	// import 'https://unpkg.com/open-props'
	import OpenProps from 'open-props'

	let styles = $state()
	if (browser) styles = getComputedStyle(document.documentElement)

	let variables = $state([
		'--brand',
		'--not-defined',
		'--pico-primary',
		'--gradient-5',
		'--radius-drawn-1',
	])
</script>

{#each variables as v}
	{@const cssValue = styles?.getPropertyValue(v).trim()}
	{#if cssValue}
		<p>The CSS variable <mark>{v}</mark> is defined ({cssValue}).</p>
	{:else}
		<p>The CSS variable <mark>{v}</mark> is not defined.</p>
	{/if}
{/each}

<style>
	/* @import 'https://unpkg.com/open-props'; */

	/* optional imports that use the props */
	/* @import 'https://unpkg.com/open-props/normalize.min.css'; */
	/* @import 'https://unpkg.com/open-props/buttons.min.css'; */
</style>
