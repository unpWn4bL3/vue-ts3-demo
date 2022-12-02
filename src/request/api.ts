import service from ".";
import { LoginFormInt, LoginData } from '../type/login'
export function login(data: LoginFormInt) {
    return service({
        url: "/login",
        method: "post",
        data
    })
}
export function getGoodsList() {
    return service({
        url: "/getGoodsList",
        method: "get"
    })
}