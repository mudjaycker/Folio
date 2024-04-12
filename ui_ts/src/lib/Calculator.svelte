<script lang="ts"></script>

<section id="container">
  <section id="screen">
    <input type="text" />
    <span id="output"></span>
  </section>

  <section id="keyboard"></section>
</section>

<style lang="scss">
  #container {
    width: 90%;
    height: 90%;
    border: 1px solid #000;
    display: flex;
    padding-top: 3%;
  }
  #screen {
    background: white;
    width: 85%;
    height: 10%;
    position: absolute;
    left: 7.5%;
    input {
      border: none;
      width: 99%;
      height: 40%;
      text-align: end;
      font-size: x-large;
    }
  }
</style>
