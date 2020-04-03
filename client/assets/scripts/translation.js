function translate(country,y){
    
    let text = y.replace(/[\W_]+/g," ")
    let codeCountry = '';
    switch(country){
        case "Australia" :
            codeCountry="en"
            break;
  
        case "China" :
            codeCountry="zh"
            break;
  
        case "France" :
            codeCountry="fr"
            break;
        
        case "Germany" :
            codeCountry="de"
            break;
  
        case "India" :
            codeCountry="hi"
            break;
  
        case "Italy" :
            codeCountry="it"
            break;
  
        case "Japan" :
            codeCountry="ja"
            break;
  
        case "Malaysia" :
            codeCountry="ms"
            break;
  
        case "Netherlands" :
            codeCountry="nl"
            break;
  
        case "Singapore" :
            codeCountry="en"
            break;
  
        case "United_Kingdom" :
            codeCountry="en"
            break;
  
        case "United_States" :
            codeCountry="en"
            break;
    }
      $.ajax({
        type:"GET",
        url:`https://api.mymemory.translated.net/get?q=${text}!&langpair=${codeCountry}|id`,
        success: (data)=>{
            alert(data.matches[0].translation)
        },
        error:(err)=>{
            res.status(404).json({message:"news not found"})
        }
      })
  }
  