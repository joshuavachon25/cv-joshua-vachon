<script>
    import {stacks} from '$lib/utils/techIcons'
    export let projets

</script>

<svelte:head>
    <title>Portfolio — Joshua L.J. Vachon</title>
    <meta name="description" content="Découvrez mes différents projets web, mes oeuvres et mes cartes. " />
    <meta name="keywords" content="Joshua, Vachon, Joshua L.J. Vachon, web, dev, cartographie, histoire, humanités numériques, digital humanities, portfolio">
    <meta property="og:url"                content="https://www.joshuavachon.dev/portfolio" />
    <meta property="og:type"               content="website" />
    <meta property="og:title"              content="Portfolio - Joshua L.J. Vachon" />
    <meta property="og:description"        content="Découvrez les différents projets web, les oeuvres et les cartes de Joshua Vachon. " />
    <meta property="og:image"              content="/fb-default.png" />
</svelte:head>


<div class="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full mx-auto mt-12 lg:mt-28 pb-28">

        {#each projets as projet}
                <span class="group aspect-video transition-all duration-500 card rounded-none text-gray-800 projetCarte shadow-md " style="background-image: url('{projet.cover}'); background-size: cover;">
                <div class="skewElem opacity-0 transition-opacity duration-300 group-hover:opacity-100 card-body flex flex-col justify-between items-start bg-white bg-opacity-95">
                    <div class="hidden md:flex md:flex-col">
                        <h4 class="font-black md:text-2xl ">{projet.titre}</h4>
                        <p class="text-xs md:text-xl">{projet.content}</p>
                    </div>
                    <div class="flex flex-col w-full">
                        {#if projet.stack !== null}
                            <h4 class="text-xs font-bold my-5">Technologies</h4>
                            <div class="flex flex-row flex-wrap justify-evenly items-center w-full">
                                {#each projet.stack as stack}
                                   <span class="relative group w-12 select-none">
                                       <span >
                                           {@html stacks[stack]?.icone}
                                       </span>

                                       <span class="text-xs hidden md:flex">{stacks[stack]?.nom}</span>
                                   </span>
                                {/each}

                            </div>

                        {/if}
                        {#if projet.url !== null}

                                <a href={projet.url} target="_blank" class="absolute top-0 right-0 px-3 py-2 text-white bg-mauve rounded-bl-2xl">Visiter le projet</a>


                        {/if}
                    </div>

                </div>
            </span>


        {/each}
</div>

