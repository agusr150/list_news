$(document).ready(function(){
    let token = localStorage.getItem('token')
    if(token) {
        $(`#error`).empty()
        $(`.section`).hide()
        $(`#news-table`).empty()
        $(`#newslist`).show()
        $(`#seeWeather`).show()
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
    $(`#seeWeather`).empty()
    $(`#news`).empty()
    $(`#seenews`).hide()
    $(`#newslist`).show()    
})

$(`#btn-logout`).click(function(){
    $(`#error`).empty()
    localStorage.removeItem('token')
    $(`#news-table`).empty()
    $(`#newslist`).hide()
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    $(`#login`).show()    
})

function onSignIn(googleUser) {
    console.log("google ok")
    var id_token = googleUser.getAuthResponse().id_token;
    $.ajax({
        type:"POST",
        url:"http://localhost:3000/user/googlelogin",
        data:{
            id_token
        },
        success:function(response ){
            console.log(response)
            localStorage.setItem("token",response.token)
            $(`#error`).empty()
            $(`.section`).hide()
            $(`#news-table`).empty()
            $(`#newslist`).show()
            listshow()
        }
    })
  }
