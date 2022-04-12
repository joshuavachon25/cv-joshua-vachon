<script>
    export let reseaux, sites, menu
    let menuContainer
    let y = 0

    function showMenu(){y = "100vh"}
    function closeMenu(){y = "0px"}
</script>

<button class="block lg:hidden mr-5 text-lg" on:click={showMenu}><i class="fa-solid fa-sushi fa-xl"></i> Menu</button>
<nav class="fixed top-0 lg:hidden text-white left-0 w-screen h-screen bg-gray-900 overflow-hidden transition-all duration-500 z-50" bind:this={menuContainer} style="height: {y};">
    <div class="h-20">
        <button class="block absolute top-3 right-0 lg:hidden h-20 px-10" on:click={closeMenu}><i class="fa-brands fa-mixer fa-2x"></i></button>
    </div>
    {#each menu as lien}
        <a sveltekit:prefetch class="block text-center text-4xl my-8" on:click={closeMenu} href={lien.url}>{lien.nom}</a>
    {/each}
    <div class="flex flex-row mt-20 w-full items-center justify-center">
        {#each reseaux as reseau}
            <a class="block text-center text-2xl my-5 mx-5" href={reseau.url}><i class={reseau.icone + " fa-xl"}></i></a>
        {/each}
    </div>
</nav>