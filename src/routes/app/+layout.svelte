<script>
	import { page } from '$app/stores'
	let { children } = $props()
</script>

<article>
	<h1>Hi {$page.data.user?.name.split(' ')[0] ?? ''}!</h1>

	<section>
		{@render children()}
	</section>
</article>

<style>
	article {
		/* width: 64ch; */
		margin-inline: auto;
	}
	section {
		padding: 1rem;
	}
</style>
