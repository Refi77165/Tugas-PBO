//tugas POB 3 bentuk dialog

function bilangan(angka, operasi) {
    for (let r = 0; r <= angka; r++) {
        if (operasi === 'ganjil' && r % 2 === 1) {
            document.write(r);
        } else if (operasi === 'genap' && r % 2 === 0) {
            document.write(r);
        }
    }
}

var angka = prompt("Masukan batas penulisan angka = ");
var pilih;

while (true) {
    document.write("Pilih bilangan yang akan ditampilkan")
    document.write("anda dapat memilih ganjil/genap.")
    pilih = prompt("masukan Pilihan anda :").toLowerCase();
    if (pilih === 'ganjil' || pilih === 'genap') {
        break;
    } else {
        alert("Pilihan tidak tersedia. Silakan pilih 'ganjil' atau 'genap'.");
    }
}

bilangan(parseInt(angka), pilih);
