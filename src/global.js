import Vue from 'vue'

export const baseApiUrl = 'http://localhost:3000'

export function showError(e) {
    // console.log('error>>', e)
    if( e && e.reponse && e.response.data ) {
        Vue.toasted.global.defaultError({ msg: e.reponse.data })
    } else if( typeof e === 'string' ) {
        Vue.toasted.global.defaultError({ msg: e })
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError }