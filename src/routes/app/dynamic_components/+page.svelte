<script lang="ts">
	import Apple from './Apple.svelte'
	import Banana from './Bananna.svelte'

	let toggle = $state(false)
	let Icon = $derived(toggle ? Apple : Banana)

	const icons = [
		{ text: 'apple', icon: Apple },
		{ text: 'banana', icon: Banana },
	]
</script>

<div>
	<b>Toggle: </b><input bind:checked={toggle} type="checkbox" />
</div>

<h2>Svelte 4</h2>
<ul>
	{#each icons as { text, icon }}
		<li>{text}: <svelte:component this={icon} /></li>
	{/each}
</ul>

<hr />

<div>
	<svelte:component this={Icon} />
</div>

<h2>Svelte 5</h2>
<ul>
	{#each icons as { text, icon: Fruit }}
		<li>{text}: <Fruit /></li>
	{/each}
</ul>

<hr />

<div>
	<Icon />
</div>

<style>
	h2 {
		text-align: center;
	}
	li,
	div {
		display: flex;
		gap: 0.5rem;
		text-align: center;
		margin-bottom: 1rem;
		justify-content: center;
	}
</style>
