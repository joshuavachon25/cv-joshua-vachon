<script>
    import * as THREE from "three"
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
    import * as SC from "svelte-cubed"
    import {spring} from "svelte/motion";
    import {onMount} from "svelte";

    let star, rotation = 0

    let loader = new GLTFLoader()
    loader.load("/star.gltf", (gltf) => {
        star = gltf.scene.children[0].geometry
    })

    SC.onFrame(() =>{
        rotation += 0.01
    })

</script>


<SC.Canvas antialias shadows alpha>
    <SC.Mesh
            geometry={star}
            position={[0,1,1]}
            rotation={[0, rotation, -Math.PI/2]}
            material={new THREE.MeshStandardMaterial({
                color: 0xffff00,
            })}
            castShadow
            />
    <SC.Group position={[0,-2,0]}>
        <SC.Mesh geometry={new THREE.PlaneGeometry(100, 100)}
                 rotation={[-Math.PI/2, 0,0]}
                 material={new THREE.MeshStandardMaterial({
                    color: "white"
                 })}
                 receiveShadow
        />
        <SC.Primitive position={[0,0.001,0]} object={new THREE.GridHelper(100,100,0x444444, 0x555555)}/>
    </SC.Group>
    <SC.PerspectiveCamera position={[5, 5, 5]}/>
    <SC.OrbitControls origin={[0,0,0]}/>
    <SC.DirectionalLight position={[1, 2, 1]} shadow={{mapSize: [2048,2048]}} instensity={1} />
</SC.Canvas>