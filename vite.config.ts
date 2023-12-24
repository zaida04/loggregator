import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import bundlesize from "vite-plugin-bundlesize";

export default defineConfig({
	plugins: [sveltekit(), bundlesize()],
	build: {
		sourcemap: "hidden",
	},
});
