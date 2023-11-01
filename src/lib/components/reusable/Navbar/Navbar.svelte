<script lang="ts">
	import { Menu } from 'lucide-svelte';
	import Button from '../../ui/button/button.svelte';
	import ModeSwitcher from '../ModeSwitcher.svelte';
	import NavbarItem from './NavbarItem.svelte';

	let showMobileNavbar: boolean;
	const navbarItems: Record<string, string> = {
		Home: '/',
		Dashboard: '/dash',
		GitHub: 'https://github.com/zaida04/loggregator.git'
	};
</script>

<!-- desktop navbar -->
<div class="hidden md:flex justify-center gap-4 my-2">
	<div class="w-4/5 flex justify-between items-center py-4">
		<h1>Loggregator</h1>

		<div class="flex flex-row gap-8 items-center">
			{#each Object.keys(navbarItems) as item}
				<NavbarItem href={navbarItems[item]}>{item}</NavbarItem>
			{/each}
		</div>

		<div class="flex flex-row items-center gap-4">
			<ModeSwitcher />
			<Button>Log In</Button>
		</div>
	</div>
</div>

<!-- mobile navbar -->
<div class="flex-col">
	<div class="md:hidden flex flex-row justify-between my-4 mx-6 items-center">
		<h1>Loggregator</h1>
		<Menu class="hover:cursor-pointer" size={38} />
	</div>

	{#if showMobileNavbar}
		<div>
			{#each Object.keys(navbarItems) as item}
				<NavbarItem href={navbarItems[item]}>{item}</NavbarItem>
			{/each}
		</div>
	{/if}
</div>
