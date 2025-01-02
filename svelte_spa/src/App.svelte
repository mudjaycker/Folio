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
    <button on:click={goBack} class="back-btn">Back</button>
  {/if}
  <svelte:component this={$current_page.component} />
</main>

<style lang="scss">
    .back-btn {
      margin-top: 50px;
      margin-left: 10px;
      height: 50px;
      width: 150px;
    }
</style>
