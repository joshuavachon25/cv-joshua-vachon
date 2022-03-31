<script>
    import {onMount} from "svelte";
    import * as THREE from 'three'
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

    onMount(() => {
        const canvas = document.querySelector('canvas.webgl')
        const scene = new THREE.Scene()

        const textureLoader = new THREE.TextureLoader()

        const particulesGeometry = new THREE.BufferGeometry()
        const particuleTexture = textureLoader.load('/10.png')
        const count = 500

        const positions = new Float32Array(count*3)
        const colors = new Float32Array(count*3)

        for(let i = 0; i < count * 3; i++){
            positions[i] = (Math.random() - 0.5) * 10
            colors[i] = Math.random()
        }

        particulesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        particulesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

        const particulesMaterial = new THREE.PointsMaterial({
            size: 0.1,
            sizeAttenuation: true,
            color: new THREE.Color("#ff88cc"),
            transparent: true,
            alphaMap: particuleTexture,
            depthWrite: false,
            vertexColors: true
        })


        const particules = new THREE.Points(particulesGeometry, particulesMaterial)

        scene.add(particules)

        const sizes = {
            width: window.innerWidth -100,
            height: window.innerHeight -100
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


        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
        camera.position.z = 3
        scene.add(camera)


        const controls = new OrbitControls(camera, canvas)
        controls.enableDamping = true


        const renderer = new THREE.WebGLRenderer({
            canvas: canvas
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


        const clock = new THREE.Clock()

        const tick = () =>
        {
            const elapsedTime = clock.getElapsedTime()

            //particules.rotation.y = elapsedTime

            /*for(let i=0; i<count; i++){
                const i3 = i * 3
                particulesGeometry.attributes.position.array[i3 + 1] = elapsedTime
            }

            particulesGeometry.attributes.position.needsUpdate = true*/

            // Update controls
            controls.update()

            // Render
            renderer.render(scene, camera)

            // Call tick again on the next frame
            window.requestAnimationFrame(tick)
        }

        tick()
    })
</script>

<canvas class="webgl"></canvas>