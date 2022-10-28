function gerador() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')  // indeificar o elemente e o id do html para que aja interacao
    if (num.value.length == 0) {  //colocar o codigo para que o js saiba o que deve ser feito
        window.alert('Por favor digite um numero!')
    } else {

        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <=10000) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++

        }
    }
}