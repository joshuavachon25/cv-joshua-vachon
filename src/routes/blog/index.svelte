<script>
    import { format} from 'date-fns'
    export let articles
</script>

<svelte:head>
    <title>L'encre coule à flot; Mes articles — Joshua L.J. Vachon</title>
    <meta name="description" content="La section article me permet d'explorer et partager mes recherches, mes passions, mes découvertes. Embarquez à bord de l'E-Calypso! L'océan numérique nous attends!" />
    <meta name="keywords" content="Joshua, Vachon, Joshua L.J. Vachon, web, dev, cartographie, histoire, humanités numériques, digital humanities, articles, blog, blogue, texte">
    <meta property="og:url"                content="https://www.joshuavachon.dev/blog" />
    <meta property="og:type"               content="website" />
    <meta property="og:title"              content="L'encre coule à flot; Mes articles - Joshua L.J. Vachon" />
    <meta property="og:description"        content="La section article me permet d'explorer et partager mes recherches, mes passions, mes découvertes. Embarquez à bord de l'E-Calypso! L'océan numérique nous attends!" />
    <meta property="og:image"              content="/fb-default.png" />
</svelte:head>

<div class="w-full px-2 md:px-5 lg:px-0 mx-auto mb-20">
    <div class="flex-col mt-10 text-center">
        <!--<h2 class="uppercase text-5xl font-black inline mb-10 px-10">L'encre coule à flot</h2>-->
        <p class="lg:mt-28  mb-10 md:px-40 text-lg md:text-xl italic">La section article me permet d'explorer et partager mes recherches, mes passions, mes découvertes. Embarquez à bord de l'E-Calypso! L'océan numérique nous attends!</p>

    </div>

    <div class="grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 w-full  mx-auto">

            {#each articles as article}
                <a sveltekit:prefetch class="hover:ring-4 group hover:ring-gray-700 hover:shadow-lg duration-500 card bg-white text-gray-800 shadow-md rounded-md"  href={"/blog/" + article.id}>
                    <div class=""><img class="object-cover h-44 w-full" src={article.img} alt="Shoes" /></div>
                    <div class="card-body flex flex-col justify-between items-end h-full">
                        <div class="grow">
                            <h2 class="text-left text-2xl">{article.titre}</h2>
                            <p class="text-xs text-gray-400">{format(new Date(article.dateCreation), 'dd/MM/yyyy')}</p>
                            <p class="lg:p-5">{article.resume}</p>
                        </div>

                    </div>
                </a>
            {/each}


    </div>

</div>

