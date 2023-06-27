import basquete from "./assets/basquete.jpg";
import bicicletas from "./assets/bicicletas.jpg";
import boxe from "./assets/boxe.jpg";
import corrida from "./assets/corrida.jpg";
import crossfit from "./assets/crossfit.jpg";
import desportoNeve from "./assets/desportoNeve.jpg";
import futebolAmericano from "./assets/futebolAmericano.jpg";
import logoOnebitcode from "./assets/logoOnebitcode.svg";
import natacao from "./assets/natacao.jpg";
import roupas from "./assets/roupas.jpg";
import skate from "./assets/skate.jpg";
import surf from "./assets/surf.jpg";
import tenis from "./assets/tenis.jpg";
import trilha from "./assets/trilha.jpg";
import yoga from "./assets/yoga.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="container">
        <nav class="navbar">
          <img src={logoOnebitcode} alt="" />
          <div class="nav-btns">
            <button class="nav-btn">Login</button>
            <button class="nav-btn">Sign Up</button>
            <button class="nav-btn">FAQ</button>
          </div>
        </nav>
        <h1 class="main-title" id="on-top">
          BEM VINDO AO ONEBITSPORTS
        </h1>
        <p class="main-paragraph">
          Aqui vais encontrar todos os items novos e modernos do teu desporto
          favorito.
        </p>
        <section class="main-content">
          <div class="main-card">
            <div class="category-card">
              <img src={boxe} alt="maincardimg" />
              <p class="main-category-card-title">BOXE</p>
              <p class="main-category-card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas ea in voluptatum mollitia, iste alias reprehenderit
                ullam ipsa quae. Excepturi.
              </p>
            </div>
            <div class="category-card">
              <img src={crossfit} alt="maincardimg" />
              <p class="main-category-card-title">CROSSFIT</p>
              <p class="main-category-card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas ea in voluptatum mollitia, iste alias reprehenderit
                ullam ipsa quae. Excepturi.
              </p>
            </div>
            <div class="category-card">
              <img src={natacao} alt="maincardimg" />
              <p class="main-category-card-title">NATAÇÃO</p>
              <p class="main-category-card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas ea in voluptatum mollitia, iste alias reprehenderit
                ullam ipsa quae. Excepturi.
              </p>
            </div>
            <div class="category-card">
              <img src={roupas} alt="maincardimg" />
              <p class="main-category-card-title">ROUPAS</p>
              <p class="main-category-card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas ea in voluptatum mollitia, iste alias reprehenderit
                ullam ipsa quae. Excepturi.
              </p>
            </div>
            <div class="category-card">
              <img src={basquete} alt="maincardimg" />
              <p class="main-category-card-title">BASKETBALL</p>
              <p class="main-category-card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas ea in voluptatum mollitia, iste alias reprehenderit
                ullam ipsa quae. Excepturi.
              </p>
            </div>
            <div class="category-card">
              <img src={corrida} alt="maincardimg" />
              <p class="main-category-card-title">CORRIDA</p>
              <p class="main-category-card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas ea in voluptatum mollitia, iste alias reprehenderit
                ullam ipsa quae. Excepturi.
              </p>
            </div>
            <div class="category-card">
              <img src={surf} alt="maincardimg" />
              <p class="main-category-card-title">SURF</p>
              <p class="main-category-card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas ea in voluptatum mollitia, iste alias reprehenderit
                ullam ipsa quae. Excepturi.
              </p>
            </div>
            <div class="category-card">
              <img src={trilha} alt="maincardimg" />
              <p class="main-category-card-title">CAMINHADA</p>
              <p class="main-category-card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas ea in voluptatum mollitia, iste alias reprehenderit
                ullam ipsa quae. Excepturi.
              </p>
            </div>
            <div class="category-card">
              <img src={tenis} alt="maincardimg" />
              <p class="main-category-card-title">TÊNIS</p>
              <p class="main-category-card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas ea in voluptatum mollitia, iste alias reprehenderit
                ullam ipsa quae. Excepturi.
              </p>
            </div>
          </div>
          <div class="sidebar-card">
            <h3>CATEGORIAS EXTRAS</h3>
            <div class="sidebar-category-card">
              <img src={bicicletas} alt="" />
              <p class="side-bar-card-title">BICICLETAS</p>
            </div>
            <div class="sidebar-category-card">
              <img src={desportoNeve} alt="" />
              <p class="side-bar-card-title">DESPORTOS NA NEVE</p>
            </div>
            <div class="sidebar-category-card">
              <img src={futebolAmericano} alt="" />
              <p class="side-bar-card-title">FUTEBOL AMERICANO</p>
            </div>
            <div class="sidebar-category-card">
              <img src={skate} alt="" />
              <p class="side-bar-card-title">SKATE</p>
            </div>
            <div class="sidebar-category-card">
              <img src={yoga} alt="" />
              <p class="side-bar-card-title">YOGA</p>
            </div>
          </div>
        </section>
        <footer class="footer">
          <img src={logoOnebitcode} alt="" />
          <a href="#on-top">VOLTAR AO TOPO</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
