import {
  FooterDiv,
  LinkRedFox,
  LogoRedFox
} from './style';

import logo_redfox from '../../assets/logo-redfox.webp';

function Footer(){
  return (
    <FooterDiv>
      <LinkRedFox
        href="https://redfox.tech/"
        target="_blank"
      >
        <LogoRedFox
          src={logo_redfox}
        />
      </LinkRedFox>
    </FooterDiv>
  )
}

export { Footer }