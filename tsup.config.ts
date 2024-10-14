import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.tsx"],
	format: ["esm", "cjs"],
	dts: true, // Gerar arquivos .d.ts para tipos
	sourcemap: true, // Mapas de origem para debug
	clean: true, // Limpar a pasta de saída antes do build
	target: "es2017",
});
