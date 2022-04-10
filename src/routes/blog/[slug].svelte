<script>
    import {format} from "date-fns";
    import MDXViewer from "$lib/components/MDXViewer.svelte";
    import Auteur from "../../lib/components/Auteur.svelte";

    export let article
</script>

<div>
    <h1 class="text-9xl font-black">{article.titre}</h1>
    <h6 class="text-lg">{format(new Date(article.dateCreation), 'dd/MM/yyyy')}</h6>
    <div class="w-3/5 mx-auto">
        <MDXViewer md={article.content}/>
    </div>
    <div class="w-1/2 mx-auto pb-10">
        <Auteur utilisateur={article.users}/>
    </div>
</div>
