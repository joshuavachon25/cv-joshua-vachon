<script>
  import "../app.css";
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

    <div class="absolute left-0 top-0 h-screen w-full lg:w-2/3">
        <slot />
    </div>

    <Hamburger sites={sites} reseaux={reseaux} menu={menu}/>
    <div class="hidden fixed right-20 top-1/2 transform -translate-y-1/2 lg:flex flex-col w-1/3">
        <div class="flex flex-col gap-2 lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-black text-right justify-center items-end">
            <a href="/"><div class="-mr-10 inline-block w-48 h-48 transition-opacity duration-500 face" style="background-image: url('/facejoshua.svg'); background-repeat: no-repeat; background-position: center; background-size: contain; opacity: {$page.url.pathname === '/' ? '0': '100'}">
            </div></a>
            {#each menu as item}
                <a class="texte {$page.url.pathname === item.url ? 'texteGlou': 'text-black'}" href={item.url}>{item.nom}</a>
            {/each}
            <div class="flex flex-row items-center px-6 gap-3 text-3xl text-black h-20">
                {#each reseaux as reseau}
                    <a href={reseau.url}><i class={reseau.icone}></i></a>
                {/each}
            </div>
        </div>
    </div>
