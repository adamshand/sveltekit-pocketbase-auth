<script lang="ts">
	import { page } from '$app/stores'
</script>

<h1>
	Welcome <br />
	{#if $page.data.user}
		{$page.data.user?.name.split(' ')[0] ?? ''}
	{:else}
		Stranger
	{/if}
</h1>

<style>
</style>
