<script lang="ts">
    import '../app.css';
    
    let { children, data } = $props();
</script>
<div class="flex flex-col bg-sky-700 h-svh content-end">
    {@render children()}
</div>

<style>
    
</style>