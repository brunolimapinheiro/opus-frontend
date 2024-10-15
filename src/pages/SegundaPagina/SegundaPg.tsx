//import {MainVg} from "../../components/vagas/mainVagas/MainVg"
import {SearchAppBar} from "../../components/vagas/pesquisar/SearchAppBar"
import Navbar from "../../components/Header/Navbar"
import { useState } from "react";

export const SegundaPg:React.FC = () =>{

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    return(
        <>
            <Navbar handleOpen={handleOpen} />
            {/* <MainVg /> */}
            <SearchAppBar />
            
        </>
    )
}