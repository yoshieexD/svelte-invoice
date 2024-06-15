<script>
    //@ts-ignore
    import FaAngleDown from "svelte-icons/fa/FaAngleDown.svelte";
    import Table from "../../component/table/+table.svelte";
    import { newStatus, statuses } from "../../store/filter/filterStore";
    let isOpen = false;

    function toggleDropdown() {
        isOpen = !isOpen;
    }

    /**
     * @param {string} status
     */
    const selectStatus = async (status) => {
        newStatus.set(status);
        toggleDropdown();
    };
</script>

<div class="xs:m-2 sm:m-8 md:m-28">
    <div class="flex items-center justify-between">
        <div class="space-y-1">
            <h1 class="text-3xl font-semibold text-white">Invoices</h1>
            <h1 class="text-sm text-gray-400">There are 7 total invoices</h1>
        </div>
        <div class="flex items-center space-x-8">
            <div class="relative">
                <button
                    type="button"
                    class="space-x-2 flex items-center cursor-pointer"
                    on:click={toggleDropdown}
                >
                    <p class="text-white font-semibold text-sm">
                        Filter by status
                    </p>
                    <div class="w-4 h-4 text-violet-700">
                        <FaAngleDown />
                    </div>
                </button>
                {#if isOpen}
                    <div class="absolute mt-2 bg-white shadow-md rounded-md">
                        <ul class="py-1">
                            {#each statuses as status}
                                <li
                                    value={status}
                                    class="px-4 py-2 cursor-pointer hover:bg-gray-200"
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
                    class="bg-violet-600 py-1 px-2 rounded-full flex space-x-2 flex items-center shadow-lg hover:shadow-indigo-600/50"
                >
                    <div
                        class="rounded-full w-8 h-8 bg-white text-violet-600 flex items-center justify-center"
                    >
                        <p class="text-lg font-semibold">+</p>
                    </div>
                    <p class="text-white font-semibold">New Invoice</p>
                </button>
            </div>
        </div>
    </div>
    <br /> <br />
    <Table />
</div>
