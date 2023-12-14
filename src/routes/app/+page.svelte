<script>
	import Box from '$lib/components/ui/box/box.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import DashNavbar from '$lib/components/reusable/DashNavbar/DashNavbar.svelte';
</script>

<div class="flex flex-col min-h-screen overflow-y-scroll items-center gap-4">
	<DashNavbar />

	<div class="w-4/5 mb-4 flex gap-8 items-end">
		<h1 class="font-semibold">Your Projects</h1>
		<Button size="sm">Create Project</Button>
	</div>

	<div class="flex gap-8 w-4/5">
		<a
			href="/app/projects/test-project"
			class="w-64 border-2 rounded-md p-6 shadow-primary-foreground shadow-md transition-all hover:border-b-4 hover:shadow-2xl hover:shadow-primary-foreground"
		>
			<h2 class="mb-2">Test Project</h2>
			<div class="text-gray-400">
				<p class="text-sm">X logs collected</p>
				<p class="text-sm">Last log collected Today</p>
			</div>
		</a>

		<Box>
			<h3 class="font-normal text-lg">Your new project!</h3>
		</Box>
	</div>
</div>
