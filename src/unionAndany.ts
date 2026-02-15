let subs: number | string = "1M"

let apiRequwstStatus: 'pending' | 'success' | 'error' = 'pending'

let airlineSeat: 'aisle' | 'window' | 'middle' = "window"

airlineSeat = "aisle"

const orders = ['12', '20', '28', '42']

let currentorder: string | undefined;

for (let order of orders) {
    if (order === '28') {
        currentorder = order
        break
    }
}

console.log(currentorder)