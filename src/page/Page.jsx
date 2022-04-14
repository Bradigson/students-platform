import {Outlet} from 'react-router-dom';
import Header from "../components/Header";
const Page = ()=>{
    return(
        <div>
            <Header/>

            <Outlet/>
        </div>
    )
}


export default Page;