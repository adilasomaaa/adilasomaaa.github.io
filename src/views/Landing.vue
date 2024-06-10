<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <div class="w-fit">
      <div class="flex justify-center my-5">
        <div class="border-solid mr-2 w-fit border-2 border-gray-200 font-semibold justify-center uppercase text-sm rounded-3xl p-3 text-center flex flex-col">
          Curriculum Vitae
        </div>
        <div class="border-solid w-fit border-2 border-gray-200 font-semibold justify-center uppercase text-sm rounded-3xl p-3 text-center flex flex-col">
          Projects
        </div>
      </div>
      <h3 class="text-xl text-left block uppercase w-full">
        <span class=" font-bold">Website</span> Developer
      </h3>
      
      <h1 class="sm:text-8xl text-6xl main font-bold text-left block uppercase w-full hover:text-primary typingeffect">
        PORTFOLIO
      </h1>
      <h3 class="text-xl text-right uppercase w-full ">
        <span class=" font-bold">by</span> Yasdil Lasoma 
      </h3>
      <h3 class="text-xl text-center uppercase w-full mt-8">
        <span class=" font-bold">2024</span>
      </h3>
    </div>
  </div>  
</template>

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
  to { width: 100%;color:#6366f1 }
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