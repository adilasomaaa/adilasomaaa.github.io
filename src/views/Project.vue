<template>
    <div class="flex flex-col justify-center items-center">
      <div class="w-fit px-5">
        <div class="flex justify-center flex-col text-center my-10"  data-aos="fade-down" data-aos-duration="1500">
            <h1 class="font-bold text-7xl mb-2 main">
                PROJECTS
            </h1>
            <h3 class="text-xl uppercase">
                Recently projects <b>have done</b>
            </h3>
        </div>
        <div class="grid sm:grid-cols-3 grid-cols-1 gap-10 my-10"  data-aos="zoom-in" data-aos-duration="1500">
            <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white" v-for="item in projects" :key="item">
                <div class="w-full h-11 rounded-t-lg bg-[#e5e7eb] flex justify-start items-center space-x-1.5 px-3">
                    <span class="w-3 h-3 rounded-full bg-[#f87171]"></span>
                    <span class="w-3 h-3 rounded-full bg-[#facc15]"></span>
                    <span class="w-3 h-3 rounded-full bg-[#4ade80]"></span>
                </div>
                <img class="w-full" :src="item.image" :alt="item.name">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                        <a :href="item.link" class="mr-3 hover:text-primary" target="#blank">{{item.name}} </a><span class="inline-block bg-primary rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                        <!-- <font-awesome-icon icon="fa-regular fa-calendar"  class="mr-2" /> -->
                        {{ item.year }}
                    </span></div>
                    <p class="text-gray-700 text-base">
                    {{item.desc}}
                    </p>
                </div>
                <div class="px-6 pt-2 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        <font-awesome-icon icon="fa-solid fa-code"  class="mr-2" />
                        {{ item.role }}
                    </span>
                    <span class="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        <font-awesome-icon icon="fa-regular fa-building"  class="mr-2" />
                        {{ item.instansi }}
                    </span>
                    
                </div>
            </div>
        </div>
      </div>
    </div>  
  </template>
<script>

export default {
    data() {
        return {
            projects: [
                {
                    name: 'SIDAPRO FSB UNG',
                    instansi: 'FSB UNG',
                    year: '2022',
                    role: 'Frontend Developer',
                    image: 'sidapro.png',
                    desc:'Application that can manage the administrative process for students and lecturers regarding the submission of thesis titles to the judiciary.',
                    link: 'https://sidapro.fsb.ung.ac.id/'
                },
                {
                    name: 'SIATU PPG UNG',
                    instansi: 'PPG UNG',
                    year: '2022',
                    role: 'Frontend Developer',
                    image: 'siatu.png',
                    desc:'Application that can manage the registration process, scheduling, and learning for PPG students.',
                    link: 'https://ppg.siat.ung.ac.id/'
                },
                {
                    name: 'Pusat Data Fakultas FSB UNG',
                    instansi: 'FSB UNG',
                    year: '2023',
                    role: 'Backend Developer',
                    image: 'pdf.png',
                    desc:'Application that can collect faculty data for lecturer and student accreditation purposes.',
                    link: 'https://pdf.fsb.ung.ac.id/'
                },
                {
                    name: 'EMPATHY',
                    instansi: 'GEMASTIK ',
                    year: '2023',
                    role: 'Fullstack Developer',
                    image: 'empathy.png',
                    desc:'Application that makes it easy to order ambulances effectively and efficiently using the voice recording method.',
                    link: '#'
                },
                {
                    name: 'Sistem Informasi Geografis Desa',
                    instansi: 'Desa Molingkapoto Selatan',
                    year: '2021',
                    role: 'Fullstack Developer',
                    image: 'webdesa.png',
                    desc:'Application that makes it easier for villages to publish village activities and is equipped with GIS features to display certain maps.',
                    link: 'https://gmm-molsel.com/'
                },
                {
                    name: 'WebGis KKN Destana',
                    instansi: 'Kecamatan Bulawa',
                    year: '2024',
                    role: 'Project Manager',
                    image: 'gistana.png',
                    desc:'Application that displays data on evacuation routes and gathering points for each village in Bulawa District.',
                    link: 'https://gistana.github.io/'
                },
                {
                    name: 'Hivisitscreen',
                    instansi: '-',
                    year: '2024',
                    role: 'Project Manager',
                    image: 'hivisit.png',
                    desc:'Application to make it easier to order HIV screening and several other medical features.',
                    link: 'https://hivisitscreen.id/'
                },
                {
                    name: 'RistiApp',
                    instansi: 'UKM Risti UNG',
                    year: '2023',
                    role: 'Fullstack Developer',
                    image: 'hivisit.png',
                    desc:'Application to make it easier to having an information about UKM Risti UNG.',
                    link: 'https://risti.ung.ac.id/'
                },
            ],
        }
    }
}
</script>
  
  <style>
  .main::before{
    background: #6366f1;
      width: 100px;
      position: absolute;
      height: 100px;
      content: "";
      border-radius: 50%;
      filter: blur(60px);
  }
  </style>