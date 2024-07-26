<script lang="ts">
	import { onMount } from 'svelte'

	let paragraphs = 5
	let sentences = 3

	let ipsum = $state('')
	const url = `http://metaphorpsum.com/paragraphs/${paragraphs}/${sentences}`

	onMount(async () => {
		ipsum = await fetch(url).then((res) => res.text())
	})
</script>

{#each ipsum.split('\n') as paragraph}
	<p>{paragraph}</p>
{/each}
