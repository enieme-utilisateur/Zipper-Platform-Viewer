import styled from 'styled-components'
import Logo from '../../assets/profile.png'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

Buttons.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  picture: PropTypes.string,
}

const LinkStyle = styled.div`
  font-size: 22px;
  font-weight: light;
  font-family: helvetica;
  word-spacing: 5pt;
  width: 100%;
  display: flex;
  color: #b8b6dc;
`
const Style = styled.span`
  font-size: 22px;
  font-weight: light;
  font-family: helvetica;
  word-spacing: 5pt;
  border: solid 1pt #b8b6dc;
  padding-left: 10pt; padding-right: 10pt; padding-top: 5pt; padding-bottom: 5pt;
  border-radius: 100%;
  margin-left: 10pt;
  transition: 200ms;
&:hover {
  cursor: pointer;
  opacity: 20%;
`

//#################################################
//#################################################

//#################################################
//#################################################
//#################################################

const neck = [
  {
    piece: '1',
    id: '1.1',
    name: 'Illisible',
    logo: Logo,
  },
  {
    piece: '1',
    id: '2.1',
    name: 'Zipper Platform',
    logo: Logo,
  },
  {
    piece: '1',
    id: '3.1',
    name: 'Psychic Garden',
    logo: Logo,
  },
]
//#################################################

const base = [
  {
    piece: '2',
    id: '1.2',
    name: 'Illisible',
    logo: Logo,
  },
  {
    piece: '2',
    id: '2.2',
    name: 'Zipper Platform',
    logo: Logo,
  },
  {
    piece: '2',
    id: '3.2',
    name: 'Psychic Garden',
    logo: Logo,
  },
]
//#################################################

const sleeves = [
  {
    piece: '3',
    id: '1',
    name: 'Illisible',
    logo: Logo,
    image: '/assets/textile-1.3.png',
    available: true,
  },
  {
    piece: '3',
    id: '2',
    name: 'Zipper Platform',
    logo: Logo,
    image: '/assets/textile-2.3.png',
    available: true,
  },
  {
    piece: '3',
    id: '3',
    name: 'Psychic Garden',
    logo: Logo,
    image: '/assets/textile-3.3.png',
    available: true,
  },
]

//#################################################
//#################################################
//#################################################

///BTN SETUP

//#################################################
//#################################################
//#################################################

function Buttons() {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <LinkStyle>
        <div>
          <p>
            <Style>
              <span onClick={() => setCount(count - 1)}>1</span>
            </Style>
            <Style>
              <span id="previous-two">2</span>
            </Style>
            <Style>
              <span id="previous-three">3</span>
            </Style>
          </p>
        </div>
      </LinkStyle>

      <LinkStyle>
        <div>
          <p>
            <Style>
              <span id="previous-one">1</span>
            </Style>
            <Style>
              <span id="previous-two">2</span>
            </Style>
            <Style>
              <span id="next-three">3</span>
            </Style>
          </p>
        </div>
      </LinkStyle>
    </div>
  )
}

export default Buttons
