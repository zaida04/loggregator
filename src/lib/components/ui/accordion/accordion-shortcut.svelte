<script lang="ts">
    import type { SvelteComponent } from "svelte";
    import Content from "./accordion-content.svelte";
    import Item from "./accordion-item.svelte";
    import Trigger from "./accordion-trigger.svelte";
    import { Root } from "./index";

    export let items: {
        id: string;
        header: string;
        description: string | SvelteComponent;
    }[];
</script>

<Root>
    {#each items as item}
        <Item value={item.id}>
            <Trigger>{item.header}</Trigger>
            <Content>{item.description}</Content>
        </Item>
    {/each}
</Root>
