import styled from 'styled-components'

const Title = styled.h1`
  height: 100vh;
  width: 100vw;
  background-color: #242526;
  left: 0;
  position: absolute;
  padding-left: 10pt;
  padding-top: 55pt;
  position: fixed;
`

const Parag = styled.p`
  color: #cccccc;
  font-size: 22px;
  font-weight: 100;
  font-family: helvetica;
  opacity: 50%;
  padding-left: 8pt;
`
const Space = styled.h1`
  margin-left: 0pt;
  color: #cccccc;
  font-size: 22px;
  font-weight: bold;
  font-family: helvetica;
  font-style: italic;
  padding-left: 8pt;
`

function About() {
  return (
    <div>
      <Title>
        <Space>
          <h1>Zipper Platform Viewer (beta)</h1>
        </Space>
        <Parag>
          <p>
            ZIPPER(c), est une plate-forme en ligne destinée aux créateurs, elle
            est conçu pour être l’interface des multiples combinaisons générées
            par son concept : La division d’un textile en 3 parties, devenant
            ainsi modulables entre elles à l’aide de zip. La plateforme se veut
            être gratuite, disponible à tous et vise à être 100% automatisée.
          </p>

          <p>
            *Ceci est sa version toujours en développement seulement axé sur le
            Back-End de son interface, et communiquant avec une API Rest pour la
            réception de ses 3 types de modules.*
          </p>
        </Parag>
      </Title>
    </div>
  )
}

export default About
