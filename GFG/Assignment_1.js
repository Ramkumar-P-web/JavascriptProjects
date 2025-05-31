/* let products = [
    {
      id: "1",
      item: "Shirt"
    },
    {
      id: "2",
      item: "Jeans"
    },
    {
      id: "3",
      item: "T-shirt"
    },
    {
      id: "4",
      item: "Denim Jacket"
    },
    {
      id: "5",
      item: "Casual Shoes"
    }
   ];
   
   for(let obj of products){
    console.log(obj.id,obj.item);
   }; */




/*    const channel ={
    title: 'Ramkumar TV',
    videoTitle: 'Javascript',
    languges: ['tamil','malayalam','telugu'],
    showVideos(){
        for(let lang of this.languges){
            console.log(`${this.videoTitle}-${lang.toUpperCase()}`);
        }
    }
   };

   channel.showVideos();
 */

   /* let piramid = "*";
   let inverted = 0;
   function padRow(rowNumber,rowCount){
    return " ".repeat(rowCount-rowNumber) + piramid.repeat(rowNumber*2-1) +" ".repeat(rowCount-rowNumber) ;
   }
   for(let i=1;i<=8;i++){
    if(inverted){console.log(padRow(i,8));}
    else if(i===8){
      for(let i=8;i!==0;i--){
        console.log(padRow(i,8));
      }
    }
    
   } */


/* 
let character="*";
let count=8;
let arr=[];
let invert=false;
function padRow(rowNumber,rowCount){
  return " ".repeat(rowCount-rowNumber)+character.repeat(rowNumber*2-1)+" ".repeat(rowCount-rowNumber);
}
for(let i=1;i<=count;i++){
  if(invert){
    arr.unshift(padRow(i,count));
  }else
{arr.push(padRow(i,count))};
}
// console.log(arr);
let str="";
for(let element of arr){
  // str=str+element+"\n";
  str=element;
  console.log(str);
}
// console.log(str);
 */

/* function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  /* let passFail= if(hasPassingGrade(studentScore)) {
    "You passed the course."
  }else{"You failed the course."}; */ /*
  return `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(studentScore)}. ${(hasPassingGrade(studentScore))?"You passed the course.":"You failed the course."}`
  }
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37)); */

/*   <script>
 let btn= document.getElementById('btn');
btn.addEventListener('mouseover',(event)=>{
    btn.style.backgroundColor='Orange';
})
btn.addEventListener('mouseout',(event)=>{
    btn.style.backgroundColor='White';
    // btn.textContent='clicked and mouse out';
})
btn.addEventListener('click',(event)=>{
    btn.textContent='clicked';
    console.log("clicked")
}) 
</script> */