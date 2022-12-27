import "../styles.css"
import { useCallback, useState, useEffect } from "react";
import axios from "axios";

const App = () => {

    // Fetching the photos from API

    const [apiData, setApiData] = useState([]);

    const fetchPhotos = useCallback(async () => {
        const getData = await axios.get(
            `https://6390acc765ff4183111b53e9.mockapi.io/photos`
        );
        setApiData(getData.data);
    }, []);

    useEffect(() => {
        fetchPhotos();
    }, [fetchPhotos]);

    // Changing the main photo

    const [background, setBackground] = useState(
        "https://images.pexels.com/photos/1415810/pexels-photo-1415810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    );

    const changePhoto = (e) => {
        setBackground(e.target.src);
    };

    // Mapping the photos from the Array

    const photoSelection = apiData.map((photo) => {
        return (
            <div key={photo.id} className="single-image">
                <img
                    onMouseEnter={changePhoto}
                    alt={photo.title}
                    src={photo.url}
                />
                <p>{photo.title}</p>
            </div>
        );
    });

    return (
        <section className="container">
            <section className="photo">
                <img src={background} alt="main-image-swimming" />
            </section>
            <section className="content">
                <h1>Eterna para el exito</h1>
                <p>Fusce sapien lectus, tincidunt scelerisque leo vitae, maximus venenatis felis. Suspendisse potenti. Aenean tincidunt mauris et euismod tincidunt. Aliquam erat volutpat. Cras eu feugiat diam. Suspendisse potenti. Nunc faucibus vulputate neque.</p>
                <div className="content-photos">{photoSelection}</div>

            </section>
        </section>
    )
}

export default App
