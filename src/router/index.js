import { createRouter, createWebHashHistory } from "vue-router"
import Login from "../views/Login.vue"
import Main from "../views/common/Main.vue"
import FirstPage from "../views/FirstPage.vue"
import IBridgeBasicInfo from "../views/IBridgeBasicInfo.vue"
import IBridgeInitialRecord from "../views/IBridgeInitialRecord.vue"
import IBridgeRegularRecord from "../views/IBridgeRegularRecord.vue"
import QBridgeBasicInfo from "../views/IBridgeBasicInfo.vue"
import QBridgeInitialRecord from "../views/QBridgeInitialRecord.vue"
import QBridgeRegularRecord from "../views/QBridgeRegularRecord.vue"
import userSys from "../views/userSys.vue"


const routes = [
    {
        path: '/',
        component: Main,
        redirect: '/FirstPage',
        children: [
            {
                //写根路径下的子页面路由
                path: '/FirstPage',
                component: FirstPage,
            
            }, {
                path: '/IBridgeBasicInfo',
                component: IBridgeBasicInfo
            },
            {
                path: '/IBridgeInitialRecord',
                component: IBridgeInitialRecord
            },
            {
                path: '/IBridgeRegularRecord',
                component: IBridgeRegularRecord
            }, {
                path: '/QBridgeBasicInfo',
                component: QBridgeBasicInfo
            },{
                path: '/QBridgeRegularRecord',
                component: QBridgeRegularRecord
            },{
                path: '/QBridgeInitialRecord',
                component: QBridgeInitialRecord
            }, {
                path: '/userSys',
                component: userSys
            }
        ]
    }, {
        path: '/Login',
        name: 'login',// 主路由
        component: Login,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;
