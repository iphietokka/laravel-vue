import Prism from "prismjs";

export default {
    methods: {
        highlight() {
            let el;
            if (!id) {
                el = this.$refs.bodyHtml;
            } else {
                el = document.getElementById(id);
            }
            console.log('el', el);
            if (el) Prism.highlightAllUnder(el);
        }
    }
}
