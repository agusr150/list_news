
$(`#login-form`).submit(function (event){
    event.preventDefault()
    console.log('loginnn')
    let email= $(`#email-login`).val()
    let password = $(`#password-login`).val()
        console.log('ajaxxxx')
        $.ajax({
            type: "POST", 
            url: `http://localhost:3000/user/login`, 
            data: {
                email: email,
                password: password
            },
            success: (data)=>{
                console.log(data)
                localStorage.setItem('token', data.token)
                $(`#error`).empty()
                $(`#login`).hide()
                $(`#newslist`).show()
                listshow()
            },
            error: (err)=>{
                console.log(err)
                $(`#error`).append(`Error : ${err.response}`)
            }
        })
    
})