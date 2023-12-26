<script lang="ts">
    import { loggedIn } from "$lib/store";
</script>

{#if !$loggedIn}
    <slot />
{/if}
