<script>
    import * as THREE from 'three';
    import * as SC from 'svelte-cubed';
    import {FontLoader } from "three/examples/jsm/loaders/FontLoader.js"
    import {TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js"
    import { onMount } from "svelte";
    import { spring } from "svelte/motion"

    onMount(() => {
        
    })

</script>


<div class="w-screen h-screen relative">

    <SC.Canvas antialias shadows alpha={true}>

        <SC.PerspectiveCamera position={[1, 1, 3]} rotate={[0, 0, 25]}/>
        <SC.SpotLight position={[20, 1, 20]} color={0xffffff} />
    </SC.Canvas>


</div>

