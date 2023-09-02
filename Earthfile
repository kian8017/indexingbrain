VERSION 0.7
ARG --global NODE_IMG = "node:18-alpine"

pnpm-install:
  FROM "$NODE_IMG"
  RUN apk add --no-cache libc6-compat
  RUN apk update
  RUN yarn global add turbo pnpm
  WORKDIR /app


# ======== WEB ========


web-01-prune:
  FROM +pnpm-install

  COPY --dir apps packages pnpm* package.json turbo.json .
  RUN turbo prune --scope=web --docker
  SAVE ARTIFACT out/json
  SAVE ARTIFACT out/full

web-02-build:
  FROM +pnpm-install

  COPY +web-01-prune/json .
  RUN pnpm install
  COPY +web-01-prune/full .
  ENV NEXT_TELEMETRY_DISABLED 1
  WORKDIR /app/apps/web
  RUN pnpm build
  SAVE ARTIFACT .next/standalone
  SAVE ARTIFACT .next/static
  SAVE ARTIFACT public

web-03-run:
  ARG --required VERSION
  ARG BASE = "ghcr.io/kian8017/ib-web"
  FROM "$NODE_IMG"
  LABEL org.opencontainers.image.source="https://github.com/kian8017/indexingbrain"
  WORKDIR /app

  RUN addgroup --system --gid 1001 nodejs
  RUN adduser --system --uid 1001 nextjs
  USER nextjs

  COPY --chown=nextjs:nodejs +web-02-build/standalone ./
  COPY --chown=nextjs:nodejs --dir +web-02-build/static ./apps/web/.next/static
  COPY --chown=nextjs:nodejs --dir +web-02-build/public ./apps/web/public

  ENV NEXT_TELEMETRY_DISABLED 1
  ENV HOSTNAME "0.0.0.0"

  EXPOSE 3000
  CMD ["node", "apps/web/server.js"]

  SAVE IMAGE --push "$BASE:latest" "$BASE:$VERSION"


# ======== CMS ========


cms-01-prune:
  FROM +pnpm-install

  COPY --dir apps packages pnpm* package.json turbo.json .
  RUN turbo prune --scope=cms --docker
  SAVE ARTIFACT out/json
  SAVE ARTIFACT out/full

cms-02-build:
  FROM +pnpm-install

  COPY +cms-01-prune/json .
  RUN pnpm install
  COPY +cms-01-prune/full .
  WORKDIR /app/apps/cms
  RUN pnpm build
  # dependencies
  SAVE ARTIFACT /app/apps/cms/package.json /cms-package.json
  SAVE ARTIFACT /app/package.json
  SAVE ARTIFACT /app/pnpm-lock.yaml
  # payload
  SAVE ARTIFACT build
  SAVE ARTIFACT dist

cms-03-run:
  ARG --required VERSION
  ARG BASE = "ghcr.io/kian8017/ib-cms"
  # FIXME: unnecessary dependency -- don't need turbo in this image
  FROM +pnpm-install
  LABEL org.opencontainers.image.source="https://github.com/kian8017/indexingbrain"

  RUN addgroup --system --gid 1001 nodejs
  RUN adduser --system --uid 1001 payload

  RUN mkdir -p /app/apps/cms/data/images
  RUN chown -R payload:nodejs /app

  USER payload
  WORKDIR /app/apps/cms

  # install prod dependencies
  COPY --chown=payload:nodejs +cms-02-build/cms-package.json /app/apps/cms/package.json
  COPY --chown=payload:nodejs +cms-02-build/pnpm-lock.yaml /app/pnpm-lock.yaml
  COPY --chown=payload:nodejs +cms-02-build/package.json /app/package.json
  RUN pnpm install --prod

  # copy over built files
  COPY --chown=payload:nodejs +cms-02-build/build /app/apps/cms/build
  COPY --chown=payload:nodejs +cms-02-build/dist /app/apps/cms/dist

  EXPOSE 3000
  CMD ["node", "dist/server.js"]
  SAVE IMAGE --push "$BASE:latest" "$BASE:$VERSION"