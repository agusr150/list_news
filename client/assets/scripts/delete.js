
function deletenews(id){
    $.ajax({
        type: "DELETE", 
        url: `http://localhost:3000/news/delete/${id}`, 
        headers: {
            token: localStorage.getItem('token')
        },
        success: (data)=>{
            console.log("sukses")
                $(`#error`).empty()
                $(`#news-table`).empty()
                listshow()
                $(`#newslist`).show()
        },
        error: (err)=>{
            $(`#error`).append(`Error : ${err.response}`)
        }
    })
}