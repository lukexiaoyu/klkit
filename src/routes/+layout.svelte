<script>
import '../tailwind.css'
import {page} from '$app/stores'



const adds=[
    {name:'home',link:'/'},
    {name:'one',link:'/one'},
    {name:'xata',link:'/xata'},
    
]
</script>

<nav class='container mx-auto grid grid-cols-8 gap-1'>
    {#each adds as x}
        <a href="{x.link}" class="p-2 rounded-md text-center" aria-current={$page.url.pathname===`${x.link}`}>{x.name}</a>
    {/each}
</nav>
<slot />
<style>
    [aria-current='true']{
        background-color:red;
    }
</style>