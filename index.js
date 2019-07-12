
import HelloWorld from '@/components/HelloWorld.vue'
import Vue from "vue";

export default {
    install(Vue, options) {
        Vue.component('helloworld', HelloWorld)
    }
}