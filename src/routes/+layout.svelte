<script>
	import "../app.css";
	import Sidebar from "../component/sidebar/+sidebar.svelte";
	import Navbar from "../component/navbar/+navbar.svelte";
	import { Toaster } from "svelte-french-toast";
	import { darkMode } from "../store/theme/themeStore";
	import { isSettings, isMobile } from "../store/settings/settingsStore";
	import Popover from "../component/popover/+popover.svelte";
	let settings = false;
	let mobile = false;

	isSettings.subscribe((value) => {
		settings = value;
	});

	isMobile.subscribe((value) => {
		mobile = value;
	});
	/**
	 * @type {boolean}
	 */
	let localDark;
	darkMode.subscribe((Value) => {
		localDark = Value;
	});
</script>

<div class="w-full h-screen flex sm:flex-row xxs:flex-col">
	<Sidebar
		className={`w-[10%] bg-slate-900 pb-4 xxs:hidden sm:flex  flex flex-col justify-between items-center border border-y-0 border-l-0 border-gray-100/10`}
	/>
	<Navbar
		className="xxs:h-[10%] xxs:flex pr-4 items-center justify-between sm:hidden bg-slate-900"
	/>
	<div
		class={`xxs:w-[100%] sm:w-[90%] xxs:h-[90%] sm:h-screen ${localDark ? "bg-slate-900" : "bg-zinc-300"} bg-slate-900 relative overflow-hidden`}
	>
		{#if localDark}
			<div
				class="bg-violet-700/10 h-80 w-80 rotate-45 rounded-full absolute z-0 left-[10%] top-[10%] blur-3xl"
			/>
			<div
				class="bg-blue-700/10 h-96 w-96 rotate-12 rounded-full absolute z-0 left-[50%] top-[25%] blur-2xl"
			/>
		{/if}
		{#if settings && !mobile}
			<Popover
				className="absolute text-white bg-gray-700/20 border-gray-200/10 top-[80%] mt-2 p-4 rounded-r-xl rounded-tl-lg  shadow-lg left-[1%] z-30 w-[10%] h-[15%] space-y-2"
			/>
		{/if}
		{#if settings && mobile}
			<Popover
				className="absolute text-white bg-gray-700/40 border-gray-200/10 top-[0] mt-2 p-4 rounded-l-xl rounded-br-lg  shadow-lg right-[9%] z-30 w-[40%] h-[19%] space-y-2"
			/>
		{/if}
		<div class="relative z-10">
			<Toaster />
			<slot />
		</div>
	</div>
</div>
