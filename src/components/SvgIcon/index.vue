<template>
    <svg :style="{ width, height }" aria-hidden="true">
        <use :xlink:href="`#icon-${name}`" :fill="color" />
    </svg>
</template>

<script setup lang="ts">

defineOptions({ name: "SvgIcon" })

// 属性声明
// defineProps({
//     name: { type: String, default: "" },
//     color: { type: String, default: "black" },
//     width: { type: String, default: "16px" },
//     height: { type: String, default: "16px" },
// })

// 属性声明，带默认值
interface prop {
    name: string,
    color?: string,
    width?: string,
    height?: string
}
withDefaults(defineProps<prop>(), {
    name: "",
    color: "black",
    width: "16px",
    height: "16px",
})

</script>

<style scoped lang="scss">
svg {
    fill: currentColor;
}
</style>