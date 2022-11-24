import { ICheckboxInput, InputType } from "webslider-sdk/lib/inputs/i-inputs";
import { IAnimationDefinition } from "webslider-sdk/lib/animations/i-animation-types";
import { SAMPLE_ANIMATION, ISampleAnimation } from "./sample-animation-types";
import svgIcon from "../static/sample-animation-icon.svg";

/**
 * Type for Definition of Properties Form inside Web Slider app
 */
export type ISampleTuple = [ICheckboxInput<"showDebugInfo">];

/**
 * Definition of Properties Form inside Web Slider app
 */
export const sampleDefinition: IAnimationDefinition<ISampleTuple> = {
  id: SAMPLE_ANIMATION,
  name: "Sample Animation",
  form: [
    {
      displayName: "Debug info",
      propertyName: "showDebugInfo",
      inputType: InputType.CHECKBOX,
      value: true,
      defaultValue: true,
    },
  ],
};

/**
 * Animation configuration and default values for properties
 */
export const sampleDefaults: ISampleAnimation = {
  id: SAMPLE_ANIMATION,
  hasDelay: true,
  hasDuration: true,
  hasEase: false,
  hasChildEase: false,
  ease: "none",
  supportedAnimationTypes: ["in", "out"],
  canBeCombined: true,
  // animation properties
  showDebugInfo: true,
};

/**
 * Name, Desc and icon
 */
export const sampleMeta = {
  name: "SAMPLE ANIMATION",
  description: "Boilerplate for creating Animation for Web Slider",
  icon: svgIcon,
};
