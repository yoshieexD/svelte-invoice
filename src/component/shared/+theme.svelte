<script lang="ts">
    //@ts-ignore
    import IoIosSunny from "svelte-icons/io/IoIosSunny.svelte";
    //@ts-ignore
    import IoIosMoon from "svelte-icons/io/IoIosMoon.svelte";
    import { darkMode } from "../../store/theme/themeStore";

    export let isDarkMode = true;
    function handleDarkmode() {
        isDarkMode = !isDarkMode;
        if (!isDarkMode) {
            darkMode.set(false);
        } else {
            darkMode.set(true);
        }
    }
</script>

<button on:click={handleDarkmode}>
    {#if isDarkMode}
        <div class="text-yellow-600 w-8 h-8">
            <IoIosSunny />
        </div>
    {:else}
        <div class="text-violet-600 w-8 h-8">
            <IoIosMoon />
        </div>
    {/if}
</button>
