//Ini javascript\

function calculateBmi () {
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    // menghitung bmi
    let bmi = (weight / ((height * height )/10000))
    document.getElementById('result').innerHTML = 'Hasil BMI anda adalah'
    document.getElementById('bmi-output').innerHTML = bmi
    document.getElementById('penjelasan-tambahan').innerHTML='BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.'

    // menentukan category
    if (bmi<18.5) {
         document.getElementById('message').innerHTML = 'Anda kekurangan berat badan'
    } else if (bmi>=18.5 && bmi <25) {
        document.getElementById('message').innerHTML = 'Anda memilki berat badan normal'
    } else {
        document.getElementById('message').innerHTML = 'Anda kelebihan berat badan'
    }

    
}

function reload() {
    window.location.reload()
}
