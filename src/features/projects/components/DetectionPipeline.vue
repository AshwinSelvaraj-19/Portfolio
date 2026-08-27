<script setup lang="ts">
import { computed } from "vue";

export interface PipelineStep {
  number: string;
  title: string;
  description: string;
}

export interface Props {
  title?: string;
  steps: PipelineStep[];
}

const props = defineProps<Props>();

const classes = computed(() => ({
  "detection-pipeline": true,
}));
</script>

<template>
  <div :class="classes">
    <h3 v-if="props.title" class="detection-pipeline-title">{{ props.title }}</h3>
    <div class="detection-pipeline-steps">
      <div v-for="(step, index) in props.steps" :key="step.number" class="detection-pipeline-step">
        <div class="detection-pipeline-step-marker">
          <span class="detection-pipeline-step-number">{{ step.number }}</span>
          <div v-if="index < props.steps.length - 1" class="detection-pipeline-step-line"></div>
        </div>
        <div class="detection-pipeline-step-content">
          <h4 class="detection-pipeline-step-title">{{ step.title }}</h4>
          <p class="detection-pipeline-step-description">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.detection-pipeline {
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

  &-steps {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  &-step {
    display: flex;
    flex-direction: row;
    gap: var(--space-md);
    align-items: flex-start;

    &-marker {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 40px;
      flex-shrink: 0;

      @include mixins.mq("md") {
        min-width: 48px;
      }
    }

    &-number {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: var(--stroke-md) solid var(--color-text-400);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--font-size-sm);
      font-weight: 700;
      flex-shrink: 0;

      @include mixins.mq("md") {
        width: 48px;
        height: 48px;
        font-size: var(--font-size-md);
      }
    }

    &-line {
      width: var(--stroke-md);
      flex: 1;
      min-height: 24px;
      background-color: var(--color-grayscale-400);
    }

    &-content {
      display: flex;
      flex-direction: column;
      gap: var(--space-xxs);
      padding-bottom: var(--space-lg);
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
