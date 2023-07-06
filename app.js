// vue code 작성
// create Vue App
const app = Vue.createApp(
    // component
    {
        // dynamic value 는 무조건 여기 data 에서 관리한다
        data() {
            return {
                url: 'http://www.naver.com',
                showBooks: true,
                books: [
                    {title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg'},
                    {title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg'},
                    {title: 'the final empire', author: 'brandon sernderson', img: 'assets/3.jpg'},
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

