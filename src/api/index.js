//包含n个接口请求函数的模块
// 函数的返回值: promise对象
import ajax from "./ajax";
const BASE_URL="/api"
// 1、根据经纬度获取位置详情
export function reqAddress(goHash){
  return ajax(`${BASE_URL}/posotion/${goHash}`)
}
// 2、获取食品分类列表
export function reqFoodTypes(){
  return ajax("http://a.itying.com/api/productlist")
}
// 3、根据经纬度获取商铺列表
export function reqShopList(longitude,latitude){
  return ajax(BASE_URL+'/shops',{longitude,latitude})
}
// 4、根据经纬度利关键字搜索商铺列表
// 5、获取-次性验证码
// 6、用户名密码登陆
// 7、发送短信验证码
// 8、手机号验证码登陆
// 9、根据会话获取用户信息
// 10、用户登出




