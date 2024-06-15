<script>
    import { onMount } from "svelte";

    export let type = "text";
    export let name = "";
    export let id = "";
    export let value = "";
    export let placeholder = "";
    export let title = "";
    export let className = "";

    /**
     * @type {HTMLInputElement}
     */
    let inputElement;

    onMount(() => {
        if (inputElement) {
            inputElement.type = type;
        }
    });
</script>

<div class="space-y-2">
    <p class="text-xs text-gray-600 font-semibold">{title}</p>
    <input
        bind:this={inputElement}
        {name}
        {id}
        bind:value
        {placeholder}
        class={`border border-gray-100/10 bg-slate-800/40 rounded-md py-2 px-2 text-sm text-gray-200 focus:outline-0 w-full ${className}`}
    />
</div>
