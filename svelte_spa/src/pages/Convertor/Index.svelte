<script lang="ts">
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

  /* -------------------------------- Comouteds ------------------------------- */
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

    const fixMaxBase = (num: number) => (num >= 36 ? 36 : num);
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

<style lang="scss">
  @mixin flexi($d: flex, $a: center, $j: center) {
    display: $d;
    align-items: $a;
    justify-content: $j;
  }

  @mixin dimension($h, $w) {
    height: $h;
    width: calc($w);
  }

  $width: 800px;
  $height: 500px;

  // :global(body) {
  // overflow-y: hidden !important;
  // }
  .container {
    position: absolute;
    @include flexi;
    width: 100%;
    height: 100%;
  }
  .content {
    @include flexi;
    background-color: #2c2929;
    width: $width;
    height: $height;
    position: relative;
    border-radius: 10px;

    .input {
      @include dimension(calc($height / 7), $width - 100px);
      margin-top: calc(calc($height / 8));
      font-size: 30px;
      align-self: normal;
    }

    .bases {
      position: absolute;
      top: calc($height / 3);
      left: calc($width / 15);
      height: calc($height / 20);
      .input-base {
        @include dimension(calc($height / 20), calc($width / 20));
        font-size: 20px;
      }
      span {
        font-size: 15px;
        color: white;
      }
    }

    .result {
      background-color: #4f4949;
      @include dimension(calc($height / 7), $width - 100px);
      position: absolute;
      bottom: calc($height / 8);
      font-size: 30px;
      color: #e6e0e0;
      text-align: center;
      text-transform: lowercase;
      word-break: break-all;
    }
  }

  @media only screen and (max-width: 1034px) {
    .container {
      width: 100%;
      // height: 100%;
      // overflow-y: hidden !important;
      @include flexi;
    }
    .content {
      width: 90%;
      height: 70%;

      :nth-child(1),
      :last-child {
        width: 95%;
        height: calc($height / 16);
        font-size: x-large;
      }
      .result {
        overflow-x: auto;
      }
      .bases {
        top: calc($height / 4);
        left: calc($width / 200);
        .input-base {
          height: calc($height / 30);
        }
      }
    }
  }
</style>
