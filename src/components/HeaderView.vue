<template>
  <div id="header_container" class="container-fluid">
    <div class="container d-flex py-3 px-0">
      <div id="header_left" class="col-md-6 text-start">
        <span>Hotline: 02253.735.725</span>
      </div>
      <div id="header_right" class="col-md-6 text-end">
        <a href="#">Đăng nhập</a> / 
        <a href="#">Đăng ký</a>
      </div>
    </div>
  </div>
  <div class="container d-flex py-3 px-0">
    <div id="logo_container" class="d-flex col-md-6">
      <img id="logo" src="../assets/logo.png" alt="logo">
      <div id="title" class="d-flex justify-content-center mx-3">
        <span class="text_title pt-3 fw-bold" style="color: #FC0808;">KHOA CÔNG NGHỆ THÔNG TIN</span>
        <p class="text_title fw-bold">TRƯỜNG ĐẠI HỌC HÀNG HẢI VIỆT NAM</p>
      </div>
    </div>
    <nav class="col-md-6 text-right p-0 d-flex justify-content-end">
      <router-link class="" to="/">Trang chủ</router-link> 
      <router-link class="ps-5" to="/gioi_thieu">Giới thiệu</router-link> 
      <router-link class="ps-5" to="/blog">Blog</router-link> 
      <router-link class="ps-5 " to="/lien_he">Liên hệ</router-link>
    </nav>
    </div>
</template>

<script>
export default {
  data() {
    return {
    };
  }
}
</script>

<style>
#header_container{
  background-color: #0D2D62;
  color: white;
}
#header_right a{
  text-decoration: none;
  color: white;
}
ul a {
  color: #2c3e50;
  text-decoration: none;
  margin-top: auto;
  margin-bottom: auto;
}

ul a.router-link-exact-active {
  font-weight: bold;
}
#logo{
  width: 67px;
  height: 65px;
}
#title{
  flex-direction: column;
}
#title .text_title {
  font-size: 12px;
}
</style>