const fs = require('fs');

crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if(!Number(base)){
            reject(`error, La base ingresada no es un numero.`);
            return;
        }

        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`1_tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports={
    crearArchivo
}