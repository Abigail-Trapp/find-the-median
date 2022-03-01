function findMedian(arr) {
    let sortArr = arr.sort((a,b) => a-b) 
    let number = sortArr.length/2
   let slice = sortArr.slice(0,number) 
   let secondHalf = sortArr.slice(number)
   
   if(sortArr.length % 2 !== 0){
     return secondHalf.shift()
   } 
   else
   {return (secondHalf.shift() + slice.pop()) / 2}
   }
   console.log(findMedian([10,2,5,7,9,3,4,1]))
   console.log(findMedian([10,11,12,13,14,15,16,17,18,19,20]))

