<script lang="ts">
	import NavbarItem from './NavbarItem.svelte';

	const navbarItems: Record<string, string> = {
		Projects: '/',
		Settings: '/settings',
		Billing: '/billing'
	};
</script>

<div class="flex flex-row gap-8 px-8 pt-8 pb-6 border-b-[1px]">
	{#each Object.keys(navbarItems) as item}
		<NavbarItem href={navbarItems[item]}>{item}</NavbarItem>
	{/each}
</div>
