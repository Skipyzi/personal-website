import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";

const site = lume({dest: "./out"});

site.use(jsx());

export default site;