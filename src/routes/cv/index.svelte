<script>
    import {stacks} from '$lib/utils/techIcons'
    import gsap from "gsap";
    import scrollTrigger from "gsap/ScrollTrigger";

    import {onMount} from "svelte";
    const formations = [
        {
            titre: "Certificat professionnel - Computer science for Web Programming",
            annee: "En cours",
            institution: "HarvardX University (EdX)",
            detail: "Formation courte en sciences informatiques appliquée au développement web avec Python/Django et Javascript/React"
        },
        {
            titre: "M.A. Histoire - Informatique appliquée",
            annee: "2019 - En cours",
            institution: "Université de Sherbrooke",
            detail: "Mémoire à venir: « Boire et manger à Strasbourg: Cartographie du système alimentaire strasbourgeois durant l'entre-deux-guerres (1919-1939) » "
        },
        {
            titre: "Certificat de complétion - DH101 Introduction to Digital Humanities",
            annee: "2019",
            institution: "HarvardX University (EdX)",
            detail: "Cours d'introduction aux humanités numérique par l'Université de Harvard"
        },
        {
            titre: "B.A. Multidisciplinaire",
            annee: "2016 - 2018",
            institution: "Université de Sherbrooke",
            detail: "Formation multidisciplinaire composé d'un certificat en communication appliquée, d'un certificat en histoire et d'un certificat multidisciplinnaire"
        },
        {
            titre: "DEC Sciences humaines - Culture, environnement et droits humains",
            annee: "2014 - 2016",
            institution: "Cégep Beauce-Appalaches",
            detail: "Formation en sciences humaines orienté autour de la géographie, l'histoire et la sociologie."
        },
        {
            titre: "Technique en informatique de gestion",
            annee: "2012 - 2014",
            institution: "Cégep Beauce-Appalaches",
            detail: "Deux ans de formation en informatique de gestion (développement logiciel). Étude de l'algorithmie et application avec divers langages: VB.net, C, C++, C#, Javascript, Asp.Net..."
        }
    ]
    const experiences = [
        {
            titre: "Directeur technique, développeur web et fondateur",
            annee: "2021 - Aujourd'hui",
            institution: "Studio Cyberfjord S.E.N.C.",
            detail: "Gestion d'une petite société en nom collectif de développement d'application web. Participation à la plannification, le développement, le déploiement et la maintenance des projets."
        },
        {
            titre: "Cartographe",
            annee: "2021 - Aujourd'hui",
            institution: "Studio Cyberfjord S.E.N.C.",
            detail: "Conception de cartes historiques pour des présentations scientifiques ou pour des publication."
        },
        {
            titre: "Auxillaire de recherche et d'enseignement",
            annee: "2018 - Aujourd'hui",
            institution: "Université de Sherbrooke",
            detail: "Divers contrats d'auxiliaire, incluant la préparation de contenus pour le cours, de la correction, le développement d'applications web, conception de cartes, photogrammétrie..."
        },
        {
            titre: "Webmaster et développeur principal",
            annee: "2018 - Aujourd'hui",
            institution: "Historiamati.ca",
            detail: "Gestion et développement de la plateforme de démocratisation des humanités numériques Historiamatica. Développement de son successeur: Humatica (En cours)."
        },
        {
            titre: "Chargé de projet",
            annee: "Été 2016",
            institution: "Domaine Taschereau - Parc nature",
            detail: "Réalisation d'un projet d'une carte écologico-touristique de ce parc en milieu humide"
        },
        {
            titre: "Préposé aux archives",
            annee: "Été 2014",
            institution: "Société historique de Saint-Benoit-Labre",
            detail: "Gestion des archives. Développement d'un système de gestion des photos d'archives et des documents funéraires."
        },
        {
            titre: "Chargé de projet",
            annee: "Été 2013",
            institution: "Domaine Taschereau - Parc nature",
            detail: "Planification et développement du site web de l'organisme"
        }
    ]
    const langages = [stacks['html'],stacks['css'],stacks['js'],stacks['svelte-kit'],stacks['vue'],stacks['nuxt'],stacks['php'],stacks['python'],stacks['flutter'],stacks['plus']]
    const logiciels = [stacks['webstorm'],stacks['vscode'],stacks['figma'],stacks['qgis'],stacks['affinity'],stacks['godot'],stacks['blender'],stacks['plus']]

    onMount(() => {
        gsap.registerPlugin(scrollTrigger);
        gsap.utils.toArray(".page").forEach((page, i) => {
            gsap.to(page, {
                scrollTrigger: {
                    trigger: page,
                    start: "top 50",
                    scrub: 1,
                    pin: true
                },
                duration: 6,
                opacity: 0
            })
        })
        gsap.utils.toArray(".panel").forEach((page, i) => {
            gsap.to(page, {
                scrollTrigger: {
                    trigger: page,
                    start: "top 25",
                    end: "bottom",
                    scrub: 1,
                    pin: true
                },
                duration: 6,
                opacity: 0,
                scale: 1,
                background:"#f0f0f0"
            })
        })

    })
</script>



<div class="flex flex-col ">

    <div class="w-full min-h-screen flex flex-col justify-center items-center page ">
        <img src="/facejoshua.svg" class="w-1/6 face">
        <h1>JOSHUA L.J. VACHON</h1>
        <blockquote class="prose prose-2xl text-center mx-auto">J'existe car je suis, mais qui est ce 'je' qui écrit? Pour le découvrir, ces lignes ne suffiront pas, mais au moins vous sortirez du brouillard.</blockquote>
        <i class="fa-solid fa-chevrons-down animate-bounce fa-3x mt-10"></i>
    </div>

    <div class="page flex flex-col">
        <p class="prose-2xl w-3/5 mx-auto text-justify">Joshua L.J. Vachon termine présentement une maîtrise en histoire de type informatique appliquée à l'Université de Sherbrooke. Depuis sa tendre enfance, ce qui caractérise Joshua, c'est sa curiosité pour tout et n'importe quoi! Trop curieux peut-être, il n'a pas pu choisir simplement une discipline, ce qui explique un cheminement académique ératique, mais aussi sa grande polyvalence et sa multidisciplinarité. Il a donc su acquérir des compétences autant en développement web, recherche en sciences humaines et sociales qu'en développement logiciel ou qu'en cartographie. </p>
        <i class="fa-solid fa-chevrons-down animate-bounce fa-3x mt-10"></i>
    </div>

    <div class="flex flex-col mt-10 page">
        <div class="grid grid-cols-2">
        <div class="flex flex-col">
            <div class="p-8 lg:mb-6 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <h3 class="mb-4 text-xl md:text-2xl leading-tight font-medium">Web un jour, web toujours</h3>
                <p class="text-coolGray-500  ">Le développement web est un coup de foudre qui me suis depuis mes 11 ans; lorsque nous avons acquis notre premier ordinateur</p>
            </div>

        </div>

        <div class="flex flex-col">
            <div class="p-8 lg:mb-6 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">

                <h3 class="mb-4 text-xl md:text-2xl leading-tight font-medium">Historien, développeur ou Garou?</h3>
                <p class="text-coolGray-500 ">Avant de joindre informatique et histoire dans une maîtrise, j'ai rêvé de bien des professions, dont celle d'être Garou*...  </p><small class="text-xs italic">*Promis, à 5 ans, être Garou pouvait être considéré comme une profession...</small>
            </div>

        </div>
        </div>
        <div>
            <h3 class="mb-4 text-xl md:text-2xl leading-tight font-medium text-center">Langages privilégiés</h3>
            <div class="flex flex-row my-5 w-4/5 mx-auto mb-10 gap-5 justify-center items-center">
                {#each langages as langage}
                    <div class="group w-12 h-12 relative text-center mx-auto">
                        {@html langage.icone}
                        <div class="text-center rounded-md z-50 select-none font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-95 absolute top-1/2 left-1/2 w-auto px-5 block -translate-y-1/2 -translate-x-1/2">
                            {langage.nom}
                        </div>
                    </div>
                {/each}
            </div>
            <h3 class="mb-4 text-xl md:text-2xl leading-tight font-medium text-center">Logiciels privilégiés</h3>
            <div class="flex flex-row my-5 w-4/5 mx-auto mb-10 gap-5 justify-center items-center">
                {#each logiciels as logiciel}
                    <div class="group w-12 h-12 relative text-center mx-auto">
                        {@html logiciel.icone}
                        <div class="text-center rounded-md z-50 select-none font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-95 absolute top-1/2 left-1/2 w-auto px-5 block -translate-y-1/2 -translate-x-1/2">
                            {logiciel.nom}
                        </div>
                    </div>
                {/each}
            </div>
            <h4 class="prose-2xl text-center mt-20">
                Téléchargez <a href="#"  class="text-purple-500 font-bold">mon CV</a> ou continuez à dérouler pour voir mes formations et expériences pertinentes!
            </h4>
        </div>

    </div>

    <h2 class="w-4/5 mx-auto mt-28">Formations</h2>
        {#each formations as formation}
            <div class="bg-white box p-4 shadow-md w-4/5 mx-auto my-3 panel scale-110">
                <div>
                    <p  class="text-sm">{formation.institution}</p>
                </div>
                <div class="flex flex-row justify-between">
                    <p class="text-xl font-medium">{formation.titre}</p>
                    <p  class="text-xl">{formation.annee}</p>
                </div>

                <div>
                    <p  class="text-lg italic px-4">{formation.detail}</p>
                </div>
            </div>
        {/each}
    <h2 class="w-4/5 mx-auto mt-28">Expériences</h2>
    {#each experiences as experience}
        <div class="bg-white p-4 shadow-md w-4/5 mx-auto my-3 panel scale-110">
            <div>
                <p  class="text-sm">{experience.institution}</p>
            </div>
            <div class="flex flex-row justify-between">
                <p class="text-xl font-medium">{experience.titre}</p>
                <p  class="text-xl">{experience.annee}</p>
            </div>

            <div>
                <p  class="text-lg italic px-4">{experience.detail}</p>
            </div>
        </div>
    {/each}

    <div class="h-screen flex flex-col justify-center items-center">
        <img src="jv-moine.png">
        <p class="text-xs">PS.: Je suis fan de sumo (d'ou le dessin à l'accueil) </p>
    </div>

</div>


<style>
    .page{
        @apply w-full h-screen
    }
</style>