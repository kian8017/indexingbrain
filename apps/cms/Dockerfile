FROM node:18-alpine AS external-source
 
FROM external-source AS base
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app
RUN yarn global add pnpm

FROM base AS builder
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=cms --docker



FROM base AS installer
 
# first install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm* ./
RUN pnpm install
 
# Build the project
COPY --from=builder /app/out/full/ .
RUN pnpm exec turbo run build --filter=cms...
 


FROM base AS runner
LABEL org.opencontainers.image.source="https://github.com/kian8017/indexingbrain"
ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

# don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 payload
RUN chown -R payload:nodejs /app

USER payload

# install prod dependencies
COPY --from=installer --chown=payload:nodejs /app/apps/cms/package.json /app/apps/cms/package.json
COPY --from=installer --chown=payload:nodejs /app/pnpm* /app/
COPY --from=installer --chown=payload:nodejs /app/package.json /app/package.json
RUN pnpm install --prod

# copy over built files
COPY --from=installer --chown=payload:nodejs /app/apps/cms/build /app/apps/cms/build
COPY --from=installer --chown=payload:nodejs /app/apps/cms/dist /app/apps/cms/dist

CMD ["node", "apps/cms/dist/server.js"]
