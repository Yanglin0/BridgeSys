<template>
    <div class="asideContianer">
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                background-color="rgb(50, 65, 87)" text-color="#fff" active-text-color="#ffd04b">
                <h3>{{ isCollapse ? '桥梁' : '桥梁CRM系统' }}</h3>
                <!--没有二级菜单-->
                <el-menu-item v-for="item in noChildren" :key="item.name" :index="item.name">
                    <!-- <i :class="`el-icon-${item.icon}`"></i> -->
                    <span>{{ item.label }}</span>
                </el-menu-item>
                <!--有二级菜单-->
                <el-sub-menu v-for="item in hasChildren" :key="item.name" :index="item.name">
                    <template #title>
                        <i :class="`el-icon-${item.icon}`"></i>
                        <span>{{ item.label }}</span>
                    </template>

                    <el-menu-item-group v-for="subItem in item.children" :key="subItem.name">
                        <el-menu-item :index="subItem.name" @click="clickMenu(subItem)">{{ subItem.label }}</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
            </el-menu>
        </div>
</template>
<style scoped>
.el-menu {
    height: 100vh;
    width: auto;
}

.el-menu h3 {
    margin: 0;
    padding: 0;
    color: #fff;
    text-align: center;
    line-height: 48px;
    font-size: 22px;
    font-weight: 400;
    padding: 0 20px;
}
</style>

<script>
export default {
    name: "Aside",
    data() {
        return {
            menuData: [
                {
                    path: "/FirstPage",
                    name: "FirstPage",
                    label: "首页"
                }, {
                    label: "桥梁信息录入",
                    name: "InfoInsert",
                    children: [
                        {
                            label: "桥梁基本信息",
                            name: "IBridgeBasicInfo",
                            path: "/IBridgeBasicInfo"
                        }, {
                            label: "桥梁初始检查",
                            name: "IBridgeInitialRecord",
                            path: "/IBridgeInitialRecord"
                        }, {
                            label: "桥梁定期检查",
                            name: "IBridgeRegularRecord",
                            path: "/IBridgeRegularRecord"
                        },
                    ]
                }, {
                    label: "桥梁信息查询",
                    name: "InfoQue",
                    children: [
                        {
                            label: "桥梁基本信息",
                            name: "QBridgeBasicInfo",
                            path: "/QBridgeBasicInfo"
                        }, {
                            label: "桥梁初始检查",
                            name: "QBridgeInitialRecord",
                            path: "/QBridgeInitialRecord"
                        }, {
                            label: "桥梁定期检查",
                            name: "QBridgeRegularRecord",
                            path: "/QBridgeRegularRecord"
                        },
                    ]
                }, {
                    label: "用户管理",
                    name: "userSys",
                    path: "/userSys"
                }
            ],
        };
    },
    methods: {
        handleOpen(key, keyPath) {

        },
        handleClose(key, keyPath) {

        },
        clickMenu(item) {
            // 如果需要更新的路由和当前路由不一致就更新
            if (this.$route.path != item.path) {
                this.$router.push(item.path)
            }
            // 触发面包屑数据的更新
            this.$store.commit('menuChange', item)
        }
    },
    computed: {
        hasChildren() {
            // 过滤获取所有的有二级菜单的数据
            return this.menuData.filter((item) => item.children);
        },
        noChildren() {
            // 过滤所有只有一级菜单的数据
            return this.menuData.filter((item) => !item.children);
        },
        isCollapse() {
            return this.$store.state.tab.isCollapse
        }
        // @click="clickMenu(item)
    },
};
</script>