<script setup>
  import { ref } from 'vue';
  const slide = ref('first');
</script>


<div class="mt-8">
  <div class="row">
    <div class="col-12">
      <h1 class="text-center m-0 p-0"> Eureka </h1>
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
          <q-carousel-slide name="first" img-src="./chi3.png">
            <div class="absolute-bottom dark-custom-caption">
              <div class="hide md:block text-h2 text-white">Congenital Heart Initiative</div>
              <h5 class="hide md:block text-white">
                As part of my role as Senior Engineer in Eureka I took ownership of anything related with frontend, which means coordinating with other Software engineers, Designers and Project manager for different projects.
              </h5>
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="second" img-src="./topaz.png">
            <div class="absolute-bottom dark-custom-caption">
              <div class="hide md:block text-h2">TOPAZ: Trial of Parkinkson's and Zoledronic Acid</div>
              <h5 class="hide md:block text-white">
               Also was responsible of designing, implementing and mantaining the mechanism/solution that allow us to have different themes per study, which proof to be a challenge before I joined the team. Also was a key figure behind a rearchitecting the frontend layer from MVC to a more Component-Driven-Development structure and flow. 
              </h5>
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="third" img-src="./enet.png">
            <div class="absolute-bottom dark-custom-caption">
              <div class="hide md:block text-h2">eNET: Neuroendocrine tumors</div>
              <h5 class="hide md:block text-white">
                All in all, I had a key role in reducing the customization phase time from 1-2 months to 1-2 weeks per study.
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

- [CHI:Congenital Heart Initiative][1]
- [TOPAZ: Trial of Parkinkson's and Zoledronic Acid][2]
- [eNET: Neuroendocrine tumors][3]

[3]: https://enet.eurekaplatform.org/?locale=en
[2]: https://topaz.eurekaplatform.org/
[1]: https://chdinitiative.eurekaplatform.org/

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
