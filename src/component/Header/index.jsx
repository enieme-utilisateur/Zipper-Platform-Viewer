import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LinkStyle = styled.nav`
  font-size: 22px;
  font-weight: 100;
  font-family: helvetica;
  word-spacing: 5pt;
  z-index: 1;
  background-color: #363738;
  padding: 10pt;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: solid 1pt black;
  width: 100vw;
  height: 55pt;
  padding-top: 13pt;
  position: fixed;
  line-height: 90pt;
  &:hover {
    opacity: 100%;
  }
`

function Header() {
  return (
    <LinkStyle style={{ zIndex: 100 }}>
      <nav>
        <img
          src="http://localhost:5000/public/logos/zipper-blanc.svg"
          alt="logo"
          width="400pt"
          style={{
            position: 'absolute',
          }}
        />
        <Link
          to="/"
          style={{
            color: '#cccccc',
            textDecoration: 'none',
            marginLeft: '315pt',
          }}
        >
          Home{' '}
        </Link>

        <Link to="/Viewer" style={{ color: '#cccccc', textDecoration: 'none' }}>
          Viewer{' '}
        </Link>

        <Link
          to="/Gallery"
          style={{ color: '#cccccc', textDecoration: 'none' }}
        >
          Gallery{' '}
        </Link>
        <Link to="/About" style={{ color: '#cccccc', textDecoration: 'none' }}>
          Contact{' '}
        </Link>
      </nav>
    </LinkStyle>
  )
}

export default Header
