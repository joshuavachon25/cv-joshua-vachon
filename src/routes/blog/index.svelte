<script>
    export let articles = []
</script>

<div class="w-full px-5 lg:px-0 lg:w-4/5 mx-auto mb-20">
    <div class="flex-col mt-10 text-center">
        <!--<h2 class="uppercase text-5xl font-black inline mb-10 px-10">L'encre coule à flot</h2>-->
        <p class="mt-28  mb-10 md:px-40 text-xl italic">La section article me permet d'explorer et partager mes recherches, mes passions, mes découvertes. Embarquez à bord de l'E-Calypso! L'océan numérique nous attends!</p>

    </div>

    <div class="grid grid-cols-1 gap-5 w-full lg:w-4/5 mx-auto">
        {#each articles as article}
            <a class="hover:ring-4 group hover:ring-gray-500 hover:shadow-lg duration-500 card bg-gray-100 text-gray-800 shadow-md"  href={"/blog/" + article.slug}>
                <div class="card-body flex flex-row justify-between items-center">
                    <div class="grow">
                        <h2 class="text-left text-2xl">{article.titre}</h2>
                        <p class="text-xs text-gray-400">{article.date}</p>
                        <p>{article.extrait}</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-chevron-right fa-3x group-hover:text-blue-500"></i>
                    </div>
                </div>
            </a>




        {/each}
    </div>

</div>

