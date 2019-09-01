var w=1196,h=609;
var a=[12/w*100,194/h*100,533/w*100,245/h*100,328/w*100,400/h*100,473/w*100,449/h*100,640/w*100,516/h*100,924/w*100,566/h*100];
setCoords();
function setCoords()
{    var width=parseFloat($('#image').css('width'));
    var height=parseFloat($('#image').css('height'));
    var d=[];
   a.forEach((value,index)=>{
       if((index%2)==0){
        
        d.push((value*width)/100);
       }
       else{
        console.log(index);
        d.push((value*height)/100);
       }
   })
   console.log(a);
   console.log(d);
   $('#cost').attr('coords',`${d[0]},${d[1]},${d[2]},${d[3]}`);
   $('#learn_more').attr('coords',`${d[4]},${d[5]},${d[6]},${d[7]}`);
   $('#discount').attr('coords',`${d[8]},${d[9]},${d[10]},${d[11]}`);
}
   $(window).resize(()=>{
       setCoords();
   });
