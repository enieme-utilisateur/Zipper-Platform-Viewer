import Logo from '../../assets/profile.png'
import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

//#################################################
//#################################################
//#################################################
//#################################################
//#################################################

const BlockCart = styled.div`
  bottom: 0;
  width: 50vw;
  height: 50vh;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: end;
`

const Cart = styled.div`
  width: 200pt;
  height: 200pt;
  display: flex;
  align-items: end;
  justify-content: center;
  border: solid 1pt #b8b6dc;
  border-top-left-radius: 20pt;
  border-top-right-radius: 20pt;
  color: #b8b6dc;
  margin: 5pt;
  margin-bottom: -5pt;
  padding-bottom: 7pt;
  font-weight: ;
  font-family: helvetica;
  background-color: white;
  list-style: none;
`

function Cart({ label, title, picture }) {
  return (
    <BlockCart>
      <CardImage src={picture} alt="freelance" />
      <CardLabel>{label}</CardLabel>
      <span>{title}</span>
    </BlockCart>
  )
}

Cart.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Cart.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
}

export default Cart
