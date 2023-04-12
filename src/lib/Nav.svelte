<script>
    const adds = [
    { name: "home", link: "/" },
    { name: "one", link: "/one" },
  ];
</script>
<main class="container mx-auto shadow-md rounded-md shadow-gray-200">
{#each adds as x}
    <a href="{x.link}">{x.name}</a>
{/each}
</main>
<style></style>