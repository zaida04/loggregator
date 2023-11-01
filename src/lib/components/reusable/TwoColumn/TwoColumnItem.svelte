<script lang="ts">
	import type { IconProps } from 'lucide-svelte';
	import type { SvelteComponent } from 'svelte';

	export let title: string;
	export let description: string;
	export let icon: typeof SvelteComponent<IconProps>;
</script>

<div class="w-4/12 flex flex-col gap-4 items-center text-center">
	<svelte:component this={icon} size={84} />
	<h2>{title}</h2>
	<p>{description}</p>
</div>
