function translate(country,text){
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

        case "United Kingdom" :
            codeCountry="en"
            break;

        case "United States" :
            codeCountry="en"
            break;
    }

    $.ajax({
        method:"GET",
        url:`https://api.mymemory.translated.net/get?q=${text}!&langpair=${codeCountry}|id`
    })
    success(data=>{
        return data.matches[1].translation;
    })
}












