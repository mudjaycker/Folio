<script lang="ts">
  import "./router";
  import { current_page } from "./store";

  $: pageName = $current_page.name;
</script>

<svelte:head>
  <title>{pageName}</title>
</svelte:head>
<main>
  <svelte:component this={$current_page.component} />
</main>
