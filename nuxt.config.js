export default {

    components: true,

    head: {
        titleTemplate: "BBnB: %s",
        htmlAttrs: {
            lang: "en"
        },
        bodyAttrs: {
            class: ["my-style"]
        },
        meta: [{
            charset: "utf-8",

        }],
    },

    router: {
        prefetchLinks: false
    },

    plugins: [
        "~/plugins/maps.client",
        "~/plugins/dataApi"
    ]

}
