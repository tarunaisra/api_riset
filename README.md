# Laporan Analisis Studio Ghibli API

## Anggota Kelompok 7 : 
1. Taruna Isra Elnasa (362458302073)
2. Yogi Maulana (362458302116)
3. Ahmad Bactiar Raflyansyah (362458302141)
4. Midha Liudmila Ilbathuly (362458302079)


   [Laporan Analisis Studio Ghibli API Kelompok 7.pdf](https://github.com/user-attachments/files/22250194/Laporan.Analisis.Studio.Ghibli.API.Kelompok.7.pdf)

 ## Deskripsi Proyek
 API ini adalah layanan internal untuk mengelola ulasan film
 dari Studio Ghibli,
 dengan data film yang direferensikan dari Ghibli API publik.
## Cara Menjalankan Proyek

1. **Clone repository**
   ```
   git clone https://github.com/tarunaisra/api_riset.git
   ```

2. **Masuk ke direktori proyek**
   ```
   cd api_riset
   ```

3. **Install dependensi**
   ```
   npm install
   ```

4. **Jalankan server**
   ```
   node server.js
   ```
   Server akan berjalan di `http://localhost:3300`.

## Daftar Endpoint

- `GET /status` : Cek status server.
- `GET /films` : Mendapatkan daftar film Studio Ghibli.
- `GET /reviews` : Mendapatkan semua ulasan.
- `GET /reviews/:id` : Mendapatkan ulasan berdasarkan ID.
- `POST /reviews` : Menambah ulasan baru.
- `PUT /reviews/:id` : Memperbarui ulasan berdasarkan ID.
- `DELETE /reviews/:id` : Menghapus ulasan berdasarkan ID.

## Penjelasan Pengujian

Pengujian API dapat dilakukan menggunakan aplikasi seperti [Postman]
Berikut Hasil PEngujiannya
```
[Koleksi_Pengujian.postman_collection.json](https://github.com/user-attachments/files/22254416/Koleksi_Pengujian.postman_collection.json)

```
	
