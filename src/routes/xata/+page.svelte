<script>
    export let data
</script>
<div class="grid grid-cols-5 gap-2 container mx-auto">
    {#if data}
        {#each data.peos.records as x}
            <p class="box">{x.name}-{x.sex}-{x.age}</p>
        {/each}
    {/if}
</div>
<style></style>