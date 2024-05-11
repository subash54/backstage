/*! For license information please see 0e879d5c.dff1984d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[801721],{236026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=n(824246),r=n(511151);const o={id:"discovery--old",title:"GitHub Discovery",sidebar_label:"Discovery",description:"Automatically discovering catalog entities from repositories in a GitHub organization"},s=void 0,a={id:"integrations/github/discovery--old",title:"GitHub Discovery",description:"Automatically discovering catalog entities from repositories in a GitHub organization",source:"@site/../docs/integrations/github/discovery--old.md",sourceDirName:"integrations/github",slug:"/integrations/github/discovery--old",permalink:"/docs/integrations/github/discovery--old",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/github/discovery--old.md",tags:[],version:"current",frontMatter:{id:"discovery--old",title:"GitHub Discovery",sidebar_label:"Discovery",description:"Automatically discovering catalog entities from repositories in a GitHub organization"}},c={},l=[{value:"GitHub Provider",id:"github-provider",level:2},{value:"Installation without Events Support",id:"installation-without-events-support",level:2},{value:"Installation with Events Support",id:"installation-with-events-support",level:2},{value:"Legacy Backend System",id:"legacy-backend-system",level:3},{value:"Configuration",id:"configuration",level:2},{value:"GitHub API Rate Limits",id:"github-api-rate-limits",level:2},{value:"GitHub Processor (To Be Deprecated)",id:"github-processor-to-be-deprecated",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration-1",level:2},{value:"GitHub API Rate Limits",id:"github-api-rate-limits-1",level:2}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["This documentation is written for the old backend which has been replaced by ",(0,i.jsx)(t.a,{href:"/docs/backend-system/",children:"the new backend system"}),", being the default since Backstage ",(0,i.jsx)(t.a,{href:"/docs/releases/v1.24.0",children:"version 1.24"}),". If have migrated to the new backend system, you may want to read ",(0,i.jsx)(t.a,{href:"/docs/integrations/github/discovery",children:"its own article"})," instead. Otherwise, ",(0,i.jsx)(t.a,{href:"/docs/backend-system/building-backends/migrating",children:"consider migrating"}),"!"]})}),"\n",(0,i.jsx)(t.h2,{id:"github-provider",children:"GitHub Provider"}),"\n",(0,i.jsx)(t.p,{children:"The GitHub integration has a discovery provider for discovering catalog\nentities within a GitHub organization. The provider will crawl the GitHub\norganization and register entities matching the configured path. This can be\nuseful as an alternative to static locations or manually adding things to the\ncatalog. This is the preferred method for ingesting entities into the catalog."}),"\n",(0,i.jsx)(t.h2,{id:"installation-without-events-support",children:"Installation without Events Support"}),"\n",(0,i.jsxs)(t.p,{children:["You will have to add the provider in the catalog initialization code of your\nbackend. They are not installed by default, therefore you have to add a\ndependency on ",(0,i.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-github"})," to your backend\npackage."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"# From your Backstage root directory\nyarn --cwd packages/backend add @backstage/plugin-catalog-backend-module-github\n"})}),"\n",(0,i.jsx)(t.p,{children:"And then add the entity provider to your catalog builder:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"/* highlight-add-next-line */\nimport { GithubEntityProvider } from '@backstage/plugin-catalog-backend-module-github';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n  /* highlight-add-start */\n  builder.addEntityProvider(\n    GithubEntityProvider.fromConfig(env.config, {\n      logger: env.logger,\n      scheduler: env.scheduler,\n    }),\n  );\n  /* highlight-add-end */\n\n  // ..\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"installation-with-events-support",children:"Installation with Events Support"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"For the legacy backend system, please read the sub-section below."})}),"\n",(0,i.jsxs)(t.p,{children:["The catalog module for GitHub comes with events support enabled.\nThis will make it subscribe to its relevant topics (",(0,i.jsx)(t.code,{children:"github.push"}),")\nand expects these events to be published via the ",(0,i.jsx)(t.code,{children:"EventsService"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Additionally, you should install the\n",(0,i.jsxs)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-github/README.md",children:["event router by ",(0,i.jsx)(t.code,{children:"events-backend-module-github"})]}),"\nwhich will route received events from the generic topic ",(0,i.jsx)(t.code,{children:"github"})," to more specific ones\nbased on the event type (e.g., ",(0,i.jsx)(t.code,{children:"github.push"}),")."]}),"\n",(0,i.jsxs)(t.p,{children:["In order to receive Webhook events by GitHub, you have to decide how you want them\nto be ingested into Backstage and published to its ",(0,i.jsx)(t.code,{children:"EventsService"}),".\nYou can decide between the following options (extensible):"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md",children:"via HTTP endpoint"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-aws-sqs/README.md",children:"via an AWS SQS queue"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"legacy-backend-system",children:"Legacy Backend System"}),"\n",(0,i.jsx)(t.p,{children:"Please follow the installation instructions at"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md",children:"https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-github/README.md",children:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-github/README.md"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Additionally, you need to decide how you want to receive events from external sources like"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md",children:"via HTTP endpoint"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-aws-sqs/README.md",children:"via an AWS SQS queue"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Set up your provider"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"import { CatalogBuilder } from '@backstage/plugin-catalog-backend';\n/* highlight-add-next-line */\nimport { GithubEntityProvider } from '@backstage/plugin-catalog-backend-module-github';\nimport { ScaffolderEntitiesProcessor } from '@backstage/plugin-scaffolder-backend';\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n  builder.addProcessor(new ScaffolderEntitiesProcessor());\n  /* highlight-add-start */\n  const githubProvider = GithubEntityProvider.fromConfig(env.config, {\n    events: env.events,\n    logger: env.logger,\n    scheduler: env.scheduler,\n  });\n  builder.addEntityProvider(githubProvider);\n  /* highlight-add-end */\n  const { processingEngine, router } = await builder.build();\n  await processingEngine.start();\n  return router;\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["You can check the official docs to ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/developers/webhooks-and-events/webhooks/creating-webhooks",children:"configure your webhook"})," and to ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/developers/webhooks-and-events/webhooks/securing-your-webhooks",children:"secure your request"}),". The webhook will need to be configured to forward ",(0,i.jsx)(t.code,{children:"push"})," events."]}),"\n",(0,i.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["To use the discovery provider, you'll need a GitHub integration\n",(0,i.jsx)(t.a,{href:"/docs/integrations/github/locations",children:"set up"})," with either a ",(0,i.jsx)(t.a,{href:"/docs/getting-started/config/authentication",children:"Personal Access Token"})," or ",(0,i.jsx)(t.a,{href:"/docs/integrations/github/github-apps",children:"GitHub Apps"}),". For Personal Access Tokens you should pay attention to the ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/integrations/github/locations/#token-scopes",children:"required scopes"}),", where you will need at least the ",(0,i.jsx)(t.code,{children:"repo"})," scope for reading components. For GitHub Apps you will need to grant it the ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/integrations/github/github-apps#app-permissions",children:"required permissions"})," instead, where you will need at least the ",(0,i.jsx)(t.code,{children:"Contents: Read-only"})," permissions for reading components."]}),"\n",(0,i.jsxs)(t.p,{children:["Then you can add a ",(0,i.jsx)(t.code,{children:"github"})," config to the catalog providers configuration:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"catalog:\n  providers:\n    github:\n      # the provider ID can be any camelCase string\n      providerId:\n        organization: 'backstage' # string\n        catalogPath: '/catalog-info.yaml' # string\n        filters:\n          branch: 'main' # string\n          repository: '.*' # Regex\n        schedule: # same options as in TaskScheduleDefinition\n          # supports cron, ISO duration, \"human duration\" as used in code\n          frequency: { minutes: 30 }\n          # supports ISO duration, \"human duration\" as used in code\n          timeout: { minutes: 3 }\n      customProviderId:\n        organization: 'new-org' # string\n        catalogPath: '/custom/path/catalog-info.yaml' # string\n        filters: # optional filters\n          branch: 'develop' # optional string\n          repository: '.*' # optional Regex\n      wildcardProviderId:\n        organization: 'new-org' # string\n        catalogPath: '/groups/**/*.yaml' # this will search all folders for files that end in .yaml\n        filters: # optional filters\n          branch: 'develop' # optional string\n          repository: '.*' # optional Regex\n      topicProviderId:\n        organization: 'backstage' # string\n        catalogPath: '/catalog-info.yaml' # string\n        filters:\n          branch: 'main' # string\n          repository: '.*' # Regex\n          topic: 'backstage-exclude' # optional string\n      topicFilterProviderId:\n        organization: 'backstage' # string\n        catalogPath: '/catalog-info.yaml' # string\n        filters:\n          branch: 'main' # string\n          repository: '.*' # Regex\n          topic:\n            include: ['backstage-include'] # optional array of strings\n            exclude: ['experiments'] # optional array of strings\n      validateLocationsExist:\n        organization: 'backstage' # string\n        catalogPath: '/catalog-info.yaml' # string\n        filters:\n          branch: 'main' # string\n          repository: '.*' # Regex\n        validateLocationsExist: true # optional boolean\n      visibilityProviderId:\n        organization: 'backstage' # string\n        catalogPath: '/catalog-info.yaml' # string\n        filters:\n          visibility:\n            - public\n            - internal\n      enterpriseProviderId:\n        host: ghe.example.net\n        organization: 'backstage' # string\n        catalogPath: '/catalog-info.yaml' # string\n"})}),"\n",(0,i.jsx)(t.p,{children:"This provider supports multiple organizations via unique provider IDs."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," It is possible but certainly not recommended to skip the provider ID level.\nIf you do so, ",(0,i.jsx)(t.code,{children:"default"})," will be used as provider ID."]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"catalogPath"})})," ",(0,i.jsx)(t.em,{children:"(optional)"}),":\nDefault: ",(0,i.jsx)(t.code,{children:"/catalog-info.yaml"}),".\nPath where to look for ",(0,i.jsx)(t.code,{children:"catalog-info.yaml"})," files.\nYou can use wildcards - ",(0,i.jsx)(t.code,{children:"*"})," or ",(0,i.jsx)(t.code,{children:"**"})," - to search the path and/or the filename.\nWildcards cannot be used if the ",(0,i.jsx)(t.code,{children:"validateLocationsExist"})," option is set to ",(0,i.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"filters"})})," ",(0,i.jsx)(t.em,{children:"(optional)"}),":\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"branch"})})," ",(0,i.jsx)(t.em,{children:"(optional)"}),":\nString used to filter results based on the branch name."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"repository"})})," ",(0,i.jsx)(t.em,{children:"(optional)"}),":\nRegular expression used to filter results based on the repository name."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"topic"})})," ",(0,i.jsx)(t.em,{children:"(optional)"}),":\nBoth of the filters below may be used at the same time but the exclusion filter has the highest priority.\nIn the example above, a repository with the ",(0,i.jsx)(t.code,{children:"backstage-include"})," topic would still be excluded\nif it were also carrying the ",(0,i.jsx)(t.code,{children:"experiments"})," topic.\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"include"})})," ",(0,i.jsx)(t.em,{children:"(optional)"}),":\nAn array of strings used to filter in results based on their associated GitHub topics.\nIf configured, only repositories with one (or more) topic(s) present in the inclusion filter will be ingested"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"exclude"})})," ",(0,i.jsx)(t.em,{children:"(optional)"}),":\nAn array of strings used to filter out results based on their associated GitHub topics.\nIf configured, all repositories ",(0,i.jsx)(t.em,{children:"except"})," those with one (or more) topics(s) present in the exclusion filter will be ingested."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"visibility"})})," ",(0,i.jsx)(t.em,{children:"(optional)"}),":\nAn array of strings used to filter results based on their visibility. Available options are ",(0,i.jsx)(t.code,{children:"private"}),", ",(0,i.jsx)(t.code,{children:"internal"}),", ",(0,i.jsx)(t.code,{children:"public"}),". If configured (non empty), only repositories with visibility present in the filter will be ingested"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"host"})})," ",(0,i.jsx)(t.em,{children:"(optional)"}),":\nThe hostname of your GitHub Enterprise instance. It must match a host defined in ",(0,i.jsx)(t.a,{href:"/docs/integrations/github/locations",children:"integrations.github"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"organization"})}),":\nName of your organization account/workspace.\nIf you want to add multiple organizations, you need to add one provider config each."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"validateLocationsExist"})})," ",(0,i.jsx)(t.em,{children:"(optional)"}),":\nWhether to validate locations that exist before emitting them.\nThis option avoids generating locations for catalog info files that do not exist in the source repository.\nDefaults to ",(0,i.jsx)(t.code,{children:"false"}),".\nDue to limitations in the GitHub API's ability to query for repository objects, this option cannot be used in\nconjunction with wildcards in the ",(0,i.jsx)(t.code,{children:"catalogPath"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"schedule"})}),":\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"frequency"})}),":\nHow often you want the task to run. The system does its best to avoid overlapping invocations."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"timeout"})}),":\nThe maximum amount of time that a single task invocation can take."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"initialDelay"})})," ",(0,i.jsx)(t.em,{children:"(optional)"}),":\nThe amount of time that should pass before the first invocation happens."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"scope"})})," ",(0,i.jsx)(t.em,{children:"(optional)"}),":\n",(0,i.jsx)(t.code,{children:"'global'"})," or ",(0,i.jsx)(t.code,{children:"'local'"}),". Sets the scope of concurrency control."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"github-api-rate-limits",children:"GitHub API Rate Limits"}),"\n",(0,i.jsxs)(t.p,{children:["GitHub ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting",children:"rate limits"})," API requests to 5,000 per hour (or more for Enterprise\naccounts). The snippet below refreshes the Backstage catalog data every 35 minutes, which issues an API request for each discovered location."]}),"\n",(0,i.jsxs)(t.p,{children:["If your requests are too frequent then you may get throttled by\nrate limiting. You can change the refresh frequency of the catalog in your ",(0,i.jsx)(t.code,{children:"app-config.yaml"})," file by controlling the ",(0,i.jsx)(t.code,{children:"schedule"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"schedule:\n  frequency: { minutes: 35 }\n  timeout: { minutes: 3 }\n"})}),"\n",(0,i.jsxs)(t.p,{children:["More information about scheduling can be found on the ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/reference/backend-tasks.taskscheduledefinition",children:"TaskScheduleDefinition"})," page."]}),"\n",(0,i.jsxs)(t.p,{children:["Alternatively, or additionally, you can configure ",(0,i.jsx)(t.a,{href:"/docs/integrations/github/github-apps",children:"github-apps"})," authentication\nwhich carries a much higher rate limit at GitHub."]}),"\n",(0,i.jsx)(t.p,{children:"This is true for any method of adding GitHub entities to the catalog, but\nespecially easy to hit with automatic discovery."}),"\n",(0,i.jsx)(t.h2,{id:"github-processor-to-be-deprecated",children:"GitHub Processor (To Be Deprecated)"}),"\n",(0,i.jsx)(t.p,{children:"The GitHub integration has a special discovery processor for discovering catalog\nentities within a GitHub organization. The processor will crawl the GitHub\norganization and register entities matching the configured path. This can be\nuseful as an alternative to static locations or manually adding things to the\ncatalog."}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(t.p,{children:["You will have to add the processors in the catalog initialization code of your\nbackend. They are not installed by default, therefore you have to add a\ndependency on ",(0,i.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-github"})," to your backend\npackage, plus ",(0,i.jsx)(t.code,{children:"@backstage/integration"})," for the basic credentials management:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"# From your Backstage root directory\nyarn --cwd packages/backend add @backstage/integration @backstage/plugin-catalog-backend-module-github\n"})}),"\n",(0,i.jsx)(t.p,{children:"And then add the processors to your catalog builder:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"/* highlight-add-start */\nimport {\n  GithubDiscoveryProcessor,\n  GithubOrgReaderProcessor,\n} from '@backstage/plugin-catalog-backend-module-github';\nimport {\n  ScmIntegrations,\n  DefaultGithubCredentialsProvider,\n} from '@backstage/integration';\n/* highlight-add-end */\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n  /* highlight-add-start */\n  const integrations = ScmIntegrations.fromConfig(env.config);\n  const githubCredentialsProvider =\n    DefaultGithubCredentialsProvider.fromIntegrations(integrations);\n  builder.addProcessor(\n    GithubDiscoveryProcessor.fromConfig(env.config, {\n      logger: env.logger,\n      githubCredentialsProvider,\n    }),\n    GithubOrgReaderProcessor.fromConfig(env.config, {\n      logger: env.logger,\n      githubCredentialsProvider,\n    }),\n  );\n  /* highlight-add-end */\n\n  // ..\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"configuration-1",children:"Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["To use the discovery processor, you'll need a GitHub integration\n",(0,i.jsx)(t.a,{href:"/docs/integrations/github/locations",children:"set up"})," with either a ",(0,i.jsx)(t.a,{href:"/docs/getting-started/config/authentication",children:"Personal Access Token"})," or ",(0,i.jsx)(t.a,{href:"/docs/integrations/github/github-apps",children:"GitHub Apps"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Then you can add a location target to the catalog configuration:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"catalog:\n  locations:\n    # (since 0.13.5) Scan all repositories for a catalog-info.yaml in the root of the default branch\n    - type: github-discovery\n      target: https://github.com/myorg\n    # Or use a custom pattern for a subset of all repositories with default repository\n    - type: github-discovery\n      target: https://github.com/myorg/service-*/blob/-/catalog-info.yaml\n    # Or use a custom file format and location\n    - type: github-discovery\n      target: https://github.com/*/blob/-/docs/your-own-format.yaml\n    # Or use a specific branch-name\n    - type: github-discovery\n      target: https://github.com/*/blob/backstage-docs/catalog-info.yaml\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Note the ",(0,i.jsx)(t.code,{children:"github-discovery"})," type, as this is not a regular ",(0,i.jsx)(t.code,{children:"url"})," processor."]}),"\n",(0,i.jsx)(t.p,{children:"When using a custom pattern, the target is composed of three parts:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The base organization URL, ",(0,i.jsx)(t.code,{children:"https://github.com/myorg"})," in this case"]}),"\n",(0,i.jsxs)(t.li,{children:["The repository blob to scan, which accepts * wildcard tokens. This can simply\nbe ",(0,i.jsx)(t.code,{children:"*"})," to scan all repositories in the organization. This example only looks\nfor repositories prefixed with ",(0,i.jsx)(t.code,{children:"service-"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["The path within each repository to find the catalog YAML file. This will\nusually be ",(0,i.jsx)(t.code,{children:"/blob/main/catalog-info.yaml"}),", ",(0,i.jsx)(t.code,{children:"/blob/master/catalog-info.yaml"})," or\na similar variation for catalog files stored in the root directory of each\nrepository. You could also use a dash (",(0,i.jsx)(t.code,{children:"-"}),") for referring to the default\nbranch."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"github-api-rate-limits-1",children:"GitHub API Rate Limits"}),"\n",(0,i.jsxs)(t.p,{children:["GitHub ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting",children:"rate limits"})," API requests to 5,000 per hour (or more for Enterprise\naccounts). The default Backstage catalog backend refreshes data every 100\nseconds, which issues an API request for each discovered location."]}),"\n",(0,i.jsxs)(t.p,{children:["This means if you have more than ~140 catalog entities, you may get throttled by\nrate limiting. You can change the refresh rate of the catalog in your ",(0,i.jsx)(t.code,{children:"packages/backend/src/plugins/catalog.ts"})," file:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"const builder = await CatalogBuilder.create(env);\n\n// For example, to refresh every 5 minutes (300 seconds).\nbuilder.setProcessingIntervalSeconds(300);\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Alternatively, or additionally, you can configure ",(0,i.jsx)(t.a,{href:"/docs/integrations/github/github-apps",children:"github-apps"})," authentication\nwhich carries a much higher rate limit at GitHub."]}),"\n",(0,i.jsx)(t.p,{children:"This is true for any method of adding GitHub entities to the catalog, but\nespecially easy to hit with automatic discovery."})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},371426:(e,t,n)=>{var i=n(827378),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var i,o={},l=null,d=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,i)&&!c.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:r,type:e,key:l,ref:d,props:o,_owner:a.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),g=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f=Object.assign,b={};function m(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||p}function y(){}function x(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||p}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var v=x.prototype=new y;v.constructor=x,f(v,m.prototype),v.isPureReactComponent=!0;var j=Array.isArray,k=Object.prototype.hasOwnProperty,w={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,i){var r,o={},s=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)k.call(t,r)&&!P.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=i;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:n,type:e,key:s,ref:a,props:o,_owner:w.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var S=/\/+/g;function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,r,o,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case i:c=!0}}if(c)return s=s(c=e),e=""===o?"."+I(c,0):o,j(s)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),T(s,t,r,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e)),t.push(s)),1;if(c=0,o=""===o?".":o+":",j(e))for(var l=0;l<e.length;l++){var d=o+I(a=e[l],l);c+=T(a,t,r,d,s)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=g&&e[g]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(a=e.next()).done;)c+=T(a=a.value,t,r,d=o+I(a,l++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function R(e,t,n){if(null==e)return e;var i=[],r=0;return T(e,i,"","",(function(e){return t.call(n,e,r++)})),i}function A(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var C={current:null},G={transition:null},H={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:G,ReactCurrentOwner:w};t.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=r,t.Profiler=s,t.PureComponent=x,t.StrictMode=o,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,t.cloneElement=function(e,t,i){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=f({},e.props),o=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=w.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)k.call(t,l)&&!P.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=i;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}return{$$typeof:n,type:e.type,key:o,ref:s,props:r,_owner:a}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=G.transition;G.transition={};try{e()}finally{G.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return C.current.useCallback(e,t)},t.useContext=function(e){return C.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return C.current.useDeferredValue(e)},t.useEffect=function(e,t){return C.current.useEffect(e,t)},t.useId=function(){return C.current.useId()},t.useImperativeHandle=function(e,t,n){return C.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return C.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return C.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return C.current.useMemo(e,t)},t.useReducer=function(e,t,n){return C.current.useReducer(e,t,n)},t.useRef=function(e){return C.current.useRef(e)},t.useState=function(e){return C.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return C.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return C.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var i=n(667294);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);