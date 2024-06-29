// Daftar user terdaftar
const users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' }
];

// Daftar barang dan harganya
const products = [
    { name: 'Buku', price: 100000 },
    { name: 'Pensil', price: 100000 },
    { name: 'Pulpen', price: 100000 }
];

// Fungsi untuk mendapatkan harga barang berdasarkan nama barang
function getProductPrice(productName) {
    const product = products.find(p => p.name === productName);
    return product ? product.price : null;
}

// Fungsi untuk memeriksa apakah user terdaftar dan menghitung harga
function checkUserAndCalculatePrice(userName, items) {
    const user = users.find(u => u.name === userName);
    let totalOriginalPrice = 0;
    let totalDiscountedPrice = 0;
    const discount = user ? 0.10 : 0;
    
    console.log("======= Receipt =======");
    console.log(`Nama User: ${userName}`);
    console.log(`Status Member: ${user ? 'Member' : 'Bukan Member'}`);
    console.log("---------------------");
    console.log("Daftar Barang:");

    items.forEach(item => {
        const productPrice = getProductPrice(item);
        if (productPrice !== null) {
            const discountedPrice = productPrice - (productPrice * discount);
            totalOriginalPrice += productPrice;
            totalDiscountedPrice += discountedPrice;
            console.log(`${item}: Rp${productPrice} - Diskon: Rp${productPrice * discount} = Rp${discountedPrice}`);
        } else {
            console.log(`${item}: Produk tidak ditemukan`);
        }
    });

    console.log("---------------------");
    console.log(`Total Harga Sebelum Diskon: Rp${totalOriginalPrice}`);
    if (user) {
        console.log(`Total Diskon: Rp${totalOriginalPrice * discount}`);
    }
    console.log(`Total Harga Setelah Diskon: Rp${totalDiscountedPrice}`);
    console.log("=====================");

    // Prompt untuk pembayaran
    const paymentAmount = parseInt(prompt("Masukkan jumlah pembayaran:"));
    if (isNaN(paymentAmount) || paymentAmount < totalDiscountedPrice) {
        console.log("Pembayaran tidak mencukupi atau tidak valid. Silakan coba lagi.");
        resetTransaction();
    } else {
        const change = paymentAmount - totalDiscountedPrice;
        console.log(`Jumlah Pembayaran: Rp${paymentAmount}`);
        console.log(`Kembalian: Rp${change}`);
    }
}

// Fungsi untuk mereset transaksi
function resetTransaction() {
    console.clear();
    const userName = prompt("Masukkan nama user:"); // Prompt untuk nama user
    const items = prompt("Masukkan daftar barang yang dibeli (dipisahkan dengan koma):").split(',').map(item => item.trim()); // Prompt untuk daftar barang yang dibeli

    checkUserAndCalculatePrice(userName, items);
}

// Memulai transaksi
resetTransaction();
