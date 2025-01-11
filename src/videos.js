import { useSelector } from "react-redux";
import { Cardv } from "./card";
function Videos(){
    const l=useSelector(st=>st.tuto.lvideos);
    return(<div className="row" >
        {l.map((e,i)=>{
        return (<div className="col-md-3">
            <Cardv obj={e} width="100%"  ></Cardv>
        </div>)
        })}
        
    </div>)
}
export default Videos