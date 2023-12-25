<script lang="ts">
    import DashNavbar from "$lib/components/reusable/DashNavbar/DashNavbar.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import { page } from "$app/stores";
    import DashLayout from "$lib/components/reusable/Layout/DashLayout.svelte";
</script>

<DashLayout>
    <DashNavbar>
        <h1>Setup</h1>
    </DashNavbar>

    <div>
        <p>
            Welcome to loggregator! Let's get started with setting up your
            project and receiving your first log!
        </p>
        <a href={`/app/projects/${$page.params.projectSlug}`}>
            <Button>Skip this tutorial</Button>
        </a>
    </div>
</DashLayout>
