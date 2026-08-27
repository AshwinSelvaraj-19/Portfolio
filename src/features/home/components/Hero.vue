<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Button from "../../../components/Button.vue";
import Banner from "../../../components/Banner.vue";
import { preloaderVisible } from "../../../composables/usePreloader";
import { t } from "../../../i18n/utils/translate";
import AppearingText from "../../../components/AppearingText.vue";
import WallSkills from "./WallSkills.vue";

const heroRef = ref(null);
const titleRef = ref(null);
const wallAnchorRef = ref(null);

/** Measure the name h1's right edge and position the wall-anchor just right of it */
const updateWallPosition = () => {
  const title = titleRef.value;
  const anchor = wallAnchorRef.value;
  if (!title || !anchor) return;

  const titleRect = title.getBoundingClientRect();
  // Right edge of the name in viewport pixels, plus a gap
  const gap = 24;
  anchor.style.left = `${titleRect.right + gap}px`;
};

let resizeObserver = null;

onMounted(() => {
  updateWallPosition();
  resizeObserver = new ResizeObserver(updateWallPosition);
  if (heroRef.value) resizeObserver.observe(heroRef.value);
});

onBeforeUnmount(() => {
  resizeObserver?.disconnect();
});
</script>

<template>
  <div ref="heroRef" class="hero">
    <div ref="wallAnchorRef" class="wall-anchor">
      <WallSkills />
    </div>
    <div class="hero-content grid">
      <div class="hero-content-inner" id="hero-content-inner">
        <div class="hero-content-copys">
          <h1 ref="titleRef" class="hero-title">Ashwin<br />Selvaraj</h1>
          <Banner class="hero-banner" :copy="t('job-title')" v-if="!preloaderVisible" animated />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  max-height: calc(var(--lvh) * 100);
  height: calc(var(--lvh) * 100);
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;

  &-content {
    align-items: center;
    justify-content: center;
    height: 46%;

    @include mixins.landscape {
      height: 100%;

      @include mixins.mq("md") {
        padding-bottom: 30%;
      }

      @include mixins.mq("lg") {
        padding-bottom: 5%;
      }
    }

    &-inner {
      transform-origin: center center;
      grid-column: 1 / 13;
      gap: var(--space-xxl);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: fit-content;
      position: relative;
      left: 50%;
      transform: translateX(-50%);

      @include mixins.landscape {
        left: 0;
        transform: translateX(0);
        grid-column: 2 / 13;
        width: fit-content;
      }
    }

    &-copys {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
      margin-top: 4vh;

      @include mixins.mq("md") {
        gap: var(--space-md);
      }
    }

    &-button {
      width: fit-content;
    }
  }

  &-title {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: var(--font-size-title-lg);

    @include mixins.landscape {
      font-size: var(--font-size-title-lg);
    }

    @include mixins.landscape-large {
      @include mixins.mq("sm") {
        font-size: var(--font-size-title-xl);
      }

      @include mixins.mq("xl") {
        font-size: var(--font-size-title-xxl);
      }
    }
  }

  &-banner {
    transform: rotate(-5deg);
    align-self: flex-start;
    margin-right: -16px;

    @include mixins.mq("sm") {
      margin-right: -24px;
    }

    @include mixins.mq("lg") {
      margin-right: -32px;
    }
  }
}

// Wall anchor: JS measures the h1 right edge and sets left dynamically.
// These base styles handle visibility and vertical/size constraints only.
.wall-anchor {
  display: none;

  @include mixins.landscape {
    display: block;
    position: absolute;
    // left is set by JS — measure the name h1's right edge + gap
    top: 12%;
    width: clamp(180px, 15vw, 300px);
    height: clamp(200px, 22vw, 360px);
  }

  @media (orientation: landscape) and (min-width: 1280px) {
    top: 11%;
    width: clamp(200px, 15vw, 300px);
    height: clamp(240px, 22vw, 380px);
  }

  @media (orientation: landscape) and (min-width: 1600px) {
    top: 10%;
    width: clamp(240px, 14vw, 320px);
    height: clamp(280px, 22vw, 400px);
  }
}
</style>
