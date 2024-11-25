<script lang="ts">
  import { scale } from "svelte/transition";
  import photo from "../assets/Karos-.jpg";
  import clockImage from "../assets/clock.png";
  import calculatorImage from "../assets/calculator.png";

  let realisations = [
    { title: "simple calculator", img: calculatorImage, href: "/calculator" },
    { title: "date-picker", img: photo, href: "page-1" },
    { title: "analogic clock", img: clockImage, href: "/clock" },
    { title: "bases convertor", img: photo, href: "page-1" },
  ];
</script>

<main transition:scale={{ delay: 500, duration: 1000 }}>
  <section class="hero">
    <section class="title">
      <h1>
        😎 <span>Here are few examples of what I can do just for fun 👇🏿</span>
      </h1>
    </section>
    <section class="columns">
      {#each realisations as real}
        <div class="column">
          <div class="card">
            <div class="card-header">
              <span class="card-header-title">{real.title}</span>
            </div>
            <div class="card-content">
              <img
                class="card-image"
                width="392"
                height="350"
                alt=""
                src={real.img}
              />
            </div>
            <div class="card-footer">
              <a class="button" href={real.href}>See</a>
            </div>
          </div>
        </div>
      {/each}
    </section>
  </section>
</main>

<style lang="scss">
  .hero {
    flex-direction: column;
    gap: 100px;
  }
  .title {
    h1 {
      span {
        font-style: italic;
      }
    }
  }
  .columns {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 100px;
    width: 70%;
    height: 50%;
    overflow-y: auto;
    padding-right: 0;
    // border: solid 1px black
  }

  .card {
    background-color: #898cd0;
    color: #353333;
    max-width: 100%;
    border-radius: 10px;
  }

  .card-header {
    background-color: #f0f1fa;
    display: flex;
  }
  .card-header-title {
    display: flex;
    align-items: center;
    color: #353333;
    flex-grow: 1;
    padding: 10px;
  }
  .card-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .button {
    margin: 0;
  }

  @media only screen and (max-width: 700px) {
    .columns {
      width: 98%;
    }
    .card-header-title {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .card-image {
      width: 100%;
    }

    .title {
      text-align: center;
    }
  }
</style>
