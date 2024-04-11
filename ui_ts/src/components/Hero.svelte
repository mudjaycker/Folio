<section id="container">
  <section id="header">
    <p>Hi I am Maryimana</p>
  </section>

  <section id="footer"></section>
</section>

<style lang="scss">
  $_1st-bg: #8b9aaf;
  $_2nd-bg: #3f44e3;
  $_3rd-bg: #292c2c;

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
    justify-content: space-between;
  }
</style>
