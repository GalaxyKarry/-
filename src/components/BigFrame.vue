<template>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
        <symbol id="home" viewBox="0 0 16 16">
            <path
                d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
        </symbol>
        <symbol id="speedometer2" viewBox="0 0 16 16">
            <path
                d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
            <path fill-rule="evenodd"
                d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z" />
        </symbol>
        <symbol id="people-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
        </symbol>
        <symbol id="speedometer" viewBox="0 0 16 16">
            <path
                d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z" />
            <path fill-rule="evenodd"
                d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z" />
        </symbol>
    </svg>
    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <!-- 图标 -->
        <router-link class="d-flex align-items-center navbar-brand col-md-3 col-lg-2 me-0 px-3"
            :to="{ name: 'RecordsView' }"><svg class="bi me-2" width="40" height="32">
                <use xlink:href="#speedometer" />
            </svg>
            <span class="fs-4" style="font-family: KaiTi;">洗手检测系统</span>
        </router-link>

        <!-- 搜索框 -->
        <!-- <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <input class="form-control form-control-dark w-80" type="text" placeholder="Search" aria-label="Search"> -->

        <!-- 登出 -->
        <!-- <div class="navbar-nav">
            <div class="nav-item text-nowrap">
                <a class="nav-link px-5" href="#">退出登录</a>
            </div>
        </div> -->
    </header>

    <!-- 下方内容 -->
    <div class="container-fluid">
        <div class="row">
            <!-- 左侧导航栏 -->
            <nav id="sidebarMenu" class="
          col-md-3 col-lg-2
          d-md-block
          bg-light
          sidebar
          collapse
          text-white
          bg-dark
        ">
                <div class="position-sticky pt-3">
                    <ul class="nav nav-pills flex-column">
                        <li class="nav-item a-margin"></li>
                        <li class="nav-item" style="font-family: KaiTi; font-size: 20px;">
                            <router-link :to="{ name: 'ModifyHomeView2' }"
                                :class="route_name == 'ModifyHomeView2' ? 'nav-link text-white a-margin active' : 'nav-link text-white a-margin'"
                                aria-current="page">
                                <svg class="bi me-2" width="16" height="16">
                                    <use xlink:href="#home" />
                                </svg>
                                修改首页
                            </router-link>
                        </li>
                        <li style="font-family: KaiTi">
                            <router-link :to="{ name: 'RecordsView' }"
                                :class="route_name == 'RecordsView' ? 'nav-link text-white a-margin active' : 'nav-link text-white a-margin'">
                                <svg class="bi me-2" width="16" height="16">
                                    <use xlink:href="#speedometer2" />
                                </svg>
                                检测列表
                            </router-link>
                        </li>
                        <li style="font-family: KaiTi">
                            <router-link :to="{ name: 'UsersView' }"
                                :class="route_name == 'UsersView' ? 'nav-link text-white a-margin active' : 'nav-link text-white a-margin'">
                                <svg class="bi me-2" width="16" height="16">
                                    <use xlink:href="#people-circle" />
                                </svg>
                                用户列表
                            </router-link>
                        </li>
                    </ul>

                    <!-- 下方用户个人信息 -->
                    <div class="admin-style">
                        <hr class="" />
                        <a href="#" class="
                d-flex
                align-items-center
                text-white text-decoration-none
                dropdown-toggle
              " id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="../assets/image/1.png" alt="" width="40" height="40"
                                class="rounded-circle me-2" />
                            <strong style="font-family: KaiTi; font-size: larger;">小野超酷</strong>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <li><a class="dropdown-item" href="/ModifyHomeView/">Banner_Test</a></li>
                            <li><a class="dropdown-item" href="/test/">Settings</a></li>
                            <!-- <li>
                                <button href="" type="primary" circle icon="Edit" @click="dialogFormVisible = true">Settings</button>
                            </li> -->
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <li><a class="dropdown-item" href="/LoginView/">退出登录</a></li>

                        </ul>
                    </div>
                </div>
            </nav>

            <!-- 右边主内容 -->
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <slot></slot>
            </main>
        </div>
    </div>

    <!-- 登录注册弹窗 -->
    <el-dialog title="" v-model="dialogFormVisible" class="formTitle" style="width:60%; background-color: dimgray;">
        <div class="container-fluid"></div>
        <div class="row">
            <div class="col">
                <LoginView2></LoginView2>
            </div>
            <div class="col" style="">123</div>
        </div>

    </el-dialog>

    <router-view />
</template>

<script>
// import SideBar from './SideBar'
// import NavBar from './NavBar'
import LoginView2 from '../views/LoginView2.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue';

export default {
    name: "BigFrame",
    components: {
        LoginView2,
    },
    setup() {
        const route = useRoute();
        let route_name = computed(() => route.name)
        return {
            route_name
        }
    },
    data() {
        return {
            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
                id: "",
                name: "",
                phonenumber: "",
                password: "",
                radio: "1",
            },
            formLabelWidth: "100px",
            //   检测是否合格
        };
    },
};
</script>

<style>
/* 用户个人信息样式 */
.admin-style {
    margin: 20px 40px;
    position: fixed;
    bottom: 0;
}

/* 左侧导航栏的的样式 */
.a-margin {
    margin: 10px;
    font-size: 15px;
}

.nav-link {
    padding-left: 30px;
}

body {
    font-size: 0.875rem;
}

.feather {
    width: 16px;
    height: 16px;
    vertical-align: text-bottom;
}

/* 把icon设置为白色 */
.bi {
    vertical-align: -0.125em;
    pointer-events: none;
    fill: currentColor;
}

/*
 * Sidebar
 */

.sidebar {
    position: fixed;
    top: 0;
    /* rtl:raw:
  right: 0;
  */
    bottom: 0;
    /* rtl:remove */
    left: 0;
    z-index: 100;
    /* Behind the navbar */
    padding: 48px 0 0;
    /* Height of navbar */
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

@media (max-width: 767.98px) {
    .sidebar {
        top: 5rem;
    }
}

.sidebar-sticky {
    position: relative;
    top: 0;
    height: calc(100vh - 48px);
    padding-top: 0.5rem;
    overflow-x: hidden;
    overflow-y: auto;
    /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
    font-weight: 500;
    color: #333;
}

.sidebar .nav-link .feather {
    margin-right: 4px;
    color: #727272;
}

.sidebar .nav-link.active {
    color: #2470dc;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
    color: inherit;
}

.sidebar-heading {
    font-size: 0.75rem;
    text-transform: uppercase;
}

/*
 * Navbar
 */

.navbar-brand {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.25);
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
}

.navbar .navbar-toggler {
    top: 0.25rem;
    right: 1rem;
}

.navbar .form-control {
    padding: 0.75rem 1rem;
    border-width: 0;
    border-radius: 0;
}

.form-control-dark {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.1);
}

.form-control-dark:focus {
    border-color: transparent;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
}

/* 背景图片 */
.formTitle {
    background-image: url(../assets/image/3.png);
}

/* 239字体大小 */
.fs-4 {
    font-size: calc(1.275rem + 0.9vw) !important;
}

.a-margin {
    margin: 10px;
    font-size: 23px;
}
</style>
