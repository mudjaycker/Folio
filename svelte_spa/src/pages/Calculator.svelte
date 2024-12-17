<script lang="ts">
  import { onMount } from "svelte";
  import { print_, range } from "../utils";

  let result: number | string;
  let entry = "";
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
  let entryInput: HTMLInputElement;

  function pushEntry(value: string | number) {
    entry += String(value);
  }

  const entryValue = () => entryInput.value;
  function popEntry() {
    let entryList = entryValue().split("");
    entryList.pop();
    entry = entryList.join("");
  }

  $: {
    try {
      result = eval(entry);
      if (result == Infinity) {
        result = "😳 Infinity";
      }
    } catch {
      entry = entry
        .split("")
        .filter((x) => authorizeds.includes(x))
        .join("");
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
    entryInput.focus();
    let isEntryFocused = true;

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
  <h1 style="text-align: center; color:white">Simple calculator</h1>
  <section class="hero">
    <div class="hero-body">
      <section class="cadre">
        <section class="header">
          <div class="screen">
            <input bind:this={entryInput} bind:value={entry} type="text" />
          </div>
        </section>

        <section class="response">
          <input disabled type="text" bind:value={result} />
        </section>

        <section class="key-tab">
          <div class="keyboard">
            {#each range(1, 10) as key}
              <button class="button" on:click={() => pushEntry(key)}
                >{key}</button
              >
            {/each}
            <button class="button" on:click={() => pushEntry(0)}>0</button>
            <button class="button signes" on:click={() => pushEntry("+")}
              >+</button
            >
            <button class="button signes" on:click={() => pushEntry("-")}>
              -
            </button>
            <button class="button signes" on:click={() => pushEntry("*")}>
              *
            </button>
            <button class="button signes" on:click={() => pushEntry("/")}>
              /
            </button>
            <button class="button signes" on:click={popEntry}>Del</button>
          </div>
        </section>
      </section>
    </div>
  </section>
</main>

<style lang="scss">
  $input-height: 50px;
  $cadre-width: 500px;

  @mixin paddingX($value: 10px) {
    padding-left: $value;
    padding-right: $value;
  }
  @mixin paddingY($value: 10px) {
    padding-top: $value;
    padding-bottom: $value;
  }

  .cadre {
    display: flex;
    flex-direction: column;
    gap: 100px;
    background-color: #864ea0;
    width: $cadre-width;
    max-height: 700px;
    padding-top: 50px;
    align-items: center;
    border-radius: 10px;
    box-shadow: #683c7c inset 10px 10px 10px;

    .header {
      width: 90%;
      .screen {
        input {
          height: $input-height;
          width: 100%;
          font-size: 30px;
        }
      }
    }
  }

  .key-tab {
    display: flex;
    width: calc($cadre-width - 90px);
    height: 500px;
    // align-items: center;
    // justify-content: center;
    @include paddingX(130px);
    @include paddingY(30px);
  }

  .response {
    // background-color: white;
    align-self: flex-end;
    margin-right: 25px;
    margin-top: -80px;
    height: $input-height;
    input {
      height: 100%;
      font-size: medium;
      width: fit-content;
      background-color: #fff;
      color: black;
      font-weight: 700;
      text-align: center;
    }
  }
  .keyboard {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    gap: 10x;
    button {
      width: 130px;
      height: $input-height;
      font-size: larger;
    }
  }

  input {
    border-radius: 5px;
    border: 0;
  }

  @media only screen and (max-width: 950px) and (max-height: 610px) {
    $new-card-width: calc($cadre-width / 1.3);
    .hero {
      height: 100% !important;
    }
    .hero-body {
      height: 100%;
    }
    .cadre {
      width: calc($new-card-width) !important;
      height: 500px !important;
    }
    .button {
      width: calc($input-height * 2) !important;
      height: calc($input-height / 1.1) !important;
    }
    .key-tab {
      margin-left: calc($new-card-width / 4);
    }
  }
  @media only screen and (max-width: 700px) {
    .cadre {
      width: calc($cadre-width / 1.4) !important;
      height: calc($input-height * 10);
      .response {
        height: calc($input-height/1.2);
      }
    }
    .key-tab {
      width: calc($cadre-width/1.5);
      margin-left: 20px;
      margin-top: -80px;
    }
    .keyboard {
      // margin-left: 30px;
      button {
        width: 100px;
        font-weight: 900;
        font-size: large;
      }
      .signes {
        font-size: x-large;
      }
    }
    .hero {
      overflow-x: hidden;
    }
  }
</style>
