import { useSelector } from "react-redux";
import { Carda } from "./card";
function Articles(){
    const l=useSelector(st=>st.tuto.larticles);
    return(<div className="row" >
        {l.map((e,i)=>{
        return (<div className="col-md-3">
            <Carda obj={e} width="100%"  ></Carda>
        </div>)
        })}
        
    </div>)
}
export default Articles;