import Alert from 'sweetalert2'
// darkMode
const handleInvalidEmail = ()=>{

        Alert.fire({
            title:'Invalid Email',
            text:'This email address is not available. Choose a different address',
            icon:'error',
            iconColor:'#ffba49',
            background:'#1c2135',
            confirmButtonColor:'#ffba49',
            color:'#fff'
        })
}

const handleEmailExist = ()=>{

    Alert.fire({
        title:'Email already in use',
        text:'This email already exist. Please enter another email address',
        icon:'warning',
        iconColor:'#ffba49',
        background:'#1c2135',
        confirmButtonColor:'#ffba49',
        color:'#fff'
    })
}

const handlePassword6carcter = ()=>{

    Alert.fire({
        title:'Weak Password!',
        text:'Your password must contain at least 6 caracters and be "strong"',
        icon:'error',
        iconColor:'#ffba49',
        background:'#1c2135',
        confirmButtonColor:'#ffba49',
        color:'#fff'
    })
}

const handleUserSuccess = ()=>{

    Alert.fire({
        title:'Success!',
        text:'Your account has been created successfully',
        icon:'success',
        background:'#1c2135',
        color:'#fff',
        confirmButtonColor:'#ffba49',
    })
}









// Light Mode
const handleInvalidEmailLight = ()=>{

    Alert.fire({
        title:'Invalid Email',
        text:'This email address is not available. Choose a different address',
        icon:'error',
        iconColor:'#052571',
        background:'#eee',
        confirmButtonColor:'#052571',
        color:'#262626'
    })
}

const handleEmailExistLight = ()=>{

Alert.fire({
    title:'Email already in use',
    text:'This email already exist. Please enter another email address',
    icon:'warning',
    iconColor:'#052571',
    background:'#eee',
    confirmButtonColor:'#052571',
    color:'#262626'
})
}

const handlePassword6carcterLight = ()=>{

Alert.fire({
    title:'Weak Password!',
    text:'Your password must contain at least 6 caracters and be "strong"',
    icon:'error',
    iconColor:'#052571',
    background:'#eee',
    confirmButtonColor:'#052571',
    color:'#262626'
})
}

const handleUserSuccessLight = ()=>{

Alert.fire({
    title:'Success!',
    text:'Your account has been created successfully',
    icon:'success',
    background:'#eee',
    confirmButtonColor:'#052571',
    color:'#262626',
})
}

export{

    handleInvalidEmail,
    handleEmailExist,
    handlePassword6carcter,
    handleUserSuccess,


    handleInvalidEmailLight,
    handleEmailExistLight,
    handlePassword6carcterLight,
    handleUserSuccessLight,
}