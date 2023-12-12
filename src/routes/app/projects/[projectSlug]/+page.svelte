<script lang="ts">
	import { page } from '$app/stores';
	import { Input } from '$lib/components/ui/input';
	import Label from '$lib/components/ui/label/label.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Alert from '$lib/components/ui/alert/alert.svelte';

	const projectSlug = $page.params.projectSlug;
	const lines = ['This is log 1', 'This is log 2'];

	// function handleCopy(event: ClipboardEvent) {
	// 	const selection = document.getSelection();
	// 	let text = selection!.toString();
	// 	text = text.replace(/>/g, '\n');
	// 	event.clipboardData?.setData('text/plain', text);
	// 	event.preventDefault();
	// }
</script>

<div class="flex flex-col items-center gap-4 my-2">
	<div class="w-4/5 flex justify-between items-center py-4">
		<div class="flex flex-row gap-4 items-center">
			<h1>Loggregator</h1>
			<p>•</p>
			<h1>{projectSlug}</h1>
		</div>
	</div>

	<div class="w-4/5">
		<h1 class="font-normal mb-2">Project Title</h1>
		<p class="text-gray-400 text-sm mb-10">Created at DATE-TIME</p>

		<div class="mb-4 flex justify-between gap-2 items-end">
			<div class="w-1/2">
				<Label>Your Token</Label>
				<div class="flex flex-row gap-2">
					<Input type="text" placeholder="this-is-a-test-token" class="max-w-xs" disabled />
					<Button>Copy</Button>
				</div>
			</div>

			<Button>Refresh</Button>
		</div>

		<div
			class="mb-4 flex flex-col h-80 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
		>
			{#each lines as line}
				<div class="flex gap-3 text-gray-300">
					<p class="text-sm select-none">{'>'}</p>
					<p class="text-sm">{line}</p>
				</div>
			{/each}
		</div>

		<div class="mb-8">
			<h1 class="mb-4">Settings</h1>
			<div class="flex flex-col gap-2">
				<Alert variant="destructive">This is the danger zone!</Alert>
				<div>
					<p class="mb-2">
						Delete your project. This will immediately remove all logs and resources allocated to
						your project.
					</p>
					<Button variant="destructive">Delete Project</Button>
				</div>
			</div>
		</div>
	</div>
</div>
