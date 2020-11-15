<template>
	<view class="wrap">
		<my-list></my-list>
	</view>
</template>

<script>
	import list from '../common/list/list.vue';
	import {mapState} from 'vuex';
	export default {
		computed: {
			...mapState(['listData'])
		},
		components:{
			'my-list': list
		},
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
		.more-remark{
			width: 70%;
			height: 80rpx;
			overflow: hidden;
			white-space:nowrap;
			text-overflow:ellipsis;
		}
	}
</style>
