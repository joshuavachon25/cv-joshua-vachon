<script>
    export let utilisateur
    let avatar = utilisateur?.avatar ? utilisateur?.avatar : 'https://avatars.dicebear.com/api/initials/' + utilisateur.name.replace(" ", "-") +'.svg'
</script>

<div class="mt-6 flex flex-row gap-3 p-3 bg-gray-200 shadow-md rounded-xl">
    <div class="flex flex-col">
        <img class="w-24 h-24 rounded-xl" src={avatar}>
    </div>
    <div class="flex flex-col ">
        <h5 class="text-lg font-bold">{utilisateur.name}</h5>
        <p class="italic text-xs">{utilisateur.bio}</p>
    </div>
</div>