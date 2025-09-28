import { defineConfig } from 'vite';
import { ripple } from 'vite-plugin-ripple';
import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

function copyRippleFiles() {
	return {
		name: 'copy-ripple-files',
		writeBundle() {
			const srcDir = 'src/components';
			const destDir = 'dist/components';
			
			mkdirSync(destDir, { recursive: true });
			
			const files = readdirSync(srcDir);
			files.forEach(file => {
				const srcPath = join(srcDir, file);
				const stat = statSync(srcPath);
				
				if (stat.isFile() && file.endsWith('.ripple')) {
					const destPath = join(destDir, file);
					copyFileSync(srcPath, destPath);
					console.log(`Copied ${file} to dist/components/`);
				}
			});
		}
	};
}

export default defineConfig(({ mode }) => ({
	plugins: [
		ripple({ exclude: ['src/components/**/*.ripple'] }), 
		copyRippleFiles()
	],
	build: {
		target: 'esnext',
		minify: false,
		sourcemap: mode !== 'production',
		lib: {
			entry: 'src/index.ts',
			formats: ['es'],
			fileName: 'index',
		},
		rollupOptions: {
			external: ['ripple', /^ripple\//],
		},
	},
}));