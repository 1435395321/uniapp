import { get, post } from './https'
// export const apiAddress = p => post('api/v1/users/my_address/address_edit_before', p)
// export const gets = () =>get('subsystem/expert/list');
// 登录
export const Login = () => get('test')

// 首页
// 列表
export const List = p  => post('bill_list', p);