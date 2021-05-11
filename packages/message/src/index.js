// message.js
import Vue from "vue";
import message from "./source/main.vue";


let messageConstructor = Vue.extend(message); 
let instance;

const Message = function (options = {}) {
    instance = new messageConstructor({
			data: options
		})
		console.log(options)
    document.body.appendChild(instance.$mount().$el);
		instance.visible = true;
};


["success", "error", "info", "warning"].forEach(type => {
  Message[type] = options => {
    options.type = type;
    return Message(options);
  };
});


export default Message;