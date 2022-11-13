<script setup>
import ProjectThumbnail from './.vitepress/components/ProjectThumbnail.vue';
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
        <project-thumbnail path="/ipa" img="./ipa.png" title="IPA Translator" description="The first modern, really interactive phonetic transcriber in the world"/>
        <project-thumbnail path="/eureka" img="./eureka.png" title="Eureka" description="Healthcare Platform for building online medical research studies"/>
        <project-thumbnail path="/aha" img="./aha.png" title="Aha!" description="Design System built from scratch for Eureka platform" />
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
        <h3 text-center> Projects </h3>
        <project-thumbnail path="ipa" img="./ipa.png" title="IPA Translator" description="The first modern, really interactive phonetic transcriber in the world"/>
        <project-thumbnail path="eureka" img="./eureka.png" title="Eureka" description="Healthcare Platform for building online medical research studies"/>
        <project-thumbnail path="aha" img="./aha.png" title="Aha!" description="Design System built from scratch for Eureka platform" />
      </div>
    </div>
  </div>
</q-responsive>
