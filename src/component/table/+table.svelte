<script lang="ts">
    //@ts-ignore
    import FaAngleRight from "svelte-icons/fa/FaAngleRight.svelte";
    //@ts-ignore
    import IoIosArrowDown from "svelte-icons/io/IoIosArrowDown.svelte";
    import InvoiceData from "../../database/invoiceData.json";
    import { newStatus } from "../../store/filter/filterStore";
    import { darkMode } from "../../store/theme/themeStore";

    type Invoice = {
        id: string;
        due_date: string;
        amount: number;
        status: string;
        assignee: string;
    };

    let invoiceDatas: Invoice[] = [];

    /**
     * @type {boolean}
     */
    let localDark: boolean;
    darkMode.subscribe((Value) => {
        localDark = Value;
    });
    newStatus.subscribe((value) => {
        if (value.toLowerCase() === "all") {
            invoiceDatas = InvoiceData;
        } else {
            invoiceDatas = InvoiceData.filter(
                (invoice) =>
                    invoice.status.toLowerCase() === value.toLowerCase(),
            );
        }
    });
</script>

<div class="space-y-2">
    {#each invoiceDatas as invoice}
        <div
            class={`flex justify-around items-center rounded-md border ${localDark ? "text-white bg-gray-700/20 border-gray-200/10" : "text-slate-900 bg-white/20 border-white/80"}  h-20  px-2`}
        >
            <div class="font-semibold w-[16%]">#{invoice.id}</div>
            <div class="font-light w-[16%]">Due {invoice.due_date}</div>
            <div class="font-light w-[16%]">{invoice.assignee}</div>
            <div class="font-semibold w-[16%]">
                ${invoice.amount.toFixed(2)}
            </div>
            <div class="flex justify-center w-auto w-[16%]">
                <div
                    class={`${invoice.status.toLowerCase() === "paid" ? `${localDark ? "bg-teal-900/20" : "bg-teal-900/40"}` : invoice.status.toLowerCase() === "pending" ? `${localDark ? "bg-orange-700/15" : `bg-orange-700/25`}` : invoice.status.toLowerCase() === "draft" ? `${localDark ? "bg-gray-600/20" : "bg-gray-600/30"}` : ""} flex py-1 w-24 flex items-center justify-center space-x-2 rounded-md`}
                >
                    <div
                        class={`${invoice.status.toLowerCase() === "paid" ? `${localDark ? "bg-teal-300" : "bg-teal-400"} ` : invoice.status.toLowerCase() === "pending" ? `${localDark ? "bg-orange-400" : "bg-orange-500"}` : invoice.status.toLowerCase() === "draft" ? `${localDark ? "bg-gray-300" : "bg-gray-500"} ` : ""} w-[8px] h-[8px] rounded-full`}
                    />
                    <p
                        class={`${invoice.status.toLowerCase() === "paid" ? `${localDark ? "text-teal-300" : "text-teal-400"}` : invoice.status.toLowerCase() === "pending" ? `${localDark ? "text-orange-400" : "text-orange-500"}` : invoice.status.toLowerCase() === "draft" ? `${localDark ? "text-gray-300" : "text-gray-500"} ` : ""} `}
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
    <div
        class=" h-[50px] w-[50px] rounded-full flex justify-center items-center hover:animate-bounce bg-gray-700/20 border border-gray-200/10 absolute left-[45%] top-[85%] cursor-pointer"
    >
        <div class="h-6 w-6 text-violet-600">
            <IoIosArrowDown />
        </div>
    </div>
</div>
