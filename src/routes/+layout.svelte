<script lang="ts">
    import '../app.css';
    
    let { children, data } = $props();
</script>
<div class="grid grid-flow-rows auto-rows-auto bg-sky-700 gap-10">
    <header>
        Header
    </header>
    <main class="bg-sky-700">
        {@render children()}
    </main>
    <footer>
        Footer
    </footer>
</div>

<style>
    
</style>