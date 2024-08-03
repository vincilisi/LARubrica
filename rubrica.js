let contatti= document.querySelector('#contatti');
let mostra =document.querySelector('#mostra');
let aggiaggiungi = document.querySelector('#aggiungi');
let username =document.querySelector('#username');
let phone = document.querySelector('#phone');
let check = false;


const rubrica = {
    
    lista_contatti:[
        {contact_name: 'Vincenzo', phone_number:252523},
        {contact_name: 'Fatima', phone_number:252623},
        {contact_name: 'Ale', phone_number:252124},
        
    ],
    
    showcontatti: function (){
        
        contatti.innerHTML='';
        this.lista_contatti.forEach((contatto)=>{
            let div=document.createElement('div');
            div.classList.add('card-custom')
            div.innerHTML=` 
            <p class="lead">${contatto.contact_name}</p>
            <p>${contatto.phone_number}</p>
            <i class="fa-regular fa-trash-can icon"></i>`
            
            
            contatti.appendChild(div);
        });
        const icons = document.querySelectorAll('.icon');
        icons.forEach((icon, i) => {
            icon.addEventListener('click', () => {
                this.lista_contatti.splice(i, 1)
                this.showcontatti();
            });
        });
        
        
        
    },
    
    addContact : function(newCont, newNum){
        
        
        
        
        if(newCont && newNum){
            this.lista_contatti.push({contact_name: newCont, phone_number: newNum});
            this.showcontatti();
            if (check == false) {
                rubrica.showcontatti();
                check = true;
                mostra.innerHTML='Nascondi Contatti'
            };
            
            
        }else{
            alert('Devi compilare i campi');
        }
    }
    
    
};


mostra.addEventListener('click', ()=>{
    if (check == false) {
        rubrica.showcontatti();
        check = true;
        mostra.innerHTML='Nascondi Contatti'
    } else {
        contatti.innerHTML='';
        check= false;
        mostra.innerHTML='Mostra Contatti'
        
    };
});


aggiaggiungi.addEventListener('click', ()=>{
    rubrica.addContact(username.value, phone.value);
    username.value ='';
    phone.value=''
});

let cerca = document.querySelector('#search');

