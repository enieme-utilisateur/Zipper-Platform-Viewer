import styled from 'styled-components'
import '../../styles/Viewer.css'
import React from 'react'
import axios from 'axios'

//#################################################
//#################################################
//#################################################
//#################################################
//#################################################

const BlockCart = styled.div`
  width: 100vw;
  height: 100%;
  top: 30pt;
  left: 0;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: end;
  bottom: -6pt;
  background-color: #242526;
`
const DotBackground = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  opacity: 0.2;
`

const Cart = styled.div`
  width: 100vw;
  height: 150pt;
  display: flex;
  align-items: end;
  justify-content: center;
  color: #b8b6dc;
  margin: 5pt;
  padding-bottom: 40pt;
  font-weight: ;
  font-family: helvetica;
  list-style: none;
  border-top-left-radius: 40pt;
  border-top-right-radius: 40pt;
  background-color: #363738;
  border: solid 1pt black;
  z-index: 2;
`

//#################################################
//#################################################
//#################################################
//FONCTION

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 1,
      disabledNext: false,
      disabledPrev: false,
    }
  }

  togglePrev(e) {
    let index = this.state.index - 1
    let disabledPrev = index === 0

    this.setState({
      index: index,
      disabledPrev: disabledPrev,
      disabledNext: false,
    })
  }

  toggleNext(e) {
    let index = this.state.index + 1
    let disabledNext = index === this.props.profiles.length - 1

    this.setState({
      index: index,
      disabledNext: disabledNext,
      disabledPrev: false,
    })
  }
  //#################################################
  //RESULTAT

  render() {
    const { index, disabledNext, disabledPrev } = this.state
    const profile = this.props.profiles ? this.props.profiles[index] : null

    if (profile) {
      return (
        <div className="profile">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Prev toggle={(e) => this.togglePrev(e)} active={disabledPrev} />
            <Next toggle={(e) => this.toggleNext(e)} active={disabledNext} />
          </div>
          <Profile {...profile} />
        </div>
      )
    } else {
      return <span>Error</span>
    }
  }
}

//#################################################
//#################################################
//#################################################
//BOUTTONS

function Prev(props) {
  return (
    <button
      onClick={props.toggle}
      disabled={props.active}
      style={{
        color: '#242526',
        textDecoration: 'none',
        borderRadius: '100%',
        border: 'solid 1pt #242526',
        padding: '5pt',
        position: 'absolute',
        marginTop: '50pt',
        marginRight: '100pt',
        backgroundColor: '#b8b6dc',
      }}
    >
      Prev
    </button>
  )
}

function Next(props) {
  return (
    <button
      onClick={props.toggle}
      disabled={props.active}
      style={{
        color: '#242526',
        textDecoration: 'none',
        borderRadius: '100%',
        border: 'solid 1pt #242526',
        padding: '5pt',
        position: 'absolute',
        marginLeft: '100pt',
        marginTop: '50pt',
        backgroundColor: '#b8b6dc',
      }}
    >
      Next
    </button>
  )
}

//#################################################
//#################################################
//#################################################
//PANIER

function Profile(propsneck) {
  return (
    <div>
      <img
        src={propsneck.logo}
        alt="logo"
        style={{ height: '40pt', marginBottom: '20pt', width: '100%' }}
      />
      <h1 style={{ color: '#cccccc' }}>{propsneck.name}</h1>
      <a
        href={propsneck.url}
        alt="url"
        target="_blank"
        rel="noreferrer"
        style={{
          textDecoration: 'none',
          marginTop: '-5pt',
          display: 'flex',
          justifyContent: 'center',
          color: '#b8b6dc',
        }}
      >
        SHOP
      </a>
      <img
        src={propsneck.image}
        alt="viewer"
        style={{
          width: '700pt',
          height: '630pt',
          padding: '5pt',
          marginTop: '-100pt',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '1',
          filter: 'drop-shadow(0 0 0.7rem black)',
        }}
      />
    </div>
  )
}

//#################################################
//#################################################
function Viewer() {
  //#################################################
  //DATA
  const neckURL = 'http://localhost:5000/neck'
  const [neck, setNeck] = React.useState(null)

  React.useEffect(() => {
    axios.get(neckURL).then((response) => {
      setNeck(response.data)
    })
  }, [])

  //#################################################

  const baseURL = 'http://localhost:5000/base'
  const [base, setBase] = React.useState(null)

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setBase(response.data)
    })
  }, [])

  //#################################################

  const sleevesURL = 'http://localhost:5000/sleeves'
  const [sleeves, setSleeves] = React.useState(null)

  React.useEffect(() => {
    axios.get(sleevesURL).then((response) => {
      setSleeves(response.data)
    })
  }, [])

  //'https://www.anapioficeandfire.com/api/books'
  //'http://localhost:5000/neck'
  //#################################################

  //#################################################

  return (
    <div>
      <BlockCart>
        <Cart>
          <div>
            <Main profiles={sleeves} />
          </div>
        </Cart>
        <Cart>
          <div>
            <Main profiles={base} />
          </div>
        </Cart>
        <Cart>
          <div>
            <Main profiles={neck} />
          </div>
        </Cart>
        <DotBackground>
          <img src="http://localhost:5000/public/elements/dot.svg" alt="dot" />
        </DotBackground>
      </BlockCart>
    </div>
  )
}

//#################################################
//#################################################
//#################################################

export default Viewer
