<script>
  import { Navbar, NavbarBrand } from "sveltestrap/";
  import svelteLogo from "../assets/svelte.svg";
</script>

<Navbar color="dark" dark>
  <NavbarBrand href="/">
    <img
      src={svelteLogo}
      alt=""
      width="30"
      height="30"
      class="d-inline-block align-text-top"
    />
    <span class="mb-0 h4 mt-1">Jawdropping Notes</span>
  </NavbarBrand>
</Navbar>

<style>
</style>
