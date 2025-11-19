# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/05b2fa97-8539-494b-9751-0aaac7b5e6ce

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/05b2fa97-8539-494b-9751-0aaac7b5e6ce) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Wholesale email (SMTP) configuration

The hurt (wholesale) inquiry form sends emails using a serverless function at `api/send-wholesale-email.ts`.

### Environment variables (create `.env.local` on Vercel or locally)

```
SMTP_HOST=mail-serwer127727.lh.pl
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=kontakt@stojakinachoinke.pl
SMTP_PASS=<SECRET_PASSWORD>
FROM_EMAIL=kontakt@stojakinachoinke.pl
TO_EMAIL=kontakt@stojakinachoinke.pl
```

Only `SMTP_USER` and `SMTP_PASS` are strictly required (plus host/port if they differ). The form will fallback to a `mailto:` link if the API call fails (e.g. when running only `vite` locally without serverless runtime).

### Local development

Running `npm run dev` launches the Vite front-end at a port like `http://localhost:8083`. The serverless function isn't available in pure Vite. Options:

1. Use `mailto:` fallback automatically shown after a failed send.
2. Install Vercel CLI and run `vercel dev` to emulate the `/api` function locally.

### Troubleshooting

- 500 error: Check that `SMTP_USER`/`SMTP_PASS` are set and valid.
- TLS issues: Ensure `SMTP_PORT=465` and `SMTP_SECURE=true`. For port 587 set `SMTP_SECURE=false`.
- Spam folder: Add proper SPF/DKIM for the sending domain.

### Security

Never commit real credentials. Use `.env.local` which Vercel auto-injects, or project environment variable settings in the dashboard.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/05b2fa97-8539-494b-9751-0aaac7b5e6ce) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
