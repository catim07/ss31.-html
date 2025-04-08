function check(e){
    e.preventDefault()
    let check={
        name: e.target.name.value,
        pass: e.target.pass.value

    }
    if(check.name!=="huanrose@gmail.com"){
        console.log("email không đúng định dạng")
        return
    }
    if(check.pass!=="123456"){
        console.log("mật khẩu không đúng")
        return
    }
    console.log("đăng nhập thành công")
}
