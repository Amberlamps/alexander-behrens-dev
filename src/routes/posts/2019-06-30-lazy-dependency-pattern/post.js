export default {
  title: "Lazy Dependency Pattern",
  tags: ['javascript', 'patterns', 'lazy'],
  spoiler: "There are dependencies like databases connections that take some time connect. It is not necessary to establish a connection to a database when working in development on something unrelated to database. The lazy dependency pattern describes a way to only connect to dependencies when connections are actually needed.",
  getContent: () => import('./document.mdx'),
}
