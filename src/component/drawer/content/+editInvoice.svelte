<script>
    import Input from "../../shared/+input.svelte";
    import toast from "svelte-french-toast";
    import { isOpenDrawer } from "../../../store/drawer/drawerStore";
    import InvoiceData from "../../../database/invoiceData.json";
    import { page } from "$app/stores";

    $: slug = $page.params.slug;
    $: data = InvoiceData.find((invoice) => invoice.id === slug);

    const handleSubmit = async () => {
        await isOpenDrawer.set(false);
        toast("Successfully Edit!", {
            icon: "🤗",
            style: "border:1px solid gray;background-color: rgba(55, 65, 81, 0.2); color:white;border-color: rgba(229, 231, 235, 0.1);",
        });
    };
</script>

<div class="space-y-2 flex flex-col">
    <h1 class="text-xl font-bold">#{data?.id}</h1>
    <Input
        type="text"
        name="company"
        placeholder="Acme Corporation"
        title="Company name"
        value={data?.company}
    />
    <div class="text-xs text-gray-600 font-semibold">Address</div>
    <div class="flex space-x-4">
        <Input
            type="text"
            name="street"
            placeholder="123 Main St"
            value={data?.street}
        />
        <Input
            type="text"
            name="city"
            placeholder="Springfield"
            value={data?.city}
        />
        <Input
            type="text"
            name="country"
            placeholder="USA"
            value={data?.country}
        />
    </div>
    <Input
        type="text"
        name="contact"
        placeholder="+1 234 567 890"
        title="Contact number"
        value={data?.contact_number}
    />
    <Input
        type="text"
        name="assignee"
        placeholder="John Doe"
        title="Assignee name"
        value={data?.assignee}
    />
    <Input
        type="email"
        name="email"
        placeholder="johndoe@example.com"
        title="Email address"
        value={data?.email}
    />
    <Input type="date" name="due" title="Due date" value={data?.due_date} />
    <Input
        type="text"
        name="status"
        placeholder="Paid / Pending / Draft"
        title="Status"
        value={data?.status}
    />
    <div class="text-xs text-gray-600 font-semibold">Items</div>

    {#each data?.items ?? [] as item, index}
        <div class="flex space-x-4">
            <Input
                type="text"
                name={`item_name_${index}`}
                placeholder="Item name"
                value={item.name}
            />
            <Input
                type="number"
                name={`item_quantity_${index}`}
                placeholder="Quantity"
                value={item.quantity.toString()}
            />
            <Input
                type="text"
                name={`item_price_${index}`}
                placeholder="Price"
                value={item.price.toString()}
            />
        </div>
    {/each}

    <div class="flex justify-end py-4">
        <button
            on:click={handleSubmit}
            class="bg-violet-600 hover:bg-violet-800 w-[100px] rounded-full py-1"
        >
            Submit
        </button>
    </div>
</div>
