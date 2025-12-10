import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container footerWrap">
        <div className="footerLeft">
          <div className="footerBrand">Nordic IT Solutions (NITS)</div>
          <div className="footerMuted">
            Svensk projektledning • Snabb leverans • Prisvärt
          </div>
        </div>

        <div className="footerLinks">
          <Link href="/about">Om oss</Link>
          <Link href="/process">Så jobbar vi</Link>
          <Link href="/contact">Kontakt</Link>
        </div>

        <div className="footerBottom">
          © {new Date().getFullYear()} Nordic IT Solutions (NITS). All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
