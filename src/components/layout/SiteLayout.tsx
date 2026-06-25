import { Facebook, FileText, Instagram, Mail, Phone, X } from "lucide-react";
import { type DragEvent, type MouseEvent, useEffect, useLayoutEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import logo from "@/assets/PrimaryLogo.png";
import { business } from "@/content/business";

const navigationItems = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Visit Us" },
];

function normalizePathname(pathname: string) {
  return pathname.replace(/\/+$/, "") || "/";
}

function scrollToPageTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

function jumpToPageTop() {
  const root = document.documentElement;
  const originalScrollBehavior = root.style.scrollBehavior;

  root.style.scrollBehavior = "auto";
  window.scrollTo({ top: 0, left: 0 });
  root.style.scrollBehavior = originalScrollBehavior;
}

const navLinkClass = (isContactItem: boolean) => {
  return ({ isActive }: { isActive: boolean }) =>
    `nav-link${isContactItem ? " nav-link-contact" : ""}${isActive ? " nav-link-active" : ""}`;
};

export default function SiteLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isLegalCardOpen, setIsLegalCardOpen] = useState(false);
  const location = useLocation();
  const currentPathname = normalizePathname(location.pathname);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    if (!location.hash) {
      jumpToPageTop();
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    window.requestAnimationFrame(() => {
      const target = document.getElementById(location.hash.slice(1));
      const headerHeight = document.querySelector(".site-header")?.getBoundingClientRect().height ?? 0;

      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - headerHeight - 24,
          left: 0,
          behavior: "smooth",
        });
      }
    });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLegalCardOpen(false);
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setIsMenuOpen(false);

    if (currentPathname === "/") {
      event.preventDefault();
      scrollToPageTop();
    }
  };

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMenuOpen(false);

    if (currentPathname === normalizePathname(href)) {
      event.preventDefault();
      scrollToPageTop();
    }
  };

  const isProtectedAsset = (target: EventTarget | null) => {
    return target instanceof HTMLImageElement;
  };

  const handleAssetDragStart = (event: DragEvent<HTMLDivElement>) => {
    if (isProtectedAsset(event.target)) {
      event.preventDefault();
    }
  };

  const handleAssetContextMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (isProtectedAsset(event.target)) {
      event.preventDefault();
    }
  };

  return (
    <div className="site-shell" onDragStart={handleAssetDragStart} onContextMenu={handleAssetContextMenu}>
      <header className={`site-header${hasScrolled ? " site-header-scrolled" : ""}`}>
        <div className="site-container header-inner">
          <Link className="brand-lockup" to="/" aria-label={`${business.name} home`} onClick={handleLogoClick}>
            <img
              className="brand-logo"
              src={logo}
              alt=""
              draggable={false}
              onContextMenu={(event) => event.preventDefault()}
            />
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigationItems.map((item) => (
              <NavLink
                key={item.href}
                className={navLinkClass(item.href === "/contact")}
                to={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <a className="nav-order" href="#order">Order Now</a>

          <button
            className={`mobile-menu-button${isMenuOpen ? " mobile-menu-button-open" : ""}`}
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <span className="mobile-menu-icon" aria-hidden="true">
              <span className="mobile-menu-line mobile-menu-line-top" />
              <span className="mobile-menu-line mobile-menu-line-middle" />
              <span className="mobile-menu-line mobile-menu-line-bottom" />
            </span>
          </button>
        </div>

        <nav
          aria-hidden={!isMenuOpen}
          className={`mobile-nav-panel${isMenuOpen ? " mobile-nav-panel-open" : ""}`}
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          <div className="mobile-nav-panel-inner">
            <div className="mobile-nav site-container">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.href}
                  className={navLinkClass(false)}
                  to={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  tabIndex={isMenuOpen ? undefined : -1}
                >
                  {item.label}
                </NavLink>
              ))}
              <a className="mobile-nav-order" href="#order" tabIndex={isMenuOpen ? undefined : -1} onClick={() => setIsMenuOpen(false)}>Order Now</a>
              <a className="mobile-nav-contact" href={`tel:${business.phone.replace(/\D/g, "")}`} tabIndex={isMenuOpen ? undefined : -1}>{business.phone}</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="page-transition" key={location.pathname}>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-container footer-inner">
          <div className="footer-contact">
            <button className="privacy-trigger" type="button" onClick={() => setIsLegalCardOpen(true)}>
              <FileText aria-hidden="true" />
              <span className="link-label">Privacy &amp; Terms</span>
            </button>
            <a className="footer-link footer-contact-link" href={`tel:${business.phone.replace(/\D/g, "")}`}>
              <Phone aria-hidden="true" />
              <span className="link-label">{business.phone}</span>
            </a>
            <a className="footer-link footer-contact-link" href={`mailto:${business.email}`}>
              <Mail aria-hidden="true" />
              <span className="link-label">{business.email}</span>
            </a>
          </div>
          <span className="social-links"><a href={business.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a><a href={business.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a></span>
          <Link className="footer-logo-link" to="/" aria-label={`${business.name} home`}><img className="footer-logo" src={logo} alt="" /></Link>
          <div className="footer-legal"><div className="footer-legal-copy"><p className="footer-copy">&copy; {currentYear} Giovanni's DILLicious Pickles, Inc.</p><p className="footer-copy">Designed and deployed by <a className="footer-link footer-credit-link" href="https://tryshipyard.vercel.app" target="_blank" rel="noreferrer">Arseni Sutton</a></p></div></div>
        </div>
      </footer>
      {isLegalCardOpen ? <div className="legal-dialog-backdrop" role="presentation" onMouseDown={() => setIsLegalCardOpen(false)}><section className="legal-dialog" role="dialog" aria-modal="true" aria-labelledby="legal-dialog-title" onMouseDown={(event) => event.stopPropagation()}><button className="legal-dialog-close" type="button" aria-label="Close privacy and terms" onClick={() => setIsLegalCardOpen(false)}><X /></button><p className="eyebrow">Giovanni's Dillicious Pickles</p><h2 id="legal-dialog-title">Privacy &amp; Terms</h2><p>Legal language is being prepared and will appear here before the public site launches</p><p className="legal-dialog-note">For questions in the meantime, please contact us at <a href={`mailto:${business.email}`}>{business.email}</a></p></section></div> : null}
    </div>
  );
}
