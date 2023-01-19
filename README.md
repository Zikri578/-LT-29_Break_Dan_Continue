# -LT-29_Break_Dan_Continue

`"break"` dan `"continue"` adalah perintah yang digunakan dalam perulangan (looping) di JavaScript.

`"break"` digunakan untuk menghentikan perulangan saat suatu kondisi tertentu terpenuhi. Jika perintah "break" dieksekusi, perulangan akan segera berakhir dan eksekusi akan dilanjutkan dengan baris kode setelah perulangan.

`"continue"` digunakan untuk melewati siklus saat suatu kondisi tertentu terpenuhi. Jika perintah "continue" dieksekusi, siklus saat ini akan dilewati dan eksekusi akan dilanjutkan dengan siklus berikutnya.

Selain itu, `"break"` juga dapat digunakan di dalam perulangan yang berbeda dari perulangan yang sesungguhnya. Misalnya, jika Anda menggunakan perulangan di dalam perulangan, Anda dapat menggunakan `"break"` untuk menghentikan perulangan yang berada di dalam perulangan tersebut.

Sedangkan "continue" dapat digunakan untuk melewati siklus saat suatu kondisi tertentu terpenuhi dalam perulangan yang berbeda. Misalnya, jika Anda menggunakan perulangan di dalam perulangan, Anda dapat menggunakan `"continue"` untuk melewati siklus yang berada di dalam perulangan tersebut.

Kedua perintah ini sangat berguna dalam kondisi tertentu saat Anda ingin mengontrol alur logika dari perulangan Anda. Namun, harus digunakan dengan hati-hati karena jika digunakan secara salah, dapat menyebabkan kesalahan atau kode yang sulit dibaca.

Itu benar, selain itu, perintah `"break"` dan `"continue"` juga dapat digunakan dengan label. Label digunakan untuk mengidentifikasi perulangan yang spesifik yang ingin dihentikan atau dilewati. Ini berguna jika Anda memiliki perulangan yang berbeda yang saling berkaitan dan Anda ingin mengontrol perulangan tertentu dari beberapa perulangan yang berbeda.

Sebagai contoh, jika Anda memiliki perulangan `"for"` di dalam perulangan `"while"`, Anda dapat menggunakan label untuk mengidentifikasi perulangan `"for"` yang ingin Anda hentikan atau dilewati. Sebagai contoh:

    label1: for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        if (i === 3) {
          break label1;
        }
        console.log(i, j);
      }
    }

Dalam contoh di atas, kita menggunakan label `"label1"` untuk mengidentifikasi perulangan `"for"` yang ingin kita hentikan ketika kondisi i===3 terpenuhi.

Secara keseluruhan, `"break"` dan `"continue"` adalah perintah yang sangat berguna dalam pemrograman JavaScript yang dapat digunakan untuk mengontrol alur logika dari perulangan Anda. Namun, Anda harus menggunakannya dengan hati-hati untuk menghindari kesalahan atau kode yang sulit dibaca.
