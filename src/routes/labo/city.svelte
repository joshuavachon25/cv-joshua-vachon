<script>
    import * as THREE from "three"
    import * as SC from "svelte-cubed"
    import {spring} from "svelte/motion";

    let rows = 1
    let depth = 10
    let contributions = spring(getContributions())

    function refresh(){
        $contributions = getContributions()
    }

    function getContributions(){
        return new Array(rows * depth).fill(0).map((c)=>{
            return Math.round(Math.random() * 10) + 1
        })
    }

</script>

<div class="absolute bottom-10 left-10 z-50">
    <button on:click={refresh} class="btn">Refresh</button>
</div>

<SC.Canvas antialias shadows alpha>
    {#each $contributions as contribution, index}
        <SC.Mesh
                geometry={new THREE.BoxGeometry(1, 1, 1)}
                position={[Math.floor(index / rows) + (0.1 * Math.floor(index/rows)), contribution/2, (index % rows) + (0.1 * Math.floor(index%rows))]}
                scale={[1, contribution, 1]}
                material={new THREE.MeshStandardMaterial({color: `hsl(${Math.round(contribution*10)},50%,50%)`})}
        />
    {/each}

    <SC.PerspectiveCamera position={[20, 20, 20]}/>
    <SC.OrbitControls origin={[0,0,0]}/>
    <SC.AmbientLight intensity={0.3}/>
    <SC.DirectionalLight position={[10, 20, 15]} instensity={0.5} />
</SC.Canvas>