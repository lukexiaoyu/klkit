<script>
    export let data
</script>
<div>
    {#if data}
        {#each data.peos as x}
            {x.name}
        {/each}
    {/if}
</div>
<style></style>