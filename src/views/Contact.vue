<template>
    <div class="flex flex-col justify-center items-center sm:h-screen">
      <div class="sm:w-1/2 px-5">
        <div class="flex justify-center flex-col text-center my-10" data-aos="fade-down" data-aos-duration="1500">
            <h1 class="font-bold text-7xl mb-2 main">
                THANK YOU
            </h1>
            <h3 class="text-xl uppercase">
                Let's <b>collaborate</b> to create something amazing together! Feel free to reach out to me through my <b>social media</b>:
            </h3>
        </div>
        <div class="grid sm:grid-cols-2 grid-cols-1 gap-5 my-10" data-aos="fade-up" data-aos-duration="1500">
            <a :href="item.link" class="item flex justify-center text-center items-center bg-secondary p-3 rounded-lg text-white hover:bg-primary text-center" v-for="item in contacts" :key="item.id">
                <font-awesome-icon :icon="item.icon" size="xl" />
                <h4 class="text-xl uppercase font-bold ml-3">{{ item.name }}</h4>
            </a>
        </div>
      </div>
    </div>  
  </template>
<script>

export default {
    data() {
        return {
            contacts:[
                    {
                        name:'Instagram',
                        icon:'fa-brands fa-instagram',
                        link: 'https://www.instagram.com/adilasomaa/'
                    },
                    {
                        name:'Email',
                        icon:'fa-regular fa-envelope',
                        link: 'mailto:yasdilofficial@gmail.com'
                    },
                    {
                        name:'Github',
                        icon:'fa-brands fa-github',
                        link: 'https://github.com/adilasomaaa'
                    },
                    {
                        name:'LinkedIn',
                        icon:'fa-brands fa-linkedin',
                        link: 'linkedin.com/in/yasdil-lasoma'
                    },
                ]
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