<template>
    <div class="InfoForm">
        <h4>桥梁基本状况卡片</h4>
        <el-form class="Form">
            <el-form-item label="A 桥梁所处行政区划代码：">
                <el-input v-model="LocalCode" class="LocalCode" ></el-input>
            </el-form-item>
            <el-form class = "xingZheng">
                <el-form-item label="B 行政识别数据">
                </el-form-item>
                <el-form-item v-for="item in XZData" :key="item.id">
                    <el-col>
                        {{ item.id }}
                    </el-col>
                    <el-col>
                        {{ item.name }}
                    </el-col>
                    <el-col>
                        <el-input></el-input>
                    </el-col>
                </el-form-item>
            </el-form>
        </el-form>
    </div>
</template>
<script>
export default {
    name: "IBridgeBasicInfo",
    data(){
        return {
            LocalCode: '',
            XZData: [
                {
                    id: 1,
                    name: "路线编号",
                },
                {
                    id: 2,
                    name: "路线名称",
                },
                {
                    id: 3,
                    name: "路线等级",
                },
                {
                    id: 4,
                    name: "桥梁编号",
                },
                {
                    id: 5,
                    name: "桥梁名称",
                },
                {
                    id: 6,
                    name: "桥位桩号",
                },
                {
                    id: 7,
                    name: "功能类型",
                },
                {
                    id: 8,
                    name: "被跨越道路名称",
                },
                {
                    id: 9,
                    name: "被跨越道路桩号",
                },
                {
                    id: 10,
                    name: "设计荷载",
                },
                {
                    id: 11,
                    name: "桥梁坡度",
                },
                {
                    id: 12,
                    name: "桥梁平曲线半径",
                },
                {
                    id: 13,
                    name: "建成时间",
                },
                {
                    id: 14,
                    name: "设计单位",
                },
                {
                    id: 15,
                    name: "施工单位",
                },
                {
                    id: 16,
                    name: "监理单位",
                },
                {
                    id: 17,
                    name: "业主单位",
                },
                {
                    id: 18,
                    name: "管养单位",
                },   
            ]
            
        }
    }
}
// alert("ibi")
</script>
<style scoped>
.InfoForm {
    padding: 2rem;
    border-radius: 0.8rem;
    width: 70%;
    height: unset;
    margin: 20px;
    background-color: #d1d1d1;
}
h4 {
    border-style:solid;
    border-width: 0 0 1px 0;
    border-color: black;
    margin: 1px;
}
span {
    border-style:solid;
    border-width: 0 0 1px 0;
    border-color: black;
    margin: 1px;
}
.el-form-item {
    border-style:solid;
    border-width: 0 0 1px 0;
    border-color: black;
    margin: 1px;
}
::v-deep .el-input__wrapper {
    background-color: #d1d1d1;
    width: 80%;
}

.Form {
    display: flex;
    flex-direction: column;
}

</style>