<script lang="ts">
  import { Input } from "$lib/components/ui/input";
  import Label from "$lib/components/ui/label/label.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import Alert from "$lib/components/ui/alert/alert.svelte";
  import DashNavbar from "$lib/components/reusable/DashNavbar/DashNavbar.svelte";
  import { formatDate, formatLineDate } from "$lib/utils.js";
  import { tick } from "svelte";
  import type { PageData } from "./$types";
  import { Dialog, DialogTrigger } from "$lib/components/ui/dialog";
  import DialogShortcut from "$lib/components/ui/dialog/dialog-shortcut.svelte";

  export let data: PageData;
  let lines = data.lines;
  let element: HTMLDivElement;

  async function refreshLines() {
    const res = await fetch(`/api/projects/${data.project.id}/lines`);
    const json = await res.json();

    json.lines.map((line) => {
      line.createdAt = new Date(line.createdAt);
    });
    lines = json.lines;
  }

  $: if (lines && element)
    tick().then(() =>
      element.scroll({ top: element.scrollHeight, behavior: "smooth" })
    );
</script>

<div class="flex flex-col items-center gap-4">
  <DashNavbar>
    <h1>{data.project.name}</h1>
  </DashNavbar>

  <div class="w-4/5">
    <h1 class="font-normal mb-2">{data.project.name}</h1>
    <p class="text-gray-400 text-sm mb-10">
      Created {formatDate(data.project.createdAt)}
    </p>

    <div class="mb-4 flex justify-between gap-2 items-end">
      <div class="w-1/2">
        <Label>Your Token</Label>
        <div class="flex flex-row gap-2">
          <Input
            type="text"
            placeholder={data.project.token}
            class="max-w-xs"
            disabled
          />
          <Button
            on:click={() => {
              navigator.clipboard.writeText(data.project.token);
            }}
          >
            Copy
          </Button>
        </div>
      </div>

      <Button on:click={refreshLines}>Refresh</Button>
    </div>

    <div
      bind:this={element}
      class="mb-4 flex flex-col h-80 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm overflow-y-scroll placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
    >
      {#each lines as line}
        <div class="flex gap-2 text-gray-300">
          <p class="text-sm select-none text-gray-500">
            {formatLineDate(line.createdAt)}{" >"}
          </p>
          <p class="text-sm">{line.content}</p>
        </div>
      {/each}
    </div>

    <div class="mb-8">
      <h1 class="mb-4">Settings</h1>
      <div class="flex flex-col gap-2">
        <Alert variant="destructive">This is the danger zone!</Alert>
        <div>
          <p class="mb-2">
            Delete your project. This will immediately remove all logs and
            resources allocated to your project.
          </p>
          <Dialog>
            <DialogTrigger>
              <Button variant="destructive">Delete Project</Button>
            </DialogTrigger>
            <DialogShortcut
              title="Delete Project"
              description="Are you sure you want to delete this project? This action cannot be undone."
              formaction={"?/deleteProject"}
            >
              <Button type="submit" variant="destructive" class="mr-2">
                Delete
              </Button>
            </DialogShortcut>
          </Dialog>
        </div>
      </div>
    </div>
  </div>
</div>
