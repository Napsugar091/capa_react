import { useEffect, useState } from "react";

function Capak() {
    const [capak, setCapak] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:9000/capak')
        .then(response => response.json())
        .then(data => setCapak(data))
    },[])

    return(
        capak.map((capa, index) => (
            <div key={index}>
                <h1>
                    {capa.name}
                </h1>
                <img className="kep" src={capa.photoUrl} alt={capa.name}/>
                <h3>{capa.category}</h3>
                <p>{capa.description}</p>
            </div>
        ))

    );
}

export default Capak;