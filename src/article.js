import { useSelector } from "react-redux";
import { motion } from "framer-motion";
function Article() {
    const article = useSelector((state) => state.tuto.article);

    return (
        <motion.div 
        initial={{ x: -200 }} // Start off-screen to the left
    animate={{ x: 0 }}    // Move to the center of the screen
    transition={{
      type: "spring",
      stiffness: 100,  // Controls the rigidity of the spring
      damping: 20,     // Controls the "bounciness"
    }}
    style={{ maxWidth: "800px", margin: "20px auto", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
            <h1 className="alert-secondary rounded p-3" style={{ textAlign: "center", backgroundColor: "#007bff", color: "#ffffff", borderRadius: "8px" }}>
                {article.titre}
            </h1>

            {article.partie.map((e, i) => (
                <div key={i} style={{ margin: "20px 0", padding: "15px", backgroundColor: "#e0e0e0", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}>
                    <h2 style={{ marginBottom: "10px", color: "#333", fontSize: "22px" }}>{e.soustitre}</h2>
                    <div style={{ padding: "10px", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.05)", color: "#555" }}>
                        {e.explication}
                    </div>
                </div>
            ))}
        </motion.div>
    );
}

export default Article;
