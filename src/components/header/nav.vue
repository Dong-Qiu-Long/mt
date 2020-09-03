<template>
	<div class="box">
    <ul>
			<li class="lint">
				<router-link to='/'>我的美团</router-link>
				<dl>
					<dd>我的订单</dd>
					<dd>我的收藏</dd>
					<dd>抵用券</dd>
					<dd>账户设置</dd>
				</dl>
			</li>
			<li>
				<router-link to='/'>手机App</router-link>
			</li>
			<li class="lint">
				<router-link to='/'>商家中心</router-link>
				<dl>
					<dd>美团餐饮商户中心</dd>
					<dd>登录商家中心</dd>
					<dd>美团智能收银</dd>
					<dd>我想合作</dd>
					<dd>手机免费开店</dd>
					<dd>餐饮代理商招募</dd>
					<dd>商家申请开票</dd>
					<dd>免费合作美团排队</dd>
				</dl>
			</li>
			<li class="lint">
				<router-link to='/'>美团规则</router-link>
				<dl>
					<dd>规则中心</dd>
					<dd>规则目录</dd>
					<dd>规则坪医院</dd>
				</dl>
			</li>
			<li class="lint has-child">
				<router-link to='/'>网站导航</router-link>
				<div class="header-nav-site ">
					<dl class="header-jiulv">
						<dt>酒店旅游</dt>
						<dd>国际机票</dd>
						<dd>火车票</dd>
						<dd>民宿</dd>
						<dd>经济型酒店</dd>
						<dd>主题酒店</dd>
						<dd>商务酒店</dd>
						<dd>公寓</dd>
						<dd>豪华酒店</dd>
						<dd>客寨</dd>
						<dd>青年旅社</dd>
						<dd>度假酒店</dd>
						<dd>别墅</dd>
						<dd>农家院</dd>
					</dl>
					<dl class="header-meishi">
						<dt>吃美食</dt>
						<dd>烤鱼</dd>
						<dd>特色小吃</dd>
						<dd>烧烤</dd>
						<dd>自助餐</dd>
						<dd>火锅</dd>
						<dd>代金券</dd>
					</dl>
					<dl class="header-movie">
						<dt>看电影</dt>
						<dd>热映电影</dd>
						<dd>热门影院</dd>
						<dd>热映电影口碑榜</dd>
						<dd>最受期待电影</dd>
						<dd>国内票房榜</dd>
						<dd>北美票房榜</dd>
						<dd>电影排行榜</dd>
					</dl>
					<dl class="header-app">
						<dt>手机应用</dt>
						<dd>
							<router-link to='/'>
								<img src="http://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" alt="">
							</router-link>
						</dd>
						<dd>
							<router-link to='/'>
								<img src="http://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" alt="">
							</router-link>
						</dd>
						<dd>
							<router-link to='/'>
								<img src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png" alt="">
							</router-link>
						</dd>
						<dd>
							<router-link to='/'>
								<img src="http://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png" alt="">
							</router-link>
						</dd>
						<dd>
							<router-link to='/'>
								<img src="http://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png" alt="">
							</router-link>
						</dd>
					</dl>
				</div>
			</li>
		</ul>
	</div>
</template>
<style lang='scss' scoped>
   @import '@/assets/css/header/nav.scss';
</style>
