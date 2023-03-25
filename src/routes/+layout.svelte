<script>
    const adds=[
        {name:'home',link:'/'},
        {name:'one',link:'/one'},
    ]
</script>
<main>
    {#each adds as x}
        <a href="{x.link}">{x.name}</a>
        
    {/each}
    <hr>
    <slot></slot>
</main>
<style></style>