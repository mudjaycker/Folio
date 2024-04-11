<section id="container">
  <section id="header">
    <p>Hi I am Maryimana</p>
  </section>

  <section id="footer">
    {#each ["About me", "Contact me"] as text}
      <div class="footer-item">
        <a href="/">{text}</a>
      </div>
    {/each}
  </section>
</section>

<style lang="scss">
  $_1st-bg: #8b9aaf;
  $_2nd-bg: #3f44e3;
  $_3rd-bg: #292c2c;

  @mixin px($x: 1%) {
    padding-left: $x;
    padding-right: $x;
  }
  @mixin mx($x: 1%) {
    margin-left: $x;
    margin-right: $x;
  }

  #container {
    background-color: $_1st-bg;
    width: 100vw;
    height: 100vh;
  }
  #header {
    background-color: $_2nd-bg;
    width: 50%;
    height: 5%;
    position: absolute;
    left: 25%;
    color: white;
    text-align: center;
    font-weight: bold;
  }
  #footer {
    background-color: $_3rd-bg;
    width: 100%;
    height: 10%;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    :nth-child(2) {
      margin-left: 20%;
    }
  }
  .footer-item {
    width: 20%;
    background-color: #0d5a5a;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    &:hover{
      background-color: $_2nd-bg;
    }
    a {
      text-decoration: none;
      color: white;
    }
  }
</style>
