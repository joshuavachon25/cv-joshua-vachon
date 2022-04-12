<script>
    export let experiments

</script>

<svelte:head>
    <title>Le petit labo — Joshua L.J. Vachon</title>
    <meta name="description" content="Ce petit labo est un espace créatif pour toutes mes expérimentations sur le web. Vous trouvrez des petits projets, avec le code et une démo!" />
    <meta name="keywords" content="Joshua, Vachon, Joshua L.J. Vachon, web, dev, cartographie, histoire, humanités numériques, digital humanities, labo, web experiment">
    <meta property="og:url"                content="https://www.joshuavachon.dev/labo" />
    <meta property="og:type"               content="website" />
    <meta property="og:title"              content="Le petit labo - Joshua L.J. Vachon" />
    <meta property="og:description"        content="Ce petit labo est un espace créatif pour toutes mes expérimentations sur le web. Vous trouvrez des petits projets, avec le code et une démo!" />
    <meta property="og:image"              content="/cover/galaxygenerator.png" />
</svelte:head>


<div class="w-4/5 mx-auto">
    <div class="flex-col mt-10 text-center">
        <p class="mt-28  mb-10 md:px-40 text-xl italic">Ce petit labo d'expérimentation est un fourre-tout de petit test en tout genre.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mx-auto mt-10 pb-28">
            {#each experiments as experiment}
                <a class="group aspect-square transition-all duration-500 card rounded-none text-gray-800 projetCarte shadow-md" style="background-image: url('{experiment.cover}'); background-size: cover; background-position: center;" href={experiment.url} target="_blank">
                    <div class="opacity-0 transition-opacity duration-300 group-hover:opacity-100 card-body flex flex-col justify-between items-start bg-white bg-opacity-95">
                        <div>
                            <h4 class="font-black text-lg lg:text-2xl ">{experiment.titre}</h4>
                            <p class="px-2 text-sm">{experiment.content}</p>
                        </div>
                        <div class="w-full">
                            <button class="btn btn-ghost w-full">Ouvrir l'expérimentation</button>
                        </div>
                    </div>
                </a>
            {/each}
    </div>

</div>