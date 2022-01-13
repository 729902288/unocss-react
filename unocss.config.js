import { defineConfig, presetUno, presetAttributify, presetIcons } from "unocss";

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  rules: [
    [/^content-\[(.*)\]$/, ([, content]) => ({ content: JSON.stringify(content) })],
    [
      "cols-fill-100",
      {
        "grid-template-columns": "repeat(auto-fill,minmax(auto,100px))",
      },
    ],
    [
      "cols-fill-130",
      {
        "grid-template-columns": "repeat(auto-fill,minmax(auto,130px))",
      },
    ],
    [
      "cols-fill-150",
      {
        "grid-template-columns": "repeat(auto-fill,minmax(auto,150px))",
      },
    ],
  ],
  theme: {
    animation: {
      keyframes: {
        wiggle: `{
          0%,100%{ transform: rotate(-3deg)}
          50%{ transform:rotate(30deg) }
        }`,        
      },
      durations: {
        wiggle: '2s',
      }
    }
  }
});
