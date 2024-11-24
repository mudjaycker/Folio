<script lang="ts">
</script>

<main>
  <section class="hero">
    <section class="hero-body">
      <ul>
        <li id="text1">
          My name is Maryimana, and I wish you welcome to my website
        </li>
        <li id="text2">We going to make a tour (if you want obviously)</li>
        <li id="text3">You just have to the button bellow 👇</li>
      </ul>
      <button>Start a tour</button>
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

  .hero {
    height: 100vh;
    width: 100vw;
    @include flex;
    color: aliceblue;
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

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: white;
      color: black;
      margin-top: 100px;
      cursor: pointer;
      transition: border-color 0.25s;
      &:hover {
        border-color: #646cff;
      }

      &:focus,
      &:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
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

  #text1 {
    animation: fade-in 1s ease-in-out;
  }
  #text2 {
    animation: fade-in 4s ease-in-out;
  }
  #text3 {
    animation: fade-in 7s ease-in-out;
  }

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
