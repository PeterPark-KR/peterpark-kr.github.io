# hyeonjunpark.com domain connection

Prepared 2026-09-17. DNS and hosting configuration subsequently completed by the user; see activation status below. Hosting remains GitHub Pages; Cloudflare remains the registrar and authoritative DNS provider.

## Verified state

- Repository and remote: PeterPark-KR/peterpark-kr.github.io, branch main, release 9b9a429.
- GitHub Actions run 35253844605 completed successfully and deployed the current portfolio. The live default URL responds HTTP 200 with Server: GitHub.com.
- Authenticated GitHub Pages settings report build_type=workflow, cname=null, html_url=https://peterpark-kr.github.io/, https_enforced=true. The active host is GitHub Pages, not a historical Vercel deployment.
- Cloudflare nameservers: alec.ns.cloudflare.com and elinore.ns.cloudflare.com. No apex A answer or www CNAME was present on inspection. Account-level DNS records were not accessible.
- The redesign and multilingual routes are already deployed by the earlier authorized release. This task changes no design or translated content.

## Prepared local changes

- app/site-config.ts uses https://hyeonjunpark.com. The existing metadataBase resolves canonical, Open Graph URL and en/ko/ja/zh-Hans/x-default alternate URLs to that origin.
- app/sitemap.xml contains all four language URLs and reciprocal alternates on the new origin.
- app/robots.txt references https://hyeonjunpark.com/sitemap.xml.
- Resume, portrait, Search Console verification, dependencies and deployment workflow are unchanged.
- No CNAME file is needed: GitHub ignores it for custom Actions publishing. Set the custom domain in Pages settings.
- These changes are not yet committed or deployed. Do not activate the custom-domain redirect while DNS setup cannot be completed: the default GitHub Pages address could redirect visitors to an unresolved domain.

## Dashboard steps and order

1. Sign in to GitHub as the repository owner. Optionally verify ownership first at https://github.com/settings/pages: Add a domain, enter hyeonjunpark.com, and follow GitHub's generated TXT-record instructions in Cloudflare. Use the exact generated token; it is not known in advance. Keep the TXT record after verification.
2. When ready to add DNS immediately afterward, open https://github.com/PeterPark-KR/peterpark-kr.github.io/settings/pages. Keep Build and deployment > Source set to GitHub Actions. Set Custom domain to hyeonjunpark.com and Save. An authenticated GitHub credential was available for reading these settings; activation was deliberately deferred pending DNS access/readiness.
3. Sign in to https://dash.cloudflare.com/, select hyeonjunpark.com, then DNS > Records > Add record. Add the records below with TTL Auto and Proxy status DNS only (gray cloud). Keep Cloudflare nameservers unchanged. Replace only conflicting website records at @ or www; preserve MX, TXT and unrelated records.

| Type | Name | Content | Proxy | TTL |
| --- | --- | --- | --- | --- |
| A | @ | 185.199.108.153 | DNS only | Auto |
| A | @ | 185.199.109.153 | DNS only | Auto |
| A | @ | 185.199.110.153 | DNS only | Auto |
| A | @ | 185.199.111.153 | DNS only | Auto |
| CNAME | www | peterpark-kr.github.io | DNS only | Auto |

Optional IPv6 support: add four AAAA records at @, also DNS only and TTL Auto: 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153. IPv4-only configuration above is sufficient. Do not leave unrelated old apex AAAA records directing traffic elsewhere.

4. Wait for GitHub's DNS check and certificate provisioning, then enable Enforce HTTPS when available. DNS propagation/certificate availability can take up to 24 hours. With both apex and www configured, GitHub redirects www to the selected apex domain. DNS-only leaves HTTPS delivery with GitHub; no Cloudflare SSL mode change is needed.
5. Once domain DNS and HTTPS are working, commit only the prepared domain/configuration documentation changes and push through the existing main Actions workflow. Verify the deployment and live canonical/alternate URLs, robots, sitemap, /ko/, /ja/, /zh/, portrait, resume and verification asset. Confirm default GitHub Pages and www redirects preserve paths.

## Access limitation

No connected browser or Cloudflare DNS management tool was available. Cloudflare DNS changes require the dashboard steps above; do not send passwords or API secrets in chat. There was no GitHub sign-in failure. Nothing in this task changed the active Pages domain or public DNS.

## Official references

- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/
- https://developers.cloudflare.com/dns/proxy-status/


## Activation status - 2026-09-17

- User configured the domain. Verified four GitHub Pages apex A records and the www CNAME to peterpark-kr.github.io using public DNS. One local Windows resolver retained an earlier negative www result, while Google's public resolver and successful HTTPS requests confirmed the new record.
- Authenticated Pages settings now report cname=hyeonjunpark.com, build_type=workflow, https_enforced=true. HTTPS certificate validation succeeds for apex and www.
- Confirmed 301 redirects from HTTP to HTTPS, www to apex, and the old GitHub Pages hostname to the new domain, including language paths.
- The earlier pending-activation notes are historical. The user now authorizes domain-only deployment; only the three domain URL files and two documentation files are in scope.

## Remaining manual Search Console steps

1. Sign in at https://search.google.com/search-console/ with the same Google account that owns the existing portfolio property. Keep that existing property and its ownership verification methods.
2. Property selector > Add property > Domain: enter hyeonjunpark.com (no https or path) > Continue. Choose TXT verification if offered a choice.
3. Copy the exact google-site-verification=... value Google generates. In Cloudflare > hyeonjunpark.com > DNS > Records > Add record, choose TXT, Name @, Content the complete generated value, TTL Auto. Add it without replacing existing TXT records. Return to Search Console and click Verify. Keep the record permanently. If Google offers an automatic Cloudflare verification flow, manual TXT remains an option.
4. In the new property, open Sitemaps and submit https://hyeonjunpark.com/sitemap.xml. It contains English, Korean, Japanese and Simplified Chinese pages.
5. Use URL Inspection for https://hyeonjunpark.com/ and the /ko/, /ja/, /zh/ pages. Run Test live URL and request indexing where appropriate. Submission is not a guarantee of indexing.
6. Add the URL-prefix property https://hyeonjunpark.com/ if necessary for selection in the Change of Address tool; ownership should inherit from the verified Domain property. In the old https://peterpark-kr.github.io/ property, open Settings > Change of address, select the new property, run the checks and submit. Both properties require verified owner access under the same account. Keep the old property, verification asset and redirects; do not use Google's URL removal tool for this move.
7. Monitor indexing and performance in both properties. Maintain redirects for at least 180 days; the GitHub Pages custom-domain configuration provides them while retained.

The existing public/google6d8d4f33d42b5d22.html is preserved. Its presence does not prove current Search Console account ownership; authenticated Search Console access, property creation, verification, move submission and indexing status are not observable here.

Sources: https://support.google.com/webmasters/answer/9008080 and https://support.google.com/webmasters/answer/9370220 .
