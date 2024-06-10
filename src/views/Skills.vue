<template>
    <div class="flex flex-col justify-center items-center sm:h-screen">
      <div class="sm:w-1/2 px-5">
        <div class="flex justify-center flex-col text-center my-10" data-aos="fade-down" data-aos-duration="1500">
            <h1 class="font-bold text-7xl mb-2 main">
                SKILLS
            </h1>
            <h3 class="text-xl uppercase">
                Commonly used <b>Technology</b>
            </h3>
        </div>
        <div class="grid sm:grid-cols-3 grid-cols-1 gap-5 my-10" data-aos="fade-up" data-aos-duration="1500">
            <div class="item flex flex-col justify-center text-center mb-5" v-for="item in skills" :key="item.id">
                <img :src="item.image" width="100px" class="m-auto mb-3" alt="">
                <h4 class="text-xl uppercase font-bold">{{ item.name }}</h4>
                <p>{{ item.desc }}</p>
            </div>
        </div>
      </div>
    </div>  
  </template>
<script>

export default {
    data() {
        return {
            skills: [
                {
                    name: 'HTML & CSS',
                    desc: 'Structural Web',
                    image: 'html.png'
                },
                {
                    name: 'Javascript',
                    desc: 'Frontend',
                    image: 'js.png'
                },
                {
                    name: 'PHP',
                    desc: 'Backend',
                    image: 'php.png'
                },
                {
                    name: 'Git',
                    desc: 'Version Control',
                    image: 'git.png'
                },
                {
                    name: 'Vuejs',
                    desc: 'Frontend Framework',
                    image: 'vuejs.png'
                },
                {
                    name: 'Laravel',
                    desc: 'Backend Framework',
                    image: 'laravel.png'
                }
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