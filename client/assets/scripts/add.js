
$(`#addlist-form`).submit(function (event){
    event.preventDefault()
    let country= $(`#country-add`).val()
    let category = $(`#category-add`).val()
        $.ajax({
            type: "POST", 
            url: `http://localhost:3000/news/create`, 
            headers: {
                token: localStorage.getItem('token')
            },
            data: {
                country: country,
                category: category
            },
            success: (data)=>{
                console.log("sukses")
                $(`#error`).empty()
                $(`#news-table`).empty()
                $('#addlist').modal('hide')
                listshow()
                $(`#newslist`).show()
            },
            error: (err)=>{
                console.log(err)
                $(`#error`).append(`Error : ${err.response}`)
            }
        })
})