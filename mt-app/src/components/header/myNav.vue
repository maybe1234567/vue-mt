<template>
  <div class="m-nav"> 
    <ul class="nav">
      <li class="list my">
        <router-link :to="{name:'/'}">我的美团</router-link>
        <dl>
          <dd>
            <router-link :to="{path:'/'}">我的订单</router-link>
          </dd>
          <dd>
            <router-link :to="{path:'/'}">我的收藏</router-link>
          </dd>
          <dd>
            <router-link :to="{path:'/'}">抵用券</router-link>
          </dd>
          <dd>
            <router-link :to="{path:'/'}">账户设置</router-link>
          </dd>
        </dl>
      </li>
      <li>
        <router-link :to="{name:'/'}">手机APP</router-link>
      </li>
      <li class="list bd">
        <router-link :to="{name:'/'}">商家中心</router-link>
         <dl>
          <dd>
            <router-link :to="{path:'/'}">登录商家中心</router-link>
          </dd>
          <dd>
            <router-link :to="{path:'/'}">美团智能收银</router-link>
          </dd>
          <dd>
            <router-link :to="{path:'/'}">我想合作</router-link>
          </dd>
          <dd>
            <router-link :to="{path:'/'}">手机免费开店</router-link>
          </dd>
          <dd>
            <router-link :to="{path:'/'}">餐饮代理商招募</router-link>
          </dd>
        </dl>
      </li>
      <li class="list site">
        <router-link :to="{name:'/'}">网站导航</router-link>
        <div class="subContainer">
            <dl class="hotel">
                <dt>酒店旅游</dt>
                <dd>
                    <router-link :to="{path:'/'}">国际机票</router-link>
                </dd>
                <dd>
                    <router-link :to="{path:'/'}">火车票</router-link>
                </dd>
                <dd>
                    <router-link :to="{path:'/'}">经济型酒店</router-link>
                </dd>
                <dd>
                    <router-link :to="{path:'/'}">主题酒店</router-link>
                <dd>
                    <router-link :to="{path:'/'}">商务酒店</router-link>
                </dd>
                <dd>
                    <router-link :to="{path:'/'}">公寓</router-link>
                </dd>
            </dl>
            <dl class="food">
                <dt>吃美食</dt>
                <dd>
                    <router-link :to="{path:'/'}">烤鱼</router-link>
                </dd>
                <dd>
                    <router-link :to="{path:'/'}">特色小吃</router-link>
                </dd>
                <dd>
                    <router-link :to="{path:'/'}">烧烤</router-link>
                </dd>
                <dd>
                    <router-link :to="{path:'/'}">自助餐</router-link>
                <dd>
                    <router-link :to="{path:'/'}">火锅</router-link>
                </dd>
                <dd>
                    <router-link :to="{path:'/'}">代金券</router-link>
                </dd>
            </dl>
            <dl class="movie">
                <dt>酒店旅游</dt>
                <dd>
                    <router-link :to="{path:'/'}">热映电影</router-link>
                </dd>
                <dd>
                    <router-link :to="{path:'/'}">热门影院</router-link>
                </dd>
                <dd>
                    <router-link :to="{path:'/'}">热映电影口碑榜</router-link>
                </dd>
                <dd>
                    <router-link :to="{path:'/'}">最受期待电影</router-link>
                <dd>
                    <router-link :to="{path:'/'}">国内票房榜</router-link>
                </dd>
                <dd>
                    <router-link :to="{path:'/'}">北美票房榜</router-link>
                </dd>
            </dl>
            <dl class="app">
                <dt>手机应用</dt>
                <dd>
                   <a href=""><img src="https://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" alt=""></a>
                </dd>
                <dd>
                  <a href=""><img src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" alt=""></a>
                </dd>
                <dd>
                 <a href=""><img src="https://s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png" alt=""></a>
                </dd>
                <dd>
                  <a href=""><img src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png" alt=""></a>
                <dd>
                   <a href=""><img src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png" alt=""></a>
                </dd>  
            </dl>

        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped >

</style>