import Vue from 'vue';
import Hello from './components/Hello.vue';

let div = document.createElement('div');
document.body.appendChild(div);

new Vue({
    el: div,
    render: h => h(Hello)
});