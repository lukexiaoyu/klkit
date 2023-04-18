<script>
    export let adds = [
    { name: "home", link: "/" },
    { name: "one", link: "/one" },
  ];
</script>
<main class="container mx-auto shadow-md rounded-md shadow-gray-200 m-1 flex">
{#each adds as x}
    <a class="rounded-md transition duration-500 block p-2 hover:shadow-md m-2 hover:rounded-md hover:bg-indigo-600 hover:text-white " href="{x.link}">{x.name}</a>
{/each}
</main>
<style></style>