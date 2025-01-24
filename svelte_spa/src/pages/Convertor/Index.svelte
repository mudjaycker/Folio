<script lang="ts">
  import "../../convertor.scss";
  import { onMount } from "svelte";
  import { int, list, print_, range } from "../../utils";
  import convert from "./utils/convert";
  // import to_base from "./utils/to_base";
  import { letters } from "./utils/consts";
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

  /* -------------------------------- Computeds ------------------------------- */
  $: {
    if (!from_ || from_ == 1 || !to || to == 1) {
      result = "";
    } else {
      try {
        result = convert(numberEntry, from_, to);
        $entryStore = numberEntry; //Store the entry to make it available globally
      } catch (e) {
        console.error(e);
        numberEntry = $entryStore; //Get the entry last sta
      }
    }

    const fixMaxBase = (num: number) => (num > 36 ? 36 : num);
    from_ = fixMaxBase(from_);
    to = fixMaxBase(to);
  }

  $: {
    let lastChar = result[result.length - 1];
    if (lastChar == "0") {
      let r = result.split("");
      r.pop();
      result = r.join("");
    }
  }
  /* ----------------------------------- End ---------------------------------- */

  /* --------------------------------- Methods -------------------------------- */
  const lowLetters = letters.map((l) => l.toLowerCase());
  const strNumbers = list(range(10)).map((n) => String(n));
  const authorizeds = [...strNumbers, "", ...letters, ...lowLetters];

  const normalizeInput = (entry: HTMLInputElement) => {
    entry.oninput = (ev: Event) => {
      const target = ev.target as HTMLInputElement;
      target.value = filterNumIn(target.value, authorizeds);
    };
  };
  const filterNumIn = (num: number | string, chars: string[]) =>
    (typeof num == "string" ? num : String(num))
      .split("")
      .filter((char) => chars.includes(char))
      .join("");

  onMount(() => {
    if (entryInput) normalizeInput(entryInput);
    if (baseFromInput) normalizeInput(baseFromInput);
    if (baseFromInput) normalizeInput(baseToInput);
  });
  /* ----------------------------------- End ---------------------------------- */
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
        type="number"
        class="input-base"
      />
      <span>To base</span>
      <input
        bind:this={baseToInput}
        bind:value={to}
        type="number"
        class="input-base"
      />
    </div>
    <div class="result">{result}</div>
  </section>
</main>
