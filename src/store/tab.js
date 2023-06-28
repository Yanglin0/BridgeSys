import { createStore } from 'vuex'

const tab = createStore({
    state() {
        return {
            isCollapse: false,
            tabsList:[// 面包屑数据
            {
                path:'/',
                name:'Main',
                label:'首页',
                icon:'s-home',
                url:'firstPage'
            }    
            ],
            account: '',
            password: ''
        }
    },
    mutations: {
        collapseChange(state) {
            state.isCollapse = !state.isCollapse
        },
        menuChange(state,val){
            // 更新面包屑的数据 val 菜单对象数据
            if(val.name !== 'main'){
                const index = state.tabsList.findIndex(item => item.name === val.name)
                if(index === -1){
                    state.tabsList.push(val)
                }
            }
        }

    }
})
export default tab