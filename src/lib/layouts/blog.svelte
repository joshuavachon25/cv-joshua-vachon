<script>
    export let title, author, date, img, extrait
</script>


<h1 class="mt-28 text-5xl text-white">{ title }</h1>
<div class="w-full p-8 lg:w-4/5 xl:w-3/5 mx-auto mb-20 lg:-mt-10 text-black rounded-xl">
    <p class="text-xl mb-5 font-bold">{extrait}</p>
    <div class="articleTheme">
        <slot/>
    </div>
</div>

