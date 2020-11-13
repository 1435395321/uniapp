<template>
	<view class="wrap">
		<view class="warp-box">
			<u-form :model="form" ref="uForm">
				<u-form-item label="姓名" prop="name">
					<u-input v-model="form.name" />
				</u-form-item>
				<u-form-item label="密码" prop="password">
					<u-input v-model="form.password" />
				</u-form-item>
			</u-form>
			<u-button @click="submit" class="custom-style" size="medium" :ripple="true" ripple-bg-color="#4cacff">登录</u-button>
			<view class="u-flex u-row-between">
				<view>修改密码</view>
				<view>注册账号</view>
			</view>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				form: {
					name: 'admin',
					password: 'admin'
				},
				rules: {
					name: [{
						required: true,
						message: '请输入姓名',
						// 可以单个或者同时写两个触发验证方式
						trigger: ['blur,change']
					}],
					password: [{
						min: 5,
						message: '简介不能少于5个字',
						trigger: ['blur,change']
					}]
				}
			};
		},
		computed: {
			...mapState(['token'])
		},
		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		methods: {
			...mapMutations(['setToKen']),
			submit() {
				console.log(this.token)
				this.$refs.uForm.validate(valid => {
					if (valid) {
						this.popUpTab('登录成功', 'success');
						let token = 'C';
						this.setToKen(token);
						// setTimeout(() => {
						// 	uni.reLaunch({
						// 		url: '../tabBar/home/home'
						// 	})
						// }, 1000)
					} else {
						console.log('验证失败');
					}
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.warp-box {
		position: absolute;
		top: 0;
		width: 96%;
		height: 100%;
		left: 2%;
		// background-image: url("/static/image/banner/lol.jpg");
		background-size: 100%;
	}

	.custom-style {
		background-color: rgb(255, 170, 255);
		color: #fff;
		display: block;
		width: 70%;
		margin: 40rpx auto;
		font-size: 30rpx;
		border-radius: 15rpx;
	}
</style>
