<script>
    import * as THREE from "three"
    import {onMount} from "svelte";
    import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

    let hauteur = 2.5
    let lumiere = 0.5

    onMount( () => {
        const canvas = document.querySelector('canvas.webgl')

        const scene = new THREE.Scene()
        const fog = new THREE.Fog('#262837', 1, 15)
        scene.fog = fog

        const textureLoader = new THREE.TextureLoader()

        const doorColorTexture = textureLoader.load('/textures/door/color.jpg')
        const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg')
        const doorAmbientTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
        const doorHeightTexture = textureLoader.load('/textures/door/height.jpg')
        const doorNormalTexture = textureLoader.load('/textures/door/normal.jpg')
        const doorMetalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
        const doorRoughnessTexture = textureLoader.load('/textures/door/roughness.jpg')

        const bricksColorTexture = textureLoader.load('/textures/bricks/color.jpg')
        const bricksAmbientTexture = textureLoader.load('/textures/bricks/ambientOcclusion.jpg')
        const bricksNormalTexture = textureLoader.load('/textures/bricks/normal.jpg')
        const bricksRoughnessTexture = textureLoader.load('/textures/bricks/roughness.jpg')

        const grassColorTexture = textureLoader.load('/textures/grass/color.jpg')
        grassColorTexture.repeat.set(8,8)
        const grassAmbientTexture = textureLoader.load('/textures/grass/ambientOcclusion.jpg')
        grassAmbientTexture.repeat.set(8,8)
        const grassNormalTexture = textureLoader.load('/textures/grass/normal.jpg')
        grassNormalTexture.repeat.set(8,8)
        const grassRoughnessTexture = textureLoader.load('/textures/grass/roughness.jpg')
        grassRoughnessTexture.repeat.set(8,8)

        grassColorTexture.wrapS = THREE.RepeatWrapping
        grassAmbientTexture.wrapS = THREE.RepeatWrapping
        grassNormalTexture.wrapS = THREE.RepeatWrapping
        grassRoughnessTexture.wrapS = THREE.RepeatWrapping

        grassColorTexture.wrapT = THREE.RepeatWrapping
        grassAmbientTexture.wrapT = THREE.RepeatWrapping
        grassNormalTexture.wrapT = THREE.RepeatWrapping
        grassRoughnessTexture.wrapT = THREE.RepeatWrapping
        /**
         * House
         */
        const house = new THREE.Group()
        scene.add(house)

        const walls = new THREE.Mesh(
            new THREE.BoxBufferGeometry(4,hauteur,4),
            new THREE.MeshStandardMaterial({
                map: bricksColorTexture,
                aoMap: bricksAmbientTexture,
                normalMap: bricksNormalTexture,
                roughnessMap: bricksRoughnessTexture
            })
        )
        walls.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(walls.geometry.attributes.uv.array, 2))
        walls.position.y = hauteur/2

        const roof = new THREE.Mesh(
            new THREE.ConeBufferGeometry(3.5, 1, 4 ),
            new THREE.MeshStandardMaterial({color:"#b35f45"})
        )

        roof.position.y = hauteur + 0.5
        roof.rotation.y = Math.PI * 0.25




        const door = new THREE.Mesh(
            new THREE.PlaneBufferGeometry(2.2,2.2, 100, 100),
            new THREE.MeshStandardMaterial({
                map: doorColorTexture,
                transparent: true,
                alphaMap: doorAlphaTexture,
                aoMap: doorAmbientTexture,
                displacementMap: doorHeightTexture,
                displacementScale: 0.1,
                normalMap: doorNormalTexture,
                metalnessMap: doorMetalnessTexture,
                roughnessMap: doorRoughnessTexture
            })
        )
        door.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(door.geometry.attributes.uv.array, 2))
        door.position.z= 2.007
        door.position.y = 1



        const bushGeometry = new THREE.SphereBufferGeometry(1,16,16)
        const bushMaterial = new THREE.MeshStandardMaterial({color: "#89c854"})

        const bush1 = new THREE.Mesh(bushGeometry, bushMaterial)
        bush1.scale.set(0.5, 0.5, 0.5)
        bush1.position.set(0.8, 0.2, 2.2)

        const bush2 = new THREE.Mesh(bushGeometry, bushMaterial)
        bush2.scale.set(0.25, 0.25, 0.25)
        bush2.position.set(1.4, 0.1, 2.1)

        const bush3 = new THREE.Mesh(bushGeometry, bushMaterial)
        bush3.scale.set(0.4, 0.4, 0.4)
        bush3.position.set(-0.8, 0.1, 2.2)

        const bush4 = new THREE.Mesh(bushGeometry, bushMaterial)
        bush4.scale.set(0.15, 0.15, 0.15)
        bush4.position.set(-1, 0.05, 2.6)

        house.add(walls, roof, door, bush1, bush2, bush3, bush4)

        const graves = new THREE.Group()
        scene.add(graves)

        const graveGeometry = new THREE.BoxBufferGeometry(0.6, 0.8, 0.2)
        const graveMaterial = new THREE.MeshStandardMaterial({color: "grey"})

        for(let i = 0; i < 50; i++){
            const angle = Math.random() * Math.PI * 2
            const radius = 3.5 + Math.random() * 6
            const x = Math.sin(angle) * radius
            const z = Math.cos(angle) * radius

            const grave = new THREE.Mesh(graveGeometry, graveMaterial)
            grave.position.set(x, 0.3, z)
            grave.rotation.y = (Math.random() - 0.5) * 0.5
            grave.rotation.z = (Math.random() - 0.5) * 0.5
            grave.castShadow = true
            graves.add(grave)
        }



// Floor
        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(20, 20),
            new THREE.MeshStandardMaterial({
                map: grassColorTexture,
                mapScale: 0.1,
                aoMap: grassAmbientTexture,
                normalMap: grassNormalTexture,
                roughnessMap: grassRoughnessTexture
            })
        )
        floor.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(floor.geometry.attributes.uv.array, 2))
        floor.rotation.x = - Math.PI * 0.5
        floor.position.y = 0
        scene.add(floor)

        /**
         * Lights
         */
// Ambient light
        const ambientLight = new THREE.AmbientLight('#b9d5ff', 0.5)
        scene.add(ambientLight)

// Directional light
        const moonLight = new THREE.DirectionalLight('#b9d5ff', 0.5)
        moonLight.position.set(4, 5, - 2)
        scene.add(moonLight)

        const doorLight = new THREE.PointLight("#ff7d46", 1,7)
        doorLight.position.set(0, 2.2, 2.7)
        house.add(doorLight)


        const ghost1 = new THREE.PointLight("#ffffff", 2, 3)
        const ghost2 = new THREE.PointLight("#ffffff", 2, 3)
        const ghost3 = new THREE.PointLight("#ffffff", 2, 3)


        scene.add(ghost1, ghost2, ghost3)
        /**
         * Sizes
         */
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        window.addEventListener('resize', () =>
        {
            // Update sizes
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight

            // Update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            // Update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

        /**
         * Camera
         */
// Base camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
        camera.position.x = 4
        camera.position.y = 2
        camera.position.z = 5
        scene.add(camera)

// Controls
        const controls = new OrbitControls(camera, canvas)
        controls.enableDamping = true

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas
        })
        renderer.setSize(sizes.width - 20, sizes.height - 100)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.setClearColor("#262837")

        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap

        moonLight.castShadow = true
        doorLight.castShadow = true
        ghost1.castShadow = true
        ghost2.castShadow = true
        ghost3.castShadow = true

        walls.castShadow = true
        bush1.castShadow = true
        bush2.castShadow = true
        bush3.castShadow = true
        bush4.castShadow = true

        floor.receiveShadow = true

        doorLight.shadow.mapSize.width = 256
        doorLight.shadow.mapSize.height = 256
        doorLight.shadow.camera.far = 7

        ghost1.shadow.mapSize.width = 256
        ghost1.shadow.mapSize.height = 256
        ghost1.shadow.camera.far = 7

        ghost2.shadow.mapSize.width = 256
        ghost2.shadow.mapSize.height = 256
        ghost2.shadow.camera.far = 7

        ghost3.shadow.mapSize.width = 256
        ghost3.shadow.mapSize.height = 256
        ghost3.shadow.camera.far = 7


        /**
         * Animate
         */
        const clock = new THREE.Clock()

        const tick = () =>
        {
            const elapsedTime = clock.getElapsedTime()

            const ghostAngle = elapsedTime * 0.5
            const ghostAngle2 = -elapsedTime * 0.65
            const ghostAngle3 = elapsedTime * 0.35

            ghost1.position.set(Math.cos(ghostAngle)*4, Math.sin(elapsedTime * 3), Math.sin(ghostAngle)*4)
            ghost2.position.set(Math.cos(ghostAngle2)*6, Math.sin(elapsedTime * 6), Math.sin(ghostAngle2)*3)
            ghost3.position.set(Math.cos(ghostAngle3)*7, Math.sin(elapsedTime * 3), Math.sin(ghostAngle3)*5 + Math.sin(ghostAngle2))
            // Update controls
            controls.update()

            walls.geometry = new THREE.BoxBufferGeometry(4,hauteur,4)
            walls.position.y = hauteur/2
            roof.position.y = hauteur + 0.5

            moonLight.intensity = lumiere

            // Render
            renderer.render(scene, camera)

            // Call tick again on the next frame
            window.requestAnimationFrame(tick)
        }

        tick()

    });
</script>

<div class="gui absolute top-5 left-5 bg-white rounded-md p-10">
    <input type="range" min="2.5" max="6" step="0.5" bind:value={hauteur}>{hauteur}<br>
    <input type="range" min="0" max="1" step="0.1" bind:value={lumiere}>{lumiere}
</div>
<canvas class="webgl"></canvas>
