<script>
  const adds=[
    {name:'首页',link:'/'},
    {name:'one',link:'/one'},
    {name:'tools',link:'/tools'},
    {name:'blog',link:'/blog'},
  ]
 

  import "../app.postcss";
  import Nav from "../lib/Nav.svelte";
  
  
</script>

<Nav {adds}></Nav>

  <slot></slot>




<style></style>
