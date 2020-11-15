<template>
	<view class="wrap">
		<view class="">日期：{{list.createDate}}</view>
		<view>金额：{{list.monry}}元</view>
		<view>类型 id{{list.id}}</view>
		<view>
			<view>备注：</view>
			<view class="more-text">{{list.remark}}</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				list: ''
			}
		},
		computed: {
			...mapState(['listData'])
		},
		onLoad(oid) {
			for (let i=0;i<this.listData.length;i++){
				if(this.listData[i].id==oid.id){
					this.list = this.listData[i]
				}
			}
		},
		methods: {
			

		}
	}
</script>

<style scoped lang="scss">
	.wrap {
		width: 96%;
		margin: 0 auto;
		font-size: 35rpx;

		view {
			margin: 10rpx 0;
		}

		.more-text {
			text-indent: 2em;
			font-size: 30rpx;
		}
	}
</style>
