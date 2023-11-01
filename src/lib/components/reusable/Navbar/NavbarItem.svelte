<script lang="ts">
	export let href: string;
</script>

<h3 class="hover:underline underline-offset-4">
	<a {href}>
		<slot />
	</a>
</h3>
