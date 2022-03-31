<div class="wrap-scene">
    <div class="scene">
        <div class="floor"></div>
        <div class="cube">
            <div class="front"></div>
            <div class="back"></div>
            <div class="right"></div>
            <div class="left"></div>
            <div class="top"></div>
            <div class="bottom"></div>
        </div>
        <div class="ball"></div>
    </div>
</div>


<style>
    :root{
        --boxColour: rgba(0, 255, 255, 0.44);
        --size: 10px;
    }

    .wrap-scene{
        height:90vh;
        display: flex;
        justify-content: center;
        align-items: center;
        perspective: 15em;
        perspective-origin: 50% calc(50% - 2em);
    }

    .scene{
        position: relative;
        font-size: 50px;
        transform-style: preserve-3d;
    }

    .ball{
        width: 1em;
        height: 1em;
        border-radius: 50%;
        background: crimson;
        position: absolute;
        bottom: 1em;
        left: -0.5em;
    }

    .cube{
        width: 2em;
        height: 2em;
        position: absolute;
        top: -1em;
        left: -1em;

    }

    .left, .right, .front, .back{
        position: absolute;
        width: 100%;
        height: 100%;
        background: var(--boxColour);
    }

    .front{
        transform: translateZ(1em);
    }
    .right{
        transform: rotateY(90deg)  translateZ(1em);
    }
    .back{
        transform: rotateY(180deg) translateZ(1em);
    }
    .left{
        transform: rotateY(270deg)  translateZ(1em);
    }

    .floor{
        width: 5em;
        height: 5em;
        background-image: repeating-conic-gradient(from 45deg, #111 -0deg 90deg, #222 90deg 180deg);
        background-size: 1em 1em;
        position: absolute;
        top: 1em;
        transform: translate(-50%, -50%) rotateX(90deg);
    }
</style>