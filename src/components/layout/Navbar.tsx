import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <div className="container navWrap">
        <Link href="/" className="brand">
          Nordic IT Solutions <span className="brandTag">(NITS)</span>
        </Link>

        <nav className="navLinks">
          <Link href="/services">Tjänster</Link>
          <Link href="/pricing">Priser</Link>
          <Link href="/case-studies">Case</Link>
          <Link href="/blog">Blogg</Link>
          <Link href="/contact">Kontakt</Link>
        </nav>

        <div className="navRight">
          <Link className="btn primary glowBtn" href="/contact">
            Boka möte <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
