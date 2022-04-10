<script>
    import { format} from 'date-fns'
    export let articles
</script>

<div class="w-full px-5 lg:px-0 mx-auto mb-20">
    <div class="flex-col mt-10 text-center">
        <!--<h2 class="uppercase text-5xl font-black inline mb-10 px-10">L'encre coule à flot</h2>-->
        <p class="mt-28  mb-10 md:px-40 text-xl italic">La section article me permet d'explorer et partager mes recherches, mes passions, mes découvertes. Embarquez à bord de l'E-Calypso! L'océan numérique nous attends!</p>

    </div>

    <div class="grid grid-cols-3 gap-10 w-full  mx-auto">

            {#each articles as article}
                <a sveltekit:prefetch class="hover:ring-4 group hover:ring-gray-700 hover:shadow-lg duration-500 card bg-white text-gray-800 shadow-md rounded-md"  href={"/blog/" + article.id}>
                    <div class=""><img class="object-cover h-44 w-full" src={article.img} alt="Shoes" /></div>
                    <div class="card-body flex flex-col justify-between items-end h-full">
                        <div class="grow">
                            <h2 class="text-left text-2xl">{article.titre}</h2>
                            <p class="text-xs text-gray-400">{format(new Date(article.dateCreation), 'dd/MM/yyyy')}</p>
                            <p class="p-5">{article.resume}</p>
                        </div>

                    </div>
                </a>
            {/each}


    </div>

</div>

