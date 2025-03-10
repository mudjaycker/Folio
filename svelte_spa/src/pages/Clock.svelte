<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { loop, range } from "../utils";

  let d1 = new Date(),
    date = String(d1.getDate()),
    month: string = String(d1.getMonth() + 1),
    year = d1.getFullYear();
    
    let hEl: HTMLDivElement;
    let mEl: HTMLDivElement;
    let sEl: HTMLDivElement;
    let interval: number;
    
    const zfill = (value: number | string) => String(value).padStart(2, "0");
    
    let seconds = "0";
    let minutes = "0";
    let hours = "0";
    
    let weekday = [
      "Sunday",
      "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  date = zfill(date);
  month = zfill(month);
  let today = weekday[d1.getDay()],
  todayDate = date + "/" + month + "/" + year;
  
  let ddot = ":";
  let looped = loop(["|", "/", "-", "\\", ""]);

  onMount(() => {
    const animDot = () => {
      let newSecond = Number(seconds)
      ddot =  (looped.next()).value;
    };
    function clock() {
      let d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds(),
        hDeg = h * 30 + m * (360 / 720),
        mDeg = m * 6 + s * (360 / 3600),
        sDeg = s * 6;

      hEl.style.transform = "rotate(" + hDeg + "deg)";
      mEl.style.transform = "rotate(" + mDeg + "deg)";
      sEl.style.transform = "rotate(" + sDeg + "deg)";
      seconds = zfill(s);
      minutes = zfill(m);
      hours = zfill(h);
      animDot()
    }
    interval = setInterval(clock, 1000);
  });

  onDestroy(() => {
    clearInterval(interval);
    console.log({ interval }, "onDestroy");
  });
</script>

<main>
  <div id="clock">
    <div>
      <div class="info current-time">{hours}{ddot}{minutes}</div>
      <div class="info date">{todayDate}</div>
      <div class="info day">{today}</div>
    </div>
    <div class="dot"></div>
    <div>
      <div bind:this={hEl} class="hour-hand"></div>
      <div bind:this={mEl} class="minute-hand"></div>
      <div bind:this={sEl} class="second-hand"></div>
    </div>
    <div>
      <span class="h3">3</span>
      <span class="h6">6</span>
      <span class="h9">9</span>
      <span class="h12">12</span>
    </div>
    <div class="diallines"></div>
    {#each range(1, 60) as i}
      <div class="diallines" style="transform: rotate({6 * i}deg);"></div>
    {/each}
  </div>
</main>

<style lang="scss">
  $height: 300px;
  #clock {
    background: #ececec;
    width: $height;
    height: $height;
    margin: 8% auto 0;
    border-radius: 50%;
    border: 14px solid #333;
    position: relative;
    box-shadow: 0 2vw 4vw -1vw rgba(0, 0, 0, 0.8);
  }

  .dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #ccc;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    z-index: 10;
    box-shadow: 0 2px 4px -1px black;
  }

  .hour-hand {
    position: absolute;
    z-index: 5;
    width: 4px;
    height: 65px;
    background: #333;
    top: 79px;
    transform-origin: 50% 72px;
    left: 50%;
    margin-left: -2px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
  }

  .minute-hand {
    position: absolute;
    z-index: 6;
    width: 4px;
    height: 100px;
    background: #666;
    top: 46px;
    left: 50%;
    margin-left: -2px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    transform-origin: 50% 105px;
  }

  .second-hand {
    position: absolute;
    z-index: 7;
    width: 2px;
    height: 120px;
    background: gold;
    top: 26px;
    left: 50%;
    margin-left: -1px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    transform-origin: 50% 125px;
  }

  span {
    display: inline-block;
    position: absolute;
    color: #333;
    font-size: 22px;
    font-family: "Poiret One";
    font-weight: 700;
    z-index: 4;
  }

  .h12 {
    top: 30px;
    left: 50%;
    margin-left: -9px;
  }
  .h3 {
    top: 140px;
    right: 30px;
  }
  .h6 {
    bottom: 30px;
    left: 50%;
    margin-left: -5px;
  }
  .h9 {
    left: 32px;
    top: 140px;
  }

  .diallines {
    position: absolute;
    z-index: 2;
    width: 2px;
    height: 15px;
    background: #666;
    left: 50%;
    margin-left: -1px;
    transform-origin: 50% 150px;
    &:nth-of-type(5n) {
      position: absolute;
      z-index: 2;
      width: 4px;
      height: 25px;
      background: #666;
      left: 50%;
      margin-left: -1px;
      transform-origin: 50% 150px;
    }
  }

  .info {
    position: absolute;
    width: 120px;
    height: 20px;
    border-radius: 7px;
    background: #ccc;
    text-align: center;
    line-height: 20px;
    color: #000;
    font-size: 11px;
    top: 200px;
    left: 50%;
    margin-left: -60px;
    font-size: 12px;
    font-family: "Poiret One";
    font-weight: 700;
    z-index: 3;
    letter-spacing: 3px;
    margin-left: -60px;
    left: 50%;
  }
  .date {
    top: 80px;
  }
  .day {
    top: 200px;
  }
  .current-time {
    top: calc($height/ 2) + 10px;
  }
</style>
