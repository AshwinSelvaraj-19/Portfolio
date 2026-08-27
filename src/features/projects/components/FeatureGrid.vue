<script setup lang="ts">
import { computed } from "vue";

export interface FeatureItem {
  number: string;
  title: string;
  description: string;
}

export interface Props {
  title?: string;
  items: FeatureItem[];
}

const props = defineProps<Props>();

const classes = computed(() => ({
  "feature-grid": true,
}));
</script>

<template>
  <div :class="classes">
    <h3 v-if="props.title" class="feature-grid-title">{{ props.title }}</h3>
    <div class="feature-grid-items">
      <div v-for="item in props.items" :key="item.number" class="feature-grid-item">
        <span class="feature-grid-item-number">{{ item.number }}</span>
        <div class="feature-grid-item-content">
          <h4 class="feature-grid-item-title">{{ item.title }}</h4>
          <p class="feature-grid-item-description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.feature-grid {
  grid-column: 1 / 13;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);

  @include mixins.mq("md") {
    grid-column: 2 / 12;
    gap: var(--space-xl);
  }

  @include mixins.mq("lg") {
    grid-column: 3 / 11;
  }

  &-title {
    font-size: var(--font-size-title-sm);
    line-height: var(--line-height-title);
    font-weight: 700;
  }

  &-items {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-lg);

    @include mixins.mq("md") {
      grid-template-columns: 1fr 1fr;
      gap: var(--space-xl);
    }
  }

  &-item {
    display: flex;
    flex-direction: row;
    gap: var(--space-md);
    align-items: flex-start;

    &-number {
      font-size: var(--font-size-title-xxs);
      font-weight: 700;
      color: var(--color-text-300);
      min-width: 32px;
      line-height: 1;
      padding-top: 2px;

      @include mixins.mq("md") {
        font-size: var(--font-size-title-xs);
        min-width: 40px;
      }
    }

    &-content {
      display: flex;
      flex-direction: column;
      gap: var(--space-xxs);
      min-width: 0;
    }

    &-title {
      font-size: var(--font-size-md);
      font-weight: 700;
      line-height: var(--line-height-title);

      @include mixins.mq("md") {
        font-size: var(--font-size-lg);
      }
    }

    &-description {
      font-size: var(--font-size-sm);
      line-height: var(--line-height-copy);
      color: var(--color-text-300);

      @include mixins.mq("md") {
        font-size: var(--font-size-md);
      }
    }
  }
}
</style>
