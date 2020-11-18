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
	
}
