<script lang="ts">
    import "./router";
    import { current_page } from "./store";

    $: pageName = $current_page.name;

    function goBack() {
        history.back();
    }
    
    const telegramlink = "t.me/mudjaygram",
        githublink = "www.github.com/mudjaycker",
        whatsapplink = "wa.me/25772037069",
        // gmaillink = "maryimana983@gmail.com",
        linkedinlink = "www.linkedin.com/in/maryimana-butoyi-bba2aa21b/";

    const openLink = (link: string) => {
        const url = "https://" + link;
        window.open(url, "_blank");
    };

    let infos = [
        { name: "Github", link: githublink, detail: "mudjaycker" },
        { name: "Telegram", link: telegramlink, detail: "mudjaygram" },
        { name: "Whatsapp", link: whatsapplink, detail: "00257772037069" },
        // { name: "Gmail", link: gmaillink, detail: "maryimana983@gmail.com" },
        { name: "Linkedin", link: linkedinlink, detail: "maryimana" },
    ];
</script>

<svelte:head>
    <title>{pageName}</title>
</svelte:head>
<main>
    {#if pageName != "Welcome"}
        <button on:click={goBack} class="back-btn">👈🏿</button>
    {/if}
    <svelte:component this={$current_page.component as any} />
</main>

<style lang="scss">
    .back-btn {
        margin-top: 20px;
        margin-left: 10px;
        font-size: xx-large;
        border-radius: 10px;
        border: none;
    }
</style>
