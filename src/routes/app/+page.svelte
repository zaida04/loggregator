<script>
	import Logo from '$lib/components/reusable/Logo.svelte';
	import Box from '$lib/components/ui/box/box.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<div class="flex flex-col items-center gap-4 my-2">
	<div class="w-4/5 flex justify-between items-center py-4">
		<Logo href="/app" />
	</div>

	<div class="w-4/5 mb-4 flex gap-8 items-end">
		<h1 class="font-semibold">Your Projects</h1>
		<Button size="sm">Create Project</Button>
	</div>

	<div class="flex gap-8 w-4/5">
		<a
			href="/app/projects/test-project"
			class="w-64 border-2 rounded-md p-4 shadow-primary-foreground shadow-lg transition-all hover:border-b-8"
		>
			<h2 class="mb-2">Test Project</h2>
			<div class="text-gray-400 text-sm">
				<p>X logs collected</p>
				<p>Last log collected Today</p>
			</div>
		</a>

		<Box>
			<h3 class="font-normal text-lg">Your new project!</h3>
		</Box>
	</div>
</div>
