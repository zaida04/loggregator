<script lang="ts">
    import {
        Accordion,
        AccordionContent,
        AccordionItem,
        AccordionTrigger,
    } from "$lib/components/ui/accordion";
    import { page } from "$app/stores";
    import Adapter from "$lib/components/docs/Adapter.svelte";
    import Manual from "$lib/components/docs/Manual.svelte";
    import { Button } from "$lib/components/ui/button";
</script>

<div class="flex flex-col gap-4 mb-8 border p-8 rounded-xl">
    <div>
        <p class="pb-2">
            Welcome to loggregator! Let's finish setting up your project by
            sending over your first log!
        </p>
        <a href={`/app/projects/${$page.params.projectSlug}`}>
            <Button size="sm">Skip this tutorial</Button>
        </a>
    </div>

    <div class="p-4">
        <h2>Installation Options</h2>
        <Accordion>
            <AccordionItem value="adapter">
                <AccordionTrigger>
                    Using an adapter for a popular logging library
                </AccordionTrigger>
                <AccordionContent>
                    <Adapter />
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="manual-http">
                <AccordionTrigger
                    >Manually sending logs over HTTP</AccordionTrigger
                >
                <AccordionContent>
                    <Manual />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
</div>
