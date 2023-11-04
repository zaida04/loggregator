<script lang="ts">
	import DashLayout from '$lib/components/layouts/DashLayout.svelte';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<DashLayout>
	<h1>Your Projects</h1>
	{#each data.projects as project}
		<a href="/app/project/{project.id}">{project.name}</a>
	{/each}
</DashLayout>
