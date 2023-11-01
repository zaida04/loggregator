<script>
	import Hero from '$lib/components/reusable/Hero.svelte';
	import Navbar from '$lib/components/reusable/Navbar/Navbar.svelte';
	import TwoColumn from '$lib/components/reusable/TwoColumn/TwoColumn.svelte';
	import TwoColumnItem from '$lib/components/reusable/TwoColumn/TwoColumnItem.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { Menu, Upload } from 'lucide-svelte';
	import { MagnifyingGlass } from 'radix-icons-svelte';
</script>

<Navbar />
<Hero>
	<div class="flex flex-col gap-6 items-center text-center">
		<h1 class="text-4xl md:text-6xl">Store, view, & search</h1>
		<h3>That's it. Nothing complicated, only what you need.</h3>
		<div class="flex flex-row gap-4">
			<Button>Get Started</Button>
			<Button>Documentation</Button>
		</div>
	</div>
</Hero>
<Separator />
<TwoColumn>
	<TwoColumnItem
		icon={Upload}
		title="Send your logs from your app"
		description="Use good ol' HTTP requests or use a plugin available for your favorite logger."
	/>
	<TwoColumnItem
		icon={MagnifyingGlass}
		title="We handle the annoying part"
		description="We ingest every log you send our way and make it easy to search through your logs and view them in a digestible way"
	/>
</TwoColumn>
