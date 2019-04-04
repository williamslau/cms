import bookAdmin from '@/components/book'

export default [
    {
        path: '/bookList',
        name: '书籍管理',
        component: bookAdmin.bookList
    },
    {
        path: '/bookList/book',
        name: '书籍详情',
        component: bookAdmin.book
    },
]