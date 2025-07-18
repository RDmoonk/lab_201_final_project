import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20" id="footer">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/img/filled-animation-logo/logo-remade.png"
            alt="Aesop Rock Logo"
            className="w-100 md:w-72"
          />
        </div>

        {/* Sections */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left sm:flex-row flex-wrap gap-10 sm:gap-16 md:gap-24 w-full sm:w-auto">

          {/* Tournée */}
          <div>
            <h3 className="font-bold text-xl md:text-2xl mb-4 sm:mb-6">TOURNÉE</h3>
            <ul className="space-y-2 text-base">
              <li><a href="#soundtrack" className="text-lg sm:text-2xl">Tracklist complète</a></li>
              <li><a href="#tournee" className="text-lg sm:text-2xl">Dates</a></li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-bold text-xl md:text-2xl mb-4 sm:mb-6">SHOP</h3>
            <ul className="space-y-2 text-base">
              <li><a href="#tshirt" className="text-lg sm:text-2xl">T-Shirt</a></li>
              <li><a href="#sweats" className="text-lg sm:text-2xl">Sweat</a></li>
              <li><a href="#vinyle" className="text-lg sm:text-2xl">Vinyle</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-xl md:text-2xl mb-4 sm:mb-6">CONTACT</h3>
            <ul className="space-y-2 text-base">
              <li>
                <a href="https://www.instagram.com/aesoprockwins/" className="text-lg sm:text-2xl">
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl sm:text-3xl text-purple-600 pr-1" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCzVC0z-KheQEV_2H2zg6V9w" className="text-lg sm:text-2xl">
                  <FontAwesomeIcon icon={faYoutube} className="text-2xl sm:text-3xl text-red-600 pr-1" />
                  Youtube
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/intl-fr/artist/2fSaE6BXtQy0x7R7v9IOmZ" className="text-lg sm:text-2xl">
                  <FontAwesomeIcon icon={faSpotify} className="text-2xl sm:text-3xl text-green-600 pr-1" />
                  Spotify
                </a>
              </li>
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
  );
}
