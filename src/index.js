import showLog from './modules/showlog'
import {add, substract} from './modules/math'



function add1(a) {
    return add(a, 1)
}

function add2(a) {
    return substract(a, 1)
}

showLog(add1(8))
showLog(add2(8))