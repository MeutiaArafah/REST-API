const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-praser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended : true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())


// endpoint "/test" dengan method GET
app.get("/test", (req,res) => {
    // req merupakan variabel yang berisi data request
    // res merupakan variabel yang berisi data response dari end-point

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// menjalankan server pada portS 8000
app.listen(8000, () => {
    console.log("Server run on port 8000")
})


// endpoint "/profil/nama/umur" dengan method GET
app.get("/profil/:name/:age", (req,res) => {
    // :name dan :age -> diberikan titik dua didepan menunjukkan "name" dan "age"
    // bersifat dinamis yang dapat diganti nilai nya saat melakukan request

    // menampung data yang dikirimkan
    let name = req.params.name // mengambil nilai pada parameter name
    let age = req.params.age // mengambil nilai pada parameter age

    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter
    let response = {
        nama: name,
        umur: age
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})


// end-point "/bujur_sangkar" dengan method POST
app.post("/bujur_sangkar", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengambil nilai lebar dari body

    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// PRAKTIKUM SOAL 1
// end-point "bangun_ruang/balok" dengan method POST
app.post("/bangun_ruang/balok", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengambil nilai lebar dari body
    let tinggi = Number(req.body.tinggi) // mengambil nilai tinggi dari body

    let luas_permukaan = 2 * (panjang*lebar + panjang*tinggi + lebar*tinggi)
    let volume = panjang * lebar * tinggi

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        luas_permukaan: luas_permukaan,
        volume: volume
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "bangun_ruang/kubus" dengan method POST
app.post("/bangun_ruang/kubus", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let sisi = Number(req.body.sisi) // mengambil nilai panjang dari body

    let luas_permukaan = 6 * (sisi * sisi)
    let volume = sisi * sisi * sisi

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        sisi: sisi,
        luas_permukaan: luas_permukaan,
        volume: volume
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
}) 

// end-point "bangun_ruang/tabung" dengan method POST
app.post("/bangun_ruang/tabung", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jari_jari = Number(req.body.jari_jari) // mengambil nilai jari_jari dari body
    let tinggi = Number(req.body.tinggi) //mengambil nilai tinggi dari body

    let luas_alas = Math.PI * jari_jari * jari_jari
    let keliling_alas = 2 * Math.PI * jari_jari
    let luas_tabung = (2 * luas_alas) + (keliling_alas * tinggi)
    let volume_tabung = Math.PI * jari_jari * jari_jari * tinggi

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jari_jari: jari_jari,
        tinggi: tinggi,
        luas_tabung: luas_tabung,
        volume_tabung: volume_tabung
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "bangun_ruang/bola" dengan method POST
app.post("/bangun_ruang/bola", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jari_jari = Number(req.body.jari_jari) // mengambil nilai jari_jari dari body

    let luas_permukaan= 4 * Math.PI * jari_jari * jari_jari
    let volume = 4/3 * Math.PI * jari_jari * jari_jari * jari_jari

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        luas_permukaan: luas_permukaan,
        volume: volume
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
}) 

// PRAKTIKUM SOAL 2
// end-point "/convert/celcius/10" dengan method POST
app.get("/convert/celcius/:derajat", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let derajat = Number (req.params.derajat) // mengambil nilai celcius dari body

    let reamur = 4/5 * derajat
    let fahrenheit = 9/5 * derajat + 32
    let kelvin = derajat + 273

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        celcius: derajat,
        result: {
            reamur: reamur,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
}) 

// end-point "/convert/reamur/:derajat" dengan method POST
app.get("/convert/reamur/:derajat", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let derajat = Number(req.params.derajat) // mengambil nilai reamur dari body

    let celcius = 5/4 * derajat
    let fahrenheit = 9/4 * derajat + 32
    let kelvin = 5/4 * derajat + 273

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        reamur: derajat,
        result: {
            celcius: celcius,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
}) 

// end-point "/convert/kelvin/:derajat" dengan method POST
app.get("/convert/kelvin/:derajat", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let derajat = Number(req.params.derajat) // mengambil nilai kelvin dari body

    let celcius = derajat - 273
    let fahrenheit = 9/5 * (derajat - 273) + 32
    let reamur = 4/5 * (derajat - 273)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        kelvin: derajat,
        result: {
            celcius: celcius, 
            fahrenheit: fahrenheit,
            reamur: reamur
        }
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
}) 

// end-point "/convert/fahrenheit/50" dengan method POST
app.get("/convert/fahrenheit/:derajat", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let derajat = Number(req.params.derajat) // mengambil nilai fahrenheit dari body

    let celcius = 5/9 * (derajat - 32)
    let reamur = 4/9 * (derajat - 32)
    let kelvin = 5/9 * (derajat - 32) + 273

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        fahrenheit: derajat,
        result: {
            celcius: celcius, 
            reamur: reamur,
            kelvin: kelvin
        }
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
}) 


// PRAKTIKUM SOAL 3
// end-point "/convert/decimal" dengan method POST
app.get("/convert/decimal/:angka", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let angka = Number (req.params.angka)

    let biner = angka.toString(2)
    let octal = angka.toString(8)
    let hexadecimal = angka.toString(16)
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        decimal: angka,
        result: {
            biner: biner,
            octal: octal,
            hexadecimal: hexadecimal
        }
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
}) 

app.get("/convert/biner/:angka", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let angka = Number (req.params.angka) // string

    let decimal = parseInt (angka, 2) // number
    let octal = decimal.toString(8)
    let hexadecimal = decimal.toString(16)
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        biner: angka,
        result: {
            decimal: decimal,
            octal: octal,
            hexadecimal: hexadecimal
        }
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
}) 

app.get("/convert/octal/:angka", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let angka = Number (req.params.angka) // string

    let decimal = parseInt (angka, 8) // number
    let biner = decimal.toString(2)
    let hexadecimal = decimal.toString(16)
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        octal: angka,
        result: {
            decimal: decimal,
            biner: biner,
            hexadecimal: hexadecimal
        }
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
}) 

app.get("/convert/hexadecimal/:angka", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let angka = Number (req.params.angka) // string

    let decimal = parseInt (angka, 16) // number
    let biner = decimal.toString(2)
    let octal = decimal.toString(8)
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        hexadecimal: angka,
        result: {
            decimal: decimal,
            biner: biner,
            octal: octal
        }
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
}) 

// PRAKTIKUM SOAL 4
// end-point "/convert/decimal" dengan method POST
app.post("/bmi", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let berat = Number(req.body.berat)
    let tinggi = Number(req.body.tinggi)
    let BMI = berat / (tinggi * tinggi)
    let status 

    if (BMI < 18.5){
        status = "Kekurangan berat badan"
    } else if (BMI >= 18.5 && BMI <= 24.9){
        status = " Normal (ideal)"
    } else if (BMI >= 25.0 && BMI <= 29.9){
        status = "Kelebihan berat badan"
    } else{
        status = "Kegemukan (Obesitas)"
    }

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        berat: berat,
        tinggi: tinggi,
        BMI: BMI,
        status: status
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
}) 