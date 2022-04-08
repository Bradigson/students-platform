import Alert from 'sweetalert2';

const handleEmptyInputEmail = ()=>{
    Alert.fire({
        title:'Warning!',
        text:'Email File must be filled',
        icon:'warning',
        iconColor:'#ffba49',
        background:'#1c2135',
        confirmButtonColor:'#ffba49',
        color:'#fff'
    })
}

const handleEmptyInputPassword = ()=>{
    Alert.fire({
        title:'Warning!',
        text:'Password File must be filled',
        icon:'warning',
        iconColor:'#ffba49',
        background:'#1c2135',
        confirmButtonColor:'#ffba49',
        color:'#fff'
    })
}





// darkMode
const handleEmptyInputEmailLight = ()=>{
    Alert.fire({
        title:'Warning!',
        text:'Email File must be filled',
        icon:'warning',
        iconColor:'#052571',
        background:'#eee',
        confirmButtonColor:'#052571',
        color:'#262626'
    })
}

const handleEmptyInputPasswordLight = ()=>{
    Alert.fire({
        title:'Warning!',
        text:'Password File must be filled',
        icon:'warning',
        iconColor:'#052571',
        background:'#eee',
        confirmButtonColor:'#052571',
        color:'#262626'
    })
}




export{
    handleEmptyInputEmail,
    handleEmptyInputPassword,
    handleEmptyInputEmailLight,
    handleEmptyInputPasswordLight
}