<script>

  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger,DarkMode  } from 'flowbite-svelte'

  import "../app.postcss";
  const adds = [
    { name: "home", link: "/" },
    { name: "one", link: "/one" },
  ];
  
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      class="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/one">One</NavLi>
    <NavLi href="/services">Services</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
  <DarkMode></DarkMode>
</Navbar>
<div class="container mx-auto">
  <slot></slot>
</div>



<style></style>
