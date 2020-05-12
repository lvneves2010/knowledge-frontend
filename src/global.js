import Vue from 'vue'

export const userKey = '__chave_da_aplicacao'
export const baseApiUrl = 'http://localhost:3000'

export function showError(e) {
    // console.log('error>>', e)
    if( e && e.response && e.response.data ) {
        Vue.toasted.global.defaultError({ msg: e.response.data })
    } else if( typeof e === 'string' ) {
        Vue.toasted.global.defaultError({ msg: e })
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError, userKey }