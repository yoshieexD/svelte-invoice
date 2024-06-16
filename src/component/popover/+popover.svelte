<script>
    export let className = "";
    // @ts-ignore
    import IoIosSettings from "svelte-icons/io/IoIosSettings.svelte";
    // @ts-ignore
    import IoIosLogOut from "svelte-icons/io/IoIosLogOut.svelte";
    // @ts-ignore
    import FaQuestionCircle from "svelte-icons/fa/FaQuestionCircle.svelte";
</script>

<div class={`${className}`}>
    <div class="flex items-center space-x-2 hover:text-gray-900 cursor-pointer">
        <div class="h-4 w-4 text-gray-700"><IoIosSettings /></div>
        <p class="text-sm text-gray-700">Settings</p>
    </div>
    <div
        class="flex items-center space-x-3 hover:text-gray-900 cursor-pointer ml-[1px]"
    >
        <div class="h-3 w-3 text-gray-700"><FaQuestionCircle /></div>
        <p class="text-sm text-gray-700 cursor-pointer hover:text-gray-900">
            Help
        </p>
    </div>

    <div class="flex items-center space-x-2 hover:text-gray-900 cursor-pointer">
        <div class="h-4 w-4 text-gray-700"><IoIosLogOut /></div>
        <p class="text-sm text-gray-700 cursor-pointer hover:text-gray-900">
            Logout
        </p>
    </div>
</div>
