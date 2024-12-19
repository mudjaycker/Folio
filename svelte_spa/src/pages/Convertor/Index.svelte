<script lang="ts">
  import { onMount } from "svelte";
  import { int, list, print_, range } from "../../utils";
  import to_base from "./utils/to_base";

  let numberEntry: number = 0;
  let base: number = 2;
  let entryInput: HTMLInputElement;
  let baseInput: HTMLInputElement;

  const numWith = (num: number | string, chars: string[]) => {
    let res = String(num)
      .split("")
      .filter((x) => chars.includes(x))
      .join("");

    return int(res);
  };

  let result = "";

  $: {
    if (!base || base == 1) {
      result = "0";
    } else if (int(base) >= 36) {
      base = 36;
      result = to_base(numberEntry, 36);
    } else if (base == 10) {
      result = numberEntry ? String(numberEntry) : "0";
    } else {
      result = to_base(numberEntry, base);
    }
  }

  $: {
    let lastChar = result.split("")[result.length - 1];
    if (lastChar == "0") {
      let r = result.split("");
      r.pop();
      result = r.join("");
    }
  }

  let authorizeds = [...list(range(10)), ""].map((x) => String(x));

  const normalizeInput = (entry: HTMLInputElement) => {
    entry.oninput = (ev) => {
      //@ts-ignore
      ev.target.value = numWith(ev.target.value, authorizeds);
    };
  };

  onMount(() => {
    if (entryInput) normalizeInput(entryInput);

    if (baseInput) normalizeInput(baseInput);
  });
</script>

<main class="container">
  <section class="content">
    <input
      bind:this={entryInput}
      bind:value={numberEntry}
      type="text"
      class="input"
    />
    <input
      bind:this={baseInput}
      bind:value={base}
      type="number"
      class="input-base"
    />
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

  :global(body) {
    overflow-y: hidden !important;
  }
  .container {
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

    .input-base {
      position: absolute;
      top: calc($height / 3);
      left: calc($width / 15);
      height: calc($height / 20);
      @include dimension(calc($height / 20), calc($width / 20));
      font-size: 20px;
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
      overflow-y: hidden !important;
    }
    .content {
      width: 50%;
      height: 50%;

      :nth-child(1),
      :last-child {
        width: 95%;
        height: calc($height / 16);
        font-size: x-large;
      }
      .result {
        overflow-x: auto;
      }
      .input-base {
        top: calc($height / 4);
        left: calc($width / 200);
        height: calc($height / 30);
      }
    }
  }
</style>
