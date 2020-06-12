// const square = function (x) {
//     return x * x
// }

// Arrow function
// const square = (x) => {
//     return x * x
// }

// Shorthand syntax
const square = (x) => x * x

console.log(square(3))

const event = {
    name: 'Birthday Party',
    guestList: ['Karan', 'Jen', 'Elena'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}
// *Note: Arrow function don't bind there own this, but access the this value in the context in which they are created.
event.printGuestList()