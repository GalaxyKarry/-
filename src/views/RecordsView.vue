<template>
  <BigFrame>
    <!-- <el-button :plain="true" @click="open5">消息</el-button>
    <el-button :plain="true" @click="open6">成功</el-button>
    <el-button :plain="true" @click="open7">警告</el-button>
    <el-button :plain="true" @click="open8">错误</el-button> -->
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
        <input v-model="chose_phone" type="text" class="form-control" placeholder="输入要查询的手机号" aria-label="Recipient's username"
          aria-describedby="button-addon2" style="max-width: 200px" />
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="chose()">
          搜索
        </button>
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="chose_phone='';chose()">
          清除
        </button>
      </div>
      <!-- 筛选是否进行人脸识别录入的筛选框 -->
      <div class="input-group">
        <h1 class="h5 m-2">是否合格：</h1>
        <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon"
          style="max-width: 250px" v-model="chose_pass">
          <option selected value="">Choose...</option>
          <option value="1">合格</option>
          <option value="0">不合格</option>
          <option value="-1">正在检测中</option>
        </select>
        <button class="btn btn-outline-secondary" type="button" @click="chose()">筛选</button>
      </div>
    </div>

    <!-- 用户列表具体内容 -->
    <div class="table-responsive">
      <table class="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col" style="text-align: center">检测ID</th>
            <th scope="col">用户昵称</th>
            <th scope="col">手机号</th>
            <th scope="col">检测日期</th>
            <th scope="col">检测地点</th>
            <th scope="col">是否合格</th>
            <th scope="col">操作</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(record) in records" :key="record.id">
            <td>{{ record.id }}</td>
            <td>{{ record.username }}</td>
            <td>{{ record.phone }}</td>
            <td>{{ (record.time == null ? '暂无' : record.time) }}</td>
            <td>{{ record.place == null ? '暂无' : record.place }}</td>
            <td v-if="(record.isPass == 1)">合格</td>
            <td v-else-if="(record.isPass == 0)">不合格</td>
            <td v-else-if="(record.isPass == -1)">正在检测中</td>
            <td v-else>error</td>
            <td>
              <el-button type="primary" circle icon="Edit"
                @click="onclick(record.id, record.username, record.phone, record.time, record.place, record.isPass)"></el-button>
              <el-button type="danger" circle icon="Delete" @click="del_record(record.id)"></el-button>
            </td>
          </tr>
        </tbody>


      </table>
    </div>

    <el-dialog title="编辑检测记录" :before-close="handleClose" v-model="dialogFormVisible" class="formTitle">
      <el-form class="elInputWidth">
        <el-form-item label="昵称：" :label-width="formLabelWidth">
          <el-input v-model="username" autocomplete="off" :placeholder="username" label-width="100px"></el-input>
        </el-form-item>
        <el-form-item label="手机号：" :label-width="formLabelWidth">
          <el-input v-model="phone" autocomplete="off" placeholder="phone"></el-input>
        </el-form-item>
        <el-form-item label="检测日期：" :label-width="formLabelWidth">
          <el-input v-model="time" autocomplete="off" placeholder="time"></el-input>
        </el-form-item>
        <el-form-item label="检测地点：" :label-width="formLabelWidth">
          <el-input v-model="place" autocomplete="off" placeholder="place"></el-input>
        </el-form-item>
        <el-form-item label="是否合格：" :label-width="formLabelWidth">
          <el-radio v-model="isPass" id="1" :label="1">合格</el-radio>
          <el-radio v-model="isPass" id="0" :label="0">不合格</el-radio>
          <el-radio v-model="isPass" id="-1" :label="-1">正在检测中</el-radio>
          <!-- <div>{{ isPass }}</div> -->
        </el-form-item>
      </el-form>
      <template v-slot:footer class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="change(); open6()">确 定</el-button>
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


export default {
  name: "RecordsView",
  components: {
    BigFrame,
  },
  inject: ['reload'],
  created() {
    this.chose();
  },
  data() {
    return {
      // 检测列表
      records: [],
      // 检测详情弹窗信息
      dialogFormVisible: false,
      formLabelWidth: "100px",
      id: "",
      username: "",
      phone: "",
      time: "",
      place: "",
      isPass: -1,
      // 筛选条件
      chose_phone: "",
      chose_pass: "",
    };
  },
  methods: {
    // 弹窗显示对应信息
    onclick(id, username, phone, time, place, isPass) {
      this.dialogFormVisible = true;
      this.id = id;
      this.username = username;
      this.phone = phone;
      this.time = time;
      this.place = place;
      this.isPass = isPass;
    },
    // 修改检测记录
    change() {
      $.ajax({
        url: 'http://localhost:8100/record/updateBackgroundRecord',
        type: "post",
        // success(resp) {
        //   console.log(resp);
        // },
        contentType: 'application/json; charset=UTF-8',
        async: false,
        dataType: 'json',
        data: JSON.stringify({
          "id": this.id,
          "isPass": this.isPass,
          "phone": this.phone,
          "place": this.place,
          "time": this.time,
          "username": this.username
        })
      });
      this.dialogFormVisible = false;
      // 刷新页面
      this.reload();
      // window.location.reload()
    },
    // 删除检测记录
    del_record(id) {
      console.log("del_record: ", id);
      $.ajax({
        url: 'http://localhost:8100/record/deleteRecordById/' + id,
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
    // 筛选根据手机号、是否合格
    chose() {
      axios.post('http://localhost:8100/record/getRecordByPhoneOrIsPass', {
        "isPass": this.chose_pass,
        "phone": this.chose_phone,
      })
        .then((response) => {
          console.log(response);
          console.log("data: ", response.data.data);
          this.records = response.data.data.recordList;
          console.log("records: ", this.records);
        })
        .catch((error) => { // 请求失败处理
          console.log(error);
        });
    },
    // 提示消息
    open5() {
      this.$message({
        showClose: true,
        message: '这是一条消息提示'
      });
    },

    open6() {
      this.$message({
        showClose: true,
        message: '修改成功',
        type: 'success'
      });
    },

    open7() {
      this.$message({
        showClose: true,
        message: '警告:你没有进行任何修改',
        type: 'warning'
      });
    },

    open8() {
      this.$message({
        showClose: true,
        message: '错了哦，这是一条错误消息',
        type: 'error'
      });
    }
  },

};
</script>

<style>
/* 弹窗样式 */
.elInputWidth {
  width: 80%;
}

.formTitle {
  font-weight: bold;
}

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