<script setup>
  import { ref } from 'vue';
  import { withBase } from 'vitepress';
  const slide = ref('first');
</script>


<div class="mt-8">
  <div class="row">
    <div class="col-12">
      <h1 class="text-center m-0 p-0"> IPA Translator </h1>
      <h4 class="hide sm:block mb-0 pb-0 mt-4"> Efren Carbajal </h4>
      <h4 class="sm:hide text-center mb-0 pb-0 mt-4"> Efren Carbajal </h4>
      <h6 class="hide sm:block mt-4"> Web Developer </h6>
      <h6 class="sm:hide text-center mt-4"> Web Developer </h6>
      <a class="flex items-center no-underline hover:underline text-inherit text-sm md:text-base underline my-5" :href="withBase('/')"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="mr-3 h-5 w-5 text-primary"><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>Back to the main page</a>
    </div>
  </div>
  <div class="row mx-auto">
    <div class="col-12">
      <q-responsive :ratio="16/9" style="max-width: 100%;" class="box-shadow">
        <q-carousel
          arrows
          animated
          v-model="slide"
          height="400px"
        >
          <q-carousel-slide name="first" img-src="./light.png">
            <div class="absolute-bottom custom-caption">
              <div class="text-h2 hide md:block text-white">Multiple Source Languages</div>
              <h4 class="hide md:block text-white">Web Client, Light Mode, displaying 10 possible input languages</h4>
              <h5 class="hide md:block text-white">
                Unalengua IPA Translator is the first modern phonetic (IPA) transcriber with prolonged reading features (minimalistic UI, dark mode) and read aloud capabilities (Text-to-Speech, speech tracking).
              </h5>
              <q-btn unelevated color="secondary" class="mb-4" label="Live demo" href="https://unalengua.com/ipa?ttsLocale=en-US&voiceId=Salli&ttsMode=sentence&text=Welcome+to+Unalengua+IPA+Translator" target="_blank"/>
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="third" img-src="./dark.png">
            <div class="absolute-bottom custom-caption">
              <div class="hide md:block text-h2 text-white">Uses Text-To-Speech Technology</div>
              <h4 class="hide md:block text-white">Web Client, Dark Mode, displaying 5 possible text-to-speech speeds</h4>
              <h5 class="hide md:block text-white">
                The app uses AWS Polly Text-To-Speech technology to provide end users with dozens of different voices available to the 10 languagues supported.
              </h5>
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="second" img-src="./android.png">
            <div class="absolute-bottom dark-custom-caption">
              <div class="hide md:block text-h2 text-white">Multiplatform App</div>
              <h5 class="hide md:block text-white">
                The app has been distributed as a Mobile (Google play and Apple stores), Desktop (Microsoft and Apple store), Chrome extension and Web (accesible directly via any browser).
              </h5>
              <q-btn unelevated color="secondary" class="mb-4 ml-2" label="Google Play Store" href="https://play.google.com/store/apps/details?id=com.unalengua.ipattstranslator" target="_blank"/>
              <q-btn unelevated color="primary" class="mb-4 ml-2" label="Chrome Extension" href="https://chrome.google.com/webstore/detail/unalengua-ipa-translator/cgdbpnmhhkgaaahpmgmmibiifdegidbl" target="_blank"/>
              <q-btn unelevated color="secondary" class="mb-4 ml-2" label="Apple Store" href="https://apps.apple.com/US/app/id1553100032" target="_blank"/>
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="reviews" img-src="./analytics.png">
            <div class="absolute-bottom dark-custom-caption">
              <div class="hide md:block text-h2 text-white">Google Analytics</div>
              <h4 class="hide md:block text-white">15k visitors last month</h4>
              <h5 class="hide md:block text-white">
                The app is well received in the stores and also it is used by people from all over the world.
              </h5>
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="contribution" img-src="./android2.png">
            <div class="absolute-bottom dark-custom-caption">
              <div class="hide md:block text-h2 text-white">My Contribution</div>
              <h5 class="hide md:block text-white">
               I was involved in all aspects of the app, including: design, coding, infrastructure, marketing, project management, etc. Except for coding in which I wrote the code together with my younger brother, I can proudly say it was all my work.
              </h5>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </q-responsive>
    </div>
  </div>
</div>

<style>
  .custom-caption {
    text-align: center;
    padding: 12px;
    color: #fff;
    background-color: #0000006d;
  }
  .dark-custom-caption {
    text-align: center;
    padding: 12px;
    color: #fff;
    background-color: #555d;
  }
  .q-icon {
    background: #0000006d;
    border-radius: 100%;
    transform: scale(1.5);
  }
 .box-shadow {
		box-shadow: 3px 3px 14px -1px rgba(0,0,0,0.53);
		-webkit-box-shadow: 3px 3px 14px -1px rgba(0,0,0,0.53);
		-moz-box-shadow: 3px 3px 14px -1px rgba(0,0,0,0.53);
 }
</style>
