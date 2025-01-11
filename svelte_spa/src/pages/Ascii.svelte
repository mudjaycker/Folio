<script lang="ts">
  let text = "";
  function asciify(text: string) {
    //@ts-ignore
    return text.split("").map((char) => char.charCodeAt());
  }
  $: asciified = asciify(text).join(" ");
</script>

<main class="container">
  <section class="content">
    <input
      bind:value={text}
      type="text"
      class="input"
    />

    <div class="result">{asciified}</div>
  </section>
</main>

<style lang="scss">
  @mixin flexi($d: flex, $a: center, $j: center) {
    display: $d;
    align-items: $a;
    justify-content: $j;
  }

  @mixin dimension($h, $w) {
    height: $h;
    width: calc($w);
  }

  $width: 800px;
  $height: 500px;

  // :global(body) {
  // overflow-y: hidden !important;
  // }
  .container {
    position: absolute;
    @include flexi;
    width: 100%;
    height: 100%;
  }
  .content {
    @include flexi;
    background-color: #2c2929;
    width: $width;
    height: $height;
    position: relative;
    border-radius: 10px;

    .input {
      @include dimension(calc($height / 7), $width - 100px);
      margin-top: calc(calc($height / 8));
      font-size: 30px;
      align-self: normal;
    }

    .result {
      background-color: #4f4949;
      @include dimension(calc($height / 7), $width - 100px);
      position: absolute;
      bottom: calc($height / 8);
      font-size: 30px;
      color: #e6e0e0;
      text-align: center;
      text-transform: lowercase;
      word-break: break-all;
    }
  }

  @media only screen and (max-width: 1034px) {
    .container {
      width: 100%;
      // height: 100%;
      // overflow-y: hidden !important;
      @include flexi;
    }
    .content {
      width: 90%;
      height: 70%;

      :nth-child(1),
      :last-child {
        width: 95%;
        height: calc($height / 16);
        font-size: x-large;
      }
      .result {
        overflow-x: auto;
      }
    }
  }
</style>
