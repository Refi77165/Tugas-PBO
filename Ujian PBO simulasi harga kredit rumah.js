function menghitungHarga() {
    // Menambahkan harga untuk tipe rumah
    const hargaRumah = {
        alamanda: 120000000,
        bougenville: 150000000 // Tambahkan tipe rumah baru dengan harga yang sesuai
    };

    // Meminta input tipe rumah dan lama cicilan (dalam bulan) dari pengguna
    const tipeRumah = prompt("Masukkan tipe rumah (alamanda/bougenville): ").toLowerCase();
    const lamaCicilan = parseInt(prompt("Masukkan lama cicilan (dalam bulan): "));

    // Memeriksa apakah tipe rumah yang dimasukkan valid
    if (!(tipeRumah in hargaRumah)) {
        console.log("Tipe rumah tidak valid.");
        return;
    }

    const sukuBunga = 0.03;
    const harga = hargaRumah[tipeRumah];

    // Menghitung DP, hutang, dan total hutang
    const dp = harga * 0.2;
    const hutang = harga - dp;
    const totalHutang = hutang + (sukuBunga * hutang);
    const bungaBulanan = sukuBunga / 12;

    // Menghitung cicilan bulanan
    const cicilanBulanan = totalHutang / lamaCicilan;

    // Fungsi untuk memformat angka
    function formatAngka(angka) {
        return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    // Menampilkan hasil perhitungan
    console.log("Program Kredit Rumah");
    console.log("====================");
    console.log("Tipe Rumah: " + tipeRumah);
    console.log("Harga Rumah: " + formatAngka(harga));
    console.log("DP Rumah (20%): " + formatAngka(dp));
    console.log("Lama Kredit: " + lamaCicilan + " bulan");
    console.log("Total Hutang: " + formatAngka(totalHutang));
    console.log("\nTabel Cicilan");
    console.log("====================");

    let sisaHutang = totalHutang;
    for (let bulan = 1; bulan <= lamaCicilan; bulan++) {
        sisaHutang -= cicilanBulanan;
        console.log("Bulan ke-" + bulan);
        console.log("Cicilan: " + formatAngka(cicilanBulanan.toFixed(0)));
        console.log("Sisa Hutang: " + formatAngka(sisaHutang.toFixed(0)));
        console.log("--------------------");
    }
}

menghitungHarga();
