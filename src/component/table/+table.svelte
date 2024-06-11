<script>
    //@ts-ignore
    import FaAngleRight from "svelte-icons/fa/FaAngleRight.svelte";
    import InvoiceData from "../../database/invoiceData.json";
</script>

<div class="space-y-2">
    {#each InvoiceData as invoice}
        <div
            class="flex justify-around items-center rounded-md text-white h-20 bg-slate-900"
        >
            <div class="font-semibold">#{invoice.id}</div>
            <div class="font-light">Due {invoice.due_date}</div>
            <div class="font-light">{invoice.assignee}</div>
            <div class="font-semibold">${invoice.amount.toFixed(2)}</div>
            <div
                class={`${invoice.status.toLowerCase() === "paid" ? "bg-teal-900/40" : invoice.status.toLowerCase() === "pending" ? "bg-orange-900/40" : invoice.status.toLowerCase() === "overdue" ? "bg-gray-600/50" : ""} flex py-1 w-20 flex items-center justify-center space-x-2 rounded-md`}
            >
                <div
                    class={`${invoice.status.toLowerCase() === "paid" ? "bg-teal-300" : invoice.status.toLowerCase() === "pending" ? "bg-orange-300" : invoice.status.toLowerCase() === "overdue" ? "bg-gray-300" : ""} w-[8px] h-[8px] rounded-full`}
                />
                <p
                    class={`${invoice.status.toLowerCase() === "paid" ? "text-teal-300" : invoice.status.toLowerCase() === "pending" ? "text-orange-300" : invoice.status.toLowerCase() === "overdue" ? "text-gray-300" : ""} `}
                >
                    {invoice.status}
                </p>
            </div>
            <a class="w-3 h-3 text-violet-700" href={`/invoice/${invoice.id}`}
                ><FaAngleRight /></a
            >
        </div>
    {/each}
</div>
