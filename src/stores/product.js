import { defineStore } from 'pinia'

export const useShoppingStore = defineStore('shopping', {
    state: () => {
        return {
            products: [
                { id: 1, link: '/storecats/page1', name: 'Cattie House Private', price: 5890, img: "https://cdn.theatlantic.com/media/img/photo/2015/03/aoshima-japans-cat-island/c01_RTR4RUGT/main_1500.jpg", text: 'เพลิดเพลินกับเหล่าแมวนับสิบตัว' },
                { id: 2, link: '/storecats/page2', name: 'Happy Happy Happy', price: 1990, img: "https://i.pinimg.com/originals/48/c9/52/48c9522aaa31a27582216bec737e92ce.gif", text: 'แฮปปี้ๆๆๆๆๆๆๆๆๆ' },
                { id: 3, link: '/storecats/page3', name: 'Smart Cat Show', price: 1290, img: "https://static.boredpanda.com/blog/wp-content/uploads/2019/04/funny-dancing-cats-fb3-png__700.jpg", text: 'แมวกายกรรมที่คุณไม่เคยเห็นมาก่อน กายกรรมงั่มๆๆๆ' },
                { id: 4, link: '/storecats/page4', name: 'Sleepy All Days', price: 4590, img: "https://media.istockphoto.com/id/94056427/photo/adorable-silver-tabby-kitten-sleeping-stretched-out.jpg?s=612x612&w=0&k=20&c=PaorHgmrIE5aUcJbY94T4gEWe4ym8Gjsukf4RlQELDw=", text: 'หลับปุ่ย กินๆนอนๆ นอนทั้งวัน รอบชมน้อนนอนตรงนี้ค้าบ' },
                { id: 5, link: '/storecats/page5', name: 'Kitten Cute', price: 4444, img: "https://thumbs.dreamstime.com/b/moggie-kittens-28062021.jpg", text: 'แมวน้อยสุดคาวาอิ๊ โดนตกแบบสามร้อยเปอร์' },
                { id: 6, link: '/storecats/page6', name: 'Happy Cat Happy Price', price: 990, img: "https://worldanimalfoundation.org/wp-content/uploads/2023/02/how-many-cats-in-USA-review.jpg", text: 'โปรโมชั่น!!! แมวสุขใจ' },
                { id: 7, link: '/storecats/page7', name: 'Cat Sweet Dream', price: 5990, img: "https://gifdb.com/images/high/cute-sleepy-kitten-sweet-dreams-eaxbf2b5opu3oyvz.gif", text: 'ฝันดีนะคะเจ้าทาส' },
                { id: 8, link: '/storecats/page8', name: 'MeMe Meow', price: 2590, img: "https://media.tenor.com/1CH3jcj87Q0AAAAC/silly-cat-cat-meme-face.gif", text: 'ขอเชิญพบกับน้องมีมเหมียวเหมียว' },
                { id: 9, link: '/storecats/page9', name: 'Cat Anime', price: 8790, img: "https://www.meme-arsenal.com/memes/938a5cac334f840fd2ddab37ec8a1615.jpg", text: 'แมวคอสเพลย์ ฮ่าๆๆๆ น่าสนใจใช่มั้ยล่า' },
                { id: 10, link: '/storecats/page10', name: 'Cat On On', price: 99999, img: "https://i.pinimg.com/736x/30/f0/54/30f0548423a28b42dfa72441d54fb95d.jpg", text: 'น้องแมวออนๆสุดคิ้ววววววว' }
            ],
            cartItems: []
        }
    },
    getters: {
        countCartItems() {
            return this.cartItems.length;
        },
        getCartItems() {
            return this.cartItems;
        }
    },
    actions: {
        addToCart(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if (index !== -1) {
                this.cartItems[index].quantity += 1;
            } else {
                item.quantity = 1;
                this.cartItems.push(item);
            }
        },
        removeFromCart(item) {
            this.cartItems = this.cartItems.filter(product => product.id !== item.id);;
        }

    },
})