import React from 'react';
// import components
import Certifications from '../../components/Certifications/Certifications';
//import certifications data
import { certificationsData, allCertifications } from '../../models/certificationsData'; 
// import styles
import './CertificationsPageStyle.css';


const CertificationsPage = () => {
  return (
    <section className='certificatons-page'>
        <Certifications data={certificationsData} header="Certifications Shortlist" />
        <Certifications data={allCertifications} header="All Certifications" />
    </section>
  )
}

export default CertificationsPage;