<template>
    <div class="card mx-2 p-2 w-full h-full  rounded-xl bg-gradient-to-tr from-purple-500 via-red-500 to-yellow-500 ">
        <div class="pt-2 px-5 pb-5 bg-white  rounded-xl">
        <div class="flex justify-center bg-white">
            <h1 class=" text-black bg-white">{{name }}</h1>
        </div>
        <img class="w-[6rem]" :src=picture />
        <div class="flex relative pt-1 bg-white">
            <img class="bg-white w-[1rem]" src="@/assets/picture/swordatk.png" />
            <p class="text-xs text-black bg-white ml-1">{{ atk }}</p>
            <div class="absolute top-0 pt-1 right-0 bg-white flex ">
                <img class="bg-white w-[1rem]" src="@/assets/picture/hearthp.png" />
                <p class="text-xs text-black bg-white ml-1">{{ hp }}</p>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "card",
  props: {
    name: String,
    atk: Number,
    hp: Number,
    picture: String
  },
};
</script>
