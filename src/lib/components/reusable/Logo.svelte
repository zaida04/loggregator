<script lang="ts">
  import { page } from "$app/stores";
  export let href = "/";

  function handleClick() {
    if ($page.url.pathname === href) {
      window.location.reload();
    }
  }
</script>

<a {href} on:click={handleClick}>
  <h1 class="hover:underline underline-offset-2 text-2xl md:text-3xl">
    Loggregator
  </h1>
</a>
