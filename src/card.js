import { useDispatch } from "react-redux";
import { actions } from "./slice";

function Cardv(props) {
    return (
        <div
            style={{
                width: props.width,
                margin: "10px",
                padding: "15px",
                border: "2px solid #d3d3d3",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff",
                transition: "transform 0.2s ease, boxShadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            }}
        >
            <img
                src={props.obj.image}
                alt={props.obj.titre}
                style={{
                    width: "80%",
                    margin: "10%",
                    borderRadius: "10px",
                    transition: "opacity 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            />
            <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "#333" }}>
                {props.obj.titre}
            </p>
            <center>
                <a
                    href={props.obj.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "inline-block",
                        padding: "8px 16px",
                        marginTop: "10px",
                        backgroundColor: "#4caf50",
                        color: "#ffffff",
                        textDecoration: "none",
                        borderRadius: "8px",
                        fontSize: "16px",
                        transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#45a049")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4caf50")}
                >
                    Voir
                </a>
            </center>
        </div>
    );
}

function Carda(props) {
    const dispatch = useDispatch();
function f(par){
    dispatch(actions.article(par));
    dispatch(actions.setMode("article"));
}
    return (
        <div
            style={{
                width: props.width,
                margin: "10px",
                padding: "15px",
                border: "2px solid #d3d3d3",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff",
                transition: "transform 0.2s ease, boxShadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            }}
        >
            <img
                src={props.obj.image}
                alt={props.obj.titre}
                style={{
                    width: "80%",
                    margin: "10%",
                    borderRadius: "10px",
                    transition: "opacity 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            />
            <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "#333" }}>
                {props.obj.titre}
            </p>
            <center>
                <button
                onClick={()=>f(props.obj.id)}
                   
                    style={{
                        display: "inline-block",
                        padding: "8px 16px",
                        marginTop: "10px",
                        backgroundColor: "#4caf50",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "8px",
                        fontSize: "16px",
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#45a049")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4caf50")}
                >
                    Voir
                </button>
            </center>
        </div>
    );
}

export { Carda, Cardv };
