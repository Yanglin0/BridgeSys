// import { createStore } from 'vuex'

// const store = createStore({
//     state() {
//         return {
//             count: 0,
//             todos: [
//                 { id: 1, text: '吃饭', done: true },
//                 { id: 2, text: '睡觉', done: false },
//             ]
//         }
//     },
//     mutations: {
//         increment(state) {
//             state.count+=1
//         }
//     },
//     getters: {
//         doneTodos: state => {
//             return state.todos.filter(todo => todo.done)
//         }
//     }
// })

// export default store;

import { createStore } from 'vuex'
import tab from './tab'
const store = new createStore({
    modules: {
        tab
    }
})
export default store