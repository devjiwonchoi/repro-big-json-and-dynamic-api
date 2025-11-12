> [!NOTE]
> This issue is only reproducible with Turbopack + `cacheComponents`.

## Steps to reproduce

1. Deploy to Vercel with `pnpm vc` command.
2. Check the page.
3. It takes ~20 seconds for the request to complete.
4. Remove `cookies()` call.
5. Re-deploy to Vercel with `pnpm vc` command.
6. Check the page.
7. The request completes immediately.