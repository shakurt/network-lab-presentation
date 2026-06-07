import { defineConfig } from 'vite';

const repository = process.env.GITHUB_REPOSITORY;
const repositoryName = repository?.includes('/') ? repository.split('/')[1] : undefined;
const base = process.env.GITHUB_ACTIONS && repositoryName ? `/${repositoryName}/` : '/';

export default defineConfig({
  base,
  build: {
    outDir: 'dist',
  },
});
