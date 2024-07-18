// deklarasi variabel
const height = document.getElementById('input-tinggi-badan');
const weight = document.getElementById('input-berat-badan');
const age = document.getElementById('input-usia');
const resultBmi = document.getElementById('bmi-output');
const penjelasanUnderweight = document.getElementById('penjelasan-kategori-underweight')
const penjelasanNormal = document.getElementById('penjelasan-kategori-normal')
const penjelasanOverweight = document.getElementById('penjelasan-kategori-overweight')
const penjelasanObesitas = document.getElementById('penjelasan-kategori-obesitas')


// fungsi menghitung BMI
function cacluateBmi(event) {
    event.preventDefault();

    const tinggibadan = parseFloat(height.value) / 100;
    const beratbadan = parseFloat(weight.value);
    const umur = parseInt(age.value, 10);
    const jenisKelamin = document.querySelector('input[name="jeniskelamin"]:checked');

    // validasi Input 
    if (isNaN(tinggibadan) || isNaN(beratbadan) || isNaN(umur) || !jenisKelamin) {
        alert('inputan anda kosong')
        return;
    }

    // rumus bmi
    let bmi = beratbadan / (tinggibadan * tinggibadan);
    bmi = bmi.toFixed(1)

    resultBmi.textContent = bmi;

    // Klasifikasi hasil bmi dan penjelasannya
    if (bmi < 18.5) {
        document.getElementById('kategori').innerHTML = "Kekurangan Berat Badan";
        penjelasanUnderweight.style.display = 'block'
        penjelasanNormal.style.display = 'none'
        penjelasanOverweight.style.display = 'none'
        penjelasanObesitas.style.display = 'none'
    } else if (bmi < 25) {
        document.getElementById('kategori').innerHTML ="Normal (ideal)"
        penjelasanUnderweight.style.display = 'none'
        penjelasanNormal.style.display = 'block'
        penjelasanOverweight.style.display = 'none'
        penjelasanObesitas.style.display = 'none'
    } else if (bmi < 30) {
        document.getElementById('kategori').innerHTML = "Kelebihan Berat Badan"
        penjelasanUnderweight.style.display = 'none'
        penjelasanNormal.style.display = 'none'
        penjelasanOverweight.style.display = 'block'
        penjelasanObesitas.style.display = 'none'
    } else {
        document.getElementById('kategori').innerHTML = "Kegemukan (obessitas)"
        penjelasanUnderweight.style.display = 'none'
        penjelasanNormal.style.display = 'none'
        penjelasanOverweight.style.display = 'none'
        penjelasanObesitas.style.display = 'block'
    }

}

// reset form
function resetInput () {
    document.getElementById('bmi-form').reset;
    document.getElementById('kategori').innerHTML = ''
    resultBmi.textContent = '0' ;
    penjelasanUnderweight.textContent = ''
    penjelasanNormal.textContent = ''
    penjelasanOverweight.textContent = ''
    penjelasanObesitas.textContent = ''
}

// Event Submit dan reset
document.getElementById('bmi-form').addEventListener('submit', cacluateBmi);
document.getElementById('reset-button').addEventListener('click', resetInput);


