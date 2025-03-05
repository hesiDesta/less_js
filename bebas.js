let nomor = 1;

function pesan(){
    let input = document.querySelector('.input');
    let inputan = input.value;
    const tombolBuy = document.querySelector('#tombolBuy');
    // tombolBuy.style.background = 'red';
    // tombolBuy.style.height = '100px'
    // tombolBuy.style.color = 'white';
    // tombolBuy.innerHTML = '<h1>Ini Sudah Di klik</h1>';
    
    if(inputan.trim() === ""){
        alert('Tidak Boleh kosong')
        return 0;
    }
    
    


    const pr = document.createElement("h1");
    pr.innerText = nomor + ". " + inputan ;

    const hapusbtn = document.createElement('button')
    hapusbtn.innerText = "Hapus"
    hapusbtn.style.background = 'red'
    hapusbtn.style.color = 'white'
    hapusbtn.style.border = 'none'
    hapusbtn.style.padding = '5px 10px'
    hapusbtn.style.cursor = 'pointer'
    hapusbtn.style.borderRadius = '8px'

    const container = document.createElement('div')
    container.style.display = 'flex'
    container.style.alignItems = 'center'
    container.style.gap = '10px'

    hapusbtn.onclick = function (){
        confirm('Yakin dek?')
        if(confirm() == true){
            container.remove()
            alert('berhasil dihapus')

        }
        else{
            return 0;
        }
    }

    container.appendChild(pr);
    container.appendChild(hapusbtn);

    document.body.appendChild(container)

    nomor++;
    input.value = "";
    
}