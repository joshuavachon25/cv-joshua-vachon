<script>
    export let title;
    export let author;
    export let date;
</script>



<div class="pageH pageWs">

    <h1>{ title }</h1>
    <p>on: { date }</p>
    <p >by: { author }</p>
    <slot/>
</div>

