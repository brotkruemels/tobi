<template>
  <div id="app" style="background-color: white">
   
    <div class="headermenu">
      <img src="/static/logo.png" class="kellerlogo"/>
      <a href="#"  @click="scrollTo('#first')">Home</a>
      <a href="#"  @click="scrollTo('#second')">Über</a>
      <a href="#"  @click="scrollTo('#third')">Projekte</a>
      <a href="#"  @click="scrollTo('#fourth')">Schwerpunkte</a>
      <a href="#"  @click="scrollTo('#fifth')">Kontakt</a>
    </div>
    <div class="headline" id="first"/>
    <div class="titlepicture">
    
    </div>
    <div class="headlineWrapper">
      <div class="headline" id="second">
        Über
      </div>
      <img src="/static/dreieck.png" class="dreieck"/>
    </div>
    <div class="row about">
    <div class="contentWrap">
        <div class="col-sm-4 content">
          <p class="abouttext">
            Mein Name ist Tobias Möhnle und ich bin 31 Jahre alt.  Seit 2015 bin ich selbstständig als Grafikdesigner tätig. In den Mittelpunkt meiner Arbeit gehören stets kreatives, anspruchvolles Design und zufriedene Kunden. Ganz gleich welches Projekt: Erst die treffende Idee und die Liebe zum Detail machen aus einem guten Entwurf eine professionelle Leistung. Und wenn dadurch ein Kleinunternehmer groß wird oder dadurch eine Marke durch gutes Design einen hohen Bekanntheitsgrad erzielt - dann bin ich auch zufrieden.
          </p>
        </div>
        <div class="col-sm-4 content">
          <img src="/static/profilbild.jpg" class="tobi"/>
        </div>
        <div class="col-sm-4 content">
          <p class="abouttext">
            Mein Name ist Tobias Möhnle und ich bin 31 Jahre alt.  Seit 2015 bin ich selbstständig als Grafikdesigner tätig. In den Mittelpunkt meiner Arbeit gehören stets kreatives, anspruchvolles Design und zufriedene Kunden. Ganz gleich welches Projekt: Erst die treffende Idee und die Liebe zum Detail machen aus einem guten Entwurf eine professionelle Leistung. Und wenn dadurch ein Kleinunternehmer groß wird oder dadurch eine Marke durch gutes Design einen hohen Bekanntheitsgrad erzielt - dann bin ich auch zufrieden.
          </p>
        </div>
      </div>
      <div class="col-sm-12 graffiti" id="torero">  
      </div>
      <div class="col-sm-12 graffiti">
        <img src="/static/wuerfel.png" class="wuerfel"/>   
      </div>    
    </div>
    <div class="headlineWrapper">
      <div class="headline" id="third">
        Projekte
      </div>
      <img src="/static/dreieck.png" class="dreieck"/>
    </div>  
    <div class="row projekte">
      <div class="col-sm-12">
        <div>
          <ul>
            <li v-for="(image, index) in images" style="display: inline-block">
              <img :src="image.src" alt="" class="vorschau" @click="openGallery(index)">
            </li>
          </ul>
          <lightbox :images="images" ref="lightbox"></lightbox>
        </div>
      </div>
      <div class="col-sm-12 graffiti">
        <img src="/static/wuerfel.png" class="wuerfel"/>   
      </div>    
    </div>
    <div class="headlineWrapper">
      <div class="headline" id="fourth">
          Schwerpunkte
      </div>
        <img src="/static/dreieck.png" class="dreieck"/>
    </div>
     <div class="row schwerpunkte"> 
      <div class="contentWrap">
        <div class="col-sm-4 content">
          <img src="/static/pikto01.png"/>
          <h4>Corporate Design</h4>
          <p class="abouttext">
            Egal ob Visitenkarten, Logo, Briefpapier oder Mappe, Ihr visueller Auftritt sollte stets einheitlich bleiben.
          </p>
        </div>
        <div class="col-sm-4 content">
          <img src="/static/pikto02.png"/>
          <h4>Grafik Design und Printmedien</h4>
          <p class="abouttext">
            Vom Entwurf bis zur Druckdatei. Ich gestalte und begleite Ihr Produkt von der ersten Idee bis zum ausgereiften Ergebnis, vom ersten Entwurf bis zum fertigen Druck.
          </p>        
        </div>
        <div class="col-sm-4 content">
          <img src="/static/pikto03.png"/>
          <h4>Illustrationen</h4>
          <p class="abouttext">
            sind wieder gefragt. Nach Jahren der Digitalfotografie und von Photoshop bieten meine Zeichnungen mit Feder, Stift oder Pinsel eine willkommene Abwechslung zu den gewohnten Bilderfluten.
          </p>
        </div>
      </div>
      <div class="col-sm-12 graffiti" id="torero2">
      </div>
      <div class="col-sm-12 graffiti">
        <img src="/static/wuerfel.png" class="wuerfel"/>   
      </div>  
    </div>  
    <div class="headlineWrapper">
      <div class="headline" id="fifth">
        Kontakt
      </div>
      <img src="/static/dreieck.png" class="dreieck"/>
    </div>
    <div class="row Kontakt">
      <div class="col-sm-6">
      </div>
      <div class="col-sm-6">
      </div>
    </div>
    <div class="footer">
        <div class="col-sm-12">

          <button id="show-modal" @click="showModal = true">Impressum</button>
            <script type="text/x-template" id="modal-template">
              <transition name="modal">
                <div class="modal-mask">
                  <div class="modal-wrapper">
                    <div class="modal-container">

                      <!--<div class="modal-header">
                        <slot name="header">
                          default header
                        </slot>
                      </div>-->

                      <div class="modal-body">
                        <slot name="body">
                          Blabla
                        </slot>
                      </div>

                      <div class="modal-footer">
                        <slot name="footer">
                          Danke für nichts
                          <button class="modal-default-button" @click="$emit('close')">
                            Leck mich
                          </button>
                        </slot>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </script><!-- use the modal component, pass in the prop -->
          <modal v-if="showModal" @close="showModal = false">
          
        </div>
    </div>


    
  </div>
</template>

<script>

let images = [
  {
    thumb: '../projects/thumbnail_projekt01.jpg',
    src: '../projects/projekt01.jpg',
    caption: '<h4>Hello World</h4>',
  },
  {
    thumb: '../projects/thumbnail_projekt02.jpg',
    src: '../projects/projekt02.jpg',
    caption: '<h4>Hello World</h4>',
  },
  {
    thumb: '../projects/thumbnail_projekt03.jpg',
    src: '../projects/projekt03.jpg',
    caption: '<h4>Hello World</h4>',
  },
  {
    thumb: '../projects/thumbnail_projekt04.jpg',
    src: '../projects/projekt04.jpg',
    caption: '<h4>Hello World</h4>',
  },
  {
    thumb: '../projects/thumbnail_projekt05.jpg',
    src: '../projects/projekt05.jpg',
    caption: '<h4>Hello World</h4>',
  },
  {
    thumb: '../projects/thumbnail_projekt06.jpg',
    src: '../projects/projekt06.jpg',
    caption: '<h4>Hello World</h4>',
  },
  {
    thumb: '../projects/thumbnail_projekt07.jpg',
    src: '../projects/projekt07.jpg',
    caption: '<h4>Hello World</h4>',
  },
  {
    thumb: '../projects/thumbnail_projekt08.jpg',
    src: '../projects/projekt08.jpg',
    caption: '<h4>Hello World</h4>',
  },
  {
    thumb: '../projects/thumbnail_projekt09.jpg',
    src: '../projects/projekt09.jpg',
    caption: '<h4>Hello World</h4>',
  }
]

import Lightbox from 'components/Lightbox'
var vueScrollTo = require('vue-scrollTo');
 
var options = {
    easing: vueScrollTo.easing['ease-in'],
    offset: -50
}
 
export default {
  name: 'app',
  watch: {
    'scrollPos': function(scrollPos) {
      console.log(scrollPos)
     }
  },
  components: {
    Lightbox,
  },

  data () {
    return {
      images,
      scrollPos: 0,
      showModal: false
    }
  },

  methods: {
    scrollTo(element) {
      vueScrollTo.scrollTo(element, 1000, options)
    },
    openGallery(index) {
      this.$refs.lightbox.showImage(index)
    }
  }
}
</script>

