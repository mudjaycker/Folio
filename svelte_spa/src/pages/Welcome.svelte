<script lang="ts">
    import redirect from "page";
</script>

<!-- <main transition:fly={transition1}> -->
<main>
    <section class="hero">
        <section class="hero-body">
            <ul>
                <li id="text1">
                    Welcome to my website, my name is Maryimana.
                </li>
                <li id="text2">
                    We are going to make a tour 😉
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
        // margin-top: 5%;
        @include vars.flex;
        flex-direction: column;

        ul {
            li {
                font-size: xx-large;
                font-weight: bold;
                margin-top: 20px;
            }

            :nth-child(1) {
                margin-top: 10%;
            }
        }
    }
    .button {
        margin-top: 80px;
        background-color: #71ce46;
        color: white;
        font-weight: bold;
        font-size: large;

        &:hover {
            background-color: rgb(255, 123, 0);
            // color: black;
        }
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

    
    @for $i from 1 through 3{
        #text#{$i} {
            animation: fade-in 2s ease-in-out;
        }
        
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
                li {
                    font-size: larger;
                }
            }
        }
    }
</style>
