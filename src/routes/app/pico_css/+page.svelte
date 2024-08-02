<script lang="ts">
	const colors = [
		'--pico-color',
		'--pico-muted-color',
		'--pico-muted-border-color',
		'--pico-background-color',
		'--pico-text-selection-color',
		'--pico-mark-background-color',
		'--pico-mark-color',
		'--pico-ins-color',
		'--pico-del-color',
		'--pico-blockquote-border-color',
		'--pico-blockquote-footer-color',
	]
	const subs = [
		'',
		'-background',
		'-border',
		'-underline',
		'-hover',
		'-hover-background',
		'-hover-border',
		'-hover-underline',
		'-focus',
		'-inverse',
	]
</script>

<h1>Pico CSS Colors</h1>
<section>
	<h1>h1. Pico CSS</h1>
	<h2>h2. Pico CSS</h2>
	<h3>h3. Pico CSS</h3>

	{#each colors as color}
		<p style={`background-color: var(${color})`}><mark>{color}</mark></p>
	{/each}
</section>

<h1>Pico Color Sets</h1>
<section id="sets">
	<h2>Primary</h2>
	<h2>Secondary</h2>
	<h2>Contrast</h2>
	{#each subs as sub, i}
		{#each ['primary', 'secondary', 'contrast'] as category}
			{@const style = `--pico-${category}${sub}`}
			<p style={`background-color: var(${style})`}><mark>{style}</mark></p>
		{/each}
	{/each}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1rem;
	}

	section > p {
		padding: 3rem 1rem;
		text-align: center;
	}
	mark {
		display: inline-block;
		padding: 0.5rem;
		border-radius: 0.5rem;
		outline: 2px solid var(--pico-mark-color);
	}
	h1,
	h2,
	h3 {
		text-align: center;
		color: var(--pico-primary);
	}
	p {
		margin: 0;
		/* padding: 4rem; */
	}
</style>
