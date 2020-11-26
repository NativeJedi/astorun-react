import React, { useMemo } from 'react';
import './app-footer.styles.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface ILink {
  path: string;
  text: string;
}

const navigation: ILink[] = [
  {
    text: 'links.faq',
    path: '/faq',
  },
  {
    text: 'links.rules',
    path: '/rules',
  },
  {
    text: 'links.partner',
    path: '/partnership',
  },
  {
    text: 'links.offer',
    path: '/offer',
  },
];

const AppFooter: React.FC = () => {
  const { t } = useTranslation();

  const currentYear = useMemo(() => {
    const date = new Date();

    return date.getFullYear();
  }, []);

  return (
    <footer className="footer">
      <div className="container footer__container">
        <nav className="footer__nav">
          <ul className="footer__list">
            {navigation.map((link) => (
              <li key={link.path} className="footer__item">
                <Link to={link.path} className="footer__link">
                  {t(link.text)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__copy">&copy; Asto.run {currentYear}</div>
      </div>
    </footer>
  );
};

export default AppFooter;
