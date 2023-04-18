<script>
    export let data
</script>
<main class="container mx-auto my-3 grid grid-cols-4 gap-3">
{#each data.item.peos as x}
    <div class="box">{x.name}-{x.age}-{x.sex}</div>
{/each}
</main>
