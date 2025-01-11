import { useDispatch,useSelector } from "react-redux";
import { actions } from "./slice";
import { categories } from "./data";


function Band() {
    const dispatch = useDispatch();
    const categorie = useSelector((state) => state.tuto.categorie);
 

    function handleCategoryClick(category) {
        dispatch(actions.setarticles(category));
        dispatch(actions.filtrarticle(category));
        dispatch(actions.filtrvideo(category));
    }

    return (
        <div
            style={{
                backgroundColor: '#f0f0f5',
                width: '100%',
                padding: '10px 20px',
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            {categories?.map((category, index) => (
                <div
                    key={index}
                    style={{
                        backgroundColor: category === categorie ? '#4caf50' : '#ffffff',
                        color: category === categorie ? '#ffffff' : '#333333',
                        padding: '10px 20px',
                        borderRadius: '20px',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease',
                        border: '2px solid #4caf50',
                    }}
                    onClick={() => handleCategoryClick(category)}
                    onMouseEnter={(e) => (e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)')}
                    onMouseLeave={(e) => (e.target.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)')}
                >
                    {category}
                </div>
            ))}
        </div>
    );
}

export default Band;

