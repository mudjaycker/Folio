<script lang="ts">
    import { createQrSvgString, createQrPngDataUrl } from "@svelte-put/qr";
    import { type QRConfig } from "../../node_modules/@svelte-put/qr/src/qr/types.public";
    import logo from "../assets/Flag_of_Burundi.svg";
    import { replace } from "../utils";

    type SizeAttributes = {
        width: number;
        height: number;
    };

    let text = "";
    let url = "";
    let shape: "square" | "circle" = "square";
    const maxTextLen = 200;

    $: config = {
        data: text,
        shape: shape,
        // anchorOuterFill: "#e22a2a",
    } as QRConfig & Partial<SizeAttributes>;

    $: svgString = createQrSvgString({ ...config, logo });
    $: len = text.length;

    $: createQrPngDataUrl({
        ...config,
        width: 300,
        height: 300,
        backgroundFill: "white",
    }).then((res) => (url = res));

    function tooggleShape() {
        shape = shape === "circle" ? "square" : "circle";
    }

    function formatFileName(str_text: string) {
        let name = str_text.substring(0, 25);
        name = replace(name, [" ", "-"], "_");
        return "qr" + "_" + name + ".png";
    }
</script>

<section>
    <div class="form">
        <textarea
            bind:value={text}
            maxlength={maxTextLen}
            rows="5"
            cols="60"
            placeholder={"The max number of characters is " + maxTextLen}
        ></textarea>

        {#if text}
            <button class="button" on:click={tooggleShape}>
                Shape: {shape} | Chars: {len}/{maxTextLen}</button
            >
        {/if}
    </div>

    {#if text}
        <div class="result">
            <div class="qr">
                {@html svgString}
            </div>
            <a class="button" href={url} download={formatFileName(text)}
                >download</a
            >
        </div>
    {/if}
</section>

<style lang="scss">
    section {
        display: flex;
        justify-content: center;
    }

    .form {
        display: flex;
        flex-direction: column;
        margin-right: 10px;

        textarea{
            font-family:  'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            padding: 10px;
            font-size: 16px;
        }
    }

    .result {
        display: flex;
        flex-direction: column;

        .qr {
            background-color: #fff;
            width: 300px;
            border-radius: 5px;
        }
    }

    .button {
        margin-top: 5px;
        text-align: center;
    }

    @media only screen and (max-width: 700px) {
        section {
            flex-direction: column;
            margin-top: 5%;
            margin-bottom: 2%;
        }

        .form {
            margin-left: 2.5%;
        }

        .result {
            display: flex;
            width: 100vw;
            justify-content: center !important;
            align-items: center;

            .qr {
                width: 200px !important;
                margin-top: 30px;
                margin-bottom: 5px;
            }

            .button {
                width: 160px !important;
            }
        }
    }
</style>
