import React from "react";
import TrainerSection from "./trainer";
import Footer from "./footrr";
import GamesSection from "./games";
import Article from "./article";
import Articles from "./articles";
import Videos from "./videos";
import Band from "./band"; 
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { actions } from "./slice";
const App = () => {
  const mode=useSelector(st=>st.tuto.mode);
  const d=useDispatch();
  const openNav = () => {
    document.getElementById("mySidepanel").style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidepanel").style.width = "0";
  };

  return (
    <div className="main-layout">
      
      
      {/* Loader */}
     

      {/* Side Panel */}
      <div id="mySidepanel" className="sidepanel">
        <button className="closebtn" onClick={closeNav} style={{padding:"0",background:"transparent",color:"white"}} >
          ×
        </button>
       
        <a  href="#" style={{cursor:"pointer"}} className={mode === "principale" ? "active" : ""} onClick={()=>d(actions.setMode("principale"))}>principale</a>
        <a href="#" style={{cursor:"pointer"}} className={mode === "videos" ? "active" : ""} onClick={()=>d(actions.setMode("videos"))}>videos</a>
        <a href="#" style={{cursor:"pointer"}} className={mode === "articles" ? "active" : ""} onClick={()=>d(actions.setMode("articles"))}>articles</a>
      </div>

      {/* Header */}
      <header>
        <div className="head-top">
          <div className="container-fluid">
            <div className="row d_flex">
              <div className="col-sm-3">
                <div className="logo">
                  
                 <h1 style={{color:"rgb(1, 1, 149)",fontWeight:"bolder",fontSize:"30px"}} ><font>tuto ofppt</font></h1>
                  
                </div>
              </div>
              <div className="col-sm-9">
                <ul className="email text_align_right">
                  
                 
                  <li>
                    <button className="openbtn" onClick={openNav}>
                      <img src="images/menu_btn.png" alt="Menu" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Slider Section */}
      <div className="banner_main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="club">
                <figure>
                  <img className="sm_n0" src="images/bbnner.png" alt="Banner" />
                  <img className="tes_n0" src="images/banner1.jpg" alt="Banner" />
                </figure>
                <div className="poa_t">
                  <h1>ofppt tuto</h1>
                  <p>
                    blog sur les modules d ofppt pour les stagaires de devellopement .<b>Développé par Lasmar Soufiane</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <Band></Band>
      {mode=="principale" && 
    <> <h1 style={{ 
      display: "flex", 
      alignItems: "center", 
      gap: "10px", 
      fontSize: "24px", 
      color: "#333", 
      backgroundColor: "#f0f0f0", 
      padding: "15px", 
      borderRadius: "8px", 
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
      transition: "background-color 0.3s ease" 
    }}
    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#e0e0e0"}
    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#f0f0f0"}>
      <svg 
          style={{ width: "32px", height: "32px", fill: "#007bff" }} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 576 512"
      >
          <path d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/>
      </svg>
      Videos
  </h1>
  
    <Videos></Videos>
    <h1 
  style={{ 
    display: "flex", 
    alignItems: "center", 
    gap: "10px", 
    fontSize: "24px", 
    color: "#333", 
    backgroundColor: "#f0f0f0", 
    padding: "15px", 
    borderRadius: "8px", 
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
    transition: "background-color 0.3s ease" 
  }}
  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#e0e0e0"}
  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#f0f0f0"}
>
  <svg 
    style={{ width: "32px", height: "32px", fill: "#007bff" }} 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 448 512"
  >
    <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
  </svg>
  Articles
</h1>

      <Articles></Articles>
      </>
      }
      {mode=="videos" && 
    <> 
      <Videos></Videos>
      </>
      }
      {mode=="articles" && 
    <>  
      <Articles></Articles>
      </>
      }
      {mode=="article" && 
    <>  
      <Article/>
      </>
      }
     <Footer></Footer>
    </div>
  );
};

export default App;
