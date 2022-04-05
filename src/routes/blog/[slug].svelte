<script>
    import {page} from "$app/stores";
    import {fade} from "svelte/transition";
    import {format} from "date-fns";
    import MDXViewer from "$lib/components/MDXViewer.svelte";
    import Auteur from "../../lib/components/Auteur.svelte";

    const getPost = async () => {
        let req = await fetch(`/api/getPost/${$page.params.slug}`)
        let res = await req.json()
        return res.article
    }
</script>

<div>
    {#await getPost()}
        <div out:fade={true} class="bg-black w-64 h-64 text-white">CHARGEMENT</div>
    {:then article}
        <h1 class="text-9xl font-black">{article.titre}</h1>
        <h6 class="text-lg">{format(new Date(article.dateCreation), 'dd/MM/yyyy')}</h6>
        <div class="w-3/5 mx-auto">
            <MDXViewer md={article.content}/>
        </div>
        <div class="w-1/2 mx-auto pb-10">
            <Auteur utilisateur={article.users}/>
        </div>
    {/await}
</div>
