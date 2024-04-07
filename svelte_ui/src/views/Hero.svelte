<script>
  import Kikotoo from "../components/Kikotoo.svelte";
</script>

<section class="hero is-info is-fullheight">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <p class="title is-3">MARYIMANA</p>

          <span class="navbar-burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>

      </div>
    </nav>
  </div>

  <div id="body" class="">
      <Kikotoo />
  </div>

  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li class="is-active">
            <a href="maryimana">Who I am</a>
          </li>
          <li>
            <a href="skils">My skills</a>
          </li>
          <li>
            <a href="contact">Contact me</a>
          </li>
          
        </ul>
      </div>
    </nav>
  </div>
</section>

<style>
  #body{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70vh;
  }
</style>