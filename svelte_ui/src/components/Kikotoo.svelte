<script>
  const KEYS = [
    [
      {
        text: "C",
        id: "key-C",
      },
      {
        text: "power",
        id: "key-power",
      },
      {
        text: "X",
        id: "key-X",
      },
      {
        text: "/",
        id: "key-division",
      },
      {
        text: "del",
        id: "key-del",
      },
    ],
    [
      {
        text: "7",
        id: "key-7",
      },
      {
        text: "8",
        id: "key-8",
      },
      {
        text: "9",
        id: "key-9",
      },
      {
        text: "-",
        id: "key-minus",
      },
    ],
    [
      {
        text: "4",
        id: "key-4",
      },
      {
        text: "5",
        id: "key-5",
      },
      {
        text: "6",
        id: "key-6",
      },
      {
        text: "+",
        id: "key-plus",
      },
    ],
    [
      {
        text: "1",
        id: "key-1",
      },
      {
        text: "2",
        id: "key-2",
      },
      {
        text: "3",
        id: "key-3",
      },
      {
        text: "=",
        id: "key-equal",
      },
    ],
    [
      {
        text: "(",
        id: "key-lparen",
      },
      {
        text: "0",
        id: "key-0",
      },
      {
        text: ".",
        id: "key-point",
      },
      {
        text: ")",
        id: "key-rparen",
      },
      ,
    ],
  ];
  
</script>

<section id="cadre">
  <section id="screen">
    <input type="text" id="input" />
    <span id="output"></span>
  </section>
  <section id="keyboard" class="columns mt-4 is-multiline">
    {#each KEYS as key, i}
      <div id="buttons" class="column columns">
        {#each key as { text, id }}
          <div class=" column button is-small is-outlined is-dark">
            <button {id}>{text}</button>
          </div>
        {/each}
      </div>
    {/each}
  </section>
</section>

<style lang="scss">
  #cadre {
    border: 1px solid rgb(1, 27, 20);
    border-radius: 1%;
    height: 100%;
    width: 23%;
    padding: 1%;
    background-color: rgb(230, 187, 132);
  }
  #screen {
    background: white;
    width: 100%;
    height: 20%;
  }
  #input {
    width: 100%;
    border: none;
  }
  #keyboard{
    padding: 10%;
  }
</style>
