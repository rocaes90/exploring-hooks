import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { useTranslation } from 'react-i18next';

function Header() {

  const { t } = useTranslation();
  return (
    <ul>
      <li>
        <Link to="/">{t('menu.home')}</Link>
      </li>
      <li>
        <Link to="/about">{t('menu.about')}</Link>
      </li>
      <li>
        <Link to="/topics">{t('menu.topics')}</Link>
      </li>
    </ul>
  );
}

export default Header;