// message.js
import Vue from "vue";
import message from "./source/main.vue";


let messageConstructor = Vue.extend(message); 
let instance;

const yMessage = function (options = {}) {
    instance = new messageConstructor({
			data: options
		})
    document.body.appendChild(instance.$mount().$el);
		instance.visible = true;
};


["success", "error", "info", "warning"].forEach(type => {
  yMessage[type] = options => {
    options.type = type;
    return yMessage(options)
  };
});

export { yMessage }