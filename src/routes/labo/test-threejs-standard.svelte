<script>
    import * as THREE from "three"
    import {onMount} from "svelte";
    import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

    onMount( () => {
        const loadingManager = new THREE.LoadingManager()
        const textureLoader = new THREE.TextureLoader(loadingManager)
        const colorTexture = textureLoader.load('/mapTexture.jpg')

        const canvas = document.querySelector('canvas.webgl')

        const renderer = new THREE.WebGLRenderer({canvas: canvas, alpha: true})
        renderer.setSize(800, 800)
        renderer.setPixelRatio(window.devicePixelRatio*2)

        const scene = new THREE.Scene()
        scene.background = null

        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
        camera.position.z = 9
        scene.add(camera)

        const mat = new THREE.MeshStandardMaterial({map: colorTexture})
        const earth = new THREE.Mesh(new THREE.SphereGeometry(3, 64, 32), mat)

        scene.add(earth)

        const orbit = new OrbitControls(camera, canvas)
        orbit.enableDamping = true
        orbit.enableZoom = false
        orbit.enablePan = false
        orbit.autoRotate = true

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
        const point = new THREE.PointLight(0xffffff, 1)
        point.position.x = 0
        point.position.z = 7
        point.position.y = 0
        scene.add(ambientLight, point)

        const clock = new THREE.Clock()

        const tick = () => {
            const elapsedTime = clock.getElapsedTime()

            orbit.update()
            renderer.render(scene, camera)
            window.requestAnimationFrame(tick)
        }

        tick()

    });
</script>

<canvas class="webgl"></canvas>
