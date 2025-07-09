export default function Footer() {
    return(
        <footer className="bg-black text-white py-10 px-6 md:px-20" id="footer">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-20">
    {/* Logo */}
    <div className="flex-shrink-0">
      <img
        src="/src/img/logo-footer-aesop-rock-removebg-preview.png"
        alt="Aesop Rock Logo"
        className="w-40 md:w-52"
      />
    </div>

    {/* Sections */}
    <div className="flex flex-wrap gap-16 md:gap-24">
      {/* Tournée */}
      <div>
        <h3 className="font-bold text-xl md:text-2xl mb-6">TOURNÉE</h3>
        <ul className="space-y-2 text-base">
          <li>Tracklist complète</li>
          <li>Dates</li>
          <li>Histoire</li>
        </ul>
      </div>

      {/* Shop */}
      <div>
        <h3 className="font-bold text-xl md:text-2xl mb-6">SHOP</h3>
        <ul className="space-y-2 text-base">
          <li>T-Shirt</li>
          <li>Sweat</li>
          <li>Vinyle</li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="font-bold text-xl md:text-2xl mb-6">CONTACT</h3>
        <ul className="space-y-2 text-base">
          <li>Instagram</li>
          <li>Youtube</li>
          <li>Spotify</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Mentions légales */}
  <div className="text-xs text-center mt-10 space-y-1 opacity-80">
    <p>© 2025 – Black Hole Superette. Tous droits réservés.</p>
    <p>Mentions légales – Politique de confidentialité</p>
  </div>
</footer>

    )
}