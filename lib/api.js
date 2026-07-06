if (typeof window !== "undefined") {
  window.Buffer = window.Buffer || {
    isBuffer: () => false,
    from: (val) => ({
      toString: () => (typeof val === "string" ? val : val ? val.toString() : ""),
    })
  };
}
import matter from "gray-matter";

const posts = import.meta.glob("../_blogs/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

function getSlug(path) {
  return path.split("/").pop().replace(/\.md$/, "");
}

function getPostFromSource(path, source, fields = []) {
  const slug = getSlug(path);
  const { data, content } = matter(source);
  const items = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = slug;
    }

    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getPostSlugs() {
  return Object.keys(posts).map((path) => `${getSlug(path)}.md`);
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const entry = Object.entries(posts).find(([path]) => getSlug(path) === realSlug);

  if (!entry) {
    return {};
  }

  return getPostFromSource(entry[0], entry[1], fields);
}

export function getAllPosts(fields = []) {
  return Object.entries(posts)
    .map(([path, source]) => getPostFromSource(path, source, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
