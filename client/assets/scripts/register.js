let local = 'http://localhost:3000'

$(`#register-form`).submit(function (event){
    event.preventDefault()
    let email= $(`#email-reg`).val()
    let password = $(`#password-reg`).val()
    let repassword = $(`#repassword-reg`).val()
    if (password !== repassword){
        console.log('errrrr')
        $(`#error`).empty()
        $(`#error`).append(`Please input the same password!`)
    } else {
        console.log('ajaxxxx')
        $.ajax({
            type: "POST", 
            url: `${local}/user/register`, 
            data: {
                email: email,
                password: password
            },
            success: (data)=>{
                $(`#error`).empty()
                $(`#register`).hide()
                $(`#login`).show()
            },
            error: (err)=>{
                console.log(err)
                $(`#error`).append(`Error : ${err.response}`)
            }
        })
    }
})