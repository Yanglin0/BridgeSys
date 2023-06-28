<template>
    <div class="container">
        <div class="login">
            <h1>Login</h1>
            <!-- <ul>
                <li v-for="todo in doneTodos" :key="todo.id">{{ todo.text }}</li>
            </ul>  -->
            <div class="username">
                <span>账号：</span>
                <input v-model="account" type="text" />
            </div>
            <div class="password">
                <span>密码：</span>
                <input v-model="password" type="password" />
            </div>
            <div class="login_control">
                <button @click="login">登录</button>
                <button @click="login">注册</button>
            </div>
        </div>    
    </div>
</template>
<script>
// import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
    name: 'login',
    components: {

    },
    data: function () {
        return {
            account: '',
            password: '',
        }
    },
    // computed: {
    //     ...mapState([
    //     'count','todos'
    //     ]),
    //     ...mapGetters([
    //     'doneTodos'
    //     ])

    // },
    methods: {
        add(){},
        login() {
            // this.add()
            // this.$store.commit('increment', 2)
            // console.log(this.$store.state.count)
            this.$router.push('/Main')
            // const that = this
            // this.$axios.get("http://localhost:80/login", {
            //     params: {
            //         account: this.account,
            //         password: this.password,
            //     }
            // }).then(res => {
            //     if (res.data === 1) {
            //         // 跳转到主页面中
            //         this.$router.push('/main')
            //     } else {

            //     }
            // })
        },
        // ...mapMutations({
        //     add: 'increment'
        // })
    },
    mounted() {
        //DOM初始化完成进行地图初始化
        console.log("Login开始渲染")
    }

}
</script>
<style scoped>

.login {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(49, 49, 53);
    border-radius: 0.7rem;
    width: 300px;
    height: 250px;
}

input {
    box-sizing: border-box;
    border: 4px solid #1c6ab8;
    width: 10rem;
    height: 2rem;
    border-radius: 0.5rem;
    border-style: none;
    background-color: rgb(32, 32, 34);
    color: #fff;
}

button {
    background-color: #1f614c;
    width: 80px;
    height: 40px;
    border-radius: 0.5rem;
    border-style: none;
    box-shadow: 0rem;
    color: #fff;
}

button:hover {
    background-color: #05573d;
}

h1 {
    color: #fff;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: xx-large;
}

span {
    color: #fff;
}

input:focus {
    outline: none;
    border: 4px solid #1c6ab8;
}

.username {
    display: flex;
    justify-content: start;
}

.password {
    display: flex;
    justify-content: start;
}

.login_control {
    width: 100%;
    display: flex;
    justify-content: space-around;
}</style>
