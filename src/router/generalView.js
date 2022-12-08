export default {

    name: 'generalView',
    component: () => import(/* webpackChunkName: "generalView" */ '@/modules/generalView/layouts/GeneralViewLayout.vue'),
    children: [
        {
            path: '',
            name: 'default',
            component: () => import(/* webpackChunkName: "generalView-default" */ '@/modules/generalView/views/MapView.vue'),
            meta: {
                requiresAuth: true
            }
        }
    ]

}