// vue code 작성
// create Vue App
const app = Vue.createApp(
    {
        // data, functions
        template: '<h2>I am the template</h2>'
    }
)
// mount Vue App to a certain DOM that have the id "APP"
app.mount('#app')
// 해당 태그 내부만 제어할 수 있음 

