const port = process.env.BLADE_PORT || 8080
const proxy = process.env.BLADE_PROXY;
const publicPath = process.env.ZFT_PUBLIC_PATH || '/';
module.exports = {
    "proxy": {
        "/api": {
            "target": proxy || "http://mock.example.com",
            pathRewrite: {
                '^/api': ''
            },
            changeOrigin: true
        }
    },
    port: port,
    // options: mobile|pc|hybrid
    type: "pc",
    framework: "vue",
    title: "壁虎",
    layout: { main: '~/components/app.vue' },
    "routes": {
        // 'papers-details': "/:id"
    },
    // 全局 import less
    resources: "static/less/base.less",
    plugins: {
        global: '~/plugins/all',
        route: '~/plugins/route',
    },
    build: {
        publicPath
    },
    // vuex: '~/plugins/route',
    router: {
        base: "/"
    },
    vendors: ['element-ui'],
    /**
     * 域名，公众号，公共配置地址，
     * 只能为字符串的键值对
     * @type {Object}
     */
    env: {
        default: {}
    }
}