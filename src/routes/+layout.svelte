<script>
	import "../app.css";
	import Sidebar from "../component/sidebar/+sidebar.svelte";
</script>

<div class="w-full h-screen flex">
	<Sidebar
		className="w-[10%] bg-slate-900 flex flex-col justify-between items-center pb-2"
	/>
	<div class="w-[90%] bg-slate-950">
		<slot />
	</div>
</div>
