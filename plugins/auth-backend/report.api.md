## API Report File for "@backstage/plugin-auth-backend"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { AuthOwnershipResolver } from '@backstage/plugin-auth-node';
import { AuthProviderConfig as AuthProviderConfig_2 } from '@backstage/plugin-auth-node';
import { AuthProviderFactory as AuthProviderFactory_2 } from '@backstage/plugin-auth-node';
import { AuthProviderRouteHandlers as AuthProviderRouteHandlers_2 } from '@backstage/plugin-auth-node';
import { AuthResolverCatalogUserQuery as AuthResolverCatalogUserQuery_2 } from '@backstage/plugin-auth-node';
import { AuthResolverContext as AuthResolverContext_2 } from '@backstage/plugin-auth-node';
import { AuthService } from '@backstage/backend-plugin-api';
import { AwsAlbResult as AwsAlbResult_2 } from '@backstage/plugin-auth-backend-module-aws-alb-provider';
import { AzureEasyAuthResult } from '@backstage/plugin-auth-backend-module-azure-easyauth-provider';
import { BackendFeature } from '@backstage/backend-plugin-api';
import { BackstageSignInResult } from '@backstage/plugin-auth-node';
import { CacheService } from '@backstage/backend-plugin-api';
import { CatalogApi } from '@backstage/catalog-client';
import { ClientAuthResponse } from '@backstage/plugin-auth-node';
import { cloudflareAccessSignInResolvers } from '@backstage/plugin-auth-backend-module-cloudflare-access-provider';
import { Config } from '@backstage/config';
import { CookieConfigurer as CookieConfigurer_2 } from '@backstage/plugin-auth-node';
import { DatabaseService } from '@backstage/backend-plugin-api';
import { decodeOAuthState } from '@backstage/plugin-auth-node';
import { DiscoveryService } from '@backstage/backend-plugin-api';
import { encodeOAuthState } from '@backstage/plugin-auth-node';
import { Entity } from '@backstage/catalog-model';
import express from 'express';
import { GcpIapResult as GcpIapResult_2 } from '@backstage/plugin-auth-backend-module-gcp-iap-provider';
import { GcpIapTokenInfo as GcpIapTokenInfo_2 } from '@backstage/plugin-auth-backend-module-gcp-iap-provider';
import { HttpAuthService } from '@backstage/backend-plugin-api';
import { LoggerService } from '@backstage/backend-plugin-api';
import { OAuth2ProxyResult as OAuth2ProxyResult_2 } from '@backstage/plugin-auth-backend-module-oauth2-proxy-provider';
import { OAuthEnvironmentHandler as OAuthEnvironmentHandler_2 } from '@backstage/plugin-auth-node';
import { OAuthState as OAuthState_2 } from '@backstage/plugin-auth-node';
import { OidcAuthResult as OidcAuthResult_2 } from '@backstage/plugin-auth-backend-module-oidc-provider';
import { prepareBackstageIdentityResponse as prepareBackstageIdentityResponse_2 } from '@backstage/plugin-auth-node';
import { Profile } from 'passport';
import { ProfileInfo as ProfileInfo_2 } from '@backstage/plugin-auth-node';
import { RootConfigService } from '@backstage/backend-plugin-api';
import { SignInInfo as SignInInfo_2 } from '@backstage/plugin-auth-node';
import { SignInResolver as SignInResolver_2 } from '@backstage/plugin-auth-node';
import { TokenManager } from '@backstage/backend-common';
import { TokenParams as TokenParams_2 } from '@backstage/plugin-auth-node';
import { UserEntity } from '@backstage/catalog-model';
import { WebMessageResponse as WebMessageResponse_2 } from '@backstage/plugin-auth-node';

// @public @deprecated
export type AuthHandler<TAuthResult> = (
  input: TAuthResult,
  context: AuthResolverContext_2,
) => Promise<AuthHandlerResult>;

// @public @deprecated
export type AuthHandlerResult = {
  profile: ProfileInfo_2;
};

// @public
const authPlugin: BackendFeature;
export default authPlugin;

// @public @deprecated (undocumented)
export type AuthProviderConfig = AuthProviderConfig_2;

// @public @deprecated (undocumented)
export type AuthProviderFactory = AuthProviderFactory_2;

// @public @deprecated (undocumented)
export type AuthProviderRouteHandlers = AuthProviderRouteHandlers_2;

// @public @deprecated (undocumented)
export type AuthResolverCatalogUserQuery = AuthResolverCatalogUserQuery_2;

// @public @deprecated (undocumented)
export type AuthResolverContext = AuthResolverContext_2;

// @public @deprecated (undocumented)
export type AuthResponse<TProviderInfo> = ClientAuthResponse<TProviderInfo>;

// @public @deprecated
export type AwsAlbResult = AwsAlbResult_2;

// @public @deprecated (undocumented)
export type BitbucketOAuthResult = {
  fullProfile: BitbucketPassportProfile;
  params: {
    id_token?: string;
    scope: string;
    expires_in: number;
  };
  accessToken: string;
  refreshToken?: string;
};

// @public @deprecated (undocumented)
export type BitbucketPassportProfile = Profile & {
  id?: string;
  displayName?: string;
  username?: string;
  avatarUrl?: string;
  _json?: {
    links?: {
      avatar?: {
        href?: string;
      };
    };
  };
};

// @public @deprecated (undocumented)
export type BitbucketServerOAuthResult = {
  fullProfile: Profile;
  params: {
    scope: string;
    access_token?: string;
    token_type?: string;
    expires_in?: number;
  };
  accessToken: string;
  refreshToken?: string;
};

// @public
export class CatalogIdentityClient {
  constructor(options: {
    catalogApi: CatalogApi;
    tokenManager?: TokenManager;
    discovery: DiscoveryService;
    auth?: AuthService;
    httpAuth?: HttpAuthService;
  });
  findUser(query: { annotations: Record<string, string> }): Promise<UserEntity>;
  resolveCatalogMembership(query: {
    entityRefs: string[];
    logger?: LoggerService;
  }): Promise<string[]>;
}

// @public @deprecated
export type CloudflareAccessClaims = {
  aud: string[];
  email: string;
  exp: number;
  iat: number;
  nonce: string;
  identity_nonce: string;
  sub: string;
  iss: string;
  custom: string;
};

// @public @deprecated
export type CloudflareAccessGroup = {
  id: string;
  name: string;
  email: string;
};

// @public @deprecated
export type CloudflareAccessIdentityProfile = {
  id: string;
  name: string;
  email: string;
  groups: CloudflareAccessGroup[];
};

// @public @deprecated (undocumented)
export type CloudflareAccessResult = {
  claims: CloudflareAccessClaims;
  cfIdentity: CloudflareAccessIdentityProfile;
  expiresInSeconds?: number;
  token: string;
};

// @public @deprecated (undocumented)
export type CookieConfigurer = CookieConfigurer_2;

// @public
export function createAuthProviderIntegration<
  TCreateOptions extends unknown[],
  TResolvers extends {
    [name in string]: (...args: any[]) => SignInResolver_2<any>;
  },
>(config: {
  create: (...args: TCreateOptions) => AuthProviderFactory_2;
  resolvers?: TResolvers;
}): Readonly<{
  create: (...args: TCreateOptions) => AuthProviderFactory_2;
  resolvers: Readonly<string extends keyof TResolvers ? never : TResolvers>;
}>;

// @public (undocumented)
export function createOriginFilter(config: Config): (origin: string) => boolean;

// @public @deprecated (undocumented)
export function createRouter(options: RouterOptions): Promise<express.Router>;

// @public
export const defaultAuthProviderFactories: {
  [providerId: string]: AuthProviderFactory_2;
};

// @public @deprecated (undocumented)
export type EasyAuthResult = AzureEasyAuthResult;

// @public @deprecated (undocumented)
export const encodeState: typeof encodeOAuthState;

// @public @deprecated (undocumented)
export const ensuresXRequestedWith: (req: express.Request) => boolean;

// @public @deprecated
export type GcpIapResult = GcpIapResult_2;

// @public @deprecated
export type GcpIapTokenInfo = GcpIapTokenInfo_2;

// @public
export function getDefaultOwnershipEntityRefs(entity: Entity): string[];

// @public (undocumented)
export type GithubOAuthResult = {
  fullProfile: Profile;
  params: {
    scope: string;
    expires_in?: string;
    refresh_token_expires_in?: string;
  };
  accessToken: string;
  refreshToken?: string;
};

// @public @deprecated (undocumented)
export type OAuth2ProxyResult = OAuth2ProxyResult_2;

// @public @deprecated (undocumented)
export class OAuthAdapter implements AuthProviderRouteHandlers_2 {
  constructor(handlers: OAuthHandlers, options: OAuthAdapterOptions);
  // (undocumented)
  frameHandler(req: express.Request, res: express.Response): Promise<void>;
  // (undocumented)
  static fromConfig(
    config: AuthProviderConfig_2,
    handlers: OAuthHandlers,
    options: Pick<
      OAuthAdapterOptions,
      'providerId' | 'persistScopes' | 'callbackUrl'
    >,
  ): OAuthAdapter;
  // (undocumented)
  logout(req: express.Request, res: express.Response): Promise<void>;
  // (undocumented)
  refresh(req: express.Request, res: express.Response): Promise<void>;
  // (undocumented)
  start(req: express.Request, res: express.Response): Promise<void>;
}

// @public @deprecated (undocumented)
export type OAuthAdapterOptions = {
  providerId: string;
  persistScopes?: boolean;
  appOrigin: string;
  baseUrl: string;
  cookieConfigurer: CookieConfigurer_2;
  isOriginAllowed: (origin: string) => boolean;
  callbackUrl: string;
};

// @public @deprecated (undocumented)
export const OAuthEnvironmentHandler: typeof OAuthEnvironmentHandler_2;

// @public @deprecated (undocumented)
export interface OAuthHandlers {
  handler(req: express.Request): Promise<{
    response: OAuthResponse;
    refreshToken?: string;
  }>;
  logout?(req: OAuthLogoutRequest): Promise<void>;
  refresh?(req: OAuthRefreshRequest): Promise<{
    response: OAuthResponse;
    refreshToken?: string;
  }>;
  start(req: OAuthStartRequest): Promise<OAuthStartResponse>;
}

// @public @deprecated (undocumented)
export type OAuthLogoutRequest = express.Request<{}> & {
  refreshToken: string;
};

// @public @deprecated (undocumented)
export type OAuthProviderInfo = {
  accessToken: string;
  idToken?: string;
  expiresInSeconds?: number;
  scope: string;
};

// @public @deprecated
export type OAuthProviderOptions = {
  clientId: string;
  clientSecret: string;
  callbackUrl: string;
};

// @public @deprecated (undocumented)
export type OAuthRefreshRequest = express.Request<{}> & {
  scope: string;
  refreshToken: string;
};

// @public @deprecated (undocumented)
export type OAuthResponse = {
  profile: ProfileInfo_2;
  providerInfo: OAuthProviderInfo;
  backstageIdentity?: BackstageSignInResult;
};

// @public @deprecated (undocumented)
export type OAuthResult = {
  fullProfile: Profile;
  params: {
    id_token?: string;
    scope: string;
    token_type?: string;
    expires_in: number;
  };
  accessToken: string;
  refreshToken?: string;
};

// @public @deprecated (undocumented)
export type OAuthStartRequest = express.Request<{}> & {
  scope: string;
  state: OAuthState;
};

// @public @deprecated (undocumented)
export type OAuthStartResponse = {
  url: string;
  status?: number;
};

// @public @deprecated (undocumented)
export type OAuthState = OAuthState_2;

// @public @deprecated (undocumented)
export type OidcAuthResult = OidcAuthResult_2;

// @public @deprecated (undocumented)
export const postMessageResponse: (
  res: express.Response,
  appOrigin: string,
  response: WebMessageResponse,
) => void;

// @public @deprecated (undocumented)
export const prepareBackstageIdentityResponse: typeof prepareBackstageIdentityResponse_2;

// @public @deprecated (undocumented)
export type ProfileInfo = ProfileInfo_2;

// @public (undocumented)
export type ProviderFactories = {
  [s: string]: AuthProviderFactory_2;
};

// @public
export const providers: Readonly<{
  atlassian: Readonly<{
    create: (
      options?:
        | {
            authHandler?: AuthHandler<OAuthResult> | undefined;
            signIn?:
              | {
                  resolver: SignInResolver_2<OAuthResult>;
                }
              | undefined;
          }
        | undefined,
    ) => AuthProviderFactory_2;
    resolvers: never;
  }>;
  auth0: Readonly<{
    create: (
      options?:
        | {
            authHandler?: AuthHandler<OAuthResult> | undefined;
            signIn?:
              | {
                  resolver: SignInResolver_2<OAuthResult>;
                }
              | undefined;
          }
        | undefined,
    ) => AuthProviderFactory_2;
    resolvers: never;
  }>;
  awsAlb: Readonly<{
    create: (
      options?:
        | {
            authHandler?: AuthHandler<AwsAlbResult_2> | undefined;
            signIn: {
              resolver: SignInResolver_2<AwsAlbResult_2>;
            };
          }
        | undefined,
    ) => AuthProviderFactory_2;
    resolvers: never;
  }>;
  bitbucket: Readonly<{
    create: (
      options?:
        | {
            authHandler?: AuthHandler<OAuthResult> | undefined;
            signIn?:
              | {
                  resolver: SignInResolver_2<OAuthResult>;
                }
              | undefined;
          }
        | undefined,
    ) => AuthProviderFactory_2;
    resolvers: Readonly<{
      userIdMatchingUserEntityAnnotation: () => SignInResolver_2<OAuthResult>;
      usernameMatchingUserEntityAnnotation: () => SignInResolver_2<OAuthResult>;
    }>;
  }>;
  bitbucketServer: Readonly<{
    create: (
      options?:
        | {
            authHandler?: AuthHandler<BitbucketServerOAuthResult> | undefined;
            signIn?:
              | {
                  resolver: SignInResolver_2<BitbucketServerOAuthResult>;
                }
              | undefined;
          }
        | undefined,
    ) => AuthProviderFactory_2;
    resolvers: Readonly<{
      emailMatchingUserEntityProfileEmail: () => SignInResolver_2<BitbucketServerOAuthResult>;
    }>;
  }>;
  cfAccess: Readonly<{
    create: (options: {
      authHandler?: AuthHandler<CloudflareAccessResult> | undefined;
      signIn: {
        resolver: SignInResolver_2<CloudflareAccessResult>;
      };
      cache?: CacheService | undefined;
    }) => AuthProviderFactory_2;
    resolvers: Readonly<cloudflareAccessSignInResolvers>;
  }>;
  gcpIap: Readonly<{
    create: (options: {
      authHandler?: AuthHandler<GcpIapResult_2> | undefined;
      signIn: {
        resolver: SignInResolver_2<GcpIapResult_2>;
      };
    }) => AuthProviderFactory_2;
    resolvers: never;
  }>;
  github: Readonly<{
    create: (
      options?:
        | {
            authHandler?: AuthHandler<GithubOAuthResult> | undefined;
            signIn?:
              | {
                  resolver: SignInResolver_2<GithubOAuthResult>;
                }
              | undefined;
            stateEncoder?: StateEncoder | undefined;
          }
        | undefined,
    ) => AuthProviderFactory_2;
    resolvers: Readonly<{
      usernameMatchingUserEntityName: () => SignInResolver_2<GithubOAuthResult>;
    }>;
  }>;
  gitlab: Readonly<{
    create: (
      options?:
        | {
            authHandler?: AuthHandler<OAuthResult> | undefined;
            signIn?:
              | {
                  resolver: SignInResolver_2<OAuthResult>;
                }
              | undefined;
          }
        | undefined,
    ) => AuthProviderFactory_2;
    resolvers: never;
  }>;
  google: Readonly<{
    create: (
      options?:
        | {
            authHandler?: AuthHandler<OAuthResult> | undefined;
            signIn?:
              | {
                  resolver: SignInResolver_2<OAuthResult>;
                }
              | undefined;
          }
        | undefined,
    ) => AuthProviderFactory_2;
    resolvers: Readonly<{
      emailMatchingUserEntityProfileEmail: () => SignInResolver_2<OAuthResult>;
      emailLocalPartMatchingUserEntityName: () => SignInResolver_2<OAuthResult>;
      emailMatchingUserEntityAnnotation: () => SignInResolver_2<OAuthResult>;
    }>;
  }>;
  microsoft: Readonly<{
    create: (
      options?:
        | {
            authHandler?: AuthHandler<OAuthResult> | undefined;
            signIn?:
              | {
                  resolver: SignInResolver_2<OAuthResult>;
                }
              | undefined;
          }
        | undefined,
    ) => AuthProviderFactory_2;
    resolvers: Readonly<{
      emailMatchingUserEntityProfileEmail: () => SignInResolver_2<OAuthResult>;
      emailLocalPartMatchingUserEntityName: () => SignInResolver_2<OAuthResult>;
      userIdMatchingUserEntityAnnotation: () => SignInResolver_2<OAuthResult>;
      emailMatchingUserEntityAnnotation: () => SignInResolver_2<OAuthResult>;
    }>;
  }>;
  oauth2: Readonly<{
    create: (
      options?:
        | {
            authHandler?: AuthHandler<OAuthResult> | undefined;
            signIn?:
              | {
                  resolver: SignInResolver_2<OAuthResult>;
                }
              | undefined;
          }
        | undefined,
    ) => AuthProviderFactory_2;
    resolvers: never;
  }>;
  oauth2Proxy: Readonly<{
    create: (options: {
      authHandler?: AuthHandler<OAuth2ProxyResult_2> | undefined;
      signIn: {
        resolver: SignInResolver_2<OAuth2ProxyResult_2>;
      };
    }) => AuthProviderFactory_2;
    resolvers: never;
  }>;
  oidc: Readonly<{
    create: (
      options?:
        | {
            authHandler?: AuthHandler<OidcAuthResult_2> | undefined;
            signIn?:
              | {
                  resolver: SignInResolver_2<OidcAuthResult_2>;
                }
              | undefined;
          }
        | undefined,
    ) => AuthProviderFactory_2;
    resolvers: Readonly<{
      emailLocalPartMatchingUserEntityName: () => SignInResolver_2<unknown>;
      emailMatchingUserEntityProfileEmail: () => SignInResolver_2<unknown>;
    }>;
  }>;
  okta: Readonly<{
    create: (
      options?:
        | {
            authHandler?: AuthHandler<OAuthResult> | undefined;
            signIn?:
              | {
                  resolver: SignInResolver_2<OAuthResult>;
                }
              | undefined;
          }
        | undefined,
    ) => AuthProviderFactory_2;
    resolvers: Readonly<{
      emailLocalPartMatchingUserEntityName: () => SignInResolver_2<unknown>;
      emailMatchingUserEntityProfileEmail: () => SignInResolver_2<unknown>;
      emailMatchingUserEntityAnnotation(): SignInResolver_2<OAuthResult>;
    }>;
  }>;
  onelogin: Readonly<{
    create: (
      options?:
        | {
            authHandler?: AuthHandler<OAuthResult> | undefined;
            signIn?:
              | {
                  resolver: SignInResolver_2<OAuthResult>;
                }
              | undefined;
          }
        | undefined,
    ) => AuthProviderFactory_2;
    resolvers: never;
  }>;
  saml: Readonly<{
    create: (
      options?:
        | {
            authHandler?: AuthHandler<SamlAuthResult> | undefined;
            signIn?:
              | {
                  resolver: SignInResolver_2<SamlAuthResult>;
                }
              | undefined;
          }
        | undefined,
    ) => AuthProviderFactory_2;
    resolvers: Readonly<{
      nameIdMatchingUserEntityName(): SignInResolver_2<SamlAuthResult>;
    }>;
  }>;
  easyAuth: Readonly<{
    create: (
      options?:
        | {
            authHandler?: AuthHandler<AzureEasyAuthResult> | undefined;
            signIn: {
              resolver: SignInResolver_2<AzureEasyAuthResult>;
            };
          }
        | undefined,
    ) => AuthProviderFactory_2;
    resolvers: never;
  }>;
}>;

// @public @deprecated (undocumented)
export const readState: typeof decodeOAuthState;

// @public @deprecated (undocumented)
export interface RouterOptions {
  // (undocumented)
  auth?: AuthService;
  // (undocumented)
  catalogApi?: CatalogApi;
  // (undocumented)
  config: RootConfigService;
  // (undocumented)
  database: DatabaseService;
  // (undocumented)
  disableDefaultProviderFactories?: boolean;
  // (undocumented)
  discovery: DiscoveryService;
  // (undocumented)
  httpAuth?: HttpAuthService;
  // (undocumented)
  logger: LoggerService;
  // (undocumented)
  ownershipResolver?: AuthOwnershipResolver;
  // (undocumented)
  providerFactories?: ProviderFactories;
  // (undocumented)
  tokenFactoryAlgorithm?: string;
  // (undocumented)
  tokenManager?: TokenManager;
}

// @public (undocumented)
export type SamlAuthResult = {
  fullProfile: any;
};

// @public @deprecated (undocumented)
export type SignInInfo<TAuthResult> = SignInInfo_2<TAuthResult>;

// @public @deprecated (undocumented)
export type SignInResolver<TAuthResult> = SignInResolver_2<TAuthResult>;

// @public @deprecated (undocumented)
export type StateEncoder = (req: OAuthStartRequest) => Promise<{
  encodedState: string;
}>;

// @public @deprecated (undocumented)
export type TokenParams = TokenParams_2;

// @public @deprecated (undocumented)
export const verifyNonce: (req: express.Request, providerId: string) => void;

// @public @deprecated (undocumented)
export type WebMessageResponse = WebMessageResponse_2;

// Warnings were encountered during analysis:
//
// src/identity/types.d.ts:13:1 - (ae-undocumented) Missing documentation for "TokenParams".
// src/lib/flow/authFlowHelpers.d.ts:8:22 - (ae-undocumented) Missing documentation for "postMessageResponse".
// src/lib/flow/authFlowHelpers.d.ts:13:22 - (ae-undocumented) Missing documentation for "ensuresXRequestedWith".
// src/lib/flow/types.d.ts:6:1 - (ae-undocumented) Missing documentation for "WebMessageResponse".
// src/lib/oauth/OAuthAdapter.d.ts:10:1 - (ae-undocumented) Missing documentation for "OAuthAdapterOptions".
// src/lib/oauth/OAuthAdapter.d.ts:23:1 - (ae-undocumented) Missing documentation for "OAuthAdapter".
// src/lib/oauth/OAuthAdapter.d.ts:26:5 - (ae-undocumented) Missing documentation for "fromConfig".
// src/lib/oauth/OAuthAdapter.d.ts:29:5 - (ae-undocumented) Missing documentation for "start".
// src/lib/oauth/OAuthAdapter.d.ts:30:5 - (ae-undocumented) Missing documentation for "frameHandler".
// src/lib/oauth/OAuthAdapter.d.ts:31:5 - (ae-undocumented) Missing documentation for "logout".
// src/lib/oauth/OAuthAdapter.d.ts:32:5 - (ae-undocumented) Missing documentation for "refresh".
// src/lib/oauth/OAuthEnvironmentHandler.d.ts:6:22 - (ae-undocumented) Missing documentation for "OAuthEnvironmentHandler".
// src/lib/oauth/helpers.d.ts:7:22 - (ae-undocumented) Missing documentation for "readState".
// src/lib/oauth/helpers.d.ts:12:22 - (ae-undocumented) Missing documentation for "encodeState".
// src/lib/oauth/helpers.d.ts:17:22 - (ae-undocumented) Missing documentation for "verifyNonce".
// src/lib/oauth/types.d.ts:29:1 - (ae-undocumented) Missing documentation for "OAuthResult".
// src/lib/oauth/types.d.ts:44:1 - (ae-undocumented) Missing documentation for "OAuthResponse".
// src/lib/oauth/types.d.ts:53:1 - (ae-undocumented) Missing documentation for "OAuthProviderInfo".
// src/lib/oauth/types.d.ts:75:1 - (ae-undocumented) Missing documentation for "OAuthState".
// src/lib/oauth/types.d.ts:80:1 - (ae-undocumented) Missing documentation for "OAuthStartRequest".
// src/lib/oauth/types.d.ts:88:1 - (ae-undocumented) Missing documentation for "OAuthRefreshRequest".
// src/lib/oauth/types.d.ts:96:1 - (ae-undocumented) Missing documentation for "OAuthLogoutRequest".
// src/lib/oauth/types.d.ts:103:1 - (ae-undocumented) Missing documentation for "OAuthHandlers".
// src/providers/azure-easyauth/index.d.ts:7:1 - (ae-undocumented) Missing documentation for "EasyAuthResult".
// src/providers/bitbucket/provider.d.ts:9:1 - (ae-undocumented) Missing documentation for "BitbucketOAuthResult".
// src/providers/bitbucket/provider.d.ts:23:1 - (ae-undocumented) Missing documentation for "BitbucketPassportProfile".
// src/providers/bitbucketServer/provider.d.ts:9:1 - (ae-undocumented) Missing documentation for "BitbucketServerOAuthResult".
// src/providers/cloudflare-access/provider.d.ts:90:1 - (ae-undocumented) Missing documentation for "CloudflareAccessResult".
// src/providers/github/provider.d.ts:5:1 - (ae-undocumented) Missing documentation for "GithubOAuthResult".
// src/providers/oauth2-proxy/index.d.ts:7:1 - (ae-undocumented) Missing documentation for "OAuth2ProxyResult".
// src/providers/oidc/index.d.ts:7:1 - (ae-undocumented) Missing documentation for "OidcAuthResult".
// src/providers/prepareBackstageIdentityResponse.d.ts:6:22 - (ae-undocumented) Missing documentation for "prepareBackstageIdentityResponse".
// src/providers/router.d.ts:9:1 - (ae-undocumented) Missing documentation for "ProviderFactories".
// src/providers/router.d.ts:27:1 - (ae-undocumented) Missing documentation for "createOriginFilter".
// src/providers/saml/provider.d.ts:6:1 - (ae-undocumented) Missing documentation for "SamlAuthResult".
// src/providers/types.d.ts:7:1 - (ae-undocumented) Missing documentation for "AuthResolverCatalogUserQuery".
// src/providers/types.d.ts:12:1 - (ae-undocumented) Missing documentation for "AuthResolverContext".
// src/providers/types.d.ts:17:1 - (ae-undocumented) Missing documentation for "CookieConfigurer".
// src/providers/types.d.ts:22:1 - (ae-undocumented) Missing documentation for "OAuthStartResponse".
// src/providers/types.d.ts:36:1 - (ae-undocumented) Missing documentation for "AuthProviderConfig".
// src/providers/types.d.ts:41:1 - (ae-undocumented) Missing documentation for "AuthProviderRouteHandlers".
// src/providers/types.d.ts:46:1 - (ae-undocumented) Missing documentation for "AuthProviderFactory".
// src/providers/types.d.ts:51:1 - (ae-undocumented) Missing documentation for "AuthResponse".
// src/providers/types.d.ts:56:1 - (ae-undocumented) Missing documentation for "ProfileInfo".
// src/providers/types.d.ts:61:1 - (ae-undocumented) Missing documentation for "SignInInfo".
// src/providers/types.d.ts:66:1 - (ae-undocumented) Missing documentation for "SignInResolver".
// src/providers/types.d.ts:96:1 - (ae-undocumented) Missing documentation for "StateEncoder".
// src/service/router.d.ts:11:1 - (ae-undocumented) Missing documentation for "RouterOptions".
// src/service/router.d.ts:12:5 - (ae-undocumented) Missing documentation for "logger".
// src/service/router.d.ts:13:5 - (ae-undocumented) Missing documentation for "database".
// src/service/router.d.ts:14:5 - (ae-undocumented) Missing documentation for "config".
// src/service/router.d.ts:15:5 - (ae-undocumented) Missing documentation for "discovery".
// src/service/router.d.ts:16:5 - (ae-undocumented) Missing documentation for "tokenManager".
// src/service/router.d.ts:17:5 - (ae-undocumented) Missing documentation for "auth".
// src/service/router.d.ts:18:5 - (ae-undocumented) Missing documentation for "httpAuth".
// src/service/router.d.ts:19:5 - (ae-undocumented) Missing documentation for "tokenFactoryAlgorithm".
// src/service/router.d.ts:20:5 - (ae-undocumented) Missing documentation for "providerFactories".
// src/service/router.d.ts:21:5 - (ae-undocumented) Missing documentation for "disableDefaultProviderFactories".
// src/service/router.d.ts:22:5 - (ae-undocumented) Missing documentation for "catalogApi".
// src/service/router.d.ts:23:5 - (ae-undocumented) Missing documentation for "ownershipResolver".
// src/service/router.d.ts:29:1 - (ae-undocumented) Missing documentation for "createRouter".
```
