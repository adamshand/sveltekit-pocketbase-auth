<script lang="ts">
	let colors = [
		'AccentColor',
		'AccentColorText',
		'ActiveText',
		'ButtonBorder',
		'ButtonFace',
		'ButtonText',
		'Canvas',
		'CanvasText',
		'Field',
		'FieldText',
		'GrayText',
		'Highlight',
		'HighlightText',
		'LinkText',
		'Mark',
		'MarkText',
		'SelectedItem',
		'SelectedItemText',
		'VisitedText',
	]
</script>

<hgroup>
	<h1>CSS Color Module Level 4</h1>
	<p>
		System Colours:
		<a href="https://www.w3.org/TR/css-color-4/#css-system-colors">
			https://www.w3.org/TR/css-color-4/
		</a>
	</p>
</hgroup>

<h2>Dark</h2>

<section data-theme="dark">
	{#each colors as color}
		<div style={`background-color: ${color};`}>
			<p>{color}</p>
		</div>
	{/each}
</section>

<hr />

<h2>Light</h2>

<section data-theme="light">
	{#each colors as color}
		<div style={`background-color: ${color};`}>
			<p>{color}</p>
		</div>
	{/each}
</section>

<style>
	p {
		text-align: center;
	}
	section {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: center;

		padding: 1rem;
		background-color: Canvas;
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
