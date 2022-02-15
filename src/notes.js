import styled from 'styled-components'
import Logo from '../../assets/profile.png'

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

const [neck, setNeck] = useState(null)

// + adding the use
useEffect(() => {
  getData()

  // we will use async/await to fetch this data
  async function getData() {
    const response = await fetch('https://www.anapioficeandfire.com/api/books')
    const data = await response.json()

    // store the data into our books variable
    setNeck(data)
  }
}, [])

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

e

//#################################################

var index = 0
var item = sleeves.sleevesItem[index]

var previous = document.getElementById('previous')
var next = document.getElementById('next')

SleevesBtn(item)

previous.addEventListener('click', function () {
  SleevesBtn(sleeves.sleevesItem[--index])
})

next.addEventListener('click', function () {
  SleevesBtn(sleeves.sleevesItem[++index])
})

function SleevesBtn() {
  return (
    <div>
      <LinkStyle>
        <div>
          <p>
            <Style>
              <span>1</span>
            </Style>
            <Style>
              <span>2</span>
            </Style>
            <Style>
              <span id="previous">3</span>
            </Style>
          </p>
        </div>
      </LinkStyle>

      <LinkStyle>
        <div>
          <p>
            <Style>
              <span>1</span>
            </Style>
            <Style>
              <span>2</span>
            </Style>
            <Style>
              <span id="next">3</span>
            </Style>
          </p>
        </div>
      </LinkStyle>
    </div>
  )
}
export default SleevesBtn
