<template>
  <div :class="computedTagClasses">
    <slot></slot>
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
  },
  data() {
    return {
      colors: {
        primary: ['bg-primary-400'],
        secondary: ['bg-secondary-100'],
        success: ['bg-success-100'],
        danger: ['bg-danger-100'],
        warning: ['bg-warning-100'],
        info: ['bg-info-100'],
      },
      sizes: {
        sm: ['py-1', 'px-2', 'text-xs'],
        base: ['py-1', 'px-4'],
        lg: ['py-2', 'px-6', 'text-2xl'],
      },
      tagClasses: [
        'text-white',
        'inline-block',
        'font-bold',
        'rounded-full',
        'whitespace-nowrap',
      ],
    }
  },
  computed: {
    computedTagClasses() {
      return [
        ...this.tagClasses,
        ...this.computedColorClasses,
        ...this.computedSizeClasses,
      ]
    },

    computedColorClasses() {
      return this.colors[this.color]
        ? this.colors[this.color]
        : this.colors.primary
    },

    computedSizeClasses() {
      return this.sizes[this.size] ? this.sizes[this.size] : this.size.base
    },
  },
}
</script>
