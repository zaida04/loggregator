<script>
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import UserButton from 'clerk-sveltekit/client/UserButton.svelte';
	import Logo from '../Logo.svelte';
	import ModeSwitcher from '../ModeSwitcher.svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="w-4/5 flex justify-between items-center my-2">
	<div class="w-4/5 flex justify-between items-center py-4">
		<div class="flex flex-row gap-4 items-center">
			<Logo href="/app" />
			{#if Object.keys($$slots).length}
				<p>•</p>
				<slot />
			{/if}
		</div>
	</div>

	<div class="flex items-center gap-4">
		<ModeSwitcher />
		<a href="/">
			<Button>Home</Button>
		</a>
		<SignedIn>
			<div class="flex flex-row gap-4 items-center">
				<div class="bg-accent rounded-full border-primary-foreground">
					<UserButton
						appearance={{
							elements: {
								userButtonAvatarBox: 'h-9 w-9'
							}
						}}
						afterSignOutUrl="/"
					/>
				</div>
			</div>
		</SignedIn>
	</div>
</div>
