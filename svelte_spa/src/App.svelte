<script lang="ts">
  import redirect from "page";
  import { onMount } from "svelte";
  import "./router";
  import { current_page } from "./store";

  $: pageName = $current_page.name;
  onMount(() => {
    redirect("/welcome");
  });
</script>

<svelte:head>
  <title>{pageName}</title>
</svelte:head>
<main>
  <svelte:component this={$current_page.component} />
</main>
