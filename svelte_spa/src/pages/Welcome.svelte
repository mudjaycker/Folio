<script lang="ts">
  import redirect from "page";
  import { fly, scale } from "svelte/transition";

  const transition1 = { delay: 1000, x: 200, y: 300 };
  const transition2 = { delay: 200, x: 100, y: 0 };
</script>

<main>
  <section class="hero">
    <section class="hero-body">
      <ul>
        <li transition:fly={transition1}>
          My name is Maryimana, and I wish you welcome to my website
        </li>
        <li transition:fly={transition2}>
          We going to make a tour (if you want obviously)
        </li>
        <li transition:scale={{delay:500}}>
          You just have to click to the button bellow 👇
        </li>
      </ul>
      <button class="button" on:click={() => redirect("/page-1")}>Start a tour</button>
    </section>
  </section>
</main>

<style lang="scss">
  @mixin flex() {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :global(body) {
    background-color: #646cffb0;
  }
  .hero-body {
    min-height: 70%;
    width: 50%;
    @include flex;
    flex-direction: column;
    ul {
      li {
        font-size: xx-large;
        font-style: italic;
        font-weight: bold;
        margin-top: 100px;
      }
      :nth-child(1) {
        margin-top: 0;
      }
    }
    // background-color: aquamarine;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
      color: #64ffac;
    }
    100% {
      opacity: 1;
    }
  }

  // #text1 {
  // animation: fade-in 1s ease-in-out;
  // }
  // #text2 {
  // animation: fade-in 4s ease-in-out;
  // }
  // #text3 {
  // animation: fade-in 7s ease-in-out;
  // }

  @media only screen and (max-width: 700px) {
    .hero {
      height: 100vh;
    }
    .hero-body {
      button {
        // width: 200px;
        margin-bottom: 50px;
      }

      ul {
        :nth-child(1) {
          margin-top: 500px;
        }
      }
    }
  }
</style>
