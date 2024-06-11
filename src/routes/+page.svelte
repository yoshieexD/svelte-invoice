<!-- Spinner.svelte -->
<script>
	import { onMount } from "svelte";
	onMount(() => {
		const timer = setTimeout(() => {
			window.location.href = "/invoice";
		}, 2000);

		return () => clearTimeout(timer);
	});
</script>

<div class="min-h-screen flex justify-center items-center">
	<div class="h-12 w-12 bg-violet-600 animate-ping rounded-full" />
</div>
