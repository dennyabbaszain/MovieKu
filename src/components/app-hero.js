import heroImg from './../public/movie-hero.svg';
import '../styles/__hero.scss';
class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class='hero-content'>
    <div class='hero-img'>
    <img src=${heroImg} alt='hero-image'/>
    </div>
        <div>
        <p>Ingin menonton apa hari ini? bingung? </p>
        <p>Mari kita cari disini &smile;</p>
        <p>disini banyak sekali film untuk dijadikan referensi menonton</p>
        <button class='btn-hero'><a href='#list-film'> lihat film <i class="bi bi-arrow-down-circle-fill"></i></a></button>
        </div>
    </div>`;
  }
}
customElements.define('app-hero', Hero);
