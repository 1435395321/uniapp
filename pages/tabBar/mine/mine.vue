<template>
	<view class="warp-box">
		{{token}}
		<u-button @click="logout" class="custom-style" size="medium" :ripple="true" ripple-bg-color="#4cacff">退出登录</u-button>
	</view>
</template>

<script>
	import { mapState, mapMutations} from 'vuex'
	export default{
		computed:{
			...mapState(['token'])
		},
		methods:{
			...mapMutations(['logToken']),
			logout() {
				this.logToken()
			}
		}
	}
</script>

<style>
</style>
