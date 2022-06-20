import React from 'react';

export default function Footer(){
    return(
        <footer
        className="bg-gray-800 bottom-0 z-10 py-5">
            <p className="text-center">Copyright<sup>&copy;</sup> {new Date().getFullYear()} Amman Abua &reg; </p>
        </footer>
    )
}