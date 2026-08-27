<script setup lang="ts">
import { computed } from "vue";

export interface CapabilityCard {
  title: string;
  items: string[];
}

export interface Props {
  title?: string;
  cards: CapabilityCard[];
}

const props = defineProps<Props>();

const classes = computed(() => ({
  "capability-grid": true,
}));
</script>

<template>
  <div :class="classes">
    <h3 v-if="props.title" class="capability-grid-title">{{ props.title }}</h3>
    <div class="capability-grid-items">
      <div v-for="card in props.cards" :key="card.title" class="capability-grid-card">
        <h4 class="capability-grid-card-title">{{ card.title }}</h4>
        <ul class="capability-grid-card-list">
          <li v-for="item in card.items" :key="item" class="capability-grid-card-item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.capability-grid {
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
    gap: var(--space-md);

    @include mixins.mq("sm") {
      grid-template-columns: 1fr 1fr;
    }

    @include mixins.mq("md") {
      grid-template-columns: 1fr 1fr;
      gap: var(--space-lg);
    }
  }

  &-card {
    border: var(--stroke-sm) solid var(--color-grayscale-400);
    border-radius: var(--radius-lg);
    padding: var(--space-lg);
    display: flex;
    flex-direction: column;
    gap: var(--space-md);

    &-title {
      font-size: var(--font-size-md);
      font-weight: 700;
      line-height: var(--line-height-title);
      letter-spacing: 0.02em;

      @include mixins.mq("md") {
        font-size: var(--font-size-lg);
      }
    }

    &-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: var(--space-xxs);
    }

    &-item {
      font-size: var(--font-size-sm);
      line-height: var(--line-height-copy);
      color: var(--color-text-300);
      padding-left: var(--space-sm);
      position: relative;

      &::before {
        content: "—";
        position: absolute;
        left: 0;
        color: var(--color-text-300);
      }

      @include mixins.mq("md") {
        font-size: var(--font-size-md);
      }
    }
  }
}
</style>
