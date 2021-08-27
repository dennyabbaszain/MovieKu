import heroImg from './../public/movie-hero.svg';
import '../styles/__hero.scss';
class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class='hero-content'>
    <div>
    </div>
        <img src=${heroImg} alt='hero-image'/>
        <div>
        <p>Ingin menonton apa hari ini? bingung? </p>
        <p>Mari kita cari disini &smile;</p>
        <p>disini banyak sekali film untuk dijadikan referensi menonton</p>
        <button class='btn-hero'> lihat film <i class="bi bi-arrow-down-circle-fill"></i></button>
        </div>
    </div>`;
  }
}
customElements.define('app-hero', Hero);
