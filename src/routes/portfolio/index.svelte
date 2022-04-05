<script>
    import Modals from "../../lib/components/Modals.svelte";

    let projetChoisi = null
    let estOuvert = false

    const getProjets = async () => {
        let req = await fetch("/api/getProjects")
        let res = await req.json()
        return res.projets
    }

    const ouvrirProjet = (projet) => {
        projetChoisi = projet
        estOuvert = true
    }

    const fermerProjet = () => {
        projetChoisi = null
        estOuvert = false
    }

</script>


<div class="grid grid-cols-3 w-full mx-auto">
    {#await getProjets()}
        Loading
    {:then projets}
        {#each projets as projet}
            <span class="cursor-pointer group aspect-video transition-all duration-500 card rounded-none text-gray-800 projetCarte" style="background-image: url('{projet.cover}');" on:click={() => ouvrirProjet(projet)} >
                <div class="opacity-0 transition-opacity duration-300 group-hover:opacity-100 card-body flex flex-row justify-between items-end font-black text-2xl bg-white bg-opacity-70">
                    {projet.titre}
                </div>
            </span>
        {/each}
    {/await}
</div>

<Modals projet={projetChoisi} estOuvert={estOuvert} on:fermer={fermerProjet}/>

