<script setup>
import Button from "../../../components/Button.vue";
import Banner from "../../../components/Banner.vue";
import { preloaderVisible } from "../../../composables/usePreloader";
import { t } from "../../../i18n/utils/translate";
import AppearingText from "../../../components/AppearingText.vue";
import WallSkills from "./WallSkills.vue";
</script>

<template>
  <div class="hero">
    <div class="wall-anchor">
      <WallSkills />
    </div>
    <div class="hero-content grid">
      <div class="hero-content-inner" id="hero-content-inner">
        <div class="hero-content-copys">
          <h1 class="hero-title">Ashwin<br />Selvaraj</h1>
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

// Wall anchor: positioned in the empty cream wall between the name and notice board,
// above the desk/monitors. Right of name, left of notice board.
.wall-anchor {
  display: none;

  @include mixins.landscape {
    display: block;
    position: absolute;
    // Name ends ~34%; notice board starts ~50%; position frame in the gap
    left: 34%;
    top: 20%;
    width: clamp(170px, 14vw, 280px);
    height: clamp(120px, 10vw, 185px);
  }

  @media (orientation: landscape) and (min-width: 1280px) {
    left: 34%;
    top: 18%;
    width: clamp(200px, 14vw, 320px);
    height: clamp(140px, 10vw, 200px);
  }

  @media (orientation: landscape) and (min-width: 1600px) {
    left: 34%;
    top: 16%;
    width: clamp(240px, 14vw, 340px);
    height: clamp(160px, 10vw, 210px);
  }
}
</style>
