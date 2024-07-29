<template>
    <div class="block ">
      <div class="w-fit sm:px-[5rem] md:px-[5rem] lg:px-[10rem] px-5 py-5">
        <div class="grid sm:grid-cols-4 lg:grid-cols-4 md:grid-cols-1 grid-cols-1 gap-5 ">
            <div class="profil flex flex-col justify-center">
                <img src="/profil2.png" width="100%" alt="" data-aos="fade-right" data-aos-duration="1500">
                <div class=" flex justify-center" data-aos="fade-up" data-aos-duration="1500">
                    <a href="/cv.pdf" class="border-solid w-fit border-2 border-gray-200 font-semibold justify-center uppercase text-xl rounded-3xl p-3 text-center flex flex-col hover:text-primary">
                        <font-awesome-icon icon="fa-solid fa-download " size="2x" class="mb-3" />
                        Curriculum Vitae
                    </a>
                </div>
            </div>
            <div class="deskripsi sm:col-span-3 content-center">
                <div class="bagian-atas grid sm:grid-cols-3 gap-7">
                    <div class="introduce sm:col-span-2">
                        <h3 class="font-bold text-3xl uppercase mb-2">Hello</h3>
                        <p class="text-justify sm:text-xl md:text-xl lg:text-xl text-xl main" v-html="profil.desc"></p>
                    </div>
                    <div class="education sm:col-span-1 grid sm:grid-flow-row auto-rows-max gap-4">
                        <div class="inline">
                            <h3 class="font-bold text-3xl uppercase mb-2">Education</h3>
                            <template v-for="item in profil.education" :key="item">
                                <h4 class="font-bold text-xl">{{ item.name }}</h4>
                                <p>{{ item.desc }}</p>
                            </template>
                        </div>
                        <div class="inline">
                            <h3 class="font-bold text-3xl uppercase mb-2">Experiences</h3>
                            <template v-for="item in profil.experiences" :key="item">
                                <h4 class="font-bold text-xl">{{ item.name }}</h4>
                                <p>{{ item.desc }}</p>
                                <b>{{ item.date }}</b>
                            </template>
                        </div>
                    </div>
                </div>
                <div class="bagian-bawah grid sm:grid-cols-3 gap-7 mt-3">
                    <div class="skills">
                        <h3 class="font-bold text-3xl uppercase mb-2">Interests</h3>
                        <ul>
                            <li v-for="item in profil.interests" :key="item.id">
                                <span class="font-bold">{{ item }}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="softwares">
                        <h3 class="font-bold text-3xl uppercase mb-2">Softwares</h3>
                        <ul>
                            <li v-for="item in profil.softwares" :key="item.id" class="flex mb-2 justify-start items-center">
                                <img :src="item.image" style="width:30px" alt="">
                                <span class="font-bold ml-4">{{ item.name }}</span>
                            </li>
                        </ul>
                        
                    </div>
                    <div class="softwares">
                        <h3 class="font-bold text-3xl uppercase mb-2">Contacts</h3>
                        <li v-for="item in profil.contacts" :key="item.id" class="flex mb-2 justify-start items-center">
                            <font-awesome-icon :icon="item.icon" size="xl" />
                            <span class="font-bold ml-4">{{ item.name }}</span>
                        </li>
                        
                    </div>
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
            profil: {
                desc: 'My name is <b class="typingeffect">Yasdil Lasoma</b>, I am an Informatics Engineering student with a deep interest in web development and problem-solving. With a strong academic background and practical experience in various projects, I have the ability to design, develop, and implement innovative technological solutions. I am always enthusiastic about learning new technologies and tackling complex technical challenges.',
                education: [
                    {
                        name: 'Universitas Negeri Gorontalo',
                        desc: 'Information System | 2021 - Present'
                    }
                ],
                experiences: [
                    {
                        name: 'Komisi Pemilihan Umum Pohuwato',
                        desc: 'Intern',
                        date: 'Jan 2021 - Maret 2021'
                    },
                    {
                        name: 'Arsy Dev Creative',
                        desc: 'Frontend Developer',
                        date: 'Jun 2022 - Present'
                    }
                ],
                interests:[
                    "Programming",
                    "Frontend Developer",
                    "Backend Developer",
                    "Problem Solving",
                    "Presentation",
                    "Public Speaking",
                ],
                softwares:[
                    {
                        name:'Visual Studio Code',
                        image:'viscod.png'
                    },
                    {
                        name:'Adobe Photoshop',
                        image:'photoshop.png'
                    },
                    {
                        name:'Adobe Premiere Pro',
                        image:'premiere.png'
                    },
                ],
                contacts:[
                    {
                        name:'+62 851-5660-7320',
                        icon:'fa-solid fa-phone'
                    },
                    {
                        name:'yasdilofficial@gmail.com',
                        icon:'fa-regular fa-envelope'
                    },
                    {
                        name:'linkedin.com/in/yasdil-lasoma',
                        icon:'fa-brands fa-linkedin'
                    },
                ]
            }
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
  .typingeffect {
    width: 0;
    overflow: hidden; /* Ensure the text is not visible until the typewriter effect*/
    border-right: 2px solid black; /* The cursor*/
    white-space: nowrap; /* Keeps the text on a single line */
    animation: typing 2s steps(30) forwards, blink 1s infinite;
  }

/* The typing animation */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink {
  0%, 45% {
    border-color: transparent;
  }
  50%, 100% {
    border-color: black;
  }
}
  </style>