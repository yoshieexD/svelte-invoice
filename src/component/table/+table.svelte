<script>
    //@ts-ignore
    import FaAngleRight from "svelte-icons/fa/FaAngleRight.svelte";
    import InvoiceData from "../../database/invoiceData.json";
</script>

<div class="space-y-2">
    {#each InvoiceData as invoice}
        <div
            class="flex justify-around items-center rounded-md text-white h-20 bg-slate-900 px-2"
        >
            <div class="font-semibold w-[16%]">#{invoice.id}</div>
            <div class="font-light w-[16%]">Due {invoice.due_date}</div>
            <div class="font-light w-[16%]">{invoice.assignee}</div>
            <div class="font-semibold w-[16%]">
                ${invoice.amount.toFixed(2)}
            </div>
            <div class="flex justify-center w-auto w-[16%]">
                <div
                    class={`${invoice.status.toLowerCase() === "paid" ? "bg-teal-900/20" : invoice.status.toLowerCase() === "pending" ? "bg-orange-700/15" : invoice.status.toLowerCase() === "draft" ? "bg-gray-600/20" : ""} flex py-1 w-24 flex items-center justify-center space-x-2 rounded-md`}
                >
                    <div
                        class={`${invoice.status.toLowerCase() === "paid" ? "bg-teal-300" : invoice.status.toLowerCase() === "pending" ? "bg-orange-400" : invoice.status.toLowerCase() === "draft" ? "bg-gray-300" : ""} w-[8px] h-[8px] rounded-full`}
                    />
                    <p
                        class={`${invoice.status.toLowerCase() === "paid" ? "text-teal-300" : invoice.status.toLowerCase() === "pending" ? "text-orange-400" : invoice.status.toLowerCase() === "draft" ? "text-gray-300" : ""} `}
                    >
                        {invoice.status}
                    </p>
                </div>
            </div>
            <a
                class="w-3 h-3 text-violet-700 w-auto"
                href={`/invoice/${invoice.id}`}><FaAngleRight /></a
            >
        </div>
    {/each}
</div>
