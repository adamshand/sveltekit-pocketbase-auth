<script lang="ts">
	const things = ['foo', 'bar', 'baz']
</script>

<input list="things" />
<datalist id="things">
	{#each things as thing}
		<option value={thing}></option>
	{/each}
</datalist>
