<template>
    <view class="wrap">
        <view class="warp-box">
            <!-- 登录 -->
            <view class="" v-show="type == 'login'">
                <u-form :model="form" ref="uForm" :errorType="errorType">
                    <u-form-item label="账户" prop="name">
                        <u-input v-model="form.name" />
                    </u-form-item>
                    <u-form-item label="密码" prop="password">
                        <u-input type="password" v-model="form.password" />
                    </u-form-item>
                    {{ token }}
                </u-form>
                <u-button
                    @click="submit"
                    class="custom-style"
                    size="medium"
                    :ripple="true"
                    ripple-bg-color="#4cacff"
                    >登录</u-button
                >
                <view class="u-flex u-row-between">
                    <view>修改密码</view>
                    <view @click="toggle('register')">注册账号</view>
                </view>
            </view>
            <!-- 注册 -->
            <view class="" v-show="type == 'register'">
                <u-form :model="form1" ref="uForm1" :errorType="errorType">
                    <u-form-item label="账户" prop="name">
                        <u-input v-model="form1.name" />
                    </u-form-item>
                    <u-form-item label="密码" prop="password">
                        <u-input type="password" v-model="form1.password" />
                    </u-form-item>
                </u-form>
                <u-button
                    @click="register"
                    class="custom-style"
                    size="medium"
                    :ripple="true"
                    ripple-bg-color="#4cacff"
                    >注册</u-button
                >
                <view class="u-flex u-row-between">
                    <view>修改密码</view>
                    <view @click="toggle('login')">登录账号</view>
                </view>
            </view>
        </view>
        <u-toast ref="uToast" />
    </view>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { Login } from '../../request/api'
export default {
    data() {
        return {
            // 验证提示 可选
            errorType: ["message"],
            type: "login",
            form: {
                name: "",
                password: "",
            },
            form1: {
                name: "",
                password: "",
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: "请输入邮箱 ",
                        trigger: ["blur", "change"],
                    },
                    {
                        validator: (rule, value, callback) => {
                            return this.$u.test.email(value);
                        },
                        message: "邮箱不正确",
                        trigger: ["change", "blur"],
                    },
                ],
                password: [
                    {
                        required: true,
                        min: 5,
                        message: "密码不能少于5个字",
                        trigger: ["blur", "change"],
                    },
                ],
            },
            rules1: {
                name: [
                    {
                        required: true,
                        message: "请输入邮箱",
                        trigger: ["blur", "change"],
                    },
                    {
                        validator: (rule, value, callback) => {
                            return this.$u.test.email(value);
                        },
                        message: "邮箱不正确",
                        trigger: ["change", "blur"],
                    },
                ],
                password: [
                    {
                        required: true,
                        min: 5,
                        message: "密码不能少于5个字",
                        trigger: ["blur", "change"],
                    },
                ],
            },
        };
    },
    computed: {
        ...mapState(["token"]),
    },
    // 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
    onReady() {
        this.$refs.uForm.setRules(this.rules);
        this.$refs.uForm1.setRules(this.rules1);
    },
    methods: {
        ...mapMutations(["setToKen"]),
        // 登录 注册 切换
        toggle(e) {
            this.type = e;
        },
        // 登录
        submit() {
			
			// uni.request({
			//     url: '/dpc/bill_list', //仅为示例，并非真实接口地址。
			//     data: {
			//         user_id:2
			//     },
			// 	method:'GET',
			//     success: (res) => {
			//         console.log(res.data);
			//     }
			// });
            this.$refs.uForm.validate((valid) => {
                if (valid) {
					Login().then(res => {
						if(res.code == 200) {
							this.popUpTab("登录成功", "success");
							let token = "hjdhfksdhkjdhfk";
							this.setToKen(token);
							setTimeout(() => {
							    uni.reLaunch({
							        url: "../tabBar/home/home",
							    });
							}, 1000);
						}
					})
                } else {
                    this.popUpTab("验证失败", "error");
                }
            });
        },
        // 注册
        register() {
            this.$refs.uForm1.validate((valid) => {
                // this.type = 'login'
                if (valid) {
                    this.popUpTab("注册成功", "success");
                    // let token = 'C';
                    // this.setToKen(token);

                    // setTimeout(() => {
                    // 	uni.reLaunch({
                    // 		url: '../tabBar/home/home'
                    // 	})
                    // }, 1000)
                } else {
                    this.popUpTab("验证失败", "error");
                }
            });
        },
    },
};
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
