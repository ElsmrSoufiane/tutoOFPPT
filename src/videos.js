import { useSelector } from "react-redux";
import { Cardv } from "./card";
import { motion } from "framer-motion";
function Videos(){
    const l=useSelector(st=>st.tuto.lvideos);
    return(<motion.div
        initial={{ x: -200 }} // Start off-screen to the left
        animate={{ x: 0 }}    // Move to the center of the screen
        transition={{
          type: "spring",
          stiffness: 100,  // Controls the rigidity of the spring
          damping: 20,     // Controls the "bounciness"
        }}
    className="row" >
        {l.length>0? l.map((e,i)=>{
        return (<div className="col-md-3">
            <Cardv obj={e} width="100%"  ></Cardv>
        </div>)
        }):<h1 className="alert-secondary text-center p-2 m-2 rounded" >il n y a aucun video</h1>}
        
    </motion.div>)
}
export default Videos