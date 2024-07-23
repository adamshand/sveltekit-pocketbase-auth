<script>
	import { page } from '$app/stores';
</script>

<article>
	<h1>Hi {$page.data.user?.name.split(' ')[0] ?? ''}!</h1>

	{#if $page.data.quote}
		{@const quote = $page.data.quote}
		<p>{@html quote.content}</p>
		<p><i>&mdash;&nbsp;{quote.author}</i></p>
	{/if}
</article>

<style>
	article {
		width: 46ch;
		margin-inline: auto;
	}
	h1,
	p {
		text-align: center;
	}
</style>
