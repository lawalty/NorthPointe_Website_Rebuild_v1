# NorthPointe Church Website

A small static website for NorthPointe Church in Round Rock, Texas.

## Local Preview

Run the included preview server:

```powershell
$env:PORT='4167'
node preview-server.cjs
```

Then open:

```text
http://127.0.0.1:4167/
```

## GitHub Pages Hosting

This repository is prepared for GitHub Pages.

Recommended setup:

1. Go to the repository on GitHub.
2. Open `Settings`.
3. Open `Pages`.
4. Under `Build and deployment`, set `Source` to `GitHub Actions`.
5. Save the setting if GitHub prompts you.
6. Push to `main` or run the `Deploy static site to GitHub Pages` workflow manually.

GitHub will publish the static files in this repository. The public project-site URL will usually be:

```text
https://lawalty.github.io/NorthPointe_Website_Rebuild_v1/
```

If you prefer the simpler branch-based setup instead, choose `Deploy from a branch`, then select `main` and `/(root)`.
