//直接更新state的多个方法的对象
import {RECEIVE_ADDRESS} from "./mutations-type"
export default{
  [RECEIVE_ADDRESS] (state, {address}) {
      state.address = address
    },
    
}