import verify from '@/components/verify'

export default [
    {
        path: '/verifyList',
        name: '审核列表',
        component: verify.verifyList
    },{
        path: '/verifyList/verify',
        name: '审核详情',
        component: verify.verify
    },
]