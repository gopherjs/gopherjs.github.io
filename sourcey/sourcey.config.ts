import { defineConfig, godoc, markdown } from "sourcey";

const sourceCommit = "490705b1d6fc7d5bd9202ac41888e146183328eb";

export default defineConfig({
  name: "GopherJS",
  siteUrl: "https://gopherjs.github.io",
  baseUrl: "/docs",
  prettyUrls: false,
  repo: "https://github.com/gopherjs/gopherjs",
  editBranch: sourceCommit,
  theme: {
    preset: "default",
    colors: {
      primary: "#00add8",
      light: "#38c6e8",
      dark: "#007d9c",
    },
  },
  navigation: {
    tabs: [
      {
        tab: "Overview",
        slug: "",
        source: markdown({
          groups: [{ group: "Start here", pages: ["introduction"] }],
        }),
      },
      {
        tab: "API Reference",
        slug: "api",
        source: godoc({
          snapshot: "./godoc.json",
          mode: "snapshot",
          includeTests: true,
          exclude: [
            "github.com/gopherjs/gopherjs/internal",
            "github.com/gopherjs/gopherjs/tests",
            "github.com/gopherjs/gopherjs/compiler/internal",
          ],
        }),
      },
    ],
  },
  navbar: {
    links: [
      {
        type: "github",
        href: "https://github.com/gopherjs/gopherjs",
        label: "GitHub",
      },
      {
        type: "link",
        href: "https://gopherjs.github.io/playground/",
        label: "Playground",
      },
    ],
  },
  footer: {
    links: [
      {
        type: "github",
        href: "https://github.com/gopherjs/gopherjs",
        label: "GopherJS source",
      },
      {
        type: "link",
        href: "https://pkg.go.dev/github.com/gopherjs/gopherjs",
        label: "pkg.go.dev",
      },
    ],
  },
});
