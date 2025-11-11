<script lang="ts">
    import "../../convertor.scss";
    import convert from "./utils/convert";
    import Copier from "../../components/Copier.svelte";
    import { isPositiveNumber, list, range, take } from "../../utils";
    import { entryStore } from "../../store";

    /* -------------------------------- Variables ------------------------------- */
    let numberEntry: string = "",
        entryInput: HTMLInputElement,
        baseFromInput: HTMLInputElement,
        baseToInput: HTMLInputElement,
        from_ = 10,
        to = 2,
        result = "";
    /* ----------------------------------- End ---------------------------------- */

    /* -------------------------------- functions ------------------------------- */
    const fixMaxBase = (num: number) => (num > 36 ? 36 : num);
    const isSupportedBase = (num: number) => !!num && num > 1;
    /* ----------------------------------- end ---------------------------------- */

    /* -------------------------------- Computeds ------------------------------- */
    $: {
        if (!isSupportedBase(from_) || !isSupportedBase(to)) {
            result = "0";
        } else {
            try {
                result = convert(numberEntry, from_, to);
                $entryStore = numberEntry; //Store the entry to make it available globally
            } catch (e) {
                numberEntry = $entryStore; //Replace the entry
            }
        }

        from_ = fixMaxBase(from_);
        to = fixMaxBase(to);
    }

    $: {
        let lastChar = take(result, -1);
        if (lastChar == "0") {
            result = result.slice(0, -1);
        }
    }
    /* ----------------------------------- End ---------------------------------- */

    /* ----------------------------- fix base value ----------------------------- */
    function fixBaseValue(base: number) {
        let result = list(String(base))
            .filter((x) => isPositiveNumber(x))
            .join("");

        return Number(result);
    }

    $: {
        //@ts-ignore
        from_ = fixBaseValue(from_) || "";
        //@ts-ignore
        to = fixBaseValue(to) || "";
    }
    /* ----------------------------------- end ---------------------------------- */
</script>

<main class="container">
    <section class="content">
        <input
            bind:this={entryInput}
            bind:value={numberEntry}
            type="text"
            class="input"
        />
        <div class="bases">
            <span>From base</span>
            <input
                bind:this={baseFromInput}
                bind:value={from_}
                class="input-base"
            />
            <span>To base</span>
            <input bind:value={to} class="input-base" />
        </div>
        <div class="result">{result}</div>
        {#if !!result}
            <div class="copy">
                <Copier value={result} />
            </div>
        {/if}
    </section>
</main>
