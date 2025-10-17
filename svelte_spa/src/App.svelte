<script lang="ts">
  import "./router";
  import { current_page } from "./store";

  $: pageName = $current_page.name;
  function goBack() {
    history.back();
  }
</script>

<svelte:head>
  <title>{pageName} | Maryimana</title>
</svelte:head>
<main>
  {#if pageName != "Welcome"}
    <button on:click={goBack} class="back-btn">👈🏿</button>
  {/if}
  <svelte:component this={$current_page.component as any} />
</main>

<style lang="scss">
    .back-btn {
      margin-top: 20px;
      margin-left: 10px;
      font-size: xx-large;
    }
</style>
