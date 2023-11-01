<script lang="ts">
	import { Menu } from 'lucide-svelte';
	import Button from '../../ui/button/button.svelte';
	import ModeSwitcher from '../ModeSwitcher.svelte';
	import NavbarItem from './NavbarItem.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	let showMobileNavbar: boolean;
	let navbarClosing: boolean = false;
	function toggleNav() {
		if (!showMobileNavbar) {
			navbarClosing = false;
			showMobileNavbar = true;
		} else {
			navbarClosing = true;
			setTimeout(() => {
				showMobileNavbar = false;
			}, 250);
		}
	}

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
<div class="md:hidden flex-col">
	<div class="z-10 bg-background relative flex flex-row justify-between py-4 mx-6 items-center">
		<h1>Loggregator</h1>
		<div role="button" tabindex={1} on:click={toggleNav} on:keypress={toggleNav}>
			<Menu class="hover:cursor-pointer" size={42} />
		</div>
	</div>

	{#if showMobileNavbar}
		<div
			class={`z-1 absolute bg-background w-full flex flex-col justify-center items-center ${
				navbarClosing ? 'animate-slideUp' : 'animate-slideDown'
			}`}
		>
			<Separator />
			{#each Object.keys(navbarItems) as item}
				<NavbarItem href={navbarItems[item]}>{item}</NavbarItem>
				<Separator />
			{/each}
			<NavbarItem>
				<div class="flex flex-row gap-4">
					<ModeSwitcher />
					<Button>Log In</Button>
				</div>
			</NavbarItem>
			<Separator />
		</div>
	{/if}
</div>
