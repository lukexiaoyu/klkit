<script>
    export let data
</script>
<div class="grid grid-cols-5 gap-2 container mx-auto">
    {#if data}
        {#each data.peos as x}
            <div class="box">{x.name}-{x.sex}-{x.age}</div>
        {/each}
    {/if}
</div>
<style></style>