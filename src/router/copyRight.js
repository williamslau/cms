import copyRight from '@/components/copyRight'
export default [
    {
        path: '/copyRight',
        name: '版权管理',
        component: copyRight.copyRight
    },{
        path: '/copyRight/addCopyRight',
        name: '新增版权',
        component: copyRight.addCopyRight
    },{
        path:'/copyRight/contract',
        name: '版权合同',
        component: copyRight.contract
    },{
        path:'/copyRight/copyRightDetails',
        name: '版权方信息',
        component: copyRight.copyRightDetails
    },{
        path:'/copyRight/contract/contractDetails',
        name: '合同详情',
        component: copyRight.contractDetails
    },{
        path:'/copyRight/contract/addContract',
        name: '添加合同',
        component: copyRight.addContract
    },{
        path:'/copyRight/contract/bookListDetails',
        name: '书单明细',
        component: copyRight.bookListDetails
    }
]