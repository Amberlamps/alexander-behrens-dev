export default {
  title: "Setting Up a Development Environment with Docker, docker-compose, yarn workspaces and node.js",
  tags: ['javascript', 'docker', 'docker-compose', 'node', 'node.js', 'yarn', 'yarn-workspaces', 'hot reloading', 'databases', 'development', 'production', 'nodemon'],
  spoiler: "It is desired to keep the development environment as close to production environment as possible. With docker-compose it is possible to boot up different containers, mount files from the file system and reload services with nodemon.",
  getContent: () => import('./document.mdx'),
}
