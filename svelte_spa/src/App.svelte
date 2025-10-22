<script lang="ts">
    import "./router";
    import { current_page } from "./store";

    $: pageName = $current_page.name;

    function goBack() {
        history.back();
    }
    
    const telegramlink = "t.me/mudjaygram",
        githublink = "www.github.com/mudjaycker",
        whatsapplink = "wa.me/0025772037069",
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
    <title>{pageName} by Maryimana</title>
</svelte:head>
<main>
    {#if pageName != "Welcome"}
        <button on:click={goBack} class="back-btn">👈🏿</button>
    {/if}
    <svelte:component this={$current_page.component as any} />
    {#if pageName == "Presentation"}
        <div class="infos-container">
            <div class="infos">
                {#each infos as info}
                    <p>
                        {info.name}:
                        <!-- svelte-ignore a11y_click_events_have_key_events -->
                        <!-- svelte-ignore a11y_no_static_element_interactions -->
                        <!-- svelte-ignore a11y_missing_attribute -->
                        <a on:click={() => openLink(info.link)}>{info.detail}</a
                        >
                    </p>
                {/each}
            </div>
        </div>
    {/if}
</main>

<style lang="scss">
    .back-btn {
        margin-top: 20px;
        margin-left: 10px;
        font-size: xx-large;
        border-radius: 10px;
    }
    .infos-container {
        display: flex;
        justify-content: center;
        width: 100%;
        .infos {
            color: white;
            background-color: #2c2929;
            // position: absolute;
            margin-bottom: 50px;
            padding: 10px;
            width: 50vw;
            justify-content: center;
            a {
                color: rgb(186, 189, 8);
                cursor: pointer;
            }
        }
    }
    // @media only screen and (max-width: 600px) {
    // }
</style>
