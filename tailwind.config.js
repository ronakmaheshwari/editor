module.exports = {
  theme: {
    extend: {
      keyframes: {
        pulseOnce: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'pulse-once': 'pulseOnce 0.6s ease-in-out',
      },
    },
  },
};
