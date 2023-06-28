<template>
    <div class="Map">
        <el-button type="primary" plain @click="showBridge()">显示桥梁</el-button>
        <div id="container"></div>
    </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'
window._AMapSecurityConfig = {
    securityJsCode: 'a43c102c663b16bc045af2f214634f49'
}
export default {
    name: 'myMap',
    data() {
        return {
            myMap: null,
            showB: false,
        }
    },
    methods: {        
        initMap() {
            AMapLoader.load({
                key: "43a901acbfe4643bd45be085b7d35795",    //申请好的Web端开发者key，首次调用load时必填
                version: "2.0", //指定要加载的JSAPI的版本，首次调用Load时必填
                plugins: [''],   //需要使用的插件列表，如比例尺‘AMap.Scale’等
            }).then((AMqp) => {
                this.myMap = new AMap.Map("container", {  //设置地图容器id
                    viewMode: "2D",    //是否为3D地图模式
                    zoom: 10,           //初始化地图级别
                    center: [106.550483, 29.563707], //初始化地图中心点位置
                });
            }).catch(e => {
                console.log(e)
            })
        },
        showBridge() {
            this.showB = !this.showB;
            if (this.showB) {
                //显示所有桥梁
            } else {
                
            }
        }
    },
    mounted() {
        //DOM初始化完成进行地图初始化
        console.log("Map开始渲染")
        this.initMap()
    }

}
</script>

<style scope>
.Map {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
}
button {
    width:80px;
    margin-left: auto;
    margin-right: 30px;
}
#container {
    margin: 30px;
    width: auto;
    height: 70vh;
    border-radius: 0.8rem;
}
</style>
