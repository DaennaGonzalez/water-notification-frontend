export default {

    name: 'graphs',
    component: () => import(/* webpackChunkName: "graphs" */ '@/modules/graphs/layouts/GraphsLayouts.vue'),
    children: [
        {
            path: '',
            name: 'graphsPage',
            component: () => import(/* webpackChunkName: "graphsPage" */ '@/modules/graphs/views/GraphsPage.vue'),
            meta: {
                requiresAuth: true
            }
        }
    ]

}