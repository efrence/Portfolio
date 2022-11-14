<script setup>
import ProjectThumbnail from './.vitepress/components/ProjectThumbnail.vue';
import { withBase } from 'vitepress'
</script>

<q-responsive>
  <div class="mt-8 hide md:block">
    <div class="row mx-auto">
      <div class="col-4">
        <div>
          <h5><strong> Hello I'm </strong></h5>
          <h1 class="mt-0 mb-8 font-semibold" > Efren </h1> 
          <h1 class="mt-0 font-semibold"> Carbajal </h1> 
          <h4> a professional Web Developer</h4>
        </div>
      </div>
      <div class="col-2"></div>
      <div class="col-6 overflow-hidden">
        <h3 text-center> Projects </h3>
        <project-thumbnail :path="withBase('ipa')" :img="withBase('ipa.png')" title="IPA Translator" description="The first modern, really interactive phonetic transcriber in the world"/>
        <project-thumbnail :path="withBase('eureka')" :img="withBase('eureka.png')" title="Eureka" description="Healthcare Platform for building online medical research studies"/>
        <project-thumbnail :path="withBase('aha')" :img="withBase('aha.png')" title="Aha!" description="Design System built from scratch for Eureka platform" />
      </div>
    </div>
  </div>
  <div class="mt-8 md:hide">
    <div class="row mx-auto p-4">
      <div class="col-12">
        <div>
          <h5><strong> Hello I'm </strong></h5>
          <h1 class="mt-0 mb-8 font-semibold" > Efren </h1> 
          <h1 class="mt-0 font-semibold"> Carbajal </h1> 
          <h4> a professional Web Developer</h4>
        </div>
      </div>
      <div class="col-12 overflow-hidden">
        <h3 text-center font-semibold m-0> Projects </h3>
        <h3 class="hide xs:block lg:hide w-full text-center font-normal m-0 mb-4 mt-8  position-relative ">IPA Translator</h3>
        <project-thumbnail :path="withBase('ipa')" :img="withBase('ipa.png')" title="IPA Translator" description="The first modern, really interactive phonetic transcriber in the world"/>
        <h5 class="hide xs:block lg:hide font-normal position-relative -top-2 mt-0 mb-0 p-6 text-center"> The first modern, really interactive phonetic transcriber in the world </h5>
        <h3 class="hide xs:block lg:hide w-full text-center font-normal m-0 mt-4 position-relative "> Eureka </h3>
        <project-thumbnail :path="withBase('eureka')" :img="withBase('eureka.png')" title="Eureka" description="Healthcare Platform for building online medical research studies"/>
        <h5 class="hide xs:block lg:hide font-normal position-relative -top-2 mt-0 p-6 text-center"> Healthcare Platform for building online medical research studies </h5> 
        <h3 class="hide xs:block lg:hide w-full text-center font-normal m-0 mt-4 position-relative "> Aha! </h3>
        <project-thumbnail :path="withBase('aha')" :img="withBase('aha.png')" title="Aha!" description="Design System built from scratch for Eureka platform" />
        <h5 class="hide xs:block lg:hide font-normal position-relative -top-2 mt-0 p-6 text-center"> Design System built from scratch for Eureka platform </h5> 
      </div>
    </div>
  </div>
</q-responsive>

<style>
 i.q-icon {
   font-size: 2rem;
 }
</style>
