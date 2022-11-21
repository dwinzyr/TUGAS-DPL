const readLine = require('readline-sync');

var mataPelajaran1 = readLine.question('Nilai B.Indo kamu:');


if(mataPelajaran1 < 70){
    console.log('Kurang')
}else{
    if( mataPelajaran1 < 80){
        console.log('Cukup')
    }else{
        if(mataPelajaran1 < 90){
            console.log('Baik')
        }else{
            if(mataPelajaran1 < 100){
                console.log('Sangat Baik')
            }
        }
    }
}

var mataPelajaran2 = readLine.question('Nilai Mtk kamu:');

if(mataPelajaran2 < 70){
    console.log('Kurang')
}else{
    if( mataPelajaran2 < 80){
        console.log('Cukup')
    }else{
        if(mataPelajaran2 < 90){
            console.log('Baik')
        }else{
            if(mataPelajaran2 < 100){
                console.log('Sangat Baik')
            }
        }
    }
}

var mataPelajaran3 = readLine.question('Nilai B.Inggris kamu:');

if(mataPelajaran3 < 70){
    console.log('Kurang')
}else{
    if( mataPelajaran3 < 80){
        console.log('Cukup')
    }else{
        if(mataPelajaran3 < 90){
            console.log('Baik')
        }else{
            if(mataPelajaran3 < 100){
                console.log('Sangat Baik')
            }
        }
    }
}

var mataPelajaran4 = readLine.question('Nilai Ipa kamu:');

if(mataPelajaran4 < 70){
    console.log('Kurang')
}else{
    if( mataPelajaran4 < 80){
        console.log('Cukup')
    }else{
        if(mataPelajaran4 < 90){
            console.log('Baik')
        }else{
            if(mataPelajaran4 < 100){
                console.log('Sangat Baik')
            }
        }
    }
}
    
    var nilai1 = Number (mataPelajaran1);
    var nilai2 = Number (mataPelajaran2);
    var nilai3 = Number (mataPelajaran3);
    var nilai4 = Number (mataPelajaran4);
    
    let total = nilai1+nilai2+nilai3+nilai4;
    let RataRata = total / 4;

console.log('Nilai Rata Rata:',RataRata);