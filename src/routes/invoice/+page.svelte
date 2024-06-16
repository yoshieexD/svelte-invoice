<script>
    // @ts-ignore
    import FaAngleDown from "svelte-icons/fa/FaAngleDown.svelte";
    import Table from "../../component/table/+table.svelte";
    import { newStatus, statuses } from "../../store/filter/filterStore";
    import AddInvoice from "../../component/drawer/content/+addInvoice.svelte";
    import { isOpenDrawer } from "../../store/drawer/drawerStore";
    import Drawer from "../../component/drawer/+drawer.svelte";
    import { darkMode } from "../../store/theme/themeStore";

    /**
     * @type {boolean}
     */
    let localDark;
    darkMode.subscribe((Value) => {
        localDark = Value;
    });

    let isDrawerOpen = false;
    let isDropdownOpen = false;
    function toggleDrawer() {
        isOpenDrawer.set(true);
        isOpenDrawer.subscribe((value) => {
            isDrawerOpen = value;
        });
    }

    function toggleDropdown() {
        isDropdownOpen = !isDropdownOpen;
    }

    /**
     * @param {string} status
     */
    const selectStatus = async (status) => {
        newStatus.set(status);
        toggleDropdown();
    };
</script>

<div class="flex">
    {#if isDrawerOpen}
        <Drawer>
            <AddInvoice />
        </Drawer>
    {/if}
    <div class="xxs:m-2 sm:m-8 md:m-28 w-full h-full">
        <div class="flex items-center justify-between">
            <div class="space-y-1">
                <h1
                    class={`text-3xl font-semibold ${localDark ? "text-white" : "text-slate-900"}`}
                >
                    Invoices
                </h1>
                <h1 class="text-sm text-gray-400">
                    There are 7 total invoices
                </h1>
            </div>
            <div class="flex items-center space-x-8">
                <div class="relative">
                    <button
                        type="button"
                        class="space-x-2 flex items-center cursor-pointer"
                        on:click={toggleDropdown}
                    >
                        <p
                            class={` ${localDark ? "text-white" : "text-slate-900"} font-semibold text-sm`}
                        >
                            Filter by status
                        </p>
                        <div class="w-4 h-4 text-violet-700">
                            <FaAngleDown />
                        </div>
                    </button>
                    {#if isDropdownOpen}
                        <div
                            class="dropdown absolute mt-[0.5rem] rounded-lg w-32 bg-gray-200/20"
                        >
                            <ul class="py-1">
                                {#each statuses as status}
                                    <li
                                        value={status}
                                        class="px-4 py-2 cursor-pointer hover:bg-violet-600 hover:text-white hover:rounded-lg"
                                        on:click={() => selectStatus(status)}
                                    >
                                        {status}
                                    </li>
                                {/each}
                            </ul>
                        </div>
                    {/if}
                </div>
                <div>
                    <button
                        class="bg-violet-600 py-1 px-2 rounded-full flex space-x-2 items-center shadow-lg hover:bg-violet-800"
                        on:click={toggleDrawer}
                    >
                        <div
                            class="rounded-full w-8 h-8 bg-white text-violet-600 flex items-center justify-center"
                        >
                            <p class="text-lg font-semibold">+</p>
                        </div>
                        <p class={` text-white font-semibold`}>New Invoice</p>
                    </button>
                </div>
            </div>
        </div>
        <br /> <br />
        <Table />
    </div>
</div>

<style>
</style>
