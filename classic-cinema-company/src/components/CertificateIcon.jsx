import React from "react";
import classifications from '../assets/classification.json';
import './CertificateIcon.css';

const CertificateIcon = ({age}) => {
    let src = "/assets/classifications/" + classifications.classifications.filter(cls => cls.id === age)[0].image;
    return <><img className="classification" src={src} alt={age} /></>;
};

export default CertificateIcon;