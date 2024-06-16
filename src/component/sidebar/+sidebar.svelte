<script lang="ts">
    //@ts-ignore
    import DiHeroku from "svelte-icons/di/DiHeroku.svelte";

    import Theme from "../shared/+theme.svelte";
    export let className = "";
</script>

<div class={className}>
    <div class="bg-violet-600 text-white w-full h-[10%] rounded-r-2xl">
        <DiHeroku />
    </div>
    <div class="flex flex-col items-center space-y-4 w-full">
        <!-- <Theme /> -->
        <div class="bg-slate-800/40 rounded-full h-[1px] w-[100%]" />
        <img
            src="https://picsum.photos/40/40"
            alt="picsum"
            class="rounded-full cursor-pointer"
        />
    </div>
</div>
