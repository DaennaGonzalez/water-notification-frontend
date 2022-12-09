export default {

    name: 'comments',
    component: () => import(/* webpackChunkName: "comments" */ '@/modules/comments/layouts/CommentsLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "comments-no-entry" */ '@/modules/comments/views/NoEntrySelected.vue'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "comments-no-entry" */ '@/modules/comments/views/EntryView.vue'),
            meta: {
                requiresAuth: true
            },
            props: ( route ) => {
                return {
                    id: route.params.id
                }
            }
        }
    ]

}