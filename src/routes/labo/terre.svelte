<script>
    import * as THREE from 'three';
    import * as SC from 'svelte-cubed';
    import { onMount } from "svelte";
    import { spring } from "svelte/motion"

    let terre, bump, normal, spec, cloud, cloudTrans, sky
    let rotationPlanete = 0

    onMount(() => {
        terre = new THREE.TextureLoader().load( '/mapTexture.jpg' );
        sky =  new THREE.TextureLoader().load( '/sky.jpg');
        bump = new THREE.TextureLoader().load( '/earthbump1k.jpg' );
    });

    SC.onFrame(() => {
        rotationPlanete += 0.001;
    });

    function handleSC(){
        isActive = !isActive
    }

    let isActive = false
    let xPos = spring(0)
    $: $xPos = isActive ? 10 : 0
</script>

<div class="w-screen h-screen relative">

    <SC.Canvas antialias shadows alpha={true}>
        <SC.Mesh
                geometry={new THREE.SphereGeometry(1, 45, 45)}
                material={new THREE.MeshStandardMaterial({
                    map: terre,
                    displacementMap: bump,
                    displacementScale: 0.05,
                    bumpMap: bump,
                    bumpScale: 0.01,

                })}
                position={[$xPos,0,0]}
                rotation={[0, rotationPlanete, 0]}
        />

        <SC.Mesh
                geometry={new THREE.SphereGeometry(4, 45, 45)}
                material={new THREE.MeshStandardMaterial({
                    side: THREE.DoubleSide,
                    map: sky,
                    transparent: true,
                    opacity: 0.7

                })}
                rotation={[0, -rotationPlanete/3, 0]}
        />

        <SC.PerspectiveCamera position={[1, 1, 3]} rotate={[0, 0, 25]}/>
        <SC.SpotLight position={[5, 0, -10]} color={0xff00ff}  lookAt={[0,0]}/>
        <SC.SpotLight position={[0, 10, -10]} color={0x0000ff}  lookAt={[0,0]}/>
        <SC.SpotLight position={[20, 1, 20]} color={0xffffff} />
    </SC.Canvas>
    <div class="absolute bottom-20 left-20 flex flex-col">
        <h1 class="text-9xl leading-none"><span class="font-bold">JOSHUA</span><br>VACHON</h1>
        <div class="flex flex-row gap-5 text-2xl text-white">
            <a class="hover:bg-accent" href="/blog">Blog</a>
            <a class="hover:bg-accent" href="/portfolio">Portfolio</a>
            <a class="hover:bg-accent" href="/labo">Labo</a>
            <a class="hover:bg-accent" href="/cv">CV</a>
        </div>
    </div>
    <div class="absolute bottom-20 right-20 flex flex-col w-1/3">
        <p>Développeur, cartographe, spécialiste en humanités numériques, curieux et fan de sumo</p>
    </div>

    <!--<div class="flex-row">
        <div class="animationbase">
            <svg viewBox="0 0 762 580" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute">
                <circle class="animation-bg-sphere" cx="306.244" cy="167.224" r="166.236" fill="#7098FE" fill-opacity="0.36"/>
                <circle class="animation-bg-sphere1" cx="560.986" cy="323.455" r="200.099" fill="#AF1FF2" fill-opacity="0.13"/>
                <circle class="animation-bg-sphere2" cx="200.808" cy="379.636" r="200.099" fill="#A9DBD2" fill-opacity="0.32"/>
            </svg>
            <img src="/jv-moine.png" class="absolute moine">


        </div>
    </div>
    -->

</div>

