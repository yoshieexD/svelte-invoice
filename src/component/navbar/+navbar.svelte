<script>
    //@ts-ignore
    import DiHeroku from "svelte-icons/di/DiHeroku.svelte";
    import Theme from "../shared/+theme.svelte";
    export let className = "";
    export let isDarkMode = false;
</script>

<div class={className}>
    <div class="bg-violet-600 h-full text-white rounded-r-2xl">
        <DiHeroku />
    </div>
    <div class="h-full flex items-center space-x-3">
        <Theme />
        <div class="h-full w-[1px] bg-slate-600/20" />
        <img
            src="https://picsum.photos/40/40"
            alt="picsum"
            class="rounded-full cursor-pointer w-8 h-8"
        />
    </div>
</div>
