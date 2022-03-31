<script>
  import "../app.css";
  import "../main.css";
  import Header from "../lib/components/Header.svelte";
  import {page} from "$app/stores";
</script>


{#if $page.url.pathname !== "/"}
    <Header />
{/if}
<slot />
