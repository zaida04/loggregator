<script lang="ts">
  import { Menu } from "lucide-svelte";
  import Button from "../../ui/button/button.svelte";
  import ModeSwitcher from "../ModeSwitcher.svelte";
  import NavbarItem from "./NavbarItem.svelte";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import Logo from "../Logo.svelte";
  import SignedIn from "clerk-sveltekit/client/SignedIn.svelte";
  import SignedOut from "clerk-sveltekit/client/SignedOut.svelte";

  let showMobileNavbar: boolean;
  let navbarClosing: boolean = false;
  function toggleNav() {
    if (!showMobileNavbar) {
      navbarClosing = false;
      showMobileNavbar = true;
    } else {
      navbarClosing = true;
      setTimeout(() => {
        showMobileNavbar = false;
      }, 500);
    }
  }

  const navbarItems: Record<string, string> = {
    Home: "/",
    Dashboard: "/app",
    GitHub: "https://github.com/zaida04/loggregator.git",
  };
</script>

<!-- desktop navbar -->
<div class="hidden md:flex justify-center gap-4 my-2">
  <div class="w-4/5 flex justify-between items-center py-4">
    <Logo />

    <div class="flex flex-row gap-8 items-center">
      {#each Object.keys(navbarItems) as item}
        <NavbarItem href={navbarItems[item]}>{item}</NavbarItem>
      {/each}
    </div>

    <div class="flex flex-row items-center gap-4">
      <ModeSwitcher />
      <SignedIn>
        <a href="/app">
          <Button>Go to Dashboard</Button>
        </a>
      </SignedIn>
      <SignedOut>
        <a href="/app"><Button>Log In</Button></a>
      </SignedOut>
    </div>
  </div>
</div>

<!-- mobile navbar -->
<div class="md:hidden flex-col">
  <div
    class="z-10 bg-background relative flex flex-row justify-between py-4 mx-6 items-center"
  >
    <Logo />
    <div
      aria-label="Toggle Navbar"
      role="button"
      tabindex={0}
      on:click={toggleNav}
      on:keypress={toggleNav}
    >
      <Menu class="hover:cursor-pointer" size={42} />
    </div>
  </div>

  {#if showMobileNavbar}
    <div
      class={`z-1 absolute bg-background w-full flex flex-col justify-center items-center ${
        navbarClosing ? "animate-slide-up" : "animate-slide-down"
      }`}
    >
      <Separator />
      {#each Object.keys(navbarItems) as item}
        <NavbarItem href={navbarItems[item]}>{item}</NavbarItem>
        <Separator />
      {/each}
      <NavbarItem>
        <div class="flex flex-row gap-4">
          <ModeSwitcher />
          <Button>Log In</Button>
        </div>
      </NavbarItem>
      <Separator />
    </div>
  {/if}
</div>
