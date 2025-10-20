<script lang="ts">
  import "../../convertor.scss";
  import convert from "./utils/convert";
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
        console.log(e);
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
