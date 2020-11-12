import Vue from 'vue'
//常用失败后回调 提示语 title：提示信息
//	title 显示消息  ，type 显示类型 success 
//	tab 是不是要跳转到tabBar文件下  url 路径
Vue.prototype.popUpTab = function(title, type, tab = false, url = "") {
	this.$refs.uToast.show({
		title: title,
		type: type,
		duration: 1000,
		icon: true,
		isTab: tab,
		callback: () => {
			if (tab == true) {
				setTimeout(() => {
					uni.reLaunch({
						url: url,
					})
				}, 1000);
			} else {
				setTimeout(() => {
					uni.navigateTo({
						url: url
					})
				}, 1000);
			}
		}
	});
},
// 调用下拉加载   data：Array 要加载的数组
Vue.prototype.load = function(data) {
	if (this.page >= data.length / 10) return; //数据的总长度
	this.status = 'loading';
	this.page = ++this.page;
	setTimeout(() => {
		this.list += 10; //每次刷新加载的条数
		if (this.page >= data.length / 10) this.status = 'nomore'; //判断总长度 显示结束
		else this.status = 'loading';
	}, 1500)
}
