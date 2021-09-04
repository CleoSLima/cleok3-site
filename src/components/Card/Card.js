import './Card.css';

// COMPONENTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Card() {
  return (
    
    <div className="cardWrapper">
      {/* <div>Olá eu sou a Cleok3, uma pégaso que veio da galaxia de Andromeda.
        Eu sou apaixonada por tecnologia, jogos e dança; Às vezes posso ser um tanto caótica mas é apenas o meu jeitinho.
        Além de gostar de sentir o vento no meu rosto gosto de fazer lives na Twitch. Aparece por lá!</div>
      <div>
        <ul className="cardInfo">
          <li><b>Nome:</b> Cleok3</li>
          <li><b>Idade:</b> 5 anos</li>
          <li><b>Altura:</b> 1.60m</li>
          <li><b>Galaxia:</b> Andromeda</li>
          <li><b>Comida preferida:</b> Chocolate</li>
          <li><b>Pronomes:</b> Ela | Dela</li>
        </ul>
      </div> */}
      <h1 className="cardTitle">Minhas Redes Sociais</h1>
      <div className="socialsWrapper">
      <a href="https://www.twitch.tv/cleok3" target="_blank"><FontAwesomeIcon icon={['fab', 'twitch']} /></a>
      <a href="https://discord.gg/Jza3SbfA4a" target="_blank"><FontAwesomeIcon icon={['fab', 'discord']} /></a>
      <a href="https://twitter.com/CleoK3" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
      <a href="https://www.tiktok.com/@cleok3lima" target="_blank"><FontAwesomeIcon icon={['fab', 'tiktok']} /></a>
      <a href="https://www.youtube.com/channel/UC50QN_CJhHBs5Tjf9eCVp7A" target="_blank"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
      </div>
    </div>
  );
}

export default Card;