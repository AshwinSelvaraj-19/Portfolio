<script setup lang="ts">
import Tag from "../../../components/Tag.vue";
import Button from "../../../components/Button.vue";
import { t } from "../../../i18n/utils/translate";
import Link from "../../../components/Link.vue";
import { projectId } from "../../../composables/useRouteObserver";
import { ref, watch, watchEffect } from "vue";
import gsap from "gsap";

import type { ProjectContent } from "../../../content/types";

const { content } = defineProps<{
  content: ProjectContent;
}>();

const animationKey = ref(0);
const heroImageRef = ref<HTMLDivElement | null>(null);
const heroImgRef = ref<HTMLImageElement | null>(null);

// Force animation restart when projectId changes
watch(projectId, () => {
  animationKey.value++;
});

// Scroll animation for hero image
watchEffect((onInvalidate) => {
  if (!heroImageRef.value || !heroImgRef.value) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: heroImageRef.value,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "play none none reset",
    },
  });
  tl.fromTo(heroImageRef.value, { scale: 0.8 }, { scale: 1, duration: 0.5, ease: "power1.out" }, 0);
  tl.fromTo(heroImgRef.value, { scale: 1.15 }, { scale: 1, duration: 0.5, ease: "power1.out" }, 0);

  onInvalidate(() => {
    tl.kill();
    gsap.set(heroImageRef.value, { scale: 1 });
    gsap.set(heroImgRef.value, { scale: 1 });
  });
});
</script>

<template>
  <div class="project-hero grid">
    <div class="project-hero-top">
      <p class="project-hero-label">PROJECT</p>
      <div class="project-hero-title-wrapper">
        <h1 class="project-hero-title" :key="animationKey">
          {{ content.title }}
        </h1>
      </div>
      <div class="project-hero-tags">
        <Tag v-for="tag in content.tags" :key="tag" :variant="tag" />
      </div>
    </div>
    <p class="project-hero-description" v-html="content.description"></p>
    <div class="project-hero-buttons">
      <Link v-if="content.live" :href="content.live" external class="project-hero-button" data-cursor="arrow-external">
        <Button renderAs="div" variant="accent" class="children-unclickable" data-hoversound="hover">{{
          t("live-view")
        }}</Button>
      </Link>
      <Link
        v-if="content.source"
        :href="content.source"
        external
        class="project-hero-button"
        data-cursor="arrow-external"
      >
        <Button renderAs="div" variant="border" class="children-unclickable" data-hoversound="hover">{{
          t("source-code")
        }}</Button>
      </Link>
    </div>
    <div v-if="content.heroImage" class="project-hero-image-wrapper" ref="heroImageRef">
      <div class="project-hero-image-container">
        <img
          :src="content.heroImage"
          :alt="content.title"
          class="project-hero-image"
          ref="heroImgRef"
          loading="eager"
          fetchpriority="high"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-hero {
  padding: 0 var(--space-outer);
  padding-bottom: 48px;
  padding-top: calc(var(--height-header) + 24px);

  @include mixins.mq("md") {
    padding-bottom: 64px;
  }

  &-label {
    font-size: var(--font-size-xs);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-text-300);
    margin-bottom: var(--space-xxs);
  }

  &-button {
    flex: 0.5;

    @include mixins.mq("md") {
      width: fit-content;
    }
  }

  &-buttons {
    grid-row: 3;
    grid-column: 1 / 13;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-sm);
    margin-top: var(--space-md);
    width: 100%;

    @include mixins.mq("md") {
      gap: var(--space-md);
      width: fit-content;
      grid-column: 1 / 6;
      grid-row: 2;
      margin-top: 0;
    }

    @include mixins.mq("lg") {
      grid-column: 2 / 6;
    }
  }

  &-image-wrapper {
    grid-column: 1 / 13;
    margin-top: var(--space-xl);
    overflow: hidden;
    border-radius: var(--radius-lg);

    @include mixins.mq("md") {
      grid-column: 2 / 12;
      margin-top: var(--space-xxl);
    }

    @include mixins.mq("lg") {
      grid-column: 2 / 12;
    }
  }

  &-image-container {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: var(--radius-lg);
    background-color: var(--color-grayscale-400);
  }

  &-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
  }

  &-title {
    font-size: var(--font-size-title-lg);
    color: var(--color-text-400);
    line-height: var(--line-height-title);
    transform: translateY(0%);
    animation: project-hero-title-visible 0.5s var(--ease-smooth);

    @include mixins.mq("md") {
      font-size: var(--font-size-title-xl);
    }

    @keyframes project-hero-title-visible {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }

    &-wrapper {
      overflow: hidden;
    }
  }

  &-description {
    color: var(--color-text-400);
    line-height: var(--line-height-copy);
    grid-column: 1 / 13;
    align-self: center;

    @include mixins.mq("md") {
      grid-row: 1;
      grid-column: 6 / 12;
    }

    @include mixins.mq("lg") {
      grid-row: 1;
      grid-column: 7 / 12;
    }

    @include mixins.mq("xl") {
      grid-row: 1;
      grid-column: 7 / 11;
    }
  }

  &-top {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    grid-row: 1;
    align-self: top;
    grid-column: 1 / 13;

    @include mixins.mq("md") {
      grid-column: 1 / 6;
    }

    @include mixins.mq("lg") {
      grid-column: 2 / 6;
    }
  }
}
</style>
