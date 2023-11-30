import React from 'react';
import { useTranslation } from 'react-i18next';
import flagEn from '../images/flag-english.png'; 
import flagKh from '../images/flag-cambodia.png';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const flagIconStyle = {
    width: '30px', // Adjust the width as needed
    height: 'auto', // Maintain aspect ratio
    marginRight: '5px', // Optional spacing between flags
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand">{t('app-name')}</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"> 
                <button className="btn btn-link" onClick={() => changeLanguage('en')}>
                  <img src={flagEn} alt="English" className="flag-icon" style={flagIconStyle} />
                </button>
                <button className="btn btn-link" onClick={() => changeLanguage('kh')}>
                  <img src={flagKh} alt="Khmer" className="flag-icon" style={flagIconStyle} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
