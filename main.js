document.getElementById('btn').addEventListener('click',(e)=>{
    e.preventDefault();
   let givindate= document.getElementById('datevalue').value ;
   console.log(givindate)
   let currentdate=new Date();
   let realgivintime=new Date(givindate);
   var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');

   function ringbell(){
      
       audio.play();
       alert("Hey Buddy your alarm ringning")
   }

   let totaltime=(realgivintime-currentdate);
   console.log(totaltime)
   if(totaltime>=0){
       console.log('finfished');
       setTimeout(()=>{
           ringbell();
           alert("Alarm is ringing 🕥")
           
       },totaltime)
   }
})