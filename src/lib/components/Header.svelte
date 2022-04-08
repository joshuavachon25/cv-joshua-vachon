<script>
    import Hamburger from "./Hamburger.svelte";

    const menu = [
        {nom: "Blog", url: "/blog"},
        {nom: "Portfolio", url: "/portfolio"},
        {nom: "Labo", url: "/labo"},
        {nom: "À propos", url: "/cv"}
    ]

    const reseaux = [
        {icone: "fa-brands fa-github", url: "#"},
        {icone: "fa-brands fa-researchgate", url: "#"},
        {icone: "fa-brands fa-linkedin", url: "#"}
    ]

    const sites = [
        {icone: "fak fa-cyberfjord", url: "#"},
        {icone: "fak fa-humatica", url: "#"}
    ]
</script>

<header class="flex flex-row justify-between items-center shadow-sm">
    <a href="/" class="h-20 w-56 flex justify-center items-center px-5 z-50">
        <img src="/logonom.png">
    </a>
    <nav class="hidden lg:flex lg:flex-row justify-between gap-5 ml-5 text-lg">
        {#each menu as item}
            <a class="px-3" href={item.url}>{item.nom}</a>
        {/each}
    </nav>
    <div class="spacer"></div>
    <Hamburger sites={sites} reseaux={reseaux} menu={menu}/>
    <div class="lg:flex-row justify-center items-center hidden lg:flex">
        <div class="flex flex-row items-center px-6 gap-3 text-3xl text-white h-20">
            {#each reseaux as reseau}
                <a href={reseau.url}><i class={reseau.icone}></i></a>
            {/each}
        </div>
        <aside class="flex flex-row px-6 gap-3 text-3xl text-white  h-20 items-center">
            {#each sites as site}
                <a href={site.url}><i class={site.icone}></i></a>
            {/each}
        </aside>
    </div>

</header>