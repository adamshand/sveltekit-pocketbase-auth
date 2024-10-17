<script lang="ts">
    import '../../app.css';
    
    let { children, data } = $props();
</script>

<main class="flex-1">
    {@render children()}
</main>
<footer class="footer bg-neutral text-neutral-content p-10 h-max flex-none">
    Footer
</footer>

<style>
    
</style>