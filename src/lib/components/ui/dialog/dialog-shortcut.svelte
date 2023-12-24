<script lang="ts">
    import { Button } from "../button";
    import {
        DialogContent,
        DialogHeader,
        DialogTitle,
        DialogDescription,
        DialogFooter,
        DialogClose,
    } from "./";

    export let title: string;
    export let description: string;
    export let formaction: string;
</script>

<DialogContent class="sm:max-w-[600px]">
    <DialogHeader>
        <DialogTitle class="text-4xl pb-1">{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
    </DialogHeader>
    <DialogFooter>
        <form method="POST" action={formaction}>
            <slot />
        </form>
        <DialogClose>
            <Button variant="secondary">Cancel</Button>
        </DialogClose>
    </DialogFooter>
</DialogContent>
