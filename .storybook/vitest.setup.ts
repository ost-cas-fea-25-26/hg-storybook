import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview";
import * as previewAnnotations from './preview';
import { setProjectAnnotations } from '@storybook/react';

setProjectAnnotations([a11yAddonAnnotations, previewAnnotations]);
