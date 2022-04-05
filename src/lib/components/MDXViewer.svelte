<script>
    import SvelteMarkdown from 'svelte-markdown'
    import { marked } from 'marked'

    export let md


    const selectorTokenizerExtension = {
        name: "selector",
        level: "block",
        start(src) {
            return src.match(/\[\[selector/)?.index;
        },
        tokenizer(src, tokens) {
            const rule = /^\[\[selector\s*(.*)?\]\]/;
            const match = rule.exec(src);
            if (match) {
                return {
                    type: "selector",
                    raw: match[0],
                    text: match[1],
                };
            }
        },
    };

    marked.use({ extensions: [selectorTokenizerExtension] });
    const options = marked.defaults;

</script>

<div class="articleTheme">
    <SvelteMarkdown source={md} {options} />
</div>



<!--<SvelteMarkdown {source} renderers={{
	'selector': Fake
}} {options} />-->

