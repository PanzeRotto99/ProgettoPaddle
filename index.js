 
let num1=0;
let num2=0;
squadra = new Array ();
function Inserimento(){         
        num1 = parseInt(prompt("Quante coppie partecipano al torneo?", ""));        
        num1= num1*2;   
        insernomi();
}
Inserimento();
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
 
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
 
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
 
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
 
  return array;
}
function insernomi(){
    
    var nom = new Array();
    let s = "";
    //console.log(num1);
    for(i=0; i<num1; i++){
    nom [i] = prompt("inserisci il nome del giocatore", "");
    }
    shuffle(nom);
    
    
    for(i=0; i<num1; i++){  
        let myPlayer = nom[i];
        if(i % 2 === 0){
            s += myPlayer + " - ";
            squadra[i]=myPlayer;
        }else{
        s += myPlayer + '<br>' + '<br>';
            squadra[i] =myPlayer;
            }           
    }
 
 
    console.log(squadra);
 
    document.getElementById('nome').innerHTML= s ;
    giochiamo();
}   
 
 
function giochiamo(){ 
    
     document.getElementById('b1').style.display = 'block';
    
    /*num2=num1/2;
    if(num2 % 2 === 0){
        document.getElementById('b1').style.display = 'block';
        document.getElementById('b2').style.display = 'block';
    }else{
        document.getElementById('b1').style.display = 'block';}
    */
}
 
 
function selecteliminazione(){
    //document.getElementById('punti').style.display = 'none';
    document.getElementById('eliminazione').style.display = 'block';
    prova();
}
 
/*function selectpunti(){
    document.getElementById('eliminazione').style.display = 'none';
    document.getElementById('punti').style.display = 'block';
 
prova();
}
*/
 
function prova(){
    let tabella= "";
 
    tabella += '<form id="form"> ';
 
    tabella+="<table style='width:100%'>";
    
    tabella+='<tr> <th id="string">coppia 1</th> <th id="string">coppia 2</th> <th id="string">vincitrice</th> </tr>';
    
    cont = 0;
    cont2= 0;
    for(let i=0;i<squadra.length;i+=4){ 
 
 
        tabella += "<tr> <td id='" + cont2+ "'>"+squadra[i]+ "- "+squadra[i+1] +"</td> <td id = '"+(cont2+1)+"'>" +squadra[i+2] +" - " +squadra[i+3] + "</td> <td> <input type='radio' id='C1' name="+ cont + " value='coppia1' required><label for='male'>Coppia 1</label></td><td> <input type='radio' id='C2' name="+ cont +" value='coppia2' required><label for='coppia2'>Coppia 2</label></td></tr>";
        
        cont++;
        cont2+=2;
 
    }
 
    tabella +="</table>";
 
    tabella += '<input type="submit" value="Submit">';
    
    tabella += '</form>';
    
    
    cont3= 0;
    console.log(tabella);
    document.getElementById('tabella').innerHTML= tabella;
    let vet = [];
 
    document.getElementById('form').onsubmit = function(event) {
        event.preventDefault();
        for(let j=0;j<cont;j++){
            let ele = document.getElementsByName(j);
            console.log(cont3);
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked){
                    let sq="";
                    if(ele[i].value == "coppia1"){
                    sq = document.getElementById(cont3).innerHTML;
                    }
                    if(ele[i].value == "coppia2"){
                    sq = document.getElementById(cont3 + 1).innerHTML;
                    }
                    vet.push(sq);
                }
                //alert( "W1: "+ele[i].value);
            }
            cont3 +=2;
    }
    console.log(vet);
    document.getElementById('form').onsubmit= stampavincitrici(vet) ;
    // You must return false to prevent the default form behavior
    return false;
  }
  
}
 
function stampavincitrici(vet){
 
if(vet.length>1){
 
    let tabella="";
 
tabella += '<form id="form"> ';
 
tabella+="<table style='width:100%'>";
 
tabella+='<tr> <th id="string">coppia 1</th> <th id="string">coppia 2</th> <th id="string">vincitrice</th> </tr>';
    
cont = 0;
cont2= 0;
 
for(let i=0; i<vet.length; i+=2){
 
tabella += "<tr> <td id='" + cont2+ "'>"+vet[i]+ "</td> <td id = '"+(cont2+1)+"'>" +vet[i+1] +" </td> <td> <input type='radio' id='C1' name="+ cont + " value='coppia1' required><label for='male'>Coppia 1</label></td><td> <input type='radio' id='C2' name="+ cont +" value='coppia2' required><label for='coppia2'>Coppia 2</label></td></tr>";
 
cont++;
cont2+=2;
 
}
 
tabella +="</table>";
 
    tabella += '<input type="submit" value="Submit">';
    
    tabella += '</form>';
console.log(tabella);
document.getElementById('tabella').innerHTML= tabella;
 
cont3= 0;
    console.log(tabella);
    document.getElementById('tabella').innerHTML= tabella;
    let vet2 = [];
 
    document.getElementById('form').onsubmit = function(event) {
        event.preventDefault();
        for(let j=0;j<cont;j++){
            let ele = document.getElementsByName(j);
            console.log(cont3);
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked){
                    let sq="";
                    if(ele[i].value == "coppia1"){
                    sq = document.getElementById(cont3).innerHTML;
                    }
                    if(ele[i].value == "coppia2"){
                    sq = document.getElementById(cont3 + 1).innerHTML;
                    }
                    vet2.push(sq);
                }
                //alert( "W1: "+ele[i].value);
            }
            cont3 +=2;
    }
    console.log(vet2);
    document.getElementById('form').onsubmit= stampavincitrici(vet2) ;
    // You must return false to prevent the default form behavior
    return false;
  }
}
else{
let vincitore ="vince la squadra:   "+ vet;
console.log(vincitore);
document.getElementById('vincitore').innerHTML= vincitore;
}
 
 
}

