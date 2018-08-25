import Vue from 'vue'
import Component from './component.vue'

export default {
    show(params = {}) {
        let LoadingLayer = Vue.extend(Component),
            element = document.createElement('div'),
            propsData = Object.assign({
                active: true
            }, params)

        return new LoadingLayer({
            el: element,
            propsData: propsData
        })
    }
}
