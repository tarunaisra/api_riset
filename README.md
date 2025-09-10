# Laporan Analisis Studio Ghibli API

## Anggota Kelompok 7 : 
1. Taruna Isra Elnasa
2. Yogi Maulana
3. Ahmad Bactiar
4. Midha Liudmila Ilbathuly


   [Laporan Analisis Studio Ghibli API Kelompok 7.pdf](https://github.com/user-attachments/files/22250194/Laporan.Analisis.Studio.Ghibli.API.Kelompok.7.pdf)

 ## Deskripsi Proyek
 API ini adalah layanan internal untuk mengelola ulasan film
 dari Studio Ghibli,
 dengan data film yang direferensikan dari Ghibli API publik.
 ## Cara Menjalankan Proyek
 1. Clone repository ini: 'git clone https://github.com/tarunaisra/api_riset.git'
 2. Masuk ke direktori: ‘cd api_riset‘
 3. Install dependensi: ‘npm install‘
 4. Jalankan server: ‘node server.js‘
     Server akan berjalan di ‘http://localhost:3300‘.
 ## Daftar Endpoint
- ‘GET /status‘: Cek status API.
- ‘GET /reviews‘: Mengambil semua ulasan.
- ‘GET /reviews/:id‘: Mengambil ulasan spesifik.
- ‘POST /reviews‘: Membuat ulasan baru.
- ‘PUT /reviews/:id‘: Memperbarui ulasan.
- ‘DELETE /reviews/:id‘: Menghapus ulasan

