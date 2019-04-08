import platform from '@/components/platform'

export default [
    {
        path: '/platform',
        name: '平台管理',
        component: platform.platform
    },{
        path: '/platform/empower',
        name: '授权管理',
        component: platform.empower
    },
]