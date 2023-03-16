<template>
    <BigFrame>

        <img src="http://localhost:8100/banner/getAllBanner" alt="">
        <!-- <el-upload action="http://localhost:8100/banner/post">
            <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>

        <div>
            <img src="http://localhost:8100/banner/getpic" alt="">
        </div> -->
        


        <div class="container-fuild">
            <div class="row">
                <div class="" style="width: 375px;">

                    <div class="card" style="margin-top: 20px; border-radius:30px;">
                        <div class="card-img-top" style="border-radius:30px;">
                            <img class="img-fluid" src="../assets/image/top.png" alt=""
                                style="border-top-left-radius:30px; border-top-right-radius:30px;">
                        </div>
                        <div class="card-body" style="background-color:rgb(239, 239, 231); padding: 10px;">
                            <!-- 轮播图区域 -->
                            <div class="">
                                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="../assets/image/2.png" class="d-block w-100" alt="#" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="../assets/image/2.png" class="d-block w-100" alt="#" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="../assets/image/2.png" class="d-block w-100" alt="#" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>

                                <!-- <el-button type="primary" circle icon="Edit" >
              </el-button> -->
                            </div>

                            <!-- 打招呼 -->
                            <div class="" style="margin-top:10px;">
                                <div class="greet">小野洗手小助手欢迎您~</div>
                            </div>

                            <!-- 大组件1 -->
                            <div class="">

                                <!-- 编辑按钮 -->
                                <div class="" style="display:flex;">
                                    <h3>神医</h3>
                                </div>
                                <!-- 小组件 -->
                                <div class="row row-cols-1 row-cols-md-2 g-4">
                                    <div class="col">
                                        <div class="card mb-3" style="max-width: 540px">
                                            <div class="row g-0">
                                                <div class="col-md-4">
                                                    <img src="../assets/image/3.png" class="img-fluid rounded-start"
                                                        alt="..." />
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="card-body">
                                                        <h5 class="card-title">啊瑟</h5>
                                                        <p class="card-text">111</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                            <div class="card-img-bottom">
                                <img class="img-fluid" src="../assets/image/bottom.png" alt=""
                                    style="border-bottom-left-radius:30px; border-bottom-right-radius:30px;">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" style="margin-left: 25px;">
                    <!-- 修改轮播图 -->
                    <div
                        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <div style="">
                            <h1 class="h2" style="vertical-align:middle; display: inline-block; margin: 0;">修改轮播图
                            </h1>
                            <!-- 新增轮播图 button -->
                            <div class="" style="vertical-align:middle; margin-left:10px; display: inline-block;">
                                <!-- <el-button type="warning" circle icon="Plus"></el-button> -->
                                <el-button type="danger" @click="chang_carousel = true">+ 新增轮播图</el-button>
                            </div>
                        </div>
                        <div class="btn-toolbar mb-2 mb-md-0">
                            <div class="btn-group me-2">
                                <button @click="(hidden_car = !hidden_car)" type="button"
                                    class="btn btn-sm btn-outline-secondary">
                                    {{ hidden_car == 1 ? '显示' : '隐藏' }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div :style="hidden_car ? 'display:none;' : 'display:block;'" class="table-responsive">
                        <table class="table table-striped table-sm">
                            <thead>
                                <tr>
                                    <th scope="col">轮播图ID</th>
                                    <!-- style="text-align: center" -->
                                    <th scope="col">图片</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td style="width: 20%;">
                                        11
                                        <!-- <img src="fill:///D:/avatar/20221125210708.png" class="d-block img-thumbnail"
                                            alt="#" /> -->
                                    </td>
                                    <td>
                                        <el-button type="primary" circle icon="Edit"
                                            @click="chang_carousel = true"></el-button>
                                        <el-button type="danger" circle icon="Delete"></el-button>
                                    </td>
                                </tr>

                                <tr>
                                    <td>1</td>
                                    <td style="width: 20%;">
                                        <img src="../assets/image/2.png" class="d-block img-thumbnail" alt="#" />
                                    </td>
                                    <td>
                                        <el-button type="primary" circle icon="Edit"
                                            @click="chang_carousel = true"></el-button>
                                        <el-button type="danger" circle icon="Delete"></el-button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <hr style="border: dotted;">
                    </div>



                </div>
            </div>


        </div>

        <!-- 弹窗 -->
        <!-- 轮播图 -->
        <el-drawer title="修改轮播图" v-model="chang_carousel" custom-class="demo-drawer" ref="drawer">
            <div class="demo-drawer__content">
                <UpdatePhoto></UpdatePhoto>
                <el-form :model="form">
                    <el-form-item label="活动名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域" :label-width="formLabelWidth">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>

                <!--  -->


                <DrawerFooter></DrawerFooter>

            </div>
        </el-drawer>


    </BigFrame>
    <router-view />
</template>
  
<script>
import BigFrame from "../components/BigFrame";
import DrawerFooter from "../components/DrawerFooter.vue"
import UpdatePhoto from "../components/UpdatePhoto.vue"
// import { ref } from 'vue';
// import axios from 'axios';
// import $ from 'jquery';

export default {
    name: "ModifyHomeView2",
    components: {
        BigFrame,
        DrawerFooter,
        UpdatePhoto,
    },
    setup() {
        
    },
    data() {
        return {
            // 隐藏
            hidden_car: false,
            hidden_big: false,
            hidden_small: false,
            // 
            chang_carousel: false,
            form: {
                name: "",
                region: "",
            },
            formLabelWidth: "80px",
        };
    },
    methods: {
    },
    
};
</script>
  
  
<style scoped>
/* 小程序显示页面样式 */
.big_box {
    margin-top: 20px;
    background-color: white;
}

.changeborder {
    margin: 20px 0;
    padding: 10px;
    /* background-color: #fff; */
    border: 3px dashed grey;
}

.greet {
    text-align: center;
}

/* 弹窗标题样式 */
.el-drawer__title {
    margin: 0;
    flex: 1;
    line-height: inherit;
    /* font-size: 1rem; */
    font-weight: 200;
}
</style>