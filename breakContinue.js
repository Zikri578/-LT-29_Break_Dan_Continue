// pengunaan break
function Break() {
    let number = prompt('coba di click : ');

    for (let angka = 0; angka <= 70; angka++) {
        if (angka < number) {
            console.log(`Perulangan ke : ${angka}`);
            continue;
        }
    }
}

// membuat function bilanganGanjil
function bilanganGanjil() {
    // membuat variabel hasil dengan melakukan input prompt
    let hasil = prompt('Masukkan Bilangan anda : ')

    // melakukan perulangan dengan membuat variabel result dimulai dengan angka 0, serta melakukan perbandingan apakah result kecil dari hasil, apabila bernilai benar maka akan melakukan step selanjutkan, lalu result akan dilakukan perulangan
    for (let result = 0; result <= hasil; result++) {
        // melakukan pengkondisian ketuka result habis dibagi 2 maka akan di skip
        if (result % 2 === 0) {
            // melanjutkan angka selanjutnya
            continue
        }
        // menampilkan output bilangan ganjil
        console.log(`${result} adalah bilangan ganjil`);
    }
}