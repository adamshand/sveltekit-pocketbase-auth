<script>
	let { children } = $props()
</script>

<div>
	{@render children()}
</div>

<style>
	div {
		margin-inline: auto;
	}
</style>
