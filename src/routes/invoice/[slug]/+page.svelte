<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import InvoiceData from "../../../database/invoiceData.json";
    $: slug = $page.params.slug;
    $: data = InvoiceData.find((invoice) => invoice.id === slug);
    let loader = true;
    onMount(() => {
        const timer = setTimeout(() => {
            loader = false;
        }, 2000);
        return () => clearTimeout(timer);
    });
</script>

{#if loader}
    <div class="min-h-screen flex justify-center items-center">
        <div class="h-12 w-12 bg-violet-600 animate-ping rounded-full" />
    </div>
{:else}
    <div class="xs:m-2 sm:m-8 md:m-28">
        <div
            class="bg-gray-700/20 rounded-md flex justify-between px-4 py-3 items-center border border-gray-200/10"
        >
            {#if data}
                <div class="text-xl font-bold text-white">#{data.id}</div>
                <div class="space-x-2 text-white flex items-center">
                    <button class="bg-slate-600/20 w-16 py-2 rounded-full"
                        >Edit</button
                    >
                    <button class="bg-red-600/60 w-20 rounded-full py-2"
                        >Delete</button
                    >
                    {#if data.status.toLowerCase() !== "paid"}
                        <button class="bg-violet-600 p-2 rounded-full"
                            >Mark as Paid</button
                        >
                    {/if}
                </div>
            {/if}
        </div>
        <div
            class="bg-gray-700/20 rounded-md flex justify-between px-4 py-3 items-center mt-4 border border-gray-200/10"
        ></div>
    </div>
{/if}
