function seenews(country, category){ //to hit API news based on id
    console.log(country)
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
            console.log("sukses")
            $(`#newslist`).hide()
            $(`#seenews`).show()
            console.log(data.articles)
            let artikel = data.articles
            for (let i=0; i<artikel.length; i++){
                $(`#news`).append(`
                <tr>
                    <td>${artikel[i].title}</td>
                    <td>${artikel[i].source.name}</td>
                    <td><a href='${artikel[i].url}'>Read</a></td>
                </tr>
                `)
            }

            
        },
        error: (err)=>{
            console.log(err)
            $(`#error`).append(`Error : ${err.response}`)
        }
    })
}