<script>
    import * as THREE from "three"
    import * as SC from "svelte-cubed"
    import { fly } from "svelte/transition"
    import {spring} from "svelte/motion";
    import {onMount} from "svelte";

    let rotation = 0
    let cercle
    let isStar = false

    function bt(){
        isStar = true
        setTimeout(() => {
            isStar = false
        }, 40)
    }

    SC.onFrame(()=>{
        rotation += 0.01
    })
</script>
<button class="relative z-50 btn text-white" on:click={bt}>Tester</button>
{#if isStar}
<div class="relative w-20 h-20" out:fly={{opacity: 0, y: -100}}>

    <SC.Canvas antialias shadows alpha>
        <SC.Group rotation={[0, rotation, 0 ]}>
            <SC.Mesh
                    geometry={new THREE.SphereGeometry(1,30,30)}
                    material={new THREE.MeshToonMaterial({color: 0xaf0000})}
            />
            <SC.Mesh
                    geometry={new THREE.SphereGeometry(0.5,30,30)}
                    material={new THREE.MeshToonMaterial({color: 0xaf0000})}
                    position={[0,1,1]}
            />


        </SC.Group>

        <SC.PerspectiveCamera position={[3, 3, 3]}/>
        <SC.DirectionalLight position={[1, 2, 1]} shadow={{mapSize: [2048,2048]}} instensity={1} />
    </SC.Canvas>

</div>
{/if}