<script>
	import "../app.css";
	import Sidebar from "../component/sidebar/+sidebar.svelte";
	import Navbar from "../component/navbar/+navbar.svelte";
	import { Toaster } from "svelte-french-toast";
</script>

<div class="w-full h-screen flex sm:flex-row xxs:flex-col">
	<Sidebar
		className="w-[10%] bg-slate-900 pb-4 xxs:hidden sm:flex  flex flex-col justify-between items-center border border-y-0 border-l-0 border-gray-100/10"
	/>
	<Navbar
		className="xxs:h-[10%] xxs:flex pr-4 items-center justify-between sm:hidden bg-slate-900"
	/>
	<div
		class="xxs:w-[100%] sm:w-[90%] xxs:h-[90%] sm:h-screen bg-slate-900 relative overflow-hidden"
	>
		<div
			class="bg-violet-700/10 h-80 w-80 rotate-45 rounded-full absolute z-0 left-[10%] top-[10%] blur-3xl"
		/>
		<div
			class="bg-blue-700/10 h-96 w-96 rotate-12 rounded-full absolute z-0 left-[50%] top-[25%] blur-2xl"
		/>

		<div class="relative z-10">
			<Toaster />
			<slot />
		</div>
	</div>
</div>
