<script lang="ts">
    //@ts-ignore
    import DiHeroku from "svelte-icons/di/DiHeroku.svelte";
    import { isSettings, isMobile } from "../../store/settings/settingsStore";
    export let className = "";
    let setting = false;
    let mobile = false;

    isMobile.subscribe((value) => (mobile = value));
    isSettings.subscribe((value) => (setting = value));
    function handleSettings() {
        isSettings.set(!setting);
        isMobile.set(false);
    }
</script>

<div class={className}>
    <div class="bg-violet-600 text-white w-full h-[10%] rounded-r-2xl">
        <DiHeroku />
    </div>
    <div class="flex flex-col items-center space-y-4 w-full">
        <!-- <Theme /> -->
        <div class="bg-slate-800/40 rounded-full h-[1px] w-[100%]" />
        <button on:click={handleSettings}>
            <img
                src="https://picsum.photos/40/40"
                alt="picsum"
                class="rounded-full cursor-pointer"
            />
        </button>
    </div>
</div>
