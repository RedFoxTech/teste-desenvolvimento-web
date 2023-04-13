import { HeaderContainer } from './styles'
import { MagnifyingGlass} from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import pokeBola from '../../assets/pokebola.png'
import { Form, FormControl } from 'react-bootstrap'

export function Header() {
  return (
    <HeaderContainer>
      <img src={pokeBola} alt="Pokebola" />
      <nav>

      <Form className='Form'>
      <FormControl type="text" placeholder="Pesquisar" />
      </Form>

      <NavLink to="/" title="Search">
          <MagnifyingGlass size={24} />
      </NavLink>

      </nav>
    </HeaderContainer>
  )
}