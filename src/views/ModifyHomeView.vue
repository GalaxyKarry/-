<template>
  <BigFrame>
    <div class="container">
      <div class="row">
        <div class="col-7 big_box changeborder">
          <!-- 轮播图 -->
          <div class="changeborder">
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
            <!-- 编辑按钮 -->
            <div class="" style="padding-top: 10px;">
              <el-button type="danger" @click="chang_carousel = true">修改轮播图</el-button>
            </div>
            <!-- <el-button type="primary" circle icon="Edit" >
            </el-button> -->
          </div>

          <!-- 打招呼 -->
          <div class="changeborder">
            <div class="greet">小野洗手小助手欢迎您~</div>
          </div>

          <!-- 大组件1 -->
          <div class="changeborder">

            <!-- 编辑按钮 -->
            <div class="" style="display:flex;">
              <h3>神医</h3>
              <div style="padding-left:10px;">
                <el-button type="success" @click="dialog = true">修改大组件</el-button>
              </div>
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

            <!-- 编辑按钮 -->
            <div class="" style="padding-top:10px;">
              <el-button type="warning" @click="add_small = true">添加小组件</el-button>
            </div>
          </div>

          <!-- 大组件2 -->
          <div class="changeborder">
            <!-- 编辑按钮 -->
            <div class="">
              <el-button type="danger" @click="dialog = true">添加大框</el-button>
            </div>
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
    <el-drawer title="添加小组件" v-model="add_small" custom-class="demo-drawer" ref="drawer">
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
        <el-form model="form">
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


    <div v-for="(banner, index) in banners" :key="banner.id">
      <div>{{ index }}</div>
      <div>{{ banner.bannerImage }}</div>

      <img :src="'http://localhost:8100/' + banner.bannerImage">

      <div> </div>
    </div>

    <el-upload action="#" list-type="picture-card" :auto-upload="false">
      <el-icon>
        <Plus />
      </el-icon>

      <template #file="{ file }">
        <div>
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
          <span class="el-upload-list__item-actions">
            <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
              <el-icon><zoom-in /></el-icon>
            </span>
            <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
              <el-icon>
                <Download />
              </el-icon>
            </span>
            <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
              <el-icon>
                <Delete />
              </el-icon>
            </span>
          </span>
        </div>
      </template>
    </el-upload>

    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>

    <!--  -->
    <!-- <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
      :on-remove="handleRemove" :file-list="fileList2" list-type="picture">
      <el-button size="small" type="primary">点击上传</el-button>
      <template v-slot="tip" class="el-upload__tip">只能上传jpg/png文件,且不超过500kb</template>
    </el-upload> -->

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
  name: "ModifyHomeView",
  components: {
    BigFrame,
    DrawerFooter,
    UpdatePhoto,
  },
  setup() {
    let banners = ref([]);
    $.ajax({
      url: 'http://localhost:8100/banner/getAllBanner',
      type: "get",
      success(resp) {
        console.log(resp);
        banners.value = resp["data"].bannerList;
        console.log(resp["data"].bannerList);
      }
    });
    return {
      banners,
    };
  },
  data() {
    return {
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

      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,

      fileList2: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, 
      { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
    };
  },
  methods: {
    // handleRemove(file) {
    //   console.log(file);
    // },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
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
</style>