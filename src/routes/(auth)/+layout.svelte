<script lang="ts">
	let { children, data } = $props();
</script>

<article>
	{@render children()}
</article>

<style>
	article {
		width: 40ch;
	}
</style>
