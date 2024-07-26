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
		'GrayText'
	];
</script>

<h1>Dark</h1>

<section style="color-scheme: dark;">
	{#each colors as color}
		<div style={`background-color: ${color};`}>
			<p>{color}</p>
		</div>
	{/each}
</section>

<hr />

<h1>Light</h1>

<section style="color-scheme: light;">
	{#each colors as color}
		<div style={`background-color: ${color};`}>
			<p>{color}</p>
		</div>
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 3px;
	}
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 19%;
		height: 25vh;
	}
	p {
		padding: 0.7rem;
		border-radius: 7px;
		/* background-color: Highlight;
		color: HighlightText; */
		background-color: Highlight;
		color: HighlightText;
	}
</style>
