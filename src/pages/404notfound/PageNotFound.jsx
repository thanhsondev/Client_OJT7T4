import React, { useState, useEffect } from "react";

const PageNotFound = () => {
    const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch(
                    "https://res.cloudinary.com/do0ououdk/image/upload/f_auto,q_auto/bppb2nollbzds0l8gezf"
                );
                if (response.ok) {
                    const blob = await response.blob();
                    const imageURL = URL.createObjectURL(blob);
                    setImageSrc(imageURL);
                } else {
                    console.error("Failed to fetch the image");
                }
            } catch (error) {
                console.error("Error fetching the image:", error);
            }
        };

        fetchImage();
    }, []);

    return (
        <>
            <div className="cont-404">
                {imageSrc && (
                    <img src={imageSrc} alt="404" />
                )}
                <button>Back to Dashboard</button>
            </div>
        </>
    );
};

export default PageNotFound;
