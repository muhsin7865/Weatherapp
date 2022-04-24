
    var result = []
    var array1 = [16, 17, 6, 3, 5, 2];
   let n1 = 0
   let array2 = array1
     array2.shift();
     descOrder = array2.sort((n1, n2)=>n2-n1)
     
   for (let i=0;i<6;i++){
       
        
        if(array1[n1]<descOrder[n1]){
            result.push(array1[n1])
            descOrder.remove(array1[n1])
            array1.shift();
        }
       
   }
   console.log(result);
    
   