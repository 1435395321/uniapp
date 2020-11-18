<template>
	<view class="wrap">	
		<view class="">日期：{{listData.transaction_time}}</view>
		<view>金额：{{listData.price}}元</view>
		<view>类型{{listData.pay_type_n}}</view>
		<view>
			<view>备注：</view>
			<view class="more-text">{{listData.comment}}</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex';
	export default{
		computed:{
			...mapState(['listData'])
		}
	}
</script>

<style scoped lang="scss">
	.wrap{
		width: 96%;
		margin: 0 auto;
		font-size: 35rpx;
		view{
			margin: 10rpx 0;
		}
		.more-text{
			text-indent: 2em;
			font-size: 30rpx;
		}
	}
</style>
