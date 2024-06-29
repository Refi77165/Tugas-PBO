const merkHp = ["samsung", "lg", "nokia", "iphone"];
const tipeHp = ["s24", "note 20", "a20", "iphone 15"];

const userInput = prompt("Silahkan masukkan tipe hape: ");

function cariMerekHp(tipe) {
  const posisi = tipeHp.indexOf(tipe.toLowerCase());
  if (posisi !== -1) {
    return merkHp[posisi];
  } else {
    return "merk hp anda tidak ditemukan";
  }
}

const hp = cariMerekHp(userInput);

alert(`Merk HP anda dengan tipe ${userInput} adalah : ${hp}`);
