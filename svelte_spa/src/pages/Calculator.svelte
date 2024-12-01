<script lang="ts">
  import { range } from "../utils";

  let result: number;
  let entry = "";
  let authorizeds = Array.from(range(10)).map((x) => x.toString());
  let entryInput: HTMLInputElement;

  authorizeds.push("+", "-", "/", "*", " ", "(", ")");

  function pushEntry(value: string | number) {
    entry += String(value);
  }

  function popEntry() {
    let entryList = entry.split("");
    entryList.pop();
    entry = entryList.join("");
  }

  $: {
    let entryList = entry.split("").filter((x) => authorized.includes(x));
    entry = entryList.join("");
  }
  $: {
    try {
      result = eval(entry);
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
</script>

<main>
  <section>
    <h1 style="text-align: center; color:white">Simple calculator</h1>
  <section></section>
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
          <button on:click={() => pushEntry(key)}>{key}</button>
        {/each}
        <button on:click={() => pushEntry(0)}>0</button>
        <button on:click={() => pushEntry("+")}>+</button>
        <button on:click={() => pushEntry("-")}> - </button>
        <button on:click={() => pushEntry("*")}> * </button>
        <button on:click={() => pushEntry("/")}> / </button>
        <button on:click={popEntry}>Del</button>
      </div>
    </section>
  </section>
</main>

<style lang="scss">
  main {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 50px;
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
    gap: 10px;
  }
  .cadre {
    display: flex;
    flex-direction: column;
    gap: 100px;
    background-color: #864ea0;
    width: 500px;
    max-height: 700px;
    padding-top: 50px;
    align-items: center;
    border-radius: 10px;
    box-shadow: #683c7c inset 10px 10px 10px;

    .header {
      width: 90%;
      .screen {
        input {
          height: 50px;
          width: 100%;
          font-size: 30px;
        }
      }
    }
  }

  .key-tab {
    display: flex;
    height: 500px;
    padding: 30px;
  }

  .response {
    // background-color: white;
    align-self: flex-end;
    margin-right: 25px;
    margin-top: -80px;
    height: 30px;
    input {
      height: 100%;
      font-size: medium;
      width: fit-content;
    }
  }
  .keyboard {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    margin-left: 5px;
    button {
      width: 130px;
      height: 50px;
      font-size: large;
    }
  }

  @media only screen and (max-width: 700px) {
    .keyboard {
      margin-left: 30px;
      button {
        width: 80px;
      }
    }

    .cadre {
      //   margin-top: 100px;
      width: 380px;
    }
  }
  @media only screen and (max-width: 850px) {
    .cadre {
      //   height: 90%;
      overflow-y: auto;
    }
  }
</style>
