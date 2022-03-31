<script>
    let menu = [
        {nom: "Blog", url: "/blog"},
        {nom: "Portfolio", url: "/portfolio"},
        {nom: "Labo", url: "/labo"},
        {nom: "À propos", url: "/cv"}
    ]
</script>

<header class="flex flex-row justify-between items-center shadow-sm">
    <a href="/" class="h-20 flex justify-center items-center px-5 bg-purple-200">
        <h2 class="text-xl">Joshua L.J. Vachon</h2>
    </a>
    <nav class="flex flex-row justify-between gap-5 ml-5 text-lg">
        {#each menu as item}
            <a class="px-3" href={item.url}>{item.nom}</a>
        {/each}
    </nav>
    <div class="spacer"></div>
    <div class="flex flex-row justify-center items-center">
        <div class="flex flex-row items-center px-6 gap-3 text-3xl text-gray-600 bg-purple-100 h-20">
            <a href="#"><i class="fa-brands fa-github"></i></a>
            <a href="#"><i class="fa-brands fa-researchgate"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <aside class="flex flex-row px-6 gap-3 text-3xl text-gray-600 bg-purple-200 h-20 items-center">
            <a href="#"><i class="fak fa-cyberfjord "></i></a>
            <a href="#"><i class="fak fa-humatica "></i></a>
        </aside>
    </div>

</header>