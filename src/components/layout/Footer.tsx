import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="siteFooter">
      <div className="container footerInner">
        <div className="footerLeft">
          <div className="brand footerBrand">
            <span>Nordic IT Solutions (NITS)</span>
          </div>
          <div className="muted">Svensk projektledning • Snabb leverans • Prisvärt</div>
        </div>

        <nav className="footerLinks" aria-label="Footer">
          <Link className="navLink" href="/about">
            Om oss
          </Link>
          <Link className="navLink" href="/process">
            Så jobbar vi
          </Link>
          <Link className="navLink" href="/contact">
            Kontakt
          </Link>
        </nav>

        <div className="footerRight muted">© {year} Nordic IT Solutions (NITS). All rights reserved.</div>
      </div>
    </footer>
  );
}
