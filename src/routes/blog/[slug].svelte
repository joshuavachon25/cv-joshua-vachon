<script>
    import {format} from "date-fns";
    import MDXViewer from "$lib/components/MDXViewer.svelte";
    import Auteur from "../../lib/components/Auteur.svelte";

    export let article
</script>

<div class="mt-12">
    <div class="flex flex-col text-center mb-10">
        <h1 class="text-4xl font-black">{article.titre}</h1>
        <h6 class="text-lg">{format(new Date(article.dateCreation), 'dd/MM/yyyy')}</h6>
    </div>
    <div class=" w-3/5  p-5 pb-10 mx-auto mb-16 bg-white skew-x-12 -skew-y-6 hover:skew-y-6 hover:-skew-x-12 transition-transform duration-500 transform shadow-xl">
        <div class="h-72 rounded-2xl  " style="background-image: url('{article.img}'); background-size: cover;">

        </div>
    </div>


    <div class="w-3/5 mx-auto text-justify">
        <MDXViewer md={article.content}/>
    </div>

</div>
