<script lang="ts">
    import { onMount } from "svelte";
    import { filterNumIn, range } from "../utils";
    import Copier from "../components/Copier.svelte";

    let result: number | string;
    let entry = "0";
    let entryInput: HTMLInputElement;
    let resultInput: HTMLInputElement;

    const reset = () => {
        entry = "0";
    };

    $: entryLen = String(entry).length;
    $: if (!entry) result = "0";
    $: if (entry.substring(0, 1) === "0" && entry.length > 1) {
        entry = entry.substring(1);
    }

    let authorizeds = [
        ...Array.from(range(10)).map((x) => x.toString()),
        "+",
        "-",
        "/",
        "%",
        "*",
        " ",
        "(",
        ")",
        ".",
    ];

    function pushEntry(value: string | number) {
        entry += String(value);
    }

    function popEntry() {
        entry = entry.slice(0, entryLen - 1);
    }

    $: {
        try {
            result = eval(entry);
            if (result == Infinity) {
                result = "😳 wow Infinity";
            }
        } catch {
            entry = filterNumIn(entry, authorizeds);
        } // Only authorizeds values are allowed
    }

    $: {
        if (!!entryInput) {
            if (entry.length > 0) {
                entryInput.style.background = "#efdcc2";
            } else {
                entryInput.style.background = "#fff";
            }
        }
    }
    onMount(() => {
        // entryInput.focus();
        let isEntryFocused = false;

        //EventHandler when a keyboard's key is pressed
        window.onkeydown = (event) => {
            //The action inside the block will run only
            //when the input is unfocused
            if (!isEntryFocused) {
                //Append the input with the pressed key
                pushEntry(event.key);

                //Focus the input when an arrow key is pressed
                if (event.key == "ArrowLeft" || event.key == "ArrowRight") {
                    entryInput.focus();
                }

                if (event.code == "Backspace")
                    if (entryInput && entryInput.value.length > 0) popEntry();
            }
        };

        //When the input is focused isEntryFocused variable gets true
        entryInput.onfocus = (event) => {
            isEntryFocused = true;
        };

        //When the input is unfocused isEntryFocused variable gets false
        entryInput.onblur = (event) => {
            isEntryFocused = false;
        };
    });
</script>

<main>
    <section class="hero">
        <div class="hero-body">
            <section class="cadre">
                <section class="cadre-body">
                    <section class="header">
                        <div class="screen">
                            <input
                                bind:this={entryInput}
                                bind:value={entry}
                                type="text"
                            />
                        </div>
                        <section class="response">
                            <input
                                bind:this={resultInput}
                                type="text"
                                bind:value={result}
                            />
                            {#if result != "0"}
                                <Copier value={result} />
                            {/if}
                        </section>
                    </section>

                    <div class="keyboard">
                        {#each range(1, 10) as key}
                            <button
                                class="button"
                                on:click={() => pushEntry(key)}>{key}</button
                            >
                        {/each}
                        <button class="button" on:click={() => pushEntry(0)}
                            >0</button
                        >
                        <button
                            class="button signes"
                            style="background-color: aquamarine;"
                            on:click={() => pushEntry("+")}>➕</button
                        >
                        <button
                            class="button signes"
                            style="background-color: #887d83;"
                            on:click={() => pushEntry("-")}
                        >
                            ➖
                        </button>
                        <button
                            id="mult-sign"
                            class="button signes"
                            style="background-color: #0aec43; font-weight:bolder"
                            on:click={() => pushEntry("*")}
                        >
                            <span>➕</span>
                        </button>
                        <button
                            class="button signes"
                            style="background-color: #e0c067; 
                                    font-weight:bolder; 
                                    font-size:x-large;"
                            on:click={() => pushEntry("/")}
                        >
                            ⨸
                        </button>
                        <button
                            class="button signes"
                            on:click={popEntry}
                            style="background-color: #ff7f90;">Del</button
                        >

                        {#each ["(", ")"] as p}
                            <button
                                class="button"
                                on:click={() => pushEntry(p)}
                                style="background-color: #5709be; color: white;"
                                >{p}</button
                            >
                        {/each}
                        <button
                            class="button"
                            on:click={() => pushEntry(".")}
                            style="background-color: white; ">.</button
                        >
                        <button
                            class="button"
                            on:click={() => pushEntry("%")}
                            style="background- color: white;">%</button
                        >
                        <button
                            class="button"
                            on:click={reset}
                            style="background-color: #d86bd8; color: white;"
                            >C</button
                        >
                    </div>
                </section>
            </section>
        </div>
    </section>
</main>

<style lang="scss">
    @use "../vars.scss" as vars;

    $input-height: 50px;
    $cadre-width: 400px;
    $cadre-height: 513px;

    .signes {
        @include vars.flex;
    }

    #mult-sign {
        :first-child {
            transform: rotate(45deg);
        }
    }

    .cadre {
        width: fit-content;
        height: fit-content;
        @include vars.marginY(15px);

        border-radius: 10px;
        box-shadow: #683c7c inset 10px 10px 10px;
        background-color: #864ea0;

        .header {
            margin-bottom: 30px;
            width: 90%;
            .screen {
                input {
                    width: 100%;
                    height: 30px;
                    font-size: medium;
                }
            }
        }
    }

    .cadre-body {
        @include vars.flex;
        flex-direction: column;
        @include vars.paddingX(-20px);
        @include vars.paddingY(20px);
    }

    .response {
        margin-top: 10px;
        height: $input-height;
        input {
            width: fit-content;
            height: 70%;
            font-size: medium;
            background-color: #fff;
            color: black;
            font-weight: 700;
            padding-left: 10px;
            // text-align: center;
        }
    }
    .keyboard {
        margin-top: -10px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        button {
            font-size: larger;
        }
    }

    input {
        border-radius: 5px;
        border: 0;
    }

    @media only screen and (max-width: 1300px) {
        .cadre {
            @include vars.paddingX(15px);
            @include vars.paddingY(30px);

            .button {
                width: 20vw;
                height: 5vh;
                padding: 0;
            }
        }
    }

    @media only screen and (max-height: 400px) {
        .cadre {
            @include vars.paddingX(10px);
        }
        .button {
            font-size: small !important;
        }
    }
</style>
