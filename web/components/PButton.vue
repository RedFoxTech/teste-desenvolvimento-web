<template>
  <div :class="computedButtonWrapperClasses">
    <button :class="computedClasses" v-bind="$attrs" v-on="$listeners">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: 'base',
    },
    shape: {
      type: String,
      default: 'pill',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      colors: {
        primary: {
          enabled: ['bg-primary-400', 'text-white'],
          disabled: ['bg-gray-500', 'text-white'],
        },
        secondary: {
          enabled: ['bg-secondary-100', 'text-white'],
          disabled: ['bg-gray-500', 'text-white'],
        },
        success: {
          enabled: ['bg-success-100', 'text-white'],
          disabled: ['bg-gray-500', 'text-white'],
        },
        danger: {
          enabled: ['bg-danger-100', 'text-white'],
          disabled: ['bg-gray-500', 'text-white'],
        },
        warning: {
          enabled: ['bg-warning-100', 'text-white'],
          disabled: ['bg-gray-500', 'text-white'],
        },
        info: {
          enabled: ['bg-info-100', 'text-white'],
          disabled: ['bg-gray-500', 'text-white'],
        },
      },

      sizes: {
        sm: ['py-1', 'px-4', 'text-sm'],
        base: ['py-2', 'px-6', 'text-base'],
        lg: ['py-3', 'px-8', 'text-lg'],
      },

      shapes: {
        square: ['rounded-xl'],
        pill: ['rounded-full'],
      },

      buttonWrapperClasses: {
        enabled: ['pointer-events-auto', 'inline-block'],
        disabled: ['cursor-not-allowed', 'inline-block'],
      },

      fluidClasses: ['w-full'],

      disabledClasses: ['pointer-events-none'],
      buttonClasses: [
        'focus:outline-none',
        'select-none',
        'whitespace-no-wrap',
      ],
    }
  },
  computed: {
    computedColor() {
      const color = this.colors[this.color]
        ? this.colors[this.color]
        : this.colors.primary

      if (this.disabled === true) {
        return color.disabled
      }

      return color.enabled
    },

    computedSize() {
      return this.sizes[this.size] ? this.sizes[this.size] : this.sizes.base
    },

    computedShape() {
      return this.shapes[this.shape]
        ? this.shapes[this.shape]
        : this.shapes.pill
    },

    computedDisabledClasses() {
      return this.disabled === true ? this.disabledClasses : []
    },

    computedButtonWrapperClasses() {
      return this.disabled === true
        ? this.buttonWrapperClasses.disabled
        : this.buttonWrapperClasses.enabled
    },

    computedFluidClasses() {
      return this.fluid === true ? this.fluidClasses : []
    },

    computedClasses() {
      return [
        ...this.buttonClasses,
        ...this.computedColor,
        ...this.computedSize,
        ...this.computedShape,
        ...this.computedDisabledClasses,
        ...this.computedFluidClasses,
      ]
    },
  },
}
</script>
