<script>

 

  import "../app.postcss";
  import Nav from "../lib/Nav.svelte";
  const adds = [
    { name: "home", link: "/" },
    { name: "one", link: "/one" },
  ];
  
</script>

<Nav></Nav>
<div class="container mx-auto">
  <slot></slot>
</div>



<style></style>
