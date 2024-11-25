<script lang="ts">
  import { range } from "../utils";

  let entry = "";
  let authorized = Array.from(range(10)).map((x) => x.toString());
  authorized = [...authorized, "+", "-", "/", "*", " ", "(", ")"];

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
  $: result = eval(entry);
</script>

<main>
  <section class="cadre">
    <section class="header">
      <div class="screen">
        <input bind:value={entry} type="text" />
      </div>
    </section>

    <section class="response">
      <input type="text" bind:value={result} />
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
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .cadre {
    display: flex;
    flex-direction: column;
    gap: 100px;
    background-color: #864ea0;
    width: 500px;
    height: 700px;
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
    border: solid 3px red;
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
</style>
