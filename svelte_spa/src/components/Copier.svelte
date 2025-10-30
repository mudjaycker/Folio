<script lang="ts">
    import { onMount } from "svelte";
    
    let isCopied = false;
    let span: HTMLSpanElement;
    export let value: any = "";

    async function copyTextToClipboard(text: string) {
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    }

    onMount(() => {
        span.onclick = () => {
            copyTextToClipboard(String(value)).then(()=>{
                isCopied = true                
            })
        };
    });

    $: if (isCopied) {
        const time = setTimeout(() => {
            isCopied = false;
            clearTimeout(time)
        }, 1000);
    }
</script>

<span bind:this={span} class={isCopied ? "copiedStyle" : "clipboard"}
    >{isCopied ? "Copied" : "📋"}</span
>

<style>
    .clipboard {
        cursor: pointer;
        font-size: xx-large;
        color: white;
    }
    .copiedStyle {
        font-size: medium;
        color: white;
    }
</style>
