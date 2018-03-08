// const log = require('./modules/log')
import log from './modules/log'
import {add, substract} from './modules/math'



function add1(a) {
    return substract(a, 1)
}

log(add1(8))