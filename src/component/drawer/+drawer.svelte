<!-- src/component/drawer/+drawer.svelte -->
<script>
    import { isOpenDrawer } from "../../store/drawer/drawerStore";
    let isOpen = false;
    export let className = "";
    isOpenDrawer.subscribe((value) => {
        isOpen = value;
    });

    console.log(isOpen);
</script>

<div
    class={`drawer {isOpen
        ? 'open'
        : ''} fixed top-0 left-[50%] w-[40%] h-full text-white bg-slate-900 rounded-r-2xl border border-l-0 border-gray-100/10 py-12 px-4 ${className}`}
>
    <slot></slot>
</div>

<style>
    .drawer {
        transform: translateX(-100%);
        transition: transform 0.3s ease;
        z-index: 2;
    }

    .drawer.open {
        transform: translateX(0);
    }
</style>
