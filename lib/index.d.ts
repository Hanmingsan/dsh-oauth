import type { Context } from '@deepseek-ai/cordis';
import { type Server } from 'node:http';
export interface Config {
    dshHome?: string;
    controlPort?: number;
    codexRedirectPort?: number;
}
export declare const name = "@kelvinwww/dsh-oauth";
export declare const inject: readonly ["credentials", "llm", "settings"];
interface ControlDependencies {
    codex: {
        startCodexLogin(): Promise<{
            authUrl: string;
        }>;
        logout(): Promise<void>;
    };
    gemini: {
        startGeminiLogin(): Promise<{
            authUrl: string;
        }>;
        logout(): Promise<void>;
        isAuthenticated(): Promise<boolean>;
    };
    dshHome?: string;
    port: number;
}
/**
 * Start the loopback control API used by the small OAuth status UI.
 *
 * @param dependencies - OAuth operations and local server configuration.
 * @returns the running server and an async disposer.
 */
export declare function createControlServer(dependencies: ControlDependencies): Promise<{
    server: Server;
    close: () => Promise<void>;
}>;
/**
 * Mount the OAuth bridge into a DSH Cordis context.
 *
 * @param ctx - DSH context providing credentials and the LLM registry.
 * @param config - small plugin configuration surface.
 */
export declare function apply(ctx: Context, config?: Config): void;
export { GeminiCliAdapter } from './gemini.js';
export { createCodexService } from './codex.js';
export { createGeminiService } from './gemini.js';
export * from './storage.js';
//# sourceMappingURL=index.d.ts.map