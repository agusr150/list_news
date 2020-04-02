
function editnews(id){ //to get list news based on id
    console.log(id)
    $.ajax({
        type: "GET", 
        url: `http://localhost:3000/news/show/${id}`, 
        headers: {
            token: localStorage.getItem('token')
        },
        success: (data)=>{
            console.log("sukses")
            console.log(data)
            $(`#id-edit`).empty()
            $(`#id-edit`).append(`<input type="hidden" id="listid-edit" value=${data.id}>`)
            $(`#country-edit`).empty()
            $(`#country-edit`).append(`<option>${data.country}</option>
                <option>Indonesia</option>
                <option>Australia</option>
                <option>China</option>
                <option>France</option>
                <option>Germany</option>
                <option>India</option>
                <option>Italy</option>
                <option>Japan</option>
                <option>Malaysia</option>
                <option>Netherlands</option>
                <option>Singapore</option>
                <option>United_Kingdom</option>
                <option>United_States</option>`)
            $(`#category-edit`).empty()   
            $(`#category-edit`).append(` <option>${data.category}</option>
                <option>business</option>
                <option>entertainment</option>
                <option>health</option>
                <option>science</option>
                <option>sports</option>
                <option>technology</option>`)
        },
        error: (err)=>{
            $(`#error`).append(`Error : ${err.response}`)
        }
    })
}

$(`#editlist-form`).submit(function (event){
    event.preventDefault()
    let id = $(`#listid-edit`).val()
    console.log(id+"<<<id")
    let country= $(`#country-edit`).val()
    console.log(country+"<<<country")
    let category = $(`#category-edit`).val()
        $.ajax({
            type: "PUT", 
            url: `http://localhost:3000/news/edit/${id}`, 
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
                $('#editlist').modal('hide')
                listshow()
                $(`#newslist`).show()
            },
            error: (err)=>{
                console.log(err)
                $(`#error`).append(`Error : ${err.response}`)
            }
        })
})