<script>
	import Navbar from '../reusable/dash/Navbar/Navbar.svelte';
</script>

<div>
	<Navbar />
	<div class="flex justify-center items-center">
		<div class="w-4/5">
			<slot />
		</div>
	</div>
</div>
