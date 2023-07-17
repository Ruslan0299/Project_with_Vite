// import { defineConfig } from "vite";

// export default defineConfig({
//   build: {
//     rollupOptions: {
//       input: {
//         main: `${__dirname}/src/main.js`,
//       },
//     },
//   },
// });

import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/main.js"),
      },
    },
  },
});
