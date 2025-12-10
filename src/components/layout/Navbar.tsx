import Link from "next/link";

export default function Navbar() {
  const links = [
    { href: "/services", label: "Tjänster" },
    { href: "/pricing", label: "Priser" },
    { href: "/case-studies", label: "Case" },
    { href: "/blog", label: "Blogg" },
    { href: "/contact", label: "Kontakt" },
  ];

  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <Link href="/" className="brand">
          <span>Nordic IT Solutions</span>
          <span className="brandTag">(NITS)</span>
        </Link>

        <nav className="navLinks" aria-label="Huvudmeny">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="navLink">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="headerCta">
          <Link className="btn primary" href="/contact">
            Boka möte
          </Link>
        </div>
      </div>
    </header>
  );
}
