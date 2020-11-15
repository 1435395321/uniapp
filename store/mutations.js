export default {
	/*
	* 设置token
	*/
	setToKen(state, newtoken) {
		state.token = newtoken;
	},
	/*
	* 退出Token
	* */
	logToken(state) {
		state.token = '';
	},
	// 根据 id  搜查数据
	searchData(state,id) {
		const i = state.listData.findIndex(x => x.id === id);
		console.log(333)
		if (i!==-1){
			state.listData.slice(id-1,id)
			
		}
	}
}
