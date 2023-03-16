<template>
  <body>
    <!-- <div></div> -->
    <div class="container-fluid">
      <!-- <h1 class="title">小野洗手助手欢迎您~</h1> -->
      <div class="row justify-content-md-center">
        <div class="login box"> 
          <!-- col-sm-5  -->
          <!-- 表头 -->
          <ul class="nav nav-tabs nav-justified">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="login-tab"
                data-bs-toggle="tab"
                data-bs-target="#login"
                type="button"
                role="tab"
                aria-controls="login"
                aria-selected="true"
              >
                登录
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="signup-tab"
                data-bs-toggle="tab"
                data-bs-target="#signup"
                type="button"
                role="tab"
                aria-controls="signup"
                aria-selected="false"
              >
                注册
              </button>
            </li>
          </ul>
          <!-- 具体内容 -->
          <div class="tab-content" id="myTabContent">
            <!-- 登录 -->
            <div
              class="tab-pane fade show active"
              id="login"
              role="tabpanel"
              aria-labelledby="login-tab"
            >
              <form>
                <div class="form-floating mb-3">
                  <input
                    type="name"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    required
                  />
                  <label for="floatingInput">请输入您的昵称</label>
                </div>
                <div class="form-floating">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    required
                  />
                  <label for="floatingPassword">请输入您的密码</label>
                </div>
                
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button type="submit" class="btn btn-primary" style="margin-top: 10px;">登录</button>
                  <div id="emailHelp" class="form-text text_center">
                    <a href="/" class="a_none form-text">暂不登录</a>
                  </div>
                </div>
              </form>
            </div>
            <!-- 注册 -->
            <div
              class="tab-pane fade"
              id="signup"
              role="tabpanel"
              aria-labelledby="signup-tab"
            >
              <form>
                <div class="form-floating mb-3">
                  <input
                    type="name"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    required
                  />
                  <label for="floatingInput">请输入您的昵称</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="name"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    required
                  />
                  <label for="floatingInput">请输入您的手机号</label>
                </div>
                <div class="form-floating">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    required
                  />
                  <label for="floatingPassword">请输入您的密码</label>
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button type="submit" class="btn btn-primary" style="margin-top: 10px;">注册</button>
                  <div id="emailHelp" class="form-text text_center">
                    <a href="/" class="a_none form-text">暂不注册</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>

  <router-view />
</template>

<script>
// import Loginjs from '../js/Loginjs';
// app.config.globalProperties.$Loginjs = Loginjs;
// this.$Loginjs.show();
export default {
  name: "LoginView2",
};
</script>

<style scoped>
.title {
  text-align: center;
  margin: 20px;
}

body {
  /* height: 100vh;
  padding-top: 80px; */
  overflow-x: hidden;
  display: flex;
  /* background: linear-gradient(to right, rgb(247, 209, 215), rgb(191, 227, 241)); */
}

.a_none {
  text-decoration: none;
}

.text_center {
  text-align: center;
}

/* 最外层的大盒子 */
.box {
  /* 相对定位 */
  position: relative;
  z-index: 2;
  margin: auto;
  /* 设置边框 */
  border: 1px solid rgba(255, 255, 255, 0.6);
  /* 设置盒子阴影 */
  box-shadow: 2px 1px 19px rgba(0, 0, 0, 0.1);
}

.hidden-mz {
  visibility: hidden;
}

.visible-mz {
  visibility: visible;
}

.login {
  border: 1px solid #ddd;
  padding: 5px;
  border-radius: 12px;
}

.login > div {
  border: solid #ddd;
  border-width: 0 1px 1px 1px;
  padding: 15px 50px;
  border-radius: 0 0 4px 4px;
}

.btn {
  width: 100%;
}
</style>