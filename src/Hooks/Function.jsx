
function FirstLetterCaps(str){
    const text = str.toLowerCase()
     .split(' ')
     .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
     .join(' ');
     return text


 }

export {FirstLetterCaps}


function isShopOpen(storeDetails){
    let done = false
    let ans = false
    var date = new Date();
    const easternTime = date.toLocaleString("en-US", {timeZone: "America/New_York"})
    let day = new Date(easternTime)
    storeDetails[0]?.Hours !== null && storeDetails[0]?.Hours.forEach((items , index)=>{
         
       if(!done){
            if(index === day.getDay()-1){
                
                items.Open.forEach((item)=>{
                    console.log( new Date(day).getHours() , item.Time1.split(":")[0] ,' day')
                    if( new Date(day).getHours() > item.Time1.split(":")[0] ){   
                            if( new Date(day).getHours() < item.Time2.split(":")[0]){
                                ans= true  
                                done =true       
                            }else if(new Date(day).getHours() === item.Time2.split(":")[0] && new Date(day).getMinutes() < item.Time2.split(":")[1] ){
                                ans= true 
                                done =true       
                            }    
                    }else  if( new Date(day).getHours() === item.Time1.split(":")[0] &&  new Date(day).getMinutes() < item.Time1.split(":")[1] ){   
                        if( new Date(day).getHours() < item.Time2.split(":")[0]){
                            ans= true  
                            done =true       
                        }else if(new Date(day).getHours() === item.Time2.split(":")[0] && new Date(day).getMinutes() < item.Time2.split(":")[1] ){
                            ans= true 
                            done =true       
                        }    
                }
                })
            }
       }
    })

     console.log(ans)
     return ans
   }

   export {isShopOpen}