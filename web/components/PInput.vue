<template>
  <div class="relative my-5">
    <input
      :id="_uid"
      :class="computedInput"
      v-bind="$attrs"
      @focus="hasFocus = true"
      @blur="hasFocus = false"
      @input="handleInput"
    />
    <label :class="computedLabel" :for="_uid"> {{ label }} </label>
  </div>
</template>

<script>
export default {
  prop: ['value'],
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    color: {
      type: String,
      default: 'light',
    },
    label: {
      type: String,
      default: '',
    },
    elevateLabel: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      text: '',
      hasFocus: false,
      input: [
        'border-b',
        'border-solid',
        'relative',
        'z-10',
        'bg-transparent',
        'border-gray-500',
      ],
      colors: {
        light: {
          input: {
            focus: [
              'border-gray-600',
              'focus:border-gray-600',
              'focus:text-gray-600',
            ],
            blur: [],
            filled: ['text-gray-600', 'border-gray-600'],
          },
          label: {
            focus: ['text-gray-600'],
            blur: ['text-gray-600'],
            filled: ['text-gray-600', 'elevate'],
          },
        },

        primary: {
          input: {
            focus: [
              'border-primary-400',
              'focus:border-primary-400',
              'focus:text-primary-400',
            ],
            blur: [],
            filled: ['text-primary-400', 'border-primary-400'],
          },
          label: {
            focus: ['text-primary-400'],
            blur: ['text-gray-600'],
            filled: ['text-primary-400', 'elevate'],
          },
        },

        secondary: {
          input: {
            focus: [
              'border-secondary-300',
              'focus:border-secondary-300',
              'focus:text-secondary-300',
            ],
            blur: [],
            filled: ['text-secondary-300', 'border-secondary-300'],
          },
          label: {
            focus: ['text-secondary-300'],
            blur: ['text-gray-600'],
            filled: ['text-secondary-300', 'elevate'],
          },
        },

        success: {
          input: {
            focus: [
              'border-success-300',
              'focus:border-success-300',
              'focus:text-success-300',
            ],
            blur: [],
            filled: ['text-success-300', 'border-success-300'],
          },
          label: {
            focus: ['text-success-300'],
            blur: ['text-gray-600'],
            filled: ['text-success-300', 'elevate'],
          },
        },

        danger: {
          input: {
            focus: [
              'border-danger-200',
              'focus:border-danger-200',
              'focus:text-danger-200',
            ],
            blur: [],
            filled: ['text-danger-200', 'border-danger-200'],
          },
          label: {
            focus: ['text-danger-200'],
            blur: ['text-gray-600'],
            filled: ['text-danger-200', 'elevate'],
          },
        },

        warning: {
          input: {
            focus: [
              'border-warning-200',
              'focus:border-warning-200',
              'focus:text-warning-200',
            ],
            blur: [],
            filled: ['text-warning-200', 'border-warning-200'],
          },
          label: {
            focus: ['text-warning-200'],
            blur: ['text-gray-600'],
            filled: ['text-warning-200', 'elevate'],
          },
        },

        info: {
          input: {
            focus: [
              'border-info-100',
              'focus:border-info-100',
              'focus:text-info-100',
            ],
            blur: [],
            filled: ['text-info-100', 'border-info-100'],
          },
          label: {
            focus: ['text-info-100'],
            blur: ['text-gray-600'],
            filled: ['text-info-100', 'elevate'],
          },
        },
      },
    }
  },

  computed: {
    computedState() {
      if (this.hasFocus === true) return 'focus'
      if (this.$attrs.value?.length > 0) return 'filled'
      return 'blur'
    },

    computedInput() {
      const classes = this.colors[this.color]
        ? this.colors[this.color].input[this.computedState]
        : this.colors.light.input[this.computedState]
      return [...this.input, ...classes]
    },

    computedLabel() {
      const classes = this.colors[this.color]
        ? this.colors[this.color].label[this.computedState]
        : this.colors.light.label[this.computedState]
      return [...classes, this.elevateLabel === true ? 'elevate' : '']
    },
  },

  methods: {
    handleInput(e) {
      return this.$emit('input', e.target.value)
    },
  },
}
</script>

<style scoped>
input {
  outline: none;
  transition: 0.2s ease-in-out;
  box-sizing: border-box;
}

label {
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  position: absolute;
  font-size: 1rem;
  cursor: text;
  transition: 0.2s ease-in-out;
  box-sizing: border-box;
}

input,
label {
  width: 100%;
  height: 2rem;
  font-size: 1rem;
}

input:focus + label {
  font-size: 0.9rem;
  top: -25px;
}

.elevate {
  font-size: 0.9rem;
  top: -25px;
}
</style>
