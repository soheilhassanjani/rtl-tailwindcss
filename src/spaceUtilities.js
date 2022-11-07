module.exports = ({ matchUtilities, addUtilities, theme }) => {
  matchUtilities(
    {
      "space-x": (value) => ({
        "> :not([hidden]) ~ :not([hidden])": {
          "--tw-space-x-reverse": "0",
          marginInlineEnd: `calc(${value} * var(--tw-space-x-reverse))`,
          marginInlineStart: `calc(${value} * calc(1 - var(--tw-space-x-reverse)))`,
        },
      }),
    },
    {
      supportsNegativeValues: true,
      values: theme("space"),
    }
  );
  addUtilities({
    ".space-x-reverse > :not([hidden]) ~ :not([hidden])": {
      "--tw-space-x-reverse": "1",
    },
  });
};
