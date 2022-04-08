<script>
    import "../app2.css";
    import {page} from "$app/stores";

    import Hamburger from "$lib/components/Hamburger.svelte";

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

<div class="flex flex-row">
    <div class="w-1/12"></div>
    <div class="h-screen w-full lg:w-8/12 flex flex-col">
        <a class="grow-0 mt-10" href="/">
            <h1><span class="font-bold">JOSHUA</span><span class="font-light">VACHON</span></h1>
        </a>
        <slot />
    </div>

    <div class="w-2/12">
        <div class="flex flex-row gap-4 justify-end mt-10">
            <a href="https://twitter.com/joshuavachon25" class="transition-colors duration-500 hover:text-mauve" target="_blank"><i class="fa-brands fa-twitter fa-2x"></i></a>
            <a href="https://www.linkedin.com/in/joshuavachon25/" class="transition-colors duration-500 hover:text-mauve" target="_blank"><i class="fa-brands fa-linkedin-in fa-2x"></i></a>
            <a href="https://github.com/joshuavachon25" class="transition-colors duration-500 hover:text-mauve" target="_blank"><i class="fa-brands fa-github fa-2x"></i></a>
            <a href="https://stackblitz.com/@joshuavachon25" class="transition-colors duration-500 hover:text-mauve" target="_blank"><i class="fa-solid fa-bolt fa-2x"></i></a>
        </div>
        <div class="text-right flex flex-col justify-center h-full items-end -mt-20">
            <div class="sticky top-0 bottom-0">
                {#each menu as item}
                    <a class="lien transition-all duration-500 my-3 {$page.url.pathname === item.url ? 'texteGlou': 'text-black '} hover:text-mauve hover:tracking-wider" href={item.url}>{item.nom}</a>
                {/each}
            </div>
        </div>

    </div>
    <div class="w-1/12"></div>
</div>
