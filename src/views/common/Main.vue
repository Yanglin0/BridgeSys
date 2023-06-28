<template>
    <div class="Main">
        <el-container class="allContainer">
            <el-aside width="auto">
                <Aside></Aside>
            </el-aside>
            <el-container class="otherContainer" width="auto">
                <el-header>
                        <Header></Header>
                </el-header>
                <common-tab></common-tab>
                <el-main>
                        <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Aside from './Aside.vue'
import Header from './Header.vue'
import CommonTab from './CommonTab.vue';
export default {
    name: "Main",
    data() {
        return {
            
        };
    }, components: {
        Aside,
        Header,
        CommonTab
    }
};
</script>


<style scoped>
Aside {
    padding: 0;
    margin: 0;
    height: 100vh;
}
.el-header {
    padding: 0;
}
.el-main {
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: center;
    height: calc(100vh - 100px);
    /* display: flex;
    justify-content: center;
    align-items: center; */
    overflow: scroll;
}
.Main {
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
}
</style>
