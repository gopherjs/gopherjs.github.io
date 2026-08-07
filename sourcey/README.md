# Sourcey documentation build

This directory contains the reproducible source for the static documentation
served from `/docs/`.

The committed `godoc.json` snapshot was generated from
`gopherjs/gopherjs@490705b1d6fc7d5bd9202ac41888e146183328eb`. The Sourcey build uses snapshot
mode, so publishing the committed site does not require a Go toolchain.

## Live review site

A generated review build is available at
<https://samedaydesk.com/docs-lab/gopherjs/> while this pull request is under
review. SameDayDesk owns and maintains that durable mirror as a public Docs Lab
case study; it is not affiliated with GopherJS and is not represented as the
project's canonical documentation. If this pull request merges, the same
reference will instead be served from this repository's project-owned `/docs/`
path.

## Build

From this directory:

```sh
npm install
npm run build
```

The build writes the static site to `../docs/`. Its postbuild step also fixes a
Sourcey 3.6.5 API landing link and normalizes public copy.

## Refresh the snapshot

Clone the GopherJS source at the intended commit next to this repository, then
run:

```sh
sourcey godoc \
  --module ../gopherjs \
  --packages "./..." \
  --exclude "github.com/gopherjs/gopherjs/internal,github.com/gopherjs/gopherjs/tests,github.com/gopherjs/gopherjs/compiler/internal" \
  --out godoc.json
```

Update `sourceCommit` in `sourcey.config.ts` and rebuild in the same change.
