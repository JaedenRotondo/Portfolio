import React from "react";
import ReactPDF from '@react-pdf/renderer';


function Footer(){
    return (
        <div>Footer
    ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);
        </div>
    )
}

export default Footer;