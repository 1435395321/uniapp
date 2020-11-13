export default {
	setToKen(state, newtoken) {
		switch (newtoken) {
			case "A":
				state.token = "A下Token";
				break;
			case "B":
				state.token = "B下Token";
				break;
			case "C":
				state.token = "C下Token";
				break;
			default:
				state.token = '默认TOken';
				break;
		}
	}
}
