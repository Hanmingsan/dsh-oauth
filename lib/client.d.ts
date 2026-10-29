import type { Context } from '@deepseek-ai/cordis';
import { type OAuthLocaleKey } from './client-locales.js';
declare module '@deepseek-ai/dsh-client-ui-slots' {
    interface LocaleNamespaceMap {
        'settings.oauth': OAuthLocaleKey;
    }
}
export interface OAuthStatus {
    codex: {
        authenticated: boolean;
    };
    gemini: {
        authenticated: boolean;
    };
}
export interface OAuthLoginResult {
    authUrl: string;
    /** Whether the authorization page opened in its own tab; false means the caller must offer a manual link. */
    opened: boolean;
}
export interface OAuthBridgeClient {
    status(): Promise<OAuthStatus>;
    login(provider: 'codex' | 'gemini'): Promise<OAuthLoginResult>;
    logout(provider: 'codex' | 'gemini'): Promise<void>;
}
export declare const inject: readonly ["slots", "locale"];
/**
 * Create the browser-side client for the loopback OAuth control server.
 *
 * @param baseUrl - loopback control server URL.
 * @returns status, login, and logout operations.
 */
export declare function createOAuthBridgeClient(baseUrl?: string): OAuthBridgeClient;
/**
 * Register the OAuth panel in the DSH Web settings surface.
 *
 * @param ctx - DSH client context providing the settings and locale services.
 */
export declare function apply(ctx: Context): void;
//# sourceMappingURL=client.d.ts.map