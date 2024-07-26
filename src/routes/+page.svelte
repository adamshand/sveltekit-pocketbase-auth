<script lang="ts">
	import { page } from '$app/stores'
</script>

{#if $page.data.user}
	<h1>Hi{$page.data.user?.name.split(' ')[0] ?? ''}!</h1>
{:else}
	<h1>Welcome stranger!</h1>
{/if}

<style>
</style>
