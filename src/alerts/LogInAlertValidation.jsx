import Alert from 'sweetalert2';



// darkMode
const handleWelcome = ()=>{
    Alert.fire({
        title:'WellCome',
        icon:'success',
        background:'#1c2135',
        confirmButtonColor:'#ffba49',
        color:'#fff',
        showConfirmButton:false,
        timer:'950'
    })
}

const handleUserNotFound = ()=>{
    Alert.fire({
        title:'Oops...!',
        text:'User not found. Please try again ',
        icon:'error',
        iconColor:'#ffba49',
        background:'#1c2135',
        confirmButtonColor:'#ffba49',
        color:'#fff'
    })
}


const handleIncorrectPassword = ()=>{
    Alert.fire({
        title:'Incorrect Password',
        text:'The password you enter is incorrect. Please try again',
        icon:'error',
        iconColor:'#ffba49',
        background:'#1c2135',
        confirmButtonColor:'#ffba49',
        color:'#fff'
    })
}



// LightMode
const handleWelcomelight = ()=>{
    Alert.fire({
        title:'WellCome',
        icon:'success',
        showConfirmButton:false,
        timer:'950',
        background:'#eee',
        color:'#262626'
    })
}

const handleUserNotFoundlight = ()=>{
    Alert.fire({
        title:'Oops...!',
        text:'User not found. Please try again ',
        icon:'error',
        iconColor:'#052571',
        background:'#eee',
        confirmButtonColor:'#052571',
        color:'#262626'
    })
}


const handleIncorrectPasswordlight = ()=>{
    Alert.fire({
        title:'Incorrect Password',
        text:'The password you enter is incorrect. Please try again',
        icon:'error',
        iconColor:'#052571',
        background:'#eee',
        confirmButtonColor:'#052571',
        color:'#262626'
    })
}





export{
    handleIncorrectPassword,
    handleUserNotFound,
    handleWelcome,


    handleIncorrectPasswordlight,
    handleUserNotFoundlight,
    handleWelcomelight,
}