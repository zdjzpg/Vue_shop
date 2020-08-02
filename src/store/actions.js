//通过mutation间接更新state的多个方法的对象
import { reqFoodTypes } from "../api"
import {RECEIVE_ADDRESS} from "./mutations-type"
export default{
  async getAddress({commit}){
    let result=await reqFoodTypes()
    let address=result.result[0]
    commit(RECEIVE_ADDRESS,{address})
  }
}