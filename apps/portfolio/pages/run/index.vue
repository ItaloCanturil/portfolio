<script lang="ts" setup>
const initTime = new Date('2025-01-01').getTime();
const endTime = new Date('2025-12-31').getTime();


const days = calculateDaysBetween({start: initTime, end: endTime});

const { x, y } = useMouse();

const handleAtt = (e) => {
  // console.log(e)
  const hoveredChild = document.elementFromPoint(e.clientX, e.clientY);
  const dataCursor = document.querySelector('[data-cursor]');
  console.log("🚀 ~ handleAtt ~ dataCursor:", dataCursor)
  
  if (hoveredChild && hoveredChild.classList.contains('child-div')) {
    console.log("🚀 ~ handleAtt ~ hoveredChild:", hoveredChild)
    dataCursor?.setAttribute('class', 'cursor-up')
  }
}

const cancelAtt = (e) => {
  console.log("🚀 ~ cancelAtt ~ e:", e)
  const dataCursor = document.querySelector('[data-cursor]');
  dataCursor?.setAttribute('class', '')
}

const { data } = await useFetch('/api/v1/run');
console.log("🚀 ~ data:", data.value)
</script>

<template>
  <div class="overflow-x-auto h-screen flex items-center justify-start flex-nowrap">

   <div class="overflow-x-auto h-screen flex items-center justify-start flex-nowrap gap-[6px] max-h-[300px] h-[300px]">
      <div v-for="d in days" :key="d"  class="child-div h-full flex items-center" @pointermove="handleAtt" @pointerout="cancelAtt">
        <div data-activity="false" data-highlight="false" class="w-[1px] min-w-[1px] min-h-5"></div>
      </div>
   </div>

    <div data-cursor
      :style="{transform: `translate(${x}px, ${y}px`}"
    />
  </div>
</template>

<style scoped>
[data-cursor] {
  @apply bg-red-700 absolute h-11 w-11 rounded-full top-0 left-0 opacity-15;
}

[data-activity=false] {
  @apply bg-silver;
}

[data-activity=true] {
  @apply bg-slate-50;
}

.cursor-up {
  @apply h-[300px] rounded-none w-[1px] opacity-100

}
</style>