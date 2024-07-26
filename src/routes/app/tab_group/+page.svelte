<script lang="ts">
	import Ipsum from '$lib/components/Ipsum.svelte'

	let tabs = ['Observation', 'Track']
	let currentTab = $state(0)
</script>

<article>
	<h1>Tab Outlines</h1>

	<header>
		<div></div>
		{#each tabs as tab, i}
			<button class:selected={currentTab == i} onclick={() => (currentTab = i)}>{tab}</button>
		{/each}
		<div></div>
	</header>

	<section>
		<Ipsum />
	</section>
</article>

<style>
	article {
		--borderWidth: 2px;
	}
	section {
		padding-inline: 1rem;
		border: var(--borderWidth) solid var(--primary);
		/* outline: var(--borderWidth) solid var(--primary); */
	}
	h1 {
		color: var(--primary);
	}
	header {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-around;
		gap: 5px;
	}
	div {
		width: 1rem;
	}
	header,
	button,
	button:hover,
	button.selected,
	button.selected:hover {
		background-color: white;
		color: var(--primary);
	}
	button {
		margin-bottom: calc(var(--borderWidth) * -1);
		border: var(--borderWidth) solid var(--primary);
		border-top-left-radius: 7px;
		border-top-right-radius: 7px;
	}
	button.selected {
		border-bottom: none;
		/* cursor: unset; */
	}
</style>
