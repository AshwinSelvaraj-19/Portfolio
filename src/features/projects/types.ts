import type { Props as ImageTextProps } from "./components/ImageText.vue";
import type { Props as TextProps } from "./components/Text.vue";
import type { Props as ListProps } from "./components/List.vue";
import type { Props as MediaProps } from "./components/Media.vue";
import type { Props as FeatureGridProps } from "./components/FeatureGrid.vue";
import type { Props as CapabilityGridProps } from "./components/CapabilityGrid.vue";
import type { Props as DetectionPipelineProps } from "./components/DetectionPipeline.vue";

export interface ProjectComponents {
  imageText: ImageTextProps;
  text: TextProps;
  list: ListProps;
  media: Omit<MediaProps, "index">;
  featureGrid: FeatureGridProps;
  capabilityGrid: CapabilityGridProps;
  detectionPipeline: DetectionPipelineProps;
}

export type ProjectComponent = {
  [K in keyof ProjectComponents]: {
    type: K;
    props: ProjectComponents[K];
  };
}[keyof ProjectComponents];

type ProjectComponentMap<K extends keyof ProjectComponents> = {
  type: K;
  props: ProjectComponents[K];
};

export type ProjectComponentProps = ProjectComponentMap<keyof ProjectComponents>;
