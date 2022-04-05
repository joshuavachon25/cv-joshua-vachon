<script>
    import {page} from "$app/stores";

    const getProjet = async () => {
        let req = await fetch(`/api/getProject/${$page.params.id}`)
        let res = await req.json()
        return res.projet
    }
</script>


<div class="w-4/5 mx-auto">
    {#await getProjet()}
        Loading
    {:then projet}
        <div class="flex flex-row">
            <div class="shrink-0">
                <img class="w-96" src={projet.cover}>
                <div>
                    <img src={projet.cover} class="w-24">
                    <img src={projet.img1} class="w-24">
                    <img src={projet.img2} class="w-24">
                    <img src={projet.img2} class="w-24">
                </div>
            </div>
            <div>
                <h1 class="text-3xl">{projet.titre}</h1>
                <p>Description: {projet.content}</p>
            </div>
        </div>

    {/await}

</div>