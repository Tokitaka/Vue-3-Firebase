// vue code 작성
// create Vue App
const app = Vue.createApp(
    // component
    {
        data() {
            return {
                showBooks: true,
                title: 'The final empire',
                author: 'Brandon Sanderson',
                age: 45,
                x: 0,
                y: 0
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

