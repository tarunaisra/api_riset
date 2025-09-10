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
```[Koleksi_Pengujian.postman_collection.json](https://github.com/user-attachments/files/22253984/Koleksi_Pengujian.postman_collection.json){
	"info": {
		"_postman_id": "2bf21a30-3150-458c-8cc0-2521154387a8",
		"name": "Koleksi_Pengujian",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "47946541",
		"_collection_link": "https://baktiarr-s-art.postman.co/workspace/Team-Workspace~3571eae9-f63e-43c2-8f52-656d27a5572e/collection/47946541-2bf21a30-3150-458c-8cc0-2521154387a8?action=share&source=collection_link&creator=47946541"
	},
	"item": [
		{
			"name": "Status",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"id\": 5,\n    \"title\": \"Tokyo Revengers\",\n    \"year\": 2021,\n    \"directorId\": 3\n}"
				},
				"url": {
					"raw": "http://localhost:3300/status",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3300",
					"path": [
						"status"
					]
				}
			},
			"response": []
		},
		{
			"name": "Reviews",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3300/reviews",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3300",
					"path": [
						"reviews"
					]
				}
			},
			"response": []
		},
		{
			"name": "Review berdasarkan id",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3300/reviews/3",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3300",
					"path": [
						"reviews",
						"3"
					]
				}
			},
			"response": []
		},
		{
			"name": "Menambhkan Reviews",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"id\": 4,\r\n  \"filmId\": \"2baf70d1-42bb-4437-b551-e5fed5a87abe\",\r\n  \"user\": \"Mofu-Mofu\",\r\n  \"rating\": 3,\r\n  \"comment\": \"Kalibaaaaa!!!!!!!!\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3300/reviews",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3300",
					"path": [
						"reviews"
					]
				}
			},
			"response": []
		},
		{
			"name": "Merubah",
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"filmId\": \"2baf70d1-42bb-4437-b551-e5fed5a87abe\",\r\n  \"user\": \"Akame\",\r\n  \"rating\": 5,\r\n  \"comment\": \"Umazing!!!!\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3300/reviews/4",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3300",
					"path": [
						"reviews",
						"4"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:3300/reviews/4",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3300",
					"path": [
						"reviews",
						"4"
					]
				}
			},
			"response": []
		},
		{
			"name": "404",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		}
	]
}



