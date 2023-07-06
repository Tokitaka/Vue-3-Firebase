// vue code 작성
// create Vue App
const app = Vue.createApp(
    // component
    {
        data() {
            return {
                showBooks: true,
                books: [
                    {title: 'name of the wind', author: 'patrick rothfuss'},
                    {title: 'the way of kings', author: 'brandon sanderson'},
                    {title: 'the final empire', author: 'brandon sernderson'},
                ]
            }
        },
        methods: {
            changeTitle(title){
                // this.title = 'Words of Romance'
                this.title = title
            },
            toggleShowBooks(){
                this.showBooks = !this.showBooks
            },
            handleEvent( e, data) {
                console.log(e);
                if (data) {
                    console.log(data);
                }
            },
            handleMousemove(e) {
                this.x = e.offsetX
                this.y = e.offsetY
            }
        }
    }
)
// mount Vue App to a certain DOM that have the id "APP"
app.mount('#app')

