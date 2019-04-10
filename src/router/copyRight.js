import copyRight from '@/components/copyRight'
export default [
    {
        path: '/copyRight',
        name: '版权管理',
        component: copyRight.copyRight
    }, {
        path: '/copyRight/addCopyRight',
        name: '版权方信息',
        component: copyRight.addCopyRight
    }, {
        path: '/copyRight/contract',
        name: '版权合同',
        component: copyRight.contract
    }, {
        path: '/copyRight/contract/contractDetails',
        name: '合同详情',
        component: copyRight.contractDetails
    }, {
        path: '/copyRight/contract/addAbroadContract',
        name: '外采合同',
        component: copyRight.addAbroadContract
    }, {
        path: '/copyRight/contract/addWithinContract',
        name: '自有合同',
        component: copyRight.addWithinContract
    }, {
        path: '/copyRight/contract/bookListDetails',
        name: '书单明细',
        component: copyRight.bookListDetails
    }
]