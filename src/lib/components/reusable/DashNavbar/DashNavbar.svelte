<script>
  import Logo from "../Logo.svelte";
  import ModeSwitcher from "../ModeSwitcher.svelte";
  import { Button } from "$lib/components/ui/button";
  import SignedIn from "../SignedIn.svelte";
</script>

<div class="w-full flex justify-between items-center my-2">
  <div class="flex justify-between items-center py-4">
    <div class="flex flex-row gap-4 items-center">
      <Logo href="/app" />
      <div class="hidden md:flex flex-row gap-4">
        {#if Object.keys($$slots).length}
          <p>•</p>
          <slot />
        {/if}
      </div>
    </div>
  </div>

  <div class="flex items-center gap-4">
    <div class="hidden md:block">
      <ModeSwitcher />
    </div>
    <a href="/">
      <Button>Home</Button>
    </a>
    <SignedIn>
      <form method="POST" action="/logout">
        <Button type="submit">Logout</Button>
      </form>
      <!-- <div class="flex flex-row gap-4 items-center">
        <div class="bg-accent rounded-full border-primary-foreground">
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "h-9 w-9",
              },
            }}
            afterSignOutUrl="/"
          />
        </div>
      </div> -->
    </SignedIn>
  </div>
</div>
