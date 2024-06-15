<script>
    import Input from "../../shared/+input.svelte";
    import toast from "svelte-french-toast";
    import { isOpenDrawer } from "../../../store/drawer/drawerStore";

    const handleSubmit = async () => {
        await isOpenDrawer.set(false);
        toast("Successfully Added!", {
            icon: "🤗",
            style: "border:1px solid gray;background-color: rgba(55, 65, 81, 0.2); color:white;border-color: rgba(229, 231, 235, 0.1);",
        });
    };
</script>

<div class="space-y-2 flex flex-col">
    <Input
        type="text"
        name="company"
        placeholder="Acme Corporation"
        title="Company name"
    />
    <div class="text-xs text-gray-600 font-semibold">Address</div>
    <div class="flex space-x-4">
        <Input type="text" name="street" placeholder="123 Main St" />
        <Input type="text" name="city" placeholder="Springfield" />
        <Input type="text" name="country" placeholder="USA" />
    </div>
    <Input
        type="text"
        name="contact"
        placeholder="+1 234 567 890"
        title="Contact number"
    />
    <Input
        type="text"
        name="assignee"
        placeholder="John Doe"
        title="Assignee name"
    />
    <Input
        type="email"
        name="email"
        placeholder="johndoe@example.com"
        title="Email address"
    />
    <Input type="date" name="due" title="Due date" />
    <Input
        type="text"
        name="status"
        placeholder="Paid / Pending / Draft"
        title="Status"
    />

    <div class="flex justify-end py-4">
        <button
            on:click={handleSubmit}
            class="bg-violet-600 hover:bg-violet-800 w-[100px] rounded-full py-1"
            >Submit</button
        >
    </div>
</div>
