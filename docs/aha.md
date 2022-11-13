<script setup>
  import { ref } from 'vue';
  const slide = ref('first');
</script>


<div class="mt-8">
  <div class="row">
    <div class="col-12">
      <h1 class="text-center m-0 p-0"> Aha! </h1>
      <h4 class="hide sm:block mb-0 pb-0 mt-4"> Efren Carbajal </h4>
      <h4 class="sm:hide text-center mb-0 pb-0 mt-4"> Efren Carbajal </h4>
      <h6 class="hide sm:block mt-4"> Web Developer </h6>
      <h6 class="sm:hide text-center mt-4"> Web Developer </h6>
      <a class="flex items-center no-underline hover:underline text-inherit text-sm md:text-base underline my-5" href="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="mr-3 h-5 w-5 text-primary"><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>Back to the main page</a>
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
          <q-carousel-slide name="first" img-src="./alerts.png">
            <div class="absolute-bottom dark-custom-caption">
              <div class="hide md:block text-h2 text-white">Aha! (Design System)</div>
              <h5 class="hide md:block text-white">
                As part of my role as Senior Engineer in Eureka I proposed to build a Design System with the intention of coordinate Designers and Software engineers efforts.
              </h5>
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="second" img-src="./buttons.png">
            <div class="absolute-bottom dark-custom-caption">
              <div class="hide md:block text-h2 text-white">Aha! (Design System)</div>
              <h5 class="hide md:block text-white">
								Aha! Design System was designed and implemented in-house and among my contributions to the project were: provide ideas on which features were easier to implement and provide the most value, to write 100% of the code (Rails Engine) for initial versions of the tool, deploying the tool to staging environment and to educate other engineers on how to make the best use of it. 
              </h5>
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="third" img-src="./seal.png">
            <div class="absolute-bottom dark-custom-caption">
              <div class="hide md:block text-h2 text-white">Aha! (Design System)</div>
              <h5 class="hide md:block text-white">
								This tool leverage the fact we were doing Component-Driven-Development with a Open Source project (Ruby gem) called view_components
              </h5>
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="news" img-src="./news.png">
            <div class="absolute-bottom dark-custom-caption">
              <div class="hide md:block text-h2 text-white">Aha! (Design System)</div>
              <h5 class="hide md:block text-white">
								All in all, this tool is an important part to a multipart solution to a very challenging and persistent issue we were dealing as a team: How to provide a consistent User Experience (UX) to end users while at the same time being flexible and ready to accomodate diverse researchers needs and while also keep developers productivity high?.  
              </h5>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </q-responsive>
    </div>
  </div>
</div>

Links
-----

- [Aha: Alerts][1]
- [Aha: Buttoms][2]
- [Aha: Seal][3]
- [Aha: News][4]
- [View components gem][5]

[1]: https://mb-14388-aha-usability-bugs-eefc857.hehtech.io/aha/alert_component.rb
[2]: https://mb-14388-aha-usability-bugs-eefc857.hehtech.io/aha/buttons/button_component
[3]: https://mb-14388-aha-usability-bugs-eefc857.hehtech.io/aha/seal_component
[4]: https://mb-14388-aha-usability-bugs-eefc857.hehtech.io/aha/news_component
[5]: https://github.com/ViewComponent/view_component
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
