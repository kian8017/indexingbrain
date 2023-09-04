VERSION 0.7

ARG --global BASE_NODE_IMG = "node:18-alpine"
ARG --global BASE_ALPINE_IMG = "alpine:3.18"
FROM "$BASE_ALPINE_IMG"

build:
  BUILD ./apps/web+run --VERSION="dev-web"
  BUILD ./apps/cms+run

publish:
  ARG --required VERSION
  BUILD ./apps/web+publish --VERSION="$VERSION"
  BUILD ./apps/cms+publish --VERSION="$VERSION"


# ================ HELPERS ================

# BASE IMAGES
alpine:
  FROM "$BASE_ALPINE_IMG"

node:
  FROM "$BASE_NODE_IMG"

pnpm:
  FROM +node
  RUN apk add --no-cache libc6-compat
  RUN apk update
  RUN yarn global add turbo pnpm
  WORKDIR /app

# COMMANDS

PRUNE:
  COMMAND
  ARG --required scope
  COPY --dir apps packages pnpm* package.json turbo.json .
  RUN turbo prune --scope="$scope" --docker
  SAVE ARTIFACT out/json
  SAVE ARTIFACT out/full


INSTALLPRUNED:
  COMMAND
  ARG --required fromtarget
  COPY "+$fromtarget/json" .
  RUN pnpm install
  COPY "+$fromtarget/full" .

# PRUNED TARGETS

pruned-web:
  FROM +pnpm
  DO +PRUNE --scope=web

pruned-cms:
  FROM +pnpm
  DO +PRUNE --scope=cms

pruned-faq-provider:
  FROM +pnpm
  DO +PRUNE --scope=faq-provider
