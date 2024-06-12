<script>
    //@ts-ignore
    import DiHeroku from "svelte-icons/di/DiHeroku.svelte";
    //@ts-ignore
    import IoIosSunny from "svelte-icons/io/IoIosSunny.svelte";
    //@ts-ignore
    import IoIosMoon from "svelte-icons/io/IoIosMoon.svelte";

    export let className = "";
    export let isDarkMode = false;
    function handleDarkMode() {
        isDarkMode = !isDarkMode;
    }
</script>

<div class={className}>
    <div class="bg-violet-600 h-full text-white rounded-r-2xl">
        <DiHeroku />
    </div>
    <button type="button" on:click={handleDarkMode}>
        {#if isDarkMode}
            <div class="text-gray-700 w-8 h-8">
                <IoIosMoon />
            </div>
        {:else}
            <div class="text-gray-700 w-8 h-8">
                <IoIosSunny />
            </div>
        {/if}
    </button>
</div>
