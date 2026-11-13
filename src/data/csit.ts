export const csitTechnologies = [
  { slug: "dae-software", name: "Software Technology", icon: "code", description: "Build applications through programming, software design, databases, and practical development.", isNew: false },
  { slug: "dae-cit", name: "Computer Information Technology", icon: "network", description: "Explore computer systems, IT infrastructure, networking, and system administration.", isNew: false },
  { slug: "dae-ai", name: "Artificial Intelligence Technology", icon: "brain", description: "Study Python, machine learning, computer vision, generative AI, and intelligent applications.", isNew: true },
  { slug: "dae-cyber-security", name: "Cyber Security and Networks Technology", icon: "shield", description: "Develop skills in network security, digital forensics, incident response, and ethical security testing.", isNew: true },
] as const;

export const coeducationSlugs = new Set([
  ...csitTechnologies.map((technology) => technology.slug),
  "sc-ai", // Keep existing AI links compatible.
  "dae-chemical",
]);
