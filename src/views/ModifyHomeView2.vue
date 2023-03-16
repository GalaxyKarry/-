<template>
  <BigFrame>
    <div class="container-fuild">
      <div class="row">
        <div class="" style="width: 375px;">
          <!-- 小程序展示 -->
          <div class="card" style="margin-top: 20px; border-radius:30px;">
            <div class="card-img-top" style="border-radius:30px;">
              <img class="img-fluid" src="../assets/image/top.png" alt=""
                style="border-top-left-radius:30px; border-top-right-radius:30px;">
            </div>
            <div class="card-body" style="background-color:rgb(239, 239, 231); padding: 10px;">
              <!-- 轮播图区域 -->
              <div class="">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner" style="height: 246px;">
                    <div class="carousel-item active" v-for="(banner, index) in banners" :key="banner.id">
                      <img :src="'http://localhost:8100/' + banner.bannerImage" class="d-block w-100" :alt="index"
                        style="min-height: 246px; background-size: cover;" />
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
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
                          <img src="../assets/image/3.png" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">啊瑟</h5>
                            <p class="card-text">111</p>
                            <!-- <p class="card-text">
                          <small class="text-muted"
                            >Last updated 3 mins ago</small
                          >
                        </p> -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card mb-3" style="max-width: 540px">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img src="../assets/image/3.png" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">啊瑟</h5>
                            <p class="card-text">111</p>
                            <!-- <p class="card-text">
                          <small class="text-muted"
                            >Last updated 3 mins ago</small
                          >
                        </p> -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card mb-3" style="max-width: 540px">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img src="../assets/image/3.png" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">啊瑟</h5>
                            <p class="card-text">111</p>
                            <!-- <p class="card-text">
                          <small class="text-muted"
                            >Last updated 3 mins ago</small
                          >
                        </p> -->
                          </div>
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

        <!-- 修改列表 -->
        <div class="col" style="margin-left: 25px;">
          <!-- 修改轮播图 -->
          <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <div style="">
              <h1 class="h2" style="vertical-align:middle; display: inline-block; margin: 0;">修改轮播图</h1>
              <!-- 新增轮播图 button -->
              <div class="" style="vertical-align:middle; margin-left:10px; display: inline-block;">
                <!-- <el-button type="warning" circle icon="Plus"></el-button> -->
                <el-button type="danger" @click="AddCarousel()">+ 新增轮播图</el-button>
              </div>
            </div>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group me-2">
                <button @click="(hidden_car = !hidden_car)" type="button" class="btn btn-sm btn-outline-secondary">
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
                  <th scope="col">播放顺序</th>
                  <th scope="col">图片</th>
                  <th scope="col">操作</th>
                </tr>
              </thead>
              <tbody v-for="(banner, index) in banners" :key="banner.id">
                <tr>
                  <td>{{ banner.id }}</td>
                  <td>{{ banner.ordered }}</td>
                  <td style="width: 40%;">
                    <img :src="'http://localhost:8100/' + banner.bannerImage" class="d-block w-100" :alt="index"
                      style="height: 200px;" />
                    <!-- <img src="../assets/image/2.png" class="d-block img-thumbnail" alt="#" /> -->
                  </td>
                  <td>
                    <el-button type="primary" circle icon="Edit" @click="chang_carousel = true"></el-button>
                    <el-button type="danger" circle icon="Delete" @click="del_carousel(banner.id)"></el-button>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr style="border: dotted;">
          </div>
          <!-- 修改大组件 -->
          <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <div style="">
              <h1 class="h2" style="vertical-align:middle; display: inline-block; margin: 0;">修改大组件</h1>
              <!-- 新增大组件 button -->
              <div class="" style="vertical-align:middle; margin-left:10px; display: inline-block;">
                <!-- <el-button type="warning" circle icon="Plus"></el-button> -->
                <el-button type="success" @click="chang_carousel = true">+ 新增大组件</el-button>
              </div>
            </div>
            <!-- 隐藏按钮 -->
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group me-2">
                <button @click="(hidden_big = !hidden_big)" type="button" class="btn btn-sm btn-outline-secondary">
                  {{ hidden_big == 1 ? '显示' : '隐藏' }}
                </button>
              </div>
            </div>
          </div>
          <div :style="hidden_big ? 'display:none;' : 'display:block;'" class="table-responsive">
            <!-- hidden="hidden" -->
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">大组件ID</th>
                  <th scope="col">标题</th>
                  <th scope="col">操作</th>
                </tr>
              </thead>
              <tbody v-for="largecomponent in largecomponents" :key="largecomponent.id">
                <tr>
                  <td>{{ largecomponent.id }}</td>
                  <td style="width: 40%;">
                    {{ largecomponent.content }}
                  </td>
                  <td>
                    <el-button type="primary" circle icon="Edit" @click="chang_carousel = true"></el-button>
                    <el-button type="danger" circle icon="Delete"></el-button>
                  </td>
                </tr>
              </tbody>
            </table>

            <hr style="border: dotted;">
          </div>

          <!-- 修改小组件 -->
          <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <div style="">
              <h1 class="h2" style="vertical-align:middle; display: inline-block; margin: 0;">修改小组件</h1>
              <!-- 新增小组件 button -->
              <div class="" style="vertical-align:middle; margin-left:10px; display: inline-block;">
                <!-- <el-button type="warning" circle icon="Plus"></el-button> -->
                <el-button type="warning" @click="chang_carousel = true">+ 新增小组件</el-button>
              </div>
            </div>

            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group me-2">
                <button @click="(hidden_small = !hidden_small)" type="button" class="btn btn-sm btn-outline-secondary">
                  {{ hidden_small == 1 ? '显示' : '隐藏' }}
                </button>
              </div>
            </div>
          </div>
          <div :style="hidden_small ? 'display:none;' : 'display:block;'" class="table-responsive">

            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">小组件ID</th>
                  <th scope="col">所属大组件ID</th>
                  <!-- style="text-align: center" -->
                  <th scope="col">小标题</th>
                  <th scope="col">内容</th>
                  <th scope="col">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>阿瑟</td>

                  <td>
                    111
                  </td>
                  <td>
                    <el-button type="primary" circle icon="Edit" @click="chang_carousel = true"></el-button>
                    <el-button type="danger" circle icon="Delete"></el-button>
                  </td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>阿瑟</td>

                  <td>
                    111
                  </td>
                  <td>
                    <el-button type="primary" circle icon="Edit" @click="chang_carousel = true"></el-button>
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



    <!-- Form -->
    <!-- <el-button
      type="primary"
      circle
      icon="Edit"
      @click="dialog = true">
    </el-button> -->

    <!-- 弹窗 -->

    <!-- 添加轮播图 -->
    <el-drawer title="添加轮播图" v-model="add_carousel" custom-class="demo-drawer" ref="drawer" style="font-size: 20px;">
      <div class="demo-drawer__content">
        <el-form>
          <el-form-item label="上传图片" :label-width="formLabelWidth">
            <UpdatePhoto></UpdatePhoto>
          </el-form-item>
        </el-form>

        <div class="demo-drawer__footer">
          <el-button @click="add_carousel = false">取 消</el-button>
          <el-button type="primary" @click="AddCarousel_Confirm()">确定</el-button>
        </div>


      </div>
    </el-drawer>

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

    <!-- 添加小组件 -->
    <el-drawer title="添加小组件" v-model="add_small" custom-class="demo-drawer" ref="drawer" style="font-size: 20px;">
      <div class="demo-drawer__content">
        <el-form :model="form">
          <el-form-item label="上传图片" :label-width="formLabelWidth">
            <UpdatePhoto></UpdatePhoto>
          </el-form-item>
          <el-form-item label="标题描述" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="具体内容" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>

        <DrawerFooter></DrawerFooter>

      </div>
    </el-drawer>

    <!--  -->

    <el-drawer title="我嵌套了 Form !" :before-close="handleClose" v-model="dialog" direction="rtl"
      custom-class="demo-drawer" ref="drawer">
      <div class="demo-drawer__content">
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
import { ref } from 'vue';
import $ from 'jquery';

export default {
  name: "ModifyHomeView2",
  components: {
    BigFrame,
    DrawerFooter,
    UpdatePhoto,
  },
  inject: ['reload'],
  setup() {
    // 获取轮播图
    let banners = ref([]);
    $.ajax({
      url: 'http://localhost:8100/banner/getAllBanner',
      type: "get",
      success(resp) {
        console.log("-----轮播图-----");
        console.log(resp);
        banners.value = resp["data"].bannerList;
        console.log(resp["data"].bannerList);
      }
    });

    // 获取大组件
    let largecomponents = ref([]);
    $.ajax({
      url: 'http://localhost:8100/largeComponent/getLargeComponent',
      type: "get",
      success(resp) {
        console.log("-----大组件-----");
        console.log(resp);
        largecomponents.value = resp["data"].largeComponents;
        console.log(resp["data"].largeComponents);
      }
    });

    return {
      banners,
      largecomponents,
    };
  },
  data() {
    return {
      // 隐藏按钮
      hidden_car: false,
      hidden_big: false,
      hidden_small: false,
      // 弹窗
      add_carousel: false,

      table: false,
      dialog: false,
      loading: false,
      chang_carousel: false,
      add_small: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "80px",
      timer: null,
    };
  },
  methods: {
    // 添加轮播图
    AddCarousel() {
      this.add_carousel = true;
    },
    // 确认添加轮播图
    AddCarousel_Confirm(){
      this.add_carousel = false;
      // 刷新页面
      this.reload();
    },
    
    // 删除轮播图
    del_carousel(id) {
      console.log("del_carousel: ", id);
      $.ajax({
        url: 'http://localhost:8100/banner/deleteBanner/' + id,
        type: "DELETE",
        contentType: 'application/json; charset=UTF-8',
        async: false,
        dataType: 'json',
        data: JSON.stringify({
          // "id": id,
        })
      });
      // 刷新页面
      this.reload();
    }
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