    const para= document.getElementById('para');


    function changeBG(){
        let modifiedPara= para.innerHTML;
        const words = modifiedPara.match(/\b[\w']+\b/g) || []; 
        words.forEach((word)=>{
        const wordClean= word.replace(/[,.;:?!]/g,'');
        if(wordClean.length > 5){
            // Create a dynamic regex with word boundaries
            const regEx= new RegExp(`\\b${wordClean}\\b`,'gi');
            // Use wordClean for matching, but replace with the original 'word' (including punctuation)
        modifiedPara= modifiedPara.replace(regEx,`<span style="background-color: green; color:white" >${word}</span>`);
        }
    });
    para.innerHTML= modifiedPara;
    }


    /* having lot of problems with this code so indha idathil idhu kaivida padugirathu
    To know the problems check with chatgpt conversations: https://chatgpt.com/share/67b6299a-022c-8009-b555-b74e53cb0e47
    */
    