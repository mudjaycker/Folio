<script lang="ts">
    import Copier from "../components/Copier.svelte";
    import "../convertor.scss";
    let text = "";
    function asciify(text: string) {
        //@ts-ignore
        return text.split("").map((char) => char.charCodeAt());
    }
    $: asciified = asciify(text).join(" ");
</script>

<main class="container">
    <section class="content">
        <input bind:value={text} type="text" class="input" />

        <div class="result">{asciified}</div>

        {#if !!asciified}
            <div class="copy">
                <Copier value={asciified} />
            </div>
        {/if}
    </section>
</main>
