const myFirstModal = document.getElementById('myFirstModal');
const mySecondModal = document.getElementById('mySecondModal');
const myThirdModal = document.getElementById('myThirdModal');
const myFourthModal = document.getElementById('myFourthModal');
const myFifthModal = document.getElementById('myFifthModal');
const mySexModal = document.getElementById('mySexModal');
const mySeventhModal = document.getElementById('mySeventhModal');
const eyghtModal = document.getElementById('eyghtModal');
const nineModal = document.getElementById('nineModal');
const tenModal = document.getElementById('tenModal');
const elevenModal = document.getElementById('elevenModal');
const tenElevenModal = document.getElementById('twentyModal');
const thirTeenth = document.getElementById('thirTeenth');
const fourTeenth = document.getElementById('fourTeenth');
const fiveTeenth = document.getElementById('fiveTeenth');
const sexTeenth = document.getElementById('sexTeenth');
const sevenTeenth= document.getElementById('sevenTeenth');
const eyghtTeenth = document.getElementById('eyghtTeenth');
const nineTeenth = document.getElementById('nineTeenth');
const thirTieth = document.getElementById('thirTieth');
const thirtyFirst = document.getElementById('thirtyFirst');  
const thirtySecond = document.getElementById('thirtySecond');

document.addEventListener('click', (e) => {
    if(e.target == document.getElementById('fightingStyle')){
        myFirstModal.style.display = 'block';
        
    }  
    if(e.target == myFirstModal){
        myFirstModal.style.display = 'none';
    }
   if (e.target == document.getElementById('constellation')){
        mySecondModal.style.display = 'block';

    }
    if (e.target == mySecondModal){
        mySecondModal.style.display = 'none';
    }
    if (e.target == document.getElementById('actionSurt') || (e.target == document.getElementById('surto2'))){
        myThirdModal.style.display = 'block';
    }
    if(e.target == myThirdModal){
        myThirdModal.style.display = 'none';
    }
    if(e.target == document.getElementById('increment') || (e.target == document.getElementById('ponto1')) || (e.target == document.getElementById('ponto2')) || 
    (e.target == document.getElementById('pontos3')) ||(e.target == document.getElementById('pontos4')) || (e.target == document.getElementById('pontos5')) || 
    (e.target == document.getElementById('pontos6')))
        myFourthModal.style.display = 'block';

    if(e.target == myFourthModal){
        myFourthModal.style.display = 'none';
    }
    if(e.target == document.getElementById('extra') || (e.target == document.getElementById('extra2')) || (e.target == document.getElementById('extra3')) 
    || (e.target == document.getElementById('extra4'))){
        myFifthModal.style.display = 'block';
    }
    if(e.target == myFifthModal){
        myFifthModal.style.display = 'none';
    }
    if(e.target == document.getElementById('pC')){
        mySexModal.style.display = 'block';
    }
    if(e.target == mySexModal){
        mySexModal.style.display = 'none';
    }
    if(e.target == document.getElementById('sexto') || (e.target == document.getElementById('sexto2')) || (e.target == document.getElementById('sexto3'))){
        mySeventhModal.style.display = 'block';
    }
    if(e.target == mySeventhModal){
        mySeventhModal.style.display = 'none';
    }
    if(e.target == document.getElementById('retomar') || (e.target == document.getElementById('retomar2')) || (e.target == document.getElementById('retomar3'))){
        eyghtModal.style.display = 'block';
    }
    if(e.target == eyghtModal){
        eyghtModal.style.display = 'none';
    }
    if(e.target == document.getElementById('armadura') || (e.target == document.getElementById('armadura2')) || (e.target == document.getElementById('armadura3'))){
        nineModal.style.display = 'block';
    }
    if(e.target == nineModal){
        nineModal.style.display = 'none';
    }

    if(e.target == document.getElementById('caminho') || e.target == document.getElementById('caminho2')|| e.target == document.getElementById('caminho3')|| e.target == document.getElementById('caminho4')){
        tenModal.style.display = 'block';
    }
    if(e.target == tenModal){
        tenModal.style.display = 'none';
    }
    if(e.target == document.getElementById('nunca')){
        elevenModal.style.display = 'block';
    }
    if(e.target == elevenModal){
        elevenModal.style.display = 'none';
    }
    if(e.target == document.getElementById('explosao')){
        tenElevenModal.style.display = 'block';
        
    }  
    if(e.target == tenElevenModal){
        tenElevenModal.style.display = 'none';
    }
  if(e.target == document.getElementById('força')){
    thirTeenth.style.display = 'block';
    
    }  
    if(e.target == thirTeenth){
        thirTeenth.style.display = 'none';
    }
    if(e.target == document.getElementById('atordoante')){
        fourTeenth.style.display = 'block';
        
    }  
    if(e.target == fourTeenth){
        fourTeenth.style.display = 'none';
    }

    if(e.target == document.getElementById('indomavel') || (e.target == document.getElementById('indomavel2'))){
        fiveTeenth.style.display = 'block';
        
    }  
    if(e.target == fiveTeenth){
        fiveTeenth.style.display = 'none';
    }
    if(e.target == document.getElementById('auto')){
        sexTeenth.style.display = 'block';
        
    }  
    if(e.target == sexTeenth){
        sexTeenth.style.display = 'none';
    }
    if(e.target == document.getElementById('setimo') || (e.target == document.getElementById('setimo2')) || (e.target == document.getElementById('setimo3'))){
        sevenTeenth.style.display = 'block';
    }
    if (e.target == sevenTeenth){
        sevenTeenth.style.display = 'none';
    }
    if(e.target == document.getElementById('mestre')){
        eyghtTeenth.style.display = 'block';
    }
    if (e.target == eyghtTeenth){
        eyghtTeenth.style.display = 'none';
    }
    if(e.target == document.getElementById('ouro')){
        nineTeenth.style.display = 'block';
    }
    if (e.target == nineTeenth){
        nineTeenth.style.display = 'none';
    }
    if(e.target == document.getElementById('oitavo')){
        thirTieth.style.display = 'block';
    }
    if (e.target == thirTieth){
        thirTieth.style.display = 'none';
    }
    if(e.target == document.getElementById('divina')){
        thirtyFirst.style.display = 'block';
    }
    if (e.target == thirtyFirst){
        thirtyFirst.style.display = 'none';
    }
    if(e.target == document.getElementById('milagre')){
        thirtySecond.style.display = 'block';
    }
    if (e.target == thirtySecond){
        thirtySecond.style.display = 'none';
    }

    if(e.target == document.getElementById('fightingStyle')){
        myFirstModal.style.display = 'block';
        
    }
    if(e.target == myFirstModal){
        myFirstModal.style.display = 'none';
    }
    if (e.target == document.getElementById('constellation')){
        mySecondModal.style.display = 'block';
    
    }
    if (e.target == mySecondModal){
        mySecondModal.style.display = 'none';
    }
    if (e.target == document.getElementById('actionSurt') || (e.target == document.getElementById('surto2'))){
        myThirdModal.style.display = 'block';
    }
    if(e.target == myThirdModal){
        myThirdModal.style.display = 'none';
    }
    if(e.target == document.getElementById('increment') || (e.target == document.getElementById('ponto1')) || (e.target == document.getElementById('ponto2')) || 
    (e.target == document.getElementById('pontos3')) ||(e.target == document.getElementById('pontos4')) || (e.target == document.getElementById('pontos5')) || 
    (e.target == document.getElementById('pontos6'))|| (e.target == document.getElementById('pontos7'))|| (e.target == document.getElementById('pontos8'))){
        myFourthModal.style.display = 'block';
    }
    if(e.target == myFourthModal){
        myFourthModal.style.display = 'none';
    }
    if(e.target == document.getElementById('extra') || (e.target == document.getElementById('extra2')) || (e.target == document.getElementById('extra3')) 
    || (e.target == document.getElementById('extra4'))){
        myFifthModal.style.display = 'block';
    }
    if(e.target == myFifthModal){
        myFifthModal.style.display = 'none';
    }
    if(e.target == document.getElementById('pC')){
        mySexModal.style.display = 'block';
    }
    if(e.target == mySexModal){
        mySexModal.style.display = 'none';
    }
    if(e.target == document.getElementById('sexto') || (e.target == document.getElementById('sexto2')) || (e.target == document.getElementById('sexto3'))){
        mySeventhModal.style.display = 'block';
   
    }
    if(e.target == mySeventhModal){
        mySeventhModal.style.display = 'none';
    }
    if(e.target == document.getElementById('retomar') || (e.target == document.getElementById('retomar2')) || (e.target == document.getElementById('retomar3'))){
        eyghtModal.style.display = 'block';
    }
    if(e.target == eyghtModal){
        eyghtModal.style.display = 'none';
    }
    if(e.target == document.getElementById('armadura') || (e.target == document.getElementById('armadura2')) || (e.target == document.getElementById('armadura3'))){
        nineModal.style.display = 'block';
    }
    if(e.target == nineModal){
        nineModal.style.display = 'none';
    }
    
    if(e.target == document.getElementById('caminho') || e.target == document.getElementById('caminho2')|| e.target == document.getElementById('caminho3')|| e.target == document.getElementById('caminho4')){
        tenModal.style.display = 'block';
    }
    if(e.target == tenModal){   
    tenModal.style.display = 'none';
    }
    if(e.target == document.getElementById('nunca')){
        elevenModal.style.display = 'block';
    
    }
    if(e.target == elevenModal){
        elevenModal.style.display = 'none';
    }
    if(e.target == document.getElementById('explosao')){
        tenElevenModal.style.display = 'block';
        
    }  
    if(e.target == tenElevenModal){
        tenElevenModal.style.display = 'none';
    }
    if(e.target == document.getElementById('força')){
    thirTeenth.style.display = 'block';
    
    }  
    if(e.target == thirTeenth){
        thirTeenth.style.display = 'none';
    }
    if(e.target == document.getElementById('atordoante')){
        fourTeenth.style.display = 'block';
        
    }  
    if(e.target == fourTeenth){
        fourTeenth.style.display = 'none';
    }
    
    if(e.target == document.getElementById('indomavel') || (e.target == document.getElementById('indomavel2'))){
        fiveTeenth.style.display = 'block';
    }  
    if(e.target == fiveTeenth){
        fiveTeenth.style.display = 'none';
    }
    if(e.target == document.getElementById('auto')){
        sexTeenth.style.display = 'block';
        
    }  
    if(e.target == sexTeenth){
        sexTeenth.style.display = 'none';
    }
    if(e.target == document.getElementById('setimo') || (e.target == document.getElementById('setimo2')) || (e.target == document.getElementById('setimo3'))){
        sevenTeenth.style.display = 'block';
    }
    if (e.target == sevenTeenth){
        sevenTeenth.style.display = 'none';
    }
    if(e.target == document.getElementById('mestre')){
        eyghtTeenth.style.display = 'block';
    }
    if (e.target == eyghtTeenth){
        eyghtTeenth.style.display = 'none';
    }
    if(e.target == document.getElementById('ouro')){
        nineTeenth.style.display = 'block';
    }
    if (e.target == nineTeenth){
        nineTeenth.style.display = 'none';
    }
    if(e.target == document.getElementById('oitavo')){
        thirTieth.style.display = 'block';
    }
    if (e.target == thirTieth){
        thirTieth.style.display = 'none';
    }
    if(e.target == document.getElementById('divina')){
        thirtyFirst.style.display = 'block';
    }
    if (e.target == thirtyFirst){
        thirtyFirst.style.display = 'none';
    }
    if(e.target == document.getElementById('milagre')){
        thirtySecond.style.display = 'block';
    }
    if (e.target == thirtySecond){
        thirtySecond.style.display = 'none';
    }
    });