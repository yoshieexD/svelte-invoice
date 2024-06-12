<script>
	import "../app.css";
	import Sidebar from "../component/sidebar/+sidebar.svelte";
	import Navbar from "../component/navbar/+navbar.svelte";
</script>

<div class="w-full h-screen flex sm:flex-row xs:flex-col">
	<Sidebar
		className="w-[10%] bg-slate-900 pb-2 xs:hidden sm:flex  flex flex-col justify-between items-center"
	/>
	<Navbar
		className="xs:h-[10%] xs:flex items-center justify-between sm:hidden bg-slate-900"
	/>
	<div class="xs:w-[100%] sm:w-[90%] xs:h-[90%] sm:h-screen bg-slate-950">
		<slot />
	</div>
</div>
