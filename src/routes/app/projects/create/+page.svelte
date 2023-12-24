<script lang="ts">
    import DashNavbar from "$lib/components/reusable/DashNavbar/DashNavbar.svelte";
    import * as Form from "$lib/components/ui/form";
    import type { PageData } from "./$types";
    import { formSchema } from "./schema";

    export let data: PageData;
</script>

<div class="flex flex-col items-center gap-4">
    <DashNavbar>
        <h1>Create New Project</h1>
    </DashNavbar>

    <div class="w-3/4">
        <Form.Root
            method="POST"
            form={data.form}
            schema={formSchema}
            let:config
        >
            <Form.Field {config} name="name">
                <Form.Item>
                    <Form.Label>Project Title</Form.Label>
                    <Form.Input class="w-60" />
                    <Form.Description
                        >Give your project a unique name.</Form.Description
                    >
                    <Form.Validation />
                </Form.Item>
            </Form.Field>
            <Form.Button class="mt-4">Submit</Form.Button>
        </Form.Root>
    </div>
</div>
