<template>
	<view class="wrap">
		<u-swiper :effect3d="true" :list="list" height=400 ></u-swiper>
		<view class="more">
			<u-section class="more-title" title="本日账单" font-size="40" sub-title="查看更多" @click="more"></u-section>
			<my-list>
				<slot></slot>
			</my-list>
		</view>
		<view class="submit">
			<button type="default" @click="login">登录账户</button>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import list from '../../common/list/list.vue';
	import { mapState } from 'vuex'
	export default {
		components:{
			'my-list': list
		},
		computed:{
			...mapState(['listData'])
		},
		data() {
			return {
				list: [{
						image: '/static/image/banner/lol3.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: '/static/image/banner/lol1.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: '/static/image/banner/lol.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
			}
		},
		onLoad() {},
		methods: {
			getlist() {},
			// 查看更多
			more() {
				uni.navigateTo({
					url:'../../more/more'
				})
			},
			login() {
				uni.navigateTo({
					url: "../../login/login",
					animationType: "slide-in-bottom",
					animationDuration: 300
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.wrap {
		padding: 10rpx;
	}

	.submit {
		margin-top: 80rpx;
	}

	.more {
		margin-top: 40rpx;
		font-size: 30rpx;
	}
	
</style>
