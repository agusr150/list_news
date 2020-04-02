$(document).ready(function(){
    let token = localStorage.getItem('token')
    if(token) {
        $(`#error`).empty()
        $(`.section`).hide()
        $(`#news-table`).empty()
        $(`#newslist`).show()
        listshow()
    } else {
        $(`#error`).empty()
        $(`.section`).hide()
        $(`#login`).show()
    }
})

$(`#btn-register`).click(function(){
    $(`#error`).empty()
    $(`#login`).hide()
    $(`#register`).show()
})

$(`#btn-login`).click(function(){
    $(`#error`).empty()
    $(`#register`).hide()
    $(`#login`).show()
})

$(`#btn-close`).click(function(){
    $(`#error`).empty()
    $(`#news`).empty()
    $(`#seenews`).hide()
    $(`#newslist`).show()    
})

$(`#btn-logout`).click(function(){
    $(`#error`).empty()
    localStorage.removeItem('token')
    $(`#news-table`).empty()
    $(`#newslist`).hide()
    $(`#login`).show()    
})

