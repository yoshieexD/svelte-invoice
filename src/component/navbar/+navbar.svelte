<script>
    //@ts-ignore
    import DiHeroku from "svelte-icons/di/DiHeroku.svelte";
    import Theme from "../shared/+theme.svelte";
    import { isSettings, isMobile } from "../../store/settings/settingsStore";
    export let className = "";
    let setting = false;
    let mobile = false;

    isMobile.subscribe((value) => (mobile = value));
    isSettings.subscribe((value) => (setting = value));
    function handleSettings() {
        isSettings.set(!setting);
        isMobile.set(true);
    }
</script>

<div class={className}>
    <div class="bg-violet-600 h-full text-white rounded-r-2xl">
        <DiHeroku />
    </div>
    <div class="h-full flex items-center space-x-3">
        <!-- <Theme /> -->
        <div class="h-full w-[1px] bg-slate-600/20" />
        <button on:click={handleSettings}>
            <img
                src="https://picsum.photos/40/40"
                alt="picsum"
                class="rounded-full cursor-pointer w-8 h-8"
            />
        </button>
    </div>
</div>
