<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project workflow

- Read `docs/PROJECT_CONTEXT.md` before website work, plus relevant nested instructions and source files. `CLAUDE.md` delegates to this file.
- Treat ordinary English or Korean requests as instructions to implement the requested work directly: inspect, edit, run commands, fix introduced errors, and verify results. Ask only when missing information materially changes the outcome or additional authorization is required.
- Inspect Git status first. Preserve unrelated changes; never reset, clean, force-push, or overwrite the user's work.
- Preserve the existing static-export deployment, responsive layout, navigation, resume and LinkedIn links, SEO assets, and Search Console verification unless the request calls for changes. Do not infer a domain or hosting migration from historical material.
- Use verified facts. Do not invent accomplishments, credentials, employment, project results, or metrics. Confirm time-sensitive claims before publishing; follow the content constraints in the project context.
- Run appropriate existing checks and inspect desktop/mobile previews when available. Fix issues introduced by your changes, update project context after meaningful work, and report changes, checks, limitations, and preview instructions.
- Keep public documentation free of credentials, private transcripts, and unrelated personal details.
- Distinguish local edits, commits, pushes, and verified live deployment. Never claim unobserved success.
- A request to "publish", "deploy", or "make it live" authorizes the existing publishing workflow for the requested changes: review the relevant diff, commit only relevant files, push through the existing process, and verify deployment within available permissions and repository protections. Never include unrelated changes or force-push. If authentication blocks the work, explain the exact required sign-in step.
- The initial context setup is documentation-only: do not redesign, change website content, commit, or publish as part of that task.
