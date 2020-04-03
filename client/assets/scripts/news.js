function seenews(country, category){ //to hit API news based on id
    // console.log(country)
    switch(country) {
        case 'Indonesia':
          code = "id"
          break;
        case 'Australia':
            code = "au"
          break;
        case 'China':
            code = "cn"
          break;
        case 'France':
            code = "fr"
          break;
        case 'Germany':
            code = "de"
          break;
        case 'India':
            code = "in"
          break;
        case 'Italy':
            code = "it"
          break;
        case 'Japan':
            code = "jp"
          break;
        case 'Malaysia':
            code = "my"
          break;
        case 'Netherlands':
            code = "nl"
          break;
        case 'Singapore':
            code = "sg"
          break;
        case 'United_Kingdom':
          code = "gb"
        break;
        case 'United_States':
          code = "us"
        break;
    }

    $.ajax({
        type: "GET", 
        url: `http://newsapi.org/v2/top-headlines?country=${code}&category=${category}&apiKey=b26cbc3a8e544fc0bdae88645907e76c`, 
        success: (data)=>{
            // console.log("sukses")
            $(`#newslist`).hide()
            $(`#seenews`).show()
            let artikel = data.articles
            // console.log(country+"<<<country")
            for (let i=0; i<artikel.length; i++){
              let b = `${artikel[i].title}`
              let c = b.replace(/\W/g,"_")
              // let d = c.replace("'","*")
              // console.log(c,"///////////////////")
              let a = `onclick=terjemahan("${country}","${c}")`
                $(`#news`).append(`
                <tr>
                    <td>${artikel[i].title}</td>
                    <td>${artikel[i].source.name}</td>
                    <td>
                      <a href='${artikel[i].url}'>Read</a>
                      <button type="button" class="btn btn-success" ${a}>Translate</button>
                    </td>
                </tr>
                `)
            }
        },
        error: (err)=>{
            // console.log(err)
            $(`#error`).append(`Error : ${err.response}`)
        }
    })
}

function terjemahan(country,y){
  let text = y.replace(/[\W_]+/g," ")
  // console.log(d,"=======================")
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
  // console.log(codeCountry)
  //console.log(text)
    $.ajax({
      type:"GET",
      url:`https://api.mymemory.translated.net/get?q=${text}!&langpair=${codeCountry}|id`,
      success: (data)=>{
      // console.log (data.matches[0].translation,":::::::::::::::::::")
      // res.status
          alert(data.matches[0].translation)
      },
      error:(err)=>{
          // console.log(err)
          res.status(404).json({message:"news not found"})
      }
    })
}

