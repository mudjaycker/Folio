<script lang="ts">
    import redirect from "page";
    import { fly, scale } from "svelte/transition";

    const transition1 = { delay: 100, x: -50, y: 50 };
</script>

<!-- <main transition:fly={transition1}> -->
<main>
    <section class="hero">
        <section class="hero-body" transition:fly={transition1}>
            <ul>
                <li id="text1">
                    My name is Maryimana, and I wish you welcome to my website
                </li>
                <li id="text2">
                    We going to make a tour (if you want obviously 😉)
                </li>
                <li id="text3">
                    You just have to click to the button below 👇🏿
                </li>
            </ul>
            <button class="button" on:click={() => redirect("/presentation")}
                >Start a tour</button
            >
        </section>
    </section>
</main>

<style lang="scss">
    @use "../vars.scss" as vars;

    .hero-body {
        min-height: 70%;
        width: 50%;
        margin-top: 5%;
        @include vars.flex;
        flex-direction: column;
        ul {
            li {
                font-size: xx-large;
                font-weight: bold;
                margin-top: 100px;
            }
            :nth-child(1) {
                margin: 0%;
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
        animation: fade-in 3s ease-in-out;
    }
    #text2 {
        animation: fade-in 1s ease-in-out;
    }
    #text3 {
        animation: fade-in 2s ease-in-out;
    }

    @media only screen and (max-width: 600px) {
        .hero {
            height: 100vh;
        }
        .hero-body {
            button {
                // width: 200px;
                margin-top: 50px;
                margin-bottom: 50px;
            }

            ul {
                :nth-child(1) {
                    margin-top: 500px;
                }
                li {
                    font-size: larger;
                }
            }
        }
    }
</style>
