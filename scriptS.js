//dom
const touchesS = [...document.querySelectorAll('.button')];
const listeKeycode = touchesS.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur)
})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)
})

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case'8':
            ecran.textContent = "";
            break;
            case'13':
            var calcul = eval(ecran.textContent);
            ecran.textContent = calcul;
            break;

            case'227' :
            calcul=Math.PI
            ecran.textContent += calcul;
            break;

            case'251' :
            Res=Math.sqrt();
            ecran.textContent = Res;
            break;

            case'169':
            ecran.textContent=")"
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touchesS[indexKeycode];
                ecran.textContent += touche.innerHTML;     
            }
        }
        
    }
    
    function history(){
        if (sessionStorage.getItem('Autosave')){
            resultat.valeur = sessionStorage.getItem('Autosave');
        }
        sessionStorage.setItem('Autosave', resultat.valeur);
        console.log(resultat);
    } 
    
  

    window.addEventListener('error', (e) => {
        alert('une erreur est survenue dans votre calcul :' + e.message)
    });

    
    

