// Code your solutions in this file
//const gifts = ["teddy bear", "drone", "doll"]
//function wrapGifts(gifts) {
//    for (let i = 0; i < gifts.length; i++) {
//        console.log(`Wrapped ${gifts[i]} and added a bow!`)
//        debugger
//   }
//    return gifts 
//}
//wrapGifts(gifts)

const names = ["Guadalupe", "Ollie", "Aki"]
const giftType = "surprise"
function writeCards(names, giftType) {
    const thankYouMessages = []
    for (let i=0; i<names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${giftType} gift!`
        thankYouMessages.push(message)
    }
    return thankYouMessages
}

function countDown() {
    let startNumber = 10
    while (startNumber >=0) {
        console.log(startNumber--)
    }
}