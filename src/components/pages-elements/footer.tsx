import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return(
        <footer className="bg-black text-white py-10 px-6 md:px-20" id="footer">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-20">
    {/* Logo */}
    <div className="flex-shrink-0">
      <img
        src="/src/img/filled-animation-logo/logo-remade.png"
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
          <li><a href="#soundtrack"></a>Tracklist complète</li>
          <li><a href="#tournee">Dates</a></li>
          <li><a href="#histoire">Histoire</a></li>
        </ul>
      </div>

      {/* Shop */}
      <div>
        <h3 className="font-bold text-xl md:text-2xl mb-6">SHOP</h3>
        <ul className="space-y-2 text-base">
          <li> <a href="#tshirt">T-Shirt</a></li>
          <li> <a href="#sweats">Sweat</a></li>
          <li> <a href="#vinyle">Vinyle</a></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="font-bold text-xl md:text-2xl mb-6">CONTACT</h3>
        <ul className="space-y-2 text-base">
          <li><a href="https://www.instagram.com/aesoprockwins/"><FontAwesomeIcon icon= {faInstagram}className="text-3xl text-purple-600 pr-1"/>Instagram</a></li>
          <li><a href="https://www.youtube.com/channel/UCzVC0z-KheQEV_2H2zg6V9w">
          <FontAwesomeIcon icon={faYoutube} className="text-3xl text-red-600 pr-1" />Youtube</a></li>
          <li><a href="https://open.spotify.com/intl-fr/artist/2fSaE6BXtQy0x7R7v9IOmZ"> <FontAwesomeIcon icon= {faSpotify}className="text-3xl text-green-600 pr-1"/>  Spotify</a></li>
          
         
          
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