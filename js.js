let btn = document.getElementById('btn')
let output = document.getElementById('outputtext')
let tahminSayisi = document.getElementById('sayi')
let girilenSayi = document.getElementById('girilenSayilar')
let girilenSayilar = []
let tahmSayisi = 1;

let number = Math.floor(Math.random() * 101)
console.log("Random number is :", number)
btn.addEventListener('click', function () {

    let input = document.getElementById('userinput').value;
    if (input < 0 || input > 100) {
        output.innerHTML = "Lütfen Belirlenen Aralıklarda Bir Sayı Giriniz!!!!"


    } else if (input > number) {
        output.innerHTML = "Daha düşük bir sayı dene!!!!"
        tahminSayisi.innerHTML = `Tahmin Sayısı:${tahmSayisi++}`;
        girilenSayilar.push(input)
        girilenSayi.innerHTML = `Girilen Sayılar:${girilenSayilar}`


    } else if (input < number) {
        output.innerHTML = "Daha yüksek bir sayı dene!!!!"
        tahminSayisi.innerHTML = `Tahmin Sayısı:${tahmSayisi++}`;
        girilenSayilar.push(input);
        girilenSayi.innerHTML = `Girilen Sayılar:${girilenSayilar}`

    } else {
        output.innerHTML = `TEBRİKLER DOĞRU TAHMİN,TAHMİNİNİZ:${input}`
    }
})









