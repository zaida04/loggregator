<script lang="ts">
    import DashNavbar from "$lib/components/reusable/DashNavbar/DashNavbar.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import { page } from "$app/stores";
    import DashLayout from "$lib/components/reusable/Layout/DashLayout.svelte";
    import {
        Accordion,
        AccordionContent,
        AccordionItem,
        AccordionTrigger,
    } from "$lib/components/ui/accordion";
    import Adapter from "$lib/components/docs/Adapter.svelte";
    import Manual from "$lib/components/docs/Manual.svelte";
    import CustomLibrary from "$lib/components/docs/CustomLibrary.svelte";
</script>

<DashLayout>
    <DashNavbar>
        <h1>Setup</h1>
    </DashNavbar>

    <div class="flex flex-col gap-8">
        <div>
            <p class="pb-2">
                Welcome to loggregator! Let's get started with setting up your
                project and receiving your first log!
            </p>
            <a href={`/app/projects/${$page.params.projectSlug}`}>
                <Button size="sm">Skip this tutorial</Button>
            </a>
        </div>

        <div>
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

                <AccordionItem value="custom-library">
                    <AccordionTrigger>Using our custom logger</AccordionTrigger>
                    <AccordionContent>
                        <CustomLibrary />
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="manual-http">
                    <AccordionTrigger>
                        Manually sending logs over HTTP
                    </AccordionTrigger>
                    <AccordionContent>
                        <Manual />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
</DashLayout>
