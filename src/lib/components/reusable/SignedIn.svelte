<script lang="ts">
    import type { page } from "$app/stores";

    export let data: typeof $page.data;
</script>

{#if data.session}
    <slot />
{/if}
