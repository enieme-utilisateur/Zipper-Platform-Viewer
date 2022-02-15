import './style/home.css'
import useScript from './useScript'

function Home() {
  useScript('http://localhost:5000/public/js/script.js')
  return (
    <div>
      <div className="background-load">
        <img
          src="http://localhost:5000/public/svg/logo/zipperlogogris.svg"
          className="logoload"
          alt="loader-logo"
        />
        <p className="logoloadtext">
          "Creator Platform Viewer" - <span>2021</span>(c)
        </p>
      </div>

      <nav class="menu">
        <a href="/viewer">
          <img
            src="http://localhost:5000/public/svg/components/menu1.svg"
            className="font"
            onmouseover="display1()"
            onmouseout="undisplay1()"
            alt="menu"
          />
        </a>

        <div class="linemenu"></div>

        <a href="/gallery">
          <img
            src="http://localhost:5000/public/svg/components/menu2.svg"
            className="font"
            onmouseover="display2()"
            onmouseout="undisplay2()"
            alt="menu"
          />
        </a>

        <div class="linemenu"></div>

        <a href="/about">
          <img
            src="http://localhost:5000/public/svg/components/menu3.svg"
            className="font"
            onmouseover="display3()"
            onmouseout="undisplay3()"
            alt="menu"
          />
        </a>

        <div className="linemenu"></div>
      </nav>

      <p className="scroll" id="scroll">
        SCROLL
      </p>

      <img
        src="http://localhost:5000/public/svg/logo/zipperlogogris.svg"
        className="logo"
        id="block2"
        alt="logozipper"
      />
      <img
        src="http://localhost:5000/public/svg/logo/zipperlogogrisrotate.svg"
        className="logophone"
        id="block3"
        alt="logozipper"
      />

      <footer class="mention-footer">
        <img
          src="http://localhost:5000/public/svg/logo/logoeniemestudio.svg"
          className="logoeniemestudio"
          id="enieme"
          alt="footer"
        />
        <div className="credit" id="credit">
          <p>CREDITS :</p>
          <p className="credit-para">
            Founder : Enieme Studio <br />
            Website : Enieme Studio
          </p>
        </div>
      </footer>

      <img
        src="http://localhost:5000/public/svg/picto/arrow-down.svg"
        id="arrow1"
        className="arrow1"
        alt="arrow"
      />
      <img
        src="http://localhost:5000/public/svg/picto/arrow-down.svg"
        id="arrow2"
        className="arrow2"
        alt="arrow"
      />

      <p id="soon1">In progress...</p>
      <p id="soon2">In progress...</p>
      <p id="soon3">In progress...</p>

      <div className="background0"></div>

      <div className="backgroundsticky">
        <div id="navbar">
          <img
            src="http://localhost:5000/public/svg/logo/zipperlogogris.svg"
            className="logostick"
            alt="navbar"
          />
        </div>
      </div>

      <div className="inner">
        <div className="log">
          <p>
            <span id="screenX">0</span>
            <span id="screenY">0</span>
          </p>
        </div>
      </div>

      <img
        src="http://localhost:5000/public/svg/mention/mention5.svg"
        className="mention"
        alt="mention"
      />

      <div id="scann1">
        <img
          src="http://localhost:5000/public/svg/scan/scann-base.svg"
          alt="anim-scan"
        />
      </div>

      <div id="scann2">
        <img
          src="http://localhost:5000/public/svg/scan/scann-b1.svg"
          alt="anim-scan"
        />
      </div>

      <div id="scann3">
        <img
          src="http://localhost:5000/public/svg/scan/scann-d1.svg"
          alt="anim-scan"
        />
      </div>

      <div id="scann4">
        <img
          src="http://localhost:5000/public/svg/scan/scann-f1.svg"
          alt="anim-scan"
        />
      </div>

      <div id="scann5">
        <img
          src="http://localhost:5000/public/svg/scan/scann-b2.svg"
          alt="anim-scan"
        />
      </div>

      <div id="scann6">
        <img
          src="http://localhost:5000/public/svg/scan/scann-d2.svg"
          alt="anim-scan"
        />
      </div>

      <div id="scann7">
        <img
          src="http://localhost:5000/public/svg/scan/scann-f2.svg"
          alt="anim-scan"
        />
      </div>

      <div id="scann8">
        <img
          src="http://localhost:5000/public/svg/scan/scann-c.svg"
          alt="anim-scan"
        />
      </div>

      <div id="scann9">
        <img
          src="http://localhost:5000/public/svg/scan/scann-e.svg"
          alt="anim-scan"
        />
      </div>

      <div className="bar"></div>

      <div className="contact">
        <div className="cont">
          <ul>
            <li className="cont-tit">SUPPORT</li>
            <li>HELP CENTER</li>
            <li>CONTACT US</li>
            <li>SHIPPING INFO</li>
            <li>ORDER STATUS</li>
            <li>RETURNS EXCHANGES</li>
          </ul>

          <ul>
            <li className="cont-tit">INFO</li>
            <li>ABOUT US</li>
            <li>PROJECT</li>
          </ul>
        </div>

        <div className="cont0">
          <div className="cont-tit0">In progress ...</div>
          <div className="cont-inin">
            <div className="cont-input"></div>
            <div className="cont-ok"></div>
          </div>

          <div className="cont-dot">
            <img
              src="http://localhost:5000/public/assets/svg/logo-05.svg"
              alt="logo-dot"
            />
            <img
              src="http://localhost:5000/public/assets/svg/logo-04.svg"
              alt="logo-dot"
            />
            <img
              src="http://localhost:5000/public/assets/svg/logo-03.svg"
              alt="logo-dot"
            />
            <img
              src="http://localhost:5000/public/assets/svg/logo-07.svg"
              alt="logo-dot"
            />
            <img
              src="http://localhost:5000/public/assets/svg/logo-01.svg"
              alt="logo-dot"
            />
          </div>
        </div>

        <div className="cont-mention">
          <p className="mention1">
            © 2021 | ZIPPER PLATFORM VIEWER | All Rights Reserved
          </p>
          <p className="mention2">Online platform for creators</p>
          <p className="mention3">PRIVACY POLICY * TERMS OF SERVICE * CCPA</p>
        </div>
      </div>

      <div className="background">
        <div id="scan1">
          <img
            src="http://localhost:5000/public/svg/scan/scan1.svg"
            alt="slice1"
          />
        </div>

        <div id="scan2">
          <img
            src="http://localhost:5000/public/svg/scan/scan2.svg"
            alt="slice2"
          />
        </div>

        <div id="scan3">
          <img
            src="http://localhost:5000/public/svg/scan/scan3.svg"
            alt="slice3"
          />
        </div>

        <div id="scan4">
          <img
            src="http://localhost:5000/public/svg/scan/scan4.svg"
            alt="slice4"
          />
        </div>

        <div id="scan5">
          <img
            src="http://localhost:5000/public/svg/scan/scan5.svg"
            alt="slice5"
          />
        </div>

        <div id="scannn1">
          <img
            src="http://localhost:5000/public/svg/scan/scannn1.svg"
            alt="slice1.1"
          />
        </div>

        <div id="scannn2">
          <img
            src="http://localhost:5000/public/svg/scan/scannn2.svg"
            alt="slice2.1"
          />
        </div>

        <div id="scannn3">
          <img
            src="http://localhost:5000/public/svg/scan/scannn3.svg"
            alt="slice3.1"
          />
        </div>

        <div id="scannn4">
          <img
            src="http://localhost:5000/public/svg/scan/scannn4.svg"
            alt="slice4.1"
          />
        </div>

        <div id="scannn5">
          <img
            src="http://localhost:5000/public/svg/scan/scannn5.svg"
            alt="slice5.1"
          />
        </div>
      </div>

      <div className="background2"></div>
      <div className="background3"></div>

      <img
        src="http://localhost:5000/public/svg/components/fondpoint-02.svg"
        className="point"
        alt="fond-point"
      />

      <div className="cursor"></div>

      <div id="zip">
        <div id="zip2"></div>
        <div id="zip3"></div>
      </div>
    </div>
  )
}

export default Home
