import React, { useState, useEffect } from "react";



const PageNotFound = () => {


    return (
        <>
            <div className="cont-404">

                <img src={'https://res.cloudinary.com/do0ououdk/image/upload/f_auto,q_auto/bppb2nollbzds0l8gezf'} alt="404" />

                <button onClick={() => { window.location.href = '/'; }}>Back to Dashboard</button>

            </div>
        </>
    );
};

export default PageNotFound;
