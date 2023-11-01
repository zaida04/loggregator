<script lang="ts">
	export let href: string | null = null;
</script>

<h3 class="my-8 md:my-0 hover:underline underline-offset-4">
	{#if href !== null}
		<a {href}>
			<slot />
		</a>
	{:else}
		<p>
			<slot />
		</p>
	{/if}
</h3>
