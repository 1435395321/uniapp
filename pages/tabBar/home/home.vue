<template>
	<view class="wrap">
		<u-swiper :effect3d="true" :list="list"></u-swiper>
	</view>
</template>

<script>
	export default {
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
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.wrap {
		padding: 40rpx;
	}
</style>
