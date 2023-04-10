class LoadingPage extends HTMLElement{
  connectedCallback(){
    let loadImg = [];


    this.id = 'loadingPage'

    this.innerHTML= `
    <div id="loadingImgBox">
      <img src="../etc/imgs/loading.gif" alt="강아지 움직이는 사진"/>
      <p>로딩중...</p>
    </div>
    `
    function preload(){
      for(let i = 0; i < preload.arguments.length; i++){
        loadImg[i] = new Image();
        loadImg[i].src = preload.arguments.src;
      }
    }

    preload('../etc/imgs/loading.gif')
  }
}


customElements.define('loading-page',LoadingPage)