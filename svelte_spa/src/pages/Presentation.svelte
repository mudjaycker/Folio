<script lang="ts">
    import Infos from "../components/Infos.svelte";

    type T_Realisation = {
        title: string;
        img: string;
        href: string;
    };

    let realisations: T_Realisation[] = [
        {
            title: "ascii",
            img: "/images/base_convertor.svg",
            href: "/ascii",
        },
        {
            title: "simple calculator",
            img: "/images/calculator.svg",
            href: "/calculator",
        },
        {
            title: "analogic clock",
            img: "/images/clock.svg",
            href: "/clock",
        },
        {
            title: "bases convertor",
            img: "/images/base_convertor.svg",
            href: "/convertor",
        },
        {
            title: "QRCode maker",
            img: "/images/qr-Maryimana.svg",
            href: "/qr",
        },
    ];

</script>

<main>
    <section class="hero">
        <section class="title">
            <h1>
                😎 <span
                    >Here are few examples of what I can do just for fun 👇🏿</span
                >
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
                                alt=""
                                src={real.img}
                                loading="lazy"
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
    <Infos />
</main>

<style lang="scss">
    @use "../vars.scss" as vars;

    .hero {
        flex-direction: column;
    }
    
    .columns {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        margin-top: 50px;
        margin-bottom: 50px;
        overflow: auto !important;
        padding-right: 0;
        // border: solid 1px black
    }

    .card {
        background-color: #898cd0;
        color: #353333;
        max-width: 100%;
        border-radius: 10px;

        .card-content img {
            height: 150px;
            width: 200px;
            @include vars.flex;
        }
    }

    .card-header {
        background-color: #f0f1fa;
    }
    .card-header-title {
        display: flex;
        justify-content: center;
        color: #353333;
        flex-grow: 1;
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

    @media only screen and (max-width: 900px) {
        .columns {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }

        .title {
            margin-top: 10px;
            &:first-child {
                font-size: 10px;
            }
        }
    }

    @media only screen and (max-width: 600px) {
        .columns {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 10px;
        }

        .title {
            font-size: 10px !important;

            @include vars.paddingX(20px);
        }
    }
</style>
