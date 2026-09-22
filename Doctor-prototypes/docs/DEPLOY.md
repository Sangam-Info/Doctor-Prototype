# Deployment

This repository is a static site. The root folder is the Cloudflare Pages output directory.

## GitHub Actions to Cloudflare Pages

1. Create a GitHub repository and push this project to the `main` branch.
2. In Cloudflare, create an empty Pages project with Direct Upload. Do not also connect
   the project to GitHub, because this repository already deploys through GitHub Actions.
3. Use these build settings:
   - Framework preset: `None`
   - Build command: not required for the Actions deployment
   - Build output directory: `.`
4. Add these repository secrets for the workflow:
   - `CLOUDFLARE_API_TOKEN` with Pages edit permission
   - `CLOUDFLARE_ACCOUNT_ID`
   - `CLOUDFLARE_PROJECT_NAME`
5. Push to `main`. The workflow validates the files first, then deploys the root directory.

## Local validation

Requires Node.js 20 or newer:

```powershell
npm run validate
```

The showcase is available at `/`. The demos are available at:

- `/prototypes/shashvat-hospital/`
- `/prototypes/astha-hospital/`
- `/prototypes/slim-n-slender/`

Do not commit API tokens. Keep all secrets in GitHub Actions or Cloudflare settings.
