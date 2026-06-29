import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTema } from '../context/TemaContext';
import { useIdioma } from '../context/IdiomaContext';

interface NavLink {
  to: string;
  labelKey: string;
  icon: string;
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { t } = useIdioma();

  const links: NavLink[] = [
    { to: '/', labelKey: 'estudiantes', icon: 'fa-user-graduate' },
    { to: '/buscar-estudiantes', labelKey: 'buscarEstudiantes', icon: 'fa-search' },
    { to: '/home', labelKey: 'inicio', icon: 'fa-home' },
    { to: '/servicios', labelKey: 'servicios', icon: 'fa-cogs' },
    { to: '/red-team', labelKey: 'redTeam', icon: 'fa-fire' },
    { to: '/blue-team', labelKey: 'blueTeam', icon: 'fa-shield-alt' },
    { to: '/purple-team', labelKey: 'purpleTeam', icon: 'fa-handshake' },
    { to: '/consultoria', labelKey: 'consultoria', icon: 'fa-clipboard-list' },
    { to: '/recursos', labelKey: 'recursos', icon: 'fa-book' },
    { to: '/herramientas', labelKey: 'herramientas', icon: 'fa-toolbox' },
    { to: '/tienda', labelKey: 'tienda', icon: 'fa-shopping-cart' },
    { to: '/personajes', labelKey: 'personajes', icon: 'fa-users' },
    { to: '/contacto', labelKey: 'contacto', icon: 'fa-envelope' },
    { to: '/galeria', labelKey: 'galeria', icon: 'fa-images' }
  ];

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const labelFor = (link: NavLink) => {
    if (link.labelKey === 'estudiantes') return 'Estudiantes';
    if (link.labelKey === 'buscarEstudiantes') return 'Buscar';
    return t('nav', link.labelKey);
  };

  const isActive = (to: string) => pathname === to || (to === '/' && pathname === '/estudiantes') ? 'active' : '';

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <i className="fas fa-shield-alt"></i>
          <Link to="/">BlackCat Cibersecurity</Link>
        </div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        <ul className={`nav-links${menuOpen ? ' show' : ''}`}>
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className={isActive(link.to)} onClick={closeMenu}>
                <i className={`fas ${link.icon}`}></i> {labelFor(link)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
