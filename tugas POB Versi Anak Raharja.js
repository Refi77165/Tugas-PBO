const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const items = {
    a: { name: 'Buku', price: 10000 },
    b: { name: 'Pulpen', price: 5000 },
    c: { name: 'Pensil', price: 2000 }
};

let total = 0;
let isMember = false;

function askForMemberStatus() {
    rl.question('Apakah Anda member? (T/F): ', (answer) => {
        isMember = answer.toLowerCase() === 't';
        addItem();
    });
}

function addItem() {
    rl.question('Masukkan kode barang (a/b/c): ', (itemCode) => {
        const item = items[itemCode.toLowerCase()];
        if (!item) {
            console.log('Kode barang tidak valid. Coba lagi.');
            return addItem();
        }

        rl.question('Masukkan jumlah: ', (quantity) => {
            const qty = parseInt(quantity);
            if (isNaN(qty) || qty <= 0) {
                console.log('Jumlah tidak valid. Coba lagi.');
                return addItem();
            }

            const itemTotal = item.price * qty;
            total += itemTotal;
            console.log(`Barang: ${item.name}, Harga: Rp${item.price}, Jumlah: ${qty}, Subtotal: Rp${itemTotal}`);

            askToAddMore();
        });
    });
}

function askToAddMore() {
    rl.question('Apakah Anda ingin menambahkan barang lagi? (yes/no): ', (answer) => {
        if (answer.toLowerCase() === 'yes') {
            addItem();
        } else {
            calculateTotal();
        }
    });
}

function calculateTotal() {
    const discount = isMember ? total * 0.1 : 0;
    const payment = total - discount;
    console.log(`Total Belanja: Rp${total}`);
    console.log(`Diskon: Rp${discount}`);
    console.log(`Total Pembayaran: Rp${payment}`);

    rl.question('Masukkan jumlah uang yang dibayar: Rp', (paymentAmount) => {
        const pay = parseInt(paymentAmount);
        if (isNaN(pay) || pay < payment) {
            console.log('Jumlah uang yang dibayar tidak valid atau kurang. Coba lagi.');
            return calculateTotal();
        }

        const change = pay - payment;
        console.log(`Kembalian: Rp${change}`);
        rl.close();
    });
}

askForMemberStatus();
