<template>
	<view class="">
		<view class="more-list" v-for="(item,index) in listData" :key="item.id" @click="more(item.id)">
			<text class="more-remark">{{item.comment}}</text>
			<text>{{item.transaction_time}}</text>
		</view>
	</view>
	
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		computed:{
			...mapState(['listData'])
		},
		mounted() {
			
		},
		methods:{
			getLocalTime(nS) { 
			},
			more(id){
				uni.navigateTo({
					url: "/pages/more/moreInfo?id="+id
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
		.more-remark{
			width: 52%;
			height: 80rpx;
			overflow: hidden;
			white-space:nowrap;
			text-overflow:ellipsis;
		}
	}
</style>
