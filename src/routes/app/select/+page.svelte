<script lang="ts">
	import { browser } from '$app/environment'
	const books = [
		{ title: 'Book 1', author: 'Jane' },
		{ title: 'Book 2', author: 'Jason' },
		{ title: 'Book 3', author: 'Jeremiah' },
	]
	let sortBy = $state('title')
	// let books = $derived(sortBooks(sortBy))
	$inspect(sortBy)
</script>

<section>
	<button>Browser: {browser}</button>

	<button>sortBy: {sortBy}</button>
	<form>
		<label>
			sort by &nbsp;
			<select bind:value={sortBy}>
				<option value="author">author</option>
				<option value="updated">added</option>
				<option value="actualCreated">published</option>
				<option value="title">title</option>
			</select>
		</label>
	</form>
</section>

<style>
	section {
		display: grid;
		gap: 1rem;
	}
	button {
		width: 100%;
	}
</style>
