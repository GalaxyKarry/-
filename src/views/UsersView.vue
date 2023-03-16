<template>
  <BigFrame>
    <div class="
        d-flex
        justify-content-between
        flex-wrap flex-md-nowrap
        align-items-center
        pt-3
        pb-2
        mb-3
        border-bottom
      ">
      <!-- 通过手机号搜索的搜索框 -->
      <div class="input-group">
        <h1 class="h5 m-2">手机号：</h1>
        <input v-model="chose_phone" type="text" class="form-control" placeholder="输入要查询的手机号"
          aria-label="Recipient's username" aria-describedby="button-addon2" style="max-width: 200px" />
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="chose()">
          搜索
        </button>
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="chose_phone = ''; chose()">
          清除
        </button>
      </div>
      <!-- 筛选是否进行人脸识别录入的筛选框 -->
      <div class="input-group">
        <h1 class="h5 m-2">人脸录入：</h1>
        <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon"
          style="max-width: 250px" v-model="chose_face">
          <option selected value="">Choose...</option>
          <option value="0">未进行人脸识别录入</option>
          <option value="1">已进行人脸识别录入</option>
        </select>
        <button class="btn btn-outline-secondary" type="button" @click="chose()">筛选</button>

      </div>
      <!-- 批量导入按钮 -->
      <div class="btn-toolbar mb-2 mb-md-0">
        <button type="button" class="btn btn-sm btn-success dropdown-toggle">
          <!-- <span data-feather="calendar"></span> -->
          批量导入excel
        </button>
      </div>
    </div>

    <!-- 用户列表具体内容 -->
    <div class="table-responsive">
      <table class="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col" style="text-align: center">用户ID</th>
            <th scope="col">昵称</th>
            <th scope="col">手机号</th>
            <th scope="col">密码</th>
            <th scope="col">人脸是否录入</th>
            <th scope="col">查看其检测列表</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user) in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.password }}</td>
            <td>{{ user.isFace == 1 ? '是' : '否' }} </td>
            <td>
              <el-button type="warning" circle icon="Pointer" @click="read_records(user.id, user.username)"></el-button>
            </td>
            <td>
              <el-button type="primary" circle icon="Edit"
                @click="onclick(user.id, user.username, user.phone, user.password, user.isFace)"></el-button>
              <el-button type="danger" circle icon="Delete" @click="del_user(user.id)"></el-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 弹窗 -->
    <!-- 编辑用户信息 -->
    <el-dialog title="编辑用户信息" v-model="dialogFormVisible" class="formTitle">
      <el-form class="elInputWidth">
        <el-form-item label="昵称：" :label-width="formLabelWidth">
          <el-input v-model="username" autocomplete="off" placeholder="username" label-width="100px"></el-input>
        </el-form-item>
        <el-form-item label="手机号：" :label-width="formLabelWidth">
          <el-input v-model="phone" autocomplete="off" placeholder="phone"></el-input>
        </el-form-item>
        <el-form-item label="密码：" :label-width="formLabelWidth">
          <el-input v-model="password" autocomplete="off" placeholder="password"></el-input>
        </el-form-item>
        <el-form-item label="人脸是否录入:" :label-width="formLabelWidth">
          <el-radio v-model="isFace" id="1" :label="1">是</el-radio>
          <el-radio v-model="isFace" id="0" :label="0">否</el-radio>
          <!-- <div>{{ isFace }}</div> -->
        </el-form-item>
      </el-form>
      <template v-slot:footer class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="change()">确 定</el-button>
      </template>
    </el-dialog>

    <!-- 查看检测列表 + 详细检测记录 -->
    <el-dialog :title="('检测列表 --- 用户: ' + nowuser_name)" v-model="outerVisible">

      <div class="card" style="margin-bottom: 10px;">
        <h5 class="card-header">2022-8-27 10:12</h5>
        <div class="card-body">
          <h5 class="card-title">是否合格:合格</h5>
          <h5 class="card-title">检测分数:78</h5>
          <h5 class="card-title">检测地点:**医院**楼**卫生间</h5>

          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      




      <el-dialog width="30%" title="内层 Dialog" v-model="innerVisible" append-to-body>
      </el-dialog>
      <template v-slot:footer class="dialog-footer">
        <el-button @click="outerVisible = false">取 消</el-button>
        <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
      </template>
    </el-dialog>

    <!-- <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav> -->
  </BigFrame>

  <router-view />
</template>

<script>
import BigFrame from "../components/BigFrame";
// import { ref } from 'vue';
import $ from 'jquery';
import axios from 'axios'
// import { threadId } from "worker_threads";


export default {
  name: "UsersView",
  components: {
    BigFrame,
  },
  inject: ['reload'],
  data() {
    return {
      // 用户列表
      users: [],
      // 用户详情弹窗信息
      dialogFormVisible: false,
      formLabelWidth: "100px",
      id: "",
      username: "",
      phone: "",
      password: "",
      isFace: 0,
      // 手机号、人脸筛选
      chose_phone: "",
      chose_face: "",

      // 外层检测列表 内层检测记录
      outerVisible: false,
      innerVisible: false,
      // 某个用户的检测记录
      records_user: [],
      record: [],
      nowuser_name: '',
      nowuser_id: "",
      nowrecord_id: "",
    };
  },
  created() {
    this.chose();
  },
  // setup(){
  //   const users = ref([]);
  //   $.ajax({
  //     url: 'http://localhost:8100/user/getAllUser',
  //     type: "get",
  //     success(resp){
  //       console.log(resp);
  //       users.value = resp["data"].userList;
  //       console.log(resp["data"].userList);
  //     }
  //   });
  //   return {
  //     users,
  //   };
  // },
  methods: {
    // 弹窗显示对应信息
    onclick(id, username, phone, password, isFace) {
      this.dialogFormVisible = true;
      this.id = id;
      this.username = username;
      this.phone = phone;
      this.password = password;
      this.isFace = isFace;
    },
    // 修改用户信息
    change() {
      $.ajax({
        url: 'http://localhost:8100/user/updateBackgroundUser',
        type: "post",
        contentType: 'application/json; charset=UTF-8',
        async: false,
        dataType: 'json',
        data: JSON.stringify({
          "id": this.id,
          "isFace": this.isFace,
          "password": this.password,
          "phone": this.phone,
          "username": this.username
        }),
        success(resp) {
          console.log(resp);
          // users.value = resp["data"].userList;
        },
      });
      this.dialogFormVisible = false;
      this.reload();
      // window.location.reload()
    },
    // 删除用户
    del_user(id) {
      console.log(id);
      $.ajax({
        url: 'http://localhost:8100/user/deleteUserById/' + id,
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
    },
    // 筛选根据手机号、是否进行人脸识别
    chose() {
      axios.post('http://localhost:8100/user/getUserByPhoneOrIsFace', {
        "isFace": this.chose_face,
        "phone": this.chose_phone,
      })
        .then((response) => {
          console.log(response);
          console.log("data: ", response.data.data);
          this.users = response.data.data.userList;
          console.log("users: ", this.users);
        })
        .catch((error) => { // 请求失败处理
          console.log(error);
        });
      // $.ajax({
      //   url: 'http://localhost:8100/user/getUserByPhoneOrIsFace',
      //   type: "post",
      //   success(resp) {
      //     console.log("!!chose debug")
      //     console.log(resp);
      //     this.users = resp["data"].userList;
      //     console.log(this.users);
      //   },
      //   contentType: 'application/json; charset=UTF-8',
      //   async: false,
      //   dataType: 'json',
      //   data: JSON.stringify({
      //     "isFace": this.chose_face,
      //     "phone": this.chose_phone,
      //   })
      // });
    },
    // 检测列表
    read_records(id, name) {
      this.outerVisible = true;
      this.nowuser_name = name;
      this.nowuser_id = id;
    },
    //
    debug() {
      console.log("debug")
      console.log(this.users);
    },
  },
};
</script>

<style>
/* 表单样式 */
th {
  text-align: center;
  font-size: medium;
}

td {
  border: 0px;
  text-align: center;
  vertical-align: middle;
}

/* 操作按钮样式 */
.mybutton {
  font-size: small;
  padding: 2px 5px;
}
</style>