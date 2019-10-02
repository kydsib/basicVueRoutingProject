export default {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About'),
    meta: {
        displayName: 'About',
        defaultName: 'About:Education'
    },
    children: [
        {
            path: 'education',
            name: 'About:Education',
            component: () => import('@/views/About/Education')
        },
        {
            path: 'career',
            name: 'About:Career',
            component: () => import('@/views/About/Career')
        },
        {
            path: 'knowledge',
            name: 'About:Knowledge',
            component: () => import('@/views/About/Knowledge')
        }
    ]
}