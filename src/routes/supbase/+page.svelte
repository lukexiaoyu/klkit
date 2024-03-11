<script>
    export let data
    console.log(data.peos);
</script>
<div class="container mx-auto grid gap-1 grid-cols-5">
    {#each data.peos as x}
        <div class="box">{x.name}-{x.age}-{x.sex}</div>
    {/each}
</div>
<style></style>