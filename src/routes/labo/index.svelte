<script>
    export let projets  = []
</script>

<div class="w-4/5 mx-auto">
    <div class="flex-col mt-10 text-center">
        <h2 class="uppercase text-5xl font-black border-b-2 border-b-gray-500 inline mb-10 px-10">Labo</h2>
        <p class="mt-5 mb-10">Ce petit labo d'expérimentation est un fourre-tout de petit test en tout genre.</p>

    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        {#each projets as projet}
            <a class="hover:ring-4 group hover:ring-gray-500 hover:shadow-lg duration-500 card bg-gray-100 text-gray-800 shadow-md"  href={"/labo/" + projet.slug}>
                <div class="card-body flex flex-row justify-between items-center">
                    <div class="grow">
                        <h2 class="text-left text-2xl"><a>{projet.titre}</a></h2>
                        <p>{projet.extrait}</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-chevron-right fa-3x group-hover:text-blue-500"></i>
                    </div>

                </div>
            </a>
        {/each}
    </div>

</div>