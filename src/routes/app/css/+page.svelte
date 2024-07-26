<script lang="ts">
	let colors = [
		'Canvas',
		'CanvasText',
		'LinkText',
		'VisitedText',
		'ActiveText',
		'ButtonFace',
		'ButtonText',
		'ButtonBorder',
		'Field',
		'FieldText',
		'Highlight',
		'HighlightText',
		'Mark',
		'MarkText',
		'GrayText',
	]
</script>

<h2>Dark</h2>

<section style="color-scheme: dark;">
	{#each colors as color}
		<div style={`background-color: ${color};`}>
			<p>{color}</p>
		</div>
	{/each}
</section>

<hr />

<h2>Light</h2>

<section style="color-scheme: light;">
	{#each colors as color}
		<div style={`background-color: ${color};`}>
			<p>{color}</p>
		</div>
	{/each}
</section>

<style>
	h2 {
		text-align: center;
	}
	section {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 3px;
		justify-content: center;
	}
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 12rem;
		height: 12rem;
	}
	p {
		padding: 0.5rem;
		border: 1px solid HighlightText;
		border-radius: 3px;
		background-color: Highlight;
		color: HighlightText;
	}
</style>
