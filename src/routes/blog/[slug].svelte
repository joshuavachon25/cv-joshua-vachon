<script>
    import {page} from "$app/stores";
    import {format} from "date-fns";
    import MDXViewer from "$lib/components/MDXViewer.svelte";

    export let article
</script>

<svelte:head>
    <title>{article.titre} — Joshua L.J. Vachon</title>
    <meta name="description" content={article.resume} />
    <meta name="keywords" content="Joshua, Vachon, Joshua L.J. Vachon, web, dev, cartographie, histoire, humanités numériques, digital humanities, articles, blog, blogue, texte">
    <meta property="og:url"                content="https://www.joshuavachon.dev/blog/{$page.params.slug}" />
    <meta property="og:type"               content="article" />
    <meta property="og:title"              content="{article.titre} — Joshua L.J. Vachon" />
    <meta property="og:description"        content={article.resume} />
    <meta property="og:image"              content={article.img}/>
</svelte:head>

<div class="mt-6 md:mt-12">

    <div class="h-48 md:h-72 lg:rounded-2xl shadow-md" style="background-image: url('{article.img}'); background-size: cover;">

    </div>
    <div class=" w-3/5 p-5 mx-auto mb-8 md:mb-16 -mt-12 bg-white skew-x-12 -skew-y-6 hover:skew-y-6 hover:-skew-x-12 transition-transform duration-500 transform shadow-md">
        <div class="flex flex-col text-center ">
            <h1 class="text-2xl md:text-4xl font-black font-mono">{article.titre}</h1>
            <h6 class="text-lg">{format(new Date(article.dateCreation), 'dd/MM/yyyy')}</h6>
        </div>
    </div>


    <div class="w-full px-5 md:px-0 md:w-4/5 lg:w-3/5 mx-auto text-justify mb-20">
        <p class="font-bold text-zinc-500 mb-10">{article.resume}</p>
        <MDXViewer md={article.content}/>
    </div>

</div>
