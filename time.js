//////1


////count down Timer:


function time(){
    let a;
    a=new Date('20 Nov 2024 11:00AM')
    let b;
    b=a.getTime()
}
 
 let s=setInterval(function(){
    let c;
    c=new Date()
    let f;
    f=c.getTime()
    let r=b-f;

    let days;
    days=Math.floor(distance/(1000*60*60*24))
    let hours;
    hours=Math.floor(distance%(1000*60*60*24))/((1000*60*60))
    let min;
    min=Math.floor(distance%(1000*60*60))/((1000*60))
    let sec;
    sec=Math.floor(distance%(1000*60))/((1000))
    document.getElementById('time').innerHTML=days+ 'd'+ hours+ 'h'+ min+ 'min'+ sec+ 'sec'
  }, 1000);