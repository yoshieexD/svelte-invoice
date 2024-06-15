<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import toast from "svelte-french-toast";
    import InvoiceData from "../../../database/invoiceData.json";
    import Drawer from "../../../component/drawer/+drawer.svelte";
    import EditInvoice from "../../../component/drawer/content/+editInvoice.svelte";
    import { isOpenDrawer } from "../../../store/drawer/drawerStore";
    $: slug = $page.params.slug;
    $: data = InvoiceData.find((invoice) => invoice.id === slug);
    let loader = true;
    let isDrawerOpen = false;
    onMount(() => {
        const timer = setTimeout(() => {
            loader = false;
        }, 2000);
        return () => clearTimeout(timer);
    });

    function toggleDrawer() {
        isOpenDrawer.set(true);
        isOpenDrawer.subscribe((value) => {
            isDrawerOpen = value;
        });
    }

    function handleDelete() {
        toast("Successfully deleted!", {
            icon: "😃",
            style: "border:1px solid gray;background-color: rgba(55, 65, 81, 0.2); color:white;border-color: rgba(229, 231, 235, 0.1);",
        });
    }

    function handleMarkPaid() {
        toast("Successfully mark as paid!", {
            icon: "🤑",
            style: "border:1px solid gray;background-color: rgba(55, 65, 81, 0.2); color:white;border-color: rgba(229, 231, 235, 0.1);",
        });
    }
</script>

{#if loader}
    <div class="min-h-screen flex justify-center items-center">
        <div class="h-12 w-12 bg-violet-600 animate-ping rounded-full" />
    </div>
{:else}
    <div class="flex">
        {#if isDrawerOpen}
            <Drawer>
                <EditInvoice />
            </Drawer>
        {/if}
        <div class="xxs:m-2 sm:m-8 md:m-28 w-full h-full">
            <div
                class="bg-gray-700/20 rounded-md flex justify-between px-4 py-3 items-center border border-gray-200/10"
            >
                {#if data}
                    <div class="text-xl font-bold text-white">#{data.id}</div>
                    <div class="space-x-2 text-white flex items-center">
                        <button
                            class="bg-slate-600/20 w-16 py-2 rounded-full"
                            on:click={toggleDrawer}>Edit</button
                        >
                        <button
                            class="bg-red-600/60 w-20 rounded-full py-2"
                            on:click={handleDelete}>Delete</button
                        >
                        {#if data.status.toLowerCase() !== "paid"}
                            <button
                                class="bg-violet-600 p-2 rounded-full"
                                on:click={handleMarkPaid}>Mark as Paid</button
                            >
                        {/if}
                    </div>
                {/if}
            </div>
            {#if data}
                <div
                    class="bg-gray-700/20 rounded-md xxs:px-8 sm:px-24 py-8 mt-4 border border-gray-200/10 text-white"
                >
                    <div
                        class="mb-6 font-semibold text-xl underline underline-offset-8 italic"
                    >
                        {data.company}
                    </div>
                    <div class="w-full grid xxs:grid-cols-1 sm:grid-cols-2">
                        <div>
                            <div class="mb-2">
                                <span class="font-bold"
                                    >Assignee:
                                </span>{data.assignee}
                            </div>
                            <div class="mb-2">
                                <span class="font-bold"
                                    >Email:
                                </span>{data.email}
                            </div>
                            <div class="mb-2">
                                <span class="font-bold"
                                    >Due Date:
                                </span>{data.due_date}
                            </div>
                        </div>
                        <div>
                            <div class="mb-2">
                                <span class="font-bold"
                                    >Status:
                                </span>{data.status}
                            </div>
                            <div class="mb-2">
                                <span class="font-bold"
                                    >Address:
                                </span>{data.address}
                            </div>
                            <div class="mb-2">
                                <span class="font-bold"
                                    >Contact Number:
                                </span>{data.contact_number}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            class="bg-gray-700/30 rounded-t-md px-6 mt-4 py-4 space-y-3"
                        >
                            <div class="flex justify-between w-full">
                                <div
                                    class="w-[33%] flex justify-start italic font-thin text-sm"
                                >
                                    Items
                                </div>
                                <div
                                    class="w-[33%] flex justify-center italic font-thin text-sm"
                                >
                                    Qty
                                </div>
                                <div
                                    class="w-[33%] flex justify-end italic font-thin text-sm"
                                >
                                    Price
                                </div>
                            </div>
                            <div class="flex justify-between w-full">
                                {#each data.items as item}
                                    <div class="w-[33%] flex justify-start">
                                        {item.name}
                                    </div>
                                    <div class="w-[33%] flex justify-center">
                                        {item.quantity}
                                    </div>
                                    <div class="w-[33%] flex justify-end">
                                        ${item.price.toFixed(2)} each
                                    </div>
                                {/each}
                            </div>
                        </div>
                        <div
                            class="bg-black/60 w-full rounded-b-md flex justify-end py-3 px-2"
                        >
                            <p class="text-lg font-semibold italic">
                                Total:${data.amount.toFixed(2)}
                            </p>
                        </div>
                    </div>
                </div>
            {/if}
        </div>
    </div>
{/if}
