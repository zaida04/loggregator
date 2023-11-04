<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;
</script>

<h3 class="hover:underline underline-offset-8">
	<a {href} class={$page.url.pathname.includes(href) ? 'text-foreground' : 'text-muted-foreground'}>
		<slot />
	</a>
</h3>
