<script setup lang="ts">
import Social from "./Social.vue";
import NotchSection from "./NotchSection.vue";
import ButtonRound from "./ButtonRound.vue";
import { lenis } from "../composables/useScroll";
import ArrowRightLong from "./icons/ArrowRightLong.vue";
import { t } from "../i18n/utils/translate";

const handleBackToTop = () => {
  if (!lenis.value) return;
  lenis.value.scrollTo(0);
};

const handleNavClick = (target: string) => {
  if (!lenis.value) return;
  lenis.value.scrollTo(target);
};

interface Props {
  withSocial?: boolean;
}

const { withSocial = true } = defineProps<Props>();
</script>

<template>
  <footer class="footer">
    <NotchSection class="footer-notch" />
    <div class="footer-content">
      <div class="footer-top">
        <div class="footer-identity">
          <h2 class="footer-name">Ashwin Selvaraj</h2>
          <p class="footer-descriptor">Product Builder · AI Enthusiast · Cyber Security Explorer</p>
        </div>
        <Social v-if="withSocial" class="footer-social" />
      </div>

      <div class="footer-divider"></div>

      <div class="footer-nav">
        <a
          class="footer-nav-link"
          href="#about"
          @click.prevent="handleNavClick('#about')"
          data-cursor="circle-white"
          data-sound="click"
          data-hoversound="hover"
        >{{ t('about') }}</a>
        <span class="footer-nav-dot">·</span>
        <a
          class="footer-nav-link"
          href="#projects"
          @click.prevent="handleNavClick('#projects')"
          data-cursor="circle-white"
          data-sound="click"
          data-hoversound="hover"
        >{{ t('projects') }}</a>
        <span class="footer-nav-dot">·</span>
        <a
          class="footer-nav-link"
          href="#contact"
          @click.prevent="handleNavClick('#contact')"
          data-cursor="circle-white"
          data-sound="click"
          data-hoversound="hover"
        >{{ t('contact') }}</a>
      </div>

      <p class="footer-tagline">Building ideas into useful software.</p>

      <div
        class="footer-back-to-top"
        tabindex="0"
        @click="handleBackToTop"
        @keydown.enter="handleBackToTop"
        data-cursor="circle-white"
        data-sound="click"
      >
        <ButtonRound renderAs="div" variant="border" class="children-unclickable" data-hoversound="hover">
          <ArrowRightLong class="footer-back-to-top-icon" />
        </ButtonRound>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: var(--color-background-300, var(--color-beige-400));
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
    width: 100%;
    max-width: var(--breakpoint-xxxl);
    padding: var(--space-lg) var(--space-outer);
    position: relative;

    @include mixins.mq("md") {
      padding: var(--space-xl) var(--space-outer);
      gap: var(--space-xl);
    }
  }

  &-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-md);
    width: 100%;

    @include mixins.mq("md") {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  &-identity {
    display: flex;
    flex-direction: column;
    gap: var(--space-xxs);
  }

  &-name {
    font-size: var(--font-size-title-xxs);
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: var(--line-height-title);

    @include mixins.mq("md") {
      font-size: var(--font-size-title-xs);
    }
  }

  &-descriptor {
    font-size: var(--font-size-sm);
    color: var(--color-text-300);
    line-height: var(--line-height-copy);

    @include mixins.mq("md") {
      font-size: var(--font-size-md);
    }
  }

  &-social {
    flex-shrink: 0;
  }

  &-divider {
    width: 100%;
    height: var(--stroke-sm);
    background-color: var(--color-beige-600, var(--color-grayscale-400));
  }

  &-nav {
    display: flex;
    align-items: center;
    gap: var(--space-sm);

    @include mixins.mq("md") {
      gap: var(--space-md);
    }
  }

  &-nav-link {
    font-size: var(--font-size-sm);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    color: var(--color-text-400);
    text-decoration: none;
    cursor: pointer;
    transition: opacity 0.2s ease;

    @include mixins.mq("md") {
      font-size: var(--font-size-md);
    }

    &:hover {
      opacity: 0.6;
    }
  }

  &-nav-dot {
    font-size: var(--font-size-sm);
    color: var(--color-text-300);

    @include mixins.mq("md") {
      font-size: var(--font-size-md);
    }
  }

  &-tagline {
    font-size: var(--font-size-xs);
    color: var(--color-text-300);
    text-align: center;

    @include mixins.mq("md") {
      font-size: var(--font-size-sm);
    }
  }

  &-back-to-top {
    cursor: pointer;
    margin-top: var(--space-xs);

    &-icon {
      transform: rotate(-90deg);
    }
  }

  &-notch {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    color: var(--color-background-300, var(--color-beige-400));
    --icon-color: var(--color-background-300, var(--color-beige-400));
  }
}
</style>
