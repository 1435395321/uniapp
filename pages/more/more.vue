<template>
	<view class="wrap">
		<view class="more-list" @click="more">
			<text>djfdkj倒海翻江看</text>
			<text>2020-10-15</text>
		</view>
	</view>
</template>

<script>
	import more from '../common/more/more.vue'
	export default {
		
		methods:{
			more(){
				uni.navigateTo({
					url:'./moreInfo'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.more-list{
		width: 100%;
		line-height:80rpx;
		display: flex;
		justify-content: space-between;
		font-size: 32rpx;
		border-bottom: 1px solid #ccc;
		
	}
</style>
