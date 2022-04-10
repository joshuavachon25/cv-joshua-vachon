<script>
    import {stacks} from '$lib/utils/techIcons'
    export let projets
</script>


<div class="grid grid-cols-2 gap-5 w-full mx-auto mt-28 pb-28">

        {#each projets as projet}
                <span class="group aspect-video transition-all duration-500 card rounded-none text-gray-800 projetCarte shadow-md " style="background-image: url('{projet.cover}'); background-size: cover;">
                <div class="skewElem opacity-0 transition-opacity duration-300 group-hover:opacity-100 card-body flex flex-col justify-between items-start bg-white bg-opacity-95">
                    <div>
                        <h4 class="font-black text-2xl ">{projet.titre}</h4>
                        <p>{projet.content}</p>
                    </div>
                    <div class="flex flex-col w-full">
                        {#if projet.stack !== null}
                            <h4 class="text-xs font-bold my-5">Technologies</h4>
                            <div class="flex flex-row justify-evenly items-center w-full">
                                {#each projet.stack as stack}
                                   <span class="relative group w-12 select-none">
                                       <span >
                                           {@html stacks[stack]?.icone}
                                       </span>

                                       <span class="text-xs">{stacks[stack]?.nom}</span>
                                   </span>
                                {/each}

                            </div>

                        {/if}
                        {#if projet.url !== null}

                                <a href={projet.url} target="_blank" class="absolute top-0 right-0 px-3 py-2 bg-info rounded-bl-2xl">Visiter le projet</a>


                        {/if}
                    </div>

                </div>
            </span>


        {/each}
</div>

