import gam from '../assets/logo_gam.jpg'
import {LoaderCircle} from "lucide-react";

function Loader(){
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-[#003366] text-white">
            <div>
                <img width="300px" src={gam} alt="Logo de GAM"/>
            </div>
            <div className="flex flex-col items-center justify-center ">
                <LoaderCircle className="animate-spin" />
               <p className="mt-4 text-lg font-semibold animate-pulse">Chargement en cours...</p>
            </div>
        </div>
    )
}

export default Loader