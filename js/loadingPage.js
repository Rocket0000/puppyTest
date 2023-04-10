class LoadingPage extends HTMLElement{
  connectedCallback(){
    this.id = 'loadingPage'

    this.innerHTML= `
    <div id="loadingImgBox">
      <img src="../etc/imgs/loading.gif" alt="강아지 움직이는 사진"/>
      <p>로딩중...</p>
    </div>
    `
let images = [];

function preload() {
  for(let i = 0; i < preload.arguments.lenght; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments.src;
  }
}

preload(
  "../etc/imgs/loading.gif"
)
  }
}


customElements.define('loading-page',LoadingPage)