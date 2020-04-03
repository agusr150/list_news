
function listshow(){
    $.ajax({
        type: "GET", 
        url: `http://localhost:3000/news/show`, 
        headers: {
            token: localStorage.getItem('token')
        },
        success: (data)=>{
            console.log(data)
            for (let i=0; i<data.length; i++){
                $(`#news-table`).append(`
                    <tr>
                        <th scope="row">${i+1}</th>
                        <td>${data[i].country}</td>
                        <td>${data[i].category}</td>
                        <td>
                            <button type="button" class="btn btn-success" onclick=seenews('${data[i].country}','${data[i].category}')>See News Highlight</button>
                            <button type="button" class="btn btn-primary" onclick=editnews(${data[i].id}) data-toggle="modal" data-target="#editlist">Edit</button>
                            <button type="button" class="btn btn-danger" onclick=deletenews(${data[i].id})>Delete</button>
                        </td>
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