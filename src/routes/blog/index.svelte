<script context="module">
    export async function load(){
        const fichiers = import.meta.glob("./*.svx")
        let articles = []
        for(let chemin in fichiers){
            await fichiers[chemin]().then((fct) => {
                articles.push({slug: chemin.replace(".svx", ""), desc: fct.metadata.desc, date: fct.metadata.date, extrait: fct.metadata.extrait, cover: fct.metadata.pre, titre: fct.metadata.title,  statut: fct.metadata.statut, tech: fct.metadata.tech,  techIco: fct.metadata.techIco, url: fct.metadata.url})
            })
        }
        articles.sort((a, b) => (a.date < b.date) ? 1 : -1)

        return {
            props: {
                articles
            }
        }
    }
</script>

<script>
    export let articles

</script>

<div class="pageH pageW">
    <div class="flex-row">
        Blog
    </div>
    {#each articles as article}

        <a href={"/blog/" + article.slug}>{article.titre}</a><br>
    {/each}
</div>