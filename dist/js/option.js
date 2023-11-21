/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@notionhq/client/build/src/Client.js":
/*!***********************************************************!*\
  !*** ./node_modules/@notionhq/client/build/src/Client.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Client_auth, _Client_logLevel, _Client_logger, _Client_prefixUrl, _Client_timeoutMs, _Client_notionVersion, _Client_fetch, _Client_agent, _Client_userAgent;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const logging_1 = __webpack_require__(/*! ./logging */ "./node_modules/@notionhq/client/build/src/logging.js");
const errors_1 = __webpack_require__(/*! ./errors */ "./node_modules/@notionhq/client/build/src/errors.js");
const utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/@notionhq/client/build/src/utils.js");
const api_endpoints_1 = __webpack_require__(/*! ./api-endpoints */ "./node_modules/@notionhq/client/build/src/api-endpoints.js");
const node_fetch_1 = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
const package_json_1 = __webpack_require__(/*! ../package.json */ "./node_modules/@notionhq/client/build/package.json");
class Client {
    constructor(options) {
        var _a, _b, _c, _d, _e, _f;
        _Client_auth.set(this, void 0);
        _Client_logLevel.set(this, void 0);
        _Client_logger.set(this, void 0);
        _Client_prefixUrl.set(this, void 0);
        _Client_timeoutMs.set(this, void 0);
        _Client_notionVersion.set(this, void 0);
        _Client_fetch.set(this, void 0);
        _Client_agent.set(this, void 0);
        _Client_userAgent.set(this, void 0);
        /*
         * Notion API endpoints
         */
        this.blocks = {
            /**
             * Retrieve block
             */
            retrieve: (args) => {
                return this.request({
                    path: api_endpoints_1.getBlock.path(args),
                    method: api_endpoints_1.getBlock.method,
                    query: (0, utils_1.pick)(args, api_endpoints_1.getBlock.queryParams),
                    body: (0, utils_1.pick)(args, api_endpoints_1.getBlock.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Update block
             */
            update: (args) => {
                return this.request({
                    path: api_endpoints_1.updateBlock.path(args),
                    method: api_endpoints_1.updateBlock.method,
                    query: (0, utils_1.pick)(args, api_endpoints_1.updateBlock.queryParams),
                    body: (0, utils_1.pick)(args, api_endpoints_1.updateBlock.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Delete block
             */
            delete: (args) => {
                return this.request({
                    path: api_endpoints_1.deleteBlock.path(args),
                    method: api_endpoints_1.deleteBlock.method,
                    query: (0, utils_1.pick)(args, api_endpoints_1.deleteBlock.queryParams),
                    body: (0, utils_1.pick)(args, api_endpoints_1.deleteBlock.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            children: {
                /**
                 * Append block children
                 */
                append: (args) => {
                    return this.request({
                        path: api_endpoints_1.appendBlockChildren.path(args),
                        method: api_endpoints_1.appendBlockChildren.method,
                        query: (0, utils_1.pick)(args, api_endpoints_1.appendBlockChildren.queryParams),
                        body: (0, utils_1.pick)(args, api_endpoints_1.appendBlockChildren.bodyParams),
                        auth: args === null || args === void 0 ? void 0 : args.auth,
                    });
                },
                /**
                 * Retrieve block children
                 */
                list: (args) => {
                    return this.request({
                        path: api_endpoints_1.listBlockChildren.path(args),
                        method: api_endpoints_1.listBlockChildren.method,
                        query: (0, utils_1.pick)(args, api_endpoints_1.listBlockChildren.queryParams),
                        body: (0, utils_1.pick)(args, api_endpoints_1.listBlockChildren.bodyParams),
                        auth: args === null || args === void 0 ? void 0 : args.auth,
                    });
                },
            },
        };
        this.databases = {
            /**
             * List databases
             *
             * @deprecated Please use `search`
             */
            list: (args) => {
                return this.request({
                    path: api_endpoints_1.listDatabases.path(),
                    method: api_endpoints_1.listDatabases.method,
                    query: (0, utils_1.pick)(args, api_endpoints_1.listDatabases.queryParams),
                    body: (0, utils_1.pick)(args, api_endpoints_1.listDatabases.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Retrieve a database
             */
            retrieve: (args) => {
                return this.request({
                    path: api_endpoints_1.getDatabase.path(args),
                    method: api_endpoints_1.getDatabase.method,
                    query: (0, utils_1.pick)(args, api_endpoints_1.getDatabase.queryParams),
                    body: (0, utils_1.pick)(args, api_endpoints_1.getDatabase.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Query a database
             */
            query: (args) => {
                return this.request({
                    path: api_endpoints_1.queryDatabase.path(args),
                    method: api_endpoints_1.queryDatabase.method,
                    query: (0, utils_1.pick)(args, api_endpoints_1.queryDatabase.queryParams),
                    body: (0, utils_1.pick)(args, api_endpoints_1.queryDatabase.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Create a database
             */
            create: (args) => {
                return this.request({
                    path: api_endpoints_1.createDatabase.path(),
                    method: api_endpoints_1.createDatabase.method,
                    query: (0, utils_1.pick)(args, api_endpoints_1.createDatabase.queryParams),
                    body: (0, utils_1.pick)(args, api_endpoints_1.createDatabase.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Update a database
             */
            update: (args) => {
                return this.request({
                    path: api_endpoints_1.updateDatabase.path(args),
                    method: api_endpoints_1.updateDatabase.method,
                    query: (0, utils_1.pick)(args, api_endpoints_1.updateDatabase.queryParams),
                    body: (0, utils_1.pick)(args, api_endpoints_1.updateDatabase.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
        };
        this.pages = {
            /**
             * Create a page
             */
            create: (args) => {
                return this.request({
                    path: api_endpoints_1.createPage.path(),
                    method: api_endpoints_1.createPage.method,
                    query: (0, utils_1.pick)(args, api_endpoints_1.createPage.queryParams),
                    body: (0, utils_1.pick)(args, api_endpoints_1.createPage.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Retrieve a page
             */
            retrieve: (args) => {
                return this.request({
                    path: api_endpoints_1.getPage.path(args),
                    method: api_endpoints_1.getPage.method,
                    query: (0, utils_1.pick)(args, api_endpoints_1.getPage.queryParams),
                    body: (0, utils_1.pick)(args, api_endpoints_1.getPage.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Update page properties
             */
            update: (args) => {
                return this.request({
                    path: api_endpoints_1.updatePage.path(args),
                    method: api_endpoints_1.updatePage.method,
                    query: (0, utils_1.pick)(args, api_endpoints_1.updatePage.queryParams),
                    body: (0, utils_1.pick)(args, api_endpoints_1.updatePage.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            properties: {
                /**
                 * Retrieve page property
                 */
                retrieve: (args) => {
                    return this.request({
                        path: api_endpoints_1.getPageProperty.path(args),
                        method: api_endpoints_1.getPageProperty.method,
                        query: (0, utils_1.pick)(args, api_endpoints_1.getPageProperty.queryParams),
                        body: (0, utils_1.pick)(args, api_endpoints_1.getPageProperty.bodyParams),
                        auth: args === null || args === void 0 ? void 0 : args.auth,
                    });
                },
            },
        };
        this.users = {
            /**
             * Retrieve a user
             */
            retrieve: (args) => {
                return this.request({
                    path: api_endpoints_1.getUser.path(args),
                    method: api_endpoints_1.getUser.method,
                    query: (0, utils_1.pick)(args, api_endpoints_1.getUser.queryParams),
                    body: (0, utils_1.pick)(args, api_endpoints_1.getUser.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * List all users
             */
            list: (args) => {
                return this.request({
                    path: api_endpoints_1.listUsers.path(),
                    method: api_endpoints_1.listUsers.method,
                    query: (0, utils_1.pick)(args, api_endpoints_1.listUsers.queryParams),
                    body: (0, utils_1.pick)(args, api_endpoints_1.listUsers.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Get details about bot
             */
            me: (args) => {
                return this.request({
                    path: api_endpoints_1.getSelf.path(),
                    method: api_endpoints_1.getSelf.method,
                    query: (0, utils_1.pick)(args, api_endpoints_1.getSelf.queryParams),
                    body: (0, utils_1.pick)(args, api_endpoints_1.getSelf.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
        };
        this.comments = {
            /**
             * Create a comment
             */
            create: (args) => {
                return this.request({
                    path: api_endpoints_1.createComment.path(),
                    method: api_endpoints_1.createComment.method,
                    query: (0, utils_1.pick)(args, api_endpoints_1.createComment.queryParams),
                    body: (0, utils_1.pick)(args, api_endpoints_1.createComment.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * List comments
             */
            list: (args) => {
                return this.request({
                    path: api_endpoints_1.listComments.path(),
                    method: api_endpoints_1.listComments.method,
                    query: (0, utils_1.pick)(args, api_endpoints_1.listComments.queryParams),
                    body: (0, utils_1.pick)(args, api_endpoints_1.listComments.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
        };
        /**
         * Search
         */
        this.search = (args) => {
            return this.request({
                path: api_endpoints_1.search.path(),
                method: api_endpoints_1.search.method,
                query: (0, utils_1.pick)(args, api_endpoints_1.search.queryParams),
                body: (0, utils_1.pick)(args, api_endpoints_1.search.bodyParams),
                auth: args === null || args === void 0 ? void 0 : args.auth,
            });
        };
        this.oauth = {
            /**
             * Get token
             */
            token: (args) => {
                return this.request({
                    path: api_endpoints_1.oauthToken.path(),
                    method: api_endpoints_1.oauthToken.method,
                    query: (0, utils_1.pick)(args, api_endpoints_1.oauthToken.queryParams),
                    body: (0, utils_1.pick)(args, api_endpoints_1.oauthToken.bodyParams),
                    auth: {
                        client_id: args.client_id,
                        client_secret: args.client_secret,
                    },
                });
            },
        };
        __classPrivateFieldSet(this, _Client_auth, options === null || options === void 0 ? void 0 : options.auth, "f");
        __classPrivateFieldSet(this, _Client_logLevel, (_a = options === null || options === void 0 ? void 0 : options.logLevel) !== null && _a !== void 0 ? _a : logging_1.LogLevel.WARN, "f");
        __classPrivateFieldSet(this, _Client_logger, (_b = options === null || options === void 0 ? void 0 : options.logger) !== null && _b !== void 0 ? _b : (0, logging_1.makeConsoleLogger)(package_json_1.name), "f");
        __classPrivateFieldSet(this, _Client_prefixUrl, ((_c = options === null || options === void 0 ? void 0 : options.baseUrl) !== null && _c !== void 0 ? _c : "https://api.notion.com") + "/v1/", "f");
        __classPrivateFieldSet(this, _Client_timeoutMs, (_d = options === null || options === void 0 ? void 0 : options.timeoutMs) !== null && _d !== void 0 ? _d : 60000, "f");
        __classPrivateFieldSet(this, _Client_notionVersion, (_e = options === null || options === void 0 ? void 0 : options.notionVersion) !== null && _e !== void 0 ? _e : Client.defaultNotionVersion, "f");
        __classPrivateFieldSet(this, _Client_fetch, (_f = options === null || options === void 0 ? void 0 : options.fetch) !== null && _f !== void 0 ? _f : node_fetch_1.default, "f");
        __classPrivateFieldSet(this, _Client_agent, options === null || options === void 0 ? void 0 : options.agent, "f");
        __classPrivateFieldSet(this, _Client_userAgent, `notionhq-client/${package_json_1.version}`, "f");
    }
    /**
     * Sends a request.
     *
     * @param path
     * @param method
     * @param query
     * @param body
     * @returns
     */
    async request({ path, method, query, body, auth, }) {
        this.log(logging_1.LogLevel.INFO, "request start", { method, path });
        // If the body is empty, don't send the body in the HTTP request
        const bodyAsJsonString = !body || Object.entries(body).length === 0
            ? undefined
            : JSON.stringify(body);
        const url = new URL(`${__classPrivateFieldGet(this, _Client_prefixUrl, "f")}${path}`);
        if (query) {
            for (const [key, value] of Object.entries(query)) {
                if (value !== undefined) {
                    if (Array.isArray(value)) {
                        value.forEach(val => url.searchParams.append(key, decodeURIComponent(val)));
                    }
                    else {
                        url.searchParams.append(key, String(value));
                    }
                }
            }
        }
        // Allow both client ID / client secret based auth as well as token based auth.
        let authorizationHeader;
        if (typeof auth === "object") {
            // Client ID and secret based auth is **ONLY** supported when using the
            // `/oauth/token` endpoint. If this is the case, handle formatting the
            // authorization header as required by `Basic` auth.
            const unencodedCredential = `${auth.client_id}:${auth.client_secret}`;
            const encodedCredential = Buffer.from(unencodedCredential).toString("base64");
            authorizationHeader = { authorization: `Basic ${encodedCredential}` };
        }
        else {
            // Otherwise format authorization header as `Bearer` token auth.
            authorizationHeader = this.authAsHeaders(auth);
        }
        const headers = {
            ...authorizationHeader,
            "Notion-Version": __classPrivateFieldGet(this, _Client_notionVersion, "f"),
            "user-agent": __classPrivateFieldGet(this, _Client_userAgent, "f"),
        };
        if (bodyAsJsonString !== undefined) {
            headers["content-type"] = "application/json";
        }
        try {
            const response = await errors_1.RequestTimeoutError.rejectAfterTimeout(__classPrivateFieldGet(this, _Client_fetch, "f").call(this, url.toString(), {
                method: method.toUpperCase(),
                headers,
                body: bodyAsJsonString,
                agent: __classPrivateFieldGet(this, _Client_agent, "f"),
            }), __classPrivateFieldGet(this, _Client_timeoutMs, "f"));
            const responseText = await response.text();
            if (!response.ok) {
                throw (0, errors_1.buildRequestError)(response, responseText);
            }
            const responseJson = JSON.parse(responseText);
            this.log(logging_1.LogLevel.INFO, `request success`, { method, path });
            return responseJson;
        }
        catch (error) {
            if (!(0, errors_1.isNotionClientError)(error)) {
                throw error;
            }
            // Log the error if it's one of our known error types
            this.log(logging_1.LogLevel.WARN, `request fail`, {
                code: error.code,
                message: error.message,
            });
            if ((0, errors_1.isHTTPResponseError)(error)) {
                // The response body may contain sensitive information so it is logged separately at the DEBUG level
                this.log(logging_1.LogLevel.DEBUG, `failed response body`, {
                    body: error.body,
                });
            }
            throw error;
        }
    }
    /**
     * Emits a log message to the console.
     *
     * @param level The level for this message
     * @param args Arguments to send to the console
     */
    log(level, message, extraInfo) {
        if ((0, logging_1.logLevelSeverity)(level) >= (0, logging_1.logLevelSeverity)(__classPrivateFieldGet(this, _Client_logLevel, "f"))) {
            __classPrivateFieldGet(this, _Client_logger, "f").call(this, level, message, extraInfo);
        }
    }
    /**
     * Transforms an API key or access token into a headers object suitable for an HTTP request.
     *
     * This method uses the instance's value as the default when the input is undefined. If neither are defined, it returns
     * an empty object
     *
     * @param auth API key or access token
     * @returns headers key-value object
     */
    authAsHeaders(auth) {
        const headers = {};
        const authHeaderValue = auth !== null && auth !== void 0 ? auth : __classPrivateFieldGet(this, _Client_auth, "f");
        if (authHeaderValue !== undefined) {
            headers["authorization"] = `Bearer ${authHeaderValue}`;
        }
        return headers;
    }
}
exports["default"] = Client;
_Client_auth = new WeakMap(), _Client_logLevel = new WeakMap(), _Client_logger = new WeakMap(), _Client_prefixUrl = new WeakMap(), _Client_timeoutMs = new WeakMap(), _Client_notionVersion = new WeakMap(), _Client_fetch = new WeakMap(), _Client_agent = new WeakMap(), _Client_userAgent = new WeakMap();
Client.defaultNotionVersion = "2022-06-28";
//# sourceMappingURL=Client.js.map

/***/ }),

/***/ "./node_modules/@notionhq/client/build/src/api-endpoints.js":
/*!******************************************************************!*\
  !*** ./node_modules/@notionhq/client/build/src/api-endpoints.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


// cspell:disable-file
// Note: This is a generated file.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.oauthToken = exports.listComments = exports.createComment = exports.search = exports.createDatabase = exports.listDatabases = exports.queryDatabase = exports.updateDatabase = exports.getDatabase = exports.appendBlockChildren = exports.listBlockChildren = exports.deleteBlock = exports.updateBlock = exports.getBlock = exports.getPageProperty = exports.updatePage = exports.getPage = exports.createPage = exports.listUsers = exports.getUser = exports.getSelf = void 0;
exports.getSelf = {
    method: "get",
    pathParams: [],
    queryParams: [],
    bodyParams: [],
    path: () => `users/me`,
};
exports.getUser = {
    method: "get",
    pathParams: ["user_id"],
    queryParams: [],
    bodyParams: [],
    path: (p) => `users/${p.user_id}`,
};
exports.listUsers = {
    method: "get",
    pathParams: [],
    queryParams: ["start_cursor", "page_size"],
    bodyParams: [],
    path: () => `users`,
};
exports.createPage = {
    method: "post",
    pathParams: [],
    queryParams: [],
    bodyParams: ["parent", "properties", "icon", "cover", "content", "children"],
    path: () => `pages`,
};
exports.getPage = {
    method: "get",
    pathParams: ["page_id"],
    queryParams: ["filter_properties"],
    bodyParams: [],
    path: (p) => `pages/${p.page_id}`,
};
exports.updatePage = {
    method: "patch",
    pathParams: ["page_id"],
    queryParams: [],
    bodyParams: ["properties", "icon", "cover", "archived"],
    path: (p) => `pages/${p.page_id}`,
};
exports.getPageProperty = {
    method: "get",
    pathParams: ["page_id", "property_id"],
    queryParams: ["start_cursor", "page_size"],
    bodyParams: [],
    path: (p) => `pages/${p.page_id}/properties/${p.property_id}`,
};
exports.getBlock = {
    method: "get",
    pathParams: ["block_id"],
    queryParams: [],
    bodyParams: [],
    path: (p) => `blocks/${p.block_id}`,
};
exports.updateBlock = {
    method: "patch",
    pathParams: ["block_id"],
    queryParams: [],
    bodyParams: [
        "embed",
        "type",
        "archived",
        "bookmark",
        "image",
        "video",
        "pdf",
        "file",
        "audio",
        "code",
        "equation",
        "divider",
        "breadcrumb",
        "table_of_contents",
        "link_to_page",
        "table_row",
        "heading_1",
        "heading_2",
        "heading_3",
        "paragraph",
        "bulleted_list_item",
        "numbered_list_item",
        "quote",
        "to_do",
        "toggle",
        "template",
        "callout",
        "synced_block",
        "table",
    ],
    path: (p) => `blocks/${p.block_id}`,
};
exports.deleteBlock = {
    method: "delete",
    pathParams: ["block_id"],
    queryParams: [],
    bodyParams: [],
    path: (p) => `blocks/${p.block_id}`,
};
exports.listBlockChildren = {
    method: "get",
    pathParams: ["block_id"],
    queryParams: ["start_cursor", "page_size"],
    bodyParams: [],
    path: (p) => `blocks/${p.block_id}/children`,
};
exports.appendBlockChildren = {
    method: "patch",
    pathParams: ["block_id"],
    queryParams: [],
    bodyParams: ["children", "after"],
    path: (p) => `blocks/${p.block_id}/children`,
};
exports.getDatabase = {
    method: "get",
    pathParams: ["database_id"],
    queryParams: [],
    bodyParams: [],
    path: (p) => `databases/${p.database_id}`,
};
exports.updateDatabase = {
    method: "patch",
    pathParams: ["database_id"],
    queryParams: [],
    bodyParams: [
        "title",
        "description",
        "icon",
        "cover",
        "properties",
        "is_inline",
        "archived",
    ],
    path: (p) => `databases/${p.database_id}`,
};
exports.queryDatabase = {
    method: "post",
    pathParams: ["database_id"],
    queryParams: ["filter_properties"],
    bodyParams: ["sorts", "filter", "start_cursor", "page_size", "archived"],
    path: (p) => `databases/${p.database_id}/query`,
};
exports.listDatabases = {
    method: "get",
    pathParams: [],
    queryParams: ["start_cursor", "page_size"],
    bodyParams: [],
    path: () => `databases`,
};
exports.createDatabase = {
    method: "post",
    pathParams: [],
    queryParams: [],
    bodyParams: [
        "parent",
        "properties",
        "icon",
        "cover",
        "title",
        "description",
        "is_inline",
    ],
    path: () => `databases`,
};
exports.search = {
    method: "post",
    pathParams: [],
    queryParams: [],
    bodyParams: ["sort", "query", "start_cursor", "page_size", "filter"],
    path: () => `search`,
};
exports.createComment = {
    method: "post",
    pathParams: [],
    queryParams: [],
    bodyParams: ["parent", "rich_text", "discussion_id"],
    path: () => `comments`,
};
exports.listComments = {
    method: "get",
    pathParams: [],
    queryParams: ["block_id", "start_cursor", "page_size"],
    bodyParams: [],
    path: () => `comments`,
};
exports.oauthToken = {
    method: "post",
    pathParams: [],
    queryParams: [],
    bodyParams: ["grant_type", "code", "redirect_uri", "external_account"],
    path: () => `oauth/token`,
};
//# sourceMappingURL=api-endpoints.js.map

/***/ }),

/***/ "./node_modules/@notionhq/client/build/src/errors.js":
/*!***********************************************************!*\
  !*** ./node_modules/@notionhq/client/build/src/errors.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildRequestError = exports.APIResponseError = exports.UnknownHTTPResponseError = exports.isHTTPResponseError = exports.RequestTimeoutError = exports.isNotionClientError = exports.ClientErrorCode = exports.APIErrorCode = void 0;
const utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/@notionhq/client/build/src/utils.js");
/**
 * Error codes returned in responses from the API.
 */
var APIErrorCode;
(function (APIErrorCode) {
    APIErrorCode["Unauthorized"] = "unauthorized";
    APIErrorCode["RestrictedResource"] = "restricted_resource";
    APIErrorCode["ObjectNotFound"] = "object_not_found";
    APIErrorCode["RateLimited"] = "rate_limited";
    APIErrorCode["InvalidJSON"] = "invalid_json";
    APIErrorCode["InvalidRequestURL"] = "invalid_request_url";
    APIErrorCode["InvalidRequest"] = "invalid_request";
    APIErrorCode["ValidationError"] = "validation_error";
    APIErrorCode["ConflictError"] = "conflict_error";
    APIErrorCode["InternalServerError"] = "internal_server_error";
    APIErrorCode["ServiceUnavailable"] = "service_unavailable";
})(APIErrorCode = exports.APIErrorCode || (exports.APIErrorCode = {}));
/**
 * Error codes generated for client errors.
 */
var ClientErrorCode;
(function (ClientErrorCode) {
    ClientErrorCode["RequestTimeout"] = "notionhq_client_request_timeout";
    ClientErrorCode["ResponseError"] = "notionhq_client_response_error";
})(ClientErrorCode = exports.ClientErrorCode || (exports.ClientErrorCode = {}));
/**
 * Base error type.
 */
class NotionClientErrorBase extends Error {
}
/**
 * @param error any value, usually a caught error.
 * @returns `true` if error is a `NotionClientError`.
 */
function isNotionClientError(error) {
    return (0, utils_1.isObject)(error) && error instanceof NotionClientErrorBase;
}
exports.isNotionClientError = isNotionClientError;
/**
 * Narrows down the types of a NotionClientError.
 * @param error any value, usually a caught error.
 * @param codes an object mapping from possible error codes to `true`
 * @returns `true` if error is a `NotionClientError` with a code in `codes`.
 */
function isNotionClientErrorWithCode(error, codes) {
    return isNotionClientError(error) && error.code in codes;
}
/**
 * Error thrown by the client if a request times out.
 */
class RequestTimeoutError extends NotionClientErrorBase {
    constructor(message = "Request to Notion API has timed out") {
        super(message);
        this.code = ClientErrorCode.RequestTimeout;
        this.name = "RequestTimeoutError";
    }
    static isRequestTimeoutError(error) {
        return isNotionClientErrorWithCode(error, {
            [ClientErrorCode.RequestTimeout]: true,
        });
    }
    static rejectAfterTimeout(promise, timeoutMS) {
        return new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => {
                reject(new RequestTimeoutError());
            }, timeoutMS);
            promise
                .then(resolve)
                .catch(reject)
                .then(() => clearTimeout(timeoutId));
        });
    }
}
exports.RequestTimeoutError = RequestTimeoutError;
class HTTPResponseError extends NotionClientErrorBase {
    constructor(args) {
        super(args.message);
        this.name = "HTTPResponseError";
        const { code, status, headers, rawBodyText } = args;
        this.code = code;
        this.status = status;
        this.headers = headers;
        this.body = rawBodyText;
    }
}
const httpResponseErrorCodes = {
    [ClientErrorCode.ResponseError]: true,
    [APIErrorCode.Unauthorized]: true,
    [APIErrorCode.RestrictedResource]: true,
    [APIErrorCode.ObjectNotFound]: true,
    [APIErrorCode.RateLimited]: true,
    [APIErrorCode.InvalidJSON]: true,
    [APIErrorCode.InvalidRequestURL]: true,
    [APIErrorCode.InvalidRequest]: true,
    [APIErrorCode.ValidationError]: true,
    [APIErrorCode.ConflictError]: true,
    [APIErrorCode.InternalServerError]: true,
    [APIErrorCode.ServiceUnavailable]: true,
};
function isHTTPResponseError(error) {
    if (!isNotionClientErrorWithCode(error, httpResponseErrorCodes)) {
        return false;
    }
    return true;
}
exports.isHTTPResponseError = isHTTPResponseError;
/**
 * Error thrown if an API call responds with an unknown error code, or does not respond with
 * a property-formatted error.
 */
class UnknownHTTPResponseError extends HTTPResponseError {
    constructor(args) {
        var _a;
        super({
            ...args,
            code: ClientErrorCode.ResponseError,
            message: (_a = args.message) !== null && _a !== void 0 ? _a : `Request to Notion API failed with status: ${args.status}`,
        });
        this.name = "UnknownHTTPResponseError";
    }
    static isUnknownHTTPResponseError(error) {
        return isNotionClientErrorWithCode(error, {
            [ClientErrorCode.ResponseError]: true,
        });
    }
}
exports.UnknownHTTPResponseError = UnknownHTTPResponseError;
const apiErrorCodes = {
    [APIErrorCode.Unauthorized]: true,
    [APIErrorCode.RestrictedResource]: true,
    [APIErrorCode.ObjectNotFound]: true,
    [APIErrorCode.RateLimited]: true,
    [APIErrorCode.InvalidJSON]: true,
    [APIErrorCode.InvalidRequestURL]: true,
    [APIErrorCode.InvalidRequest]: true,
    [APIErrorCode.ValidationError]: true,
    [APIErrorCode.ConflictError]: true,
    [APIErrorCode.InternalServerError]: true,
    [APIErrorCode.ServiceUnavailable]: true,
};
/**
 * A response from the API indicating a problem.
 * Use the `code` property to handle various kinds of errors. All its possible values are in `APIErrorCode`.
 */
class APIResponseError extends HTTPResponseError {
    constructor() {
        super(...arguments);
        this.name = "APIResponseError";
    }
    static isAPIResponseError(error) {
        return isNotionClientErrorWithCode(error, apiErrorCodes);
    }
}
exports.APIResponseError = APIResponseError;
function buildRequestError(response, bodyText) {
    const apiErrorResponseBody = parseAPIErrorResponseBody(bodyText);
    if (apiErrorResponseBody !== undefined) {
        return new APIResponseError({
            code: apiErrorResponseBody.code,
            message: apiErrorResponseBody.message,
            headers: response.headers,
            status: response.status,
            rawBodyText: bodyText,
        });
    }
    return new UnknownHTTPResponseError({
        message: undefined,
        headers: response.headers,
        status: response.status,
        rawBodyText: bodyText,
    });
}
exports.buildRequestError = buildRequestError;
function parseAPIErrorResponseBody(body) {
    if (typeof body !== "string") {
        return;
    }
    let parsed;
    try {
        parsed = JSON.parse(body);
    }
    catch (parseError) {
        return;
    }
    if (!(0, utils_1.isObject)(parsed) ||
        typeof parsed["message"] !== "string" ||
        !isAPIErrorCode(parsed["code"])) {
        return;
    }
    return {
        ...parsed,
        code: parsed["code"],
        message: parsed["message"],
    };
}
function isAPIErrorCode(code) {
    return typeof code === "string" && code in apiErrorCodes;
}
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ "./node_modules/@notionhq/client/build/src/helpers.js":
/*!************************************************************!*\
  !*** ./node_modules/@notionhq/client/build/src/helpers.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isFullComment = exports.isFullUser = exports.isFullPageOrDatabase = exports.isFullDatabase = exports.isFullPage = exports.isFullBlock = exports.collectPaginatedAPI = exports.iteratePaginatedAPI = void 0;
/**
 * Returns an async iterator over the results of any paginated Notion API.
 *
 * Example (given a notion Client called `notion`):
 *
 * ```
 * for await (const block of iteratePaginatedAPI(notion.blocks.children.list, {
 *   block_id: parentBlockId,
 * })) {
 *   // Do something with block.
 * }
 * ```
 *
 * @param listFn A bound function on the Notion client that represents a conforming paginated
 *   API. Example: `notion.blocks.children.list`.
 * @param firstPageArgs Arguments that should be passed to the API on the first and subsequent
 *   calls to the API. Any necessary `next_cursor` will be automatically populated by
 *   this function. Example: `{ block_id: "<my block id>" }`
 */
async function* iteratePaginatedAPI(listFn, firstPageArgs) {
    let nextCursor = firstPageArgs.start_cursor;
    do {
        const response = await listFn({
            ...firstPageArgs,
            start_cursor: nextCursor,
        });
        yield* response.results;
        nextCursor = response.next_cursor;
    } while (nextCursor);
}
exports.iteratePaginatedAPI = iteratePaginatedAPI;
/**
 * Collect all of the results of paginating an API into an in-memory array.
 *
 * Example (given a notion Client called `notion`):
 *
 * ```
 * const blocks = await collectPaginatedAPI(notion.blocks.children.list, {
 *   block_id: parentBlockId,
 * })
 * // Do something with blocks.
 * ```
 *
 * @param listFn A bound function on the Notion client that represents a conforming paginated
 *   API. Example: `notion.blocks.children.list`.
 * @param firstPageArgs Arguments that should be passed to the API on the first and subsequent
 *   calls to the API. Any necessary `next_cursor` will be automatically populated by
 *   this function. Example: `{ block_id: "<my block id>" }`
 */
async function collectPaginatedAPI(listFn, firstPageArgs) {
    const results = [];
    for await (const item of iteratePaginatedAPI(listFn, firstPageArgs)) {
        results.push(item);
    }
    return results;
}
exports.collectPaginatedAPI = collectPaginatedAPI;
/**
 * @returns `true` if `response` is a full `BlockObjectResponse`.
 */
function isFullBlock(response) {
    return "type" in response;
}
exports.isFullBlock = isFullBlock;
/**
 * @returns `true` if `response` is a full `PageObjectResponse`.
 */
function isFullPage(response) {
    return "url" in response;
}
exports.isFullPage = isFullPage;
/**
 * @returns `true` if `response` is a full `DatabaseObjectResponse`.
 */
function isFullDatabase(response) {
    return "title" in response;
}
exports.isFullDatabase = isFullDatabase;
/**
 * @returns `true` if `response` is a full `DatabaseObjectResponse` or a full
 * `PageObjectResponse`.
 */
function isFullPageOrDatabase(response) {
    if (response.object === "database") {
        return isFullDatabase(response);
    }
    else {
        return isFullPage(response);
    }
}
exports.isFullPageOrDatabase = isFullPageOrDatabase;
/**
 * @returns `true` if `response` is a full `UserObjectResponse`.
 */
function isFullUser(response) {
    return "type" in response;
}
exports.isFullUser = isFullUser;
/**
 * @returns `true` if `response` is a full `CommentObjectResponse`.
 */
function isFullComment(response) {
    return "created_by" in response;
}
exports.isFullComment = isFullComment;
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/@notionhq/client/build/src/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@notionhq/client/build/src/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isFullPageOrDatabase = exports.isFullComment = exports.isFullUser = exports.isFullPage = exports.isFullDatabase = exports.isFullBlock = exports.iteratePaginatedAPI = exports.collectPaginatedAPI = exports.isNotionClientError = exports.RequestTimeoutError = exports.UnknownHTTPResponseError = exports.APIResponseError = exports.ClientErrorCode = exports.APIErrorCode = exports.LogLevel = exports.Client = void 0;
var Client_1 = __webpack_require__(/*! ./Client */ "./node_modules/@notionhq/client/build/src/Client.js");
Object.defineProperty(exports, "Client", ({ enumerable: true, get: function () { return Client_1.default; } }));
var logging_1 = __webpack_require__(/*! ./logging */ "./node_modules/@notionhq/client/build/src/logging.js");
Object.defineProperty(exports, "LogLevel", ({ enumerable: true, get: function () { return logging_1.LogLevel; } }));
var errors_1 = __webpack_require__(/*! ./errors */ "./node_modules/@notionhq/client/build/src/errors.js");
Object.defineProperty(exports, "APIErrorCode", ({ enumerable: true, get: function () { return errors_1.APIErrorCode; } }));
Object.defineProperty(exports, "ClientErrorCode", ({ enumerable: true, get: function () { return errors_1.ClientErrorCode; } }));
Object.defineProperty(exports, "APIResponseError", ({ enumerable: true, get: function () { return errors_1.APIResponseError; } }));
Object.defineProperty(exports, "UnknownHTTPResponseError", ({ enumerable: true, get: function () { return errors_1.UnknownHTTPResponseError; } }));
Object.defineProperty(exports, "RequestTimeoutError", ({ enumerable: true, get: function () { return errors_1.RequestTimeoutError; } }));
// Error helpers
Object.defineProperty(exports, "isNotionClientError", ({ enumerable: true, get: function () { return errors_1.isNotionClientError; } }));
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/@notionhq/client/build/src/helpers.js");
Object.defineProperty(exports, "collectPaginatedAPI", ({ enumerable: true, get: function () { return helpers_1.collectPaginatedAPI; } }));
Object.defineProperty(exports, "iteratePaginatedAPI", ({ enumerable: true, get: function () { return helpers_1.iteratePaginatedAPI; } }));
Object.defineProperty(exports, "isFullBlock", ({ enumerable: true, get: function () { return helpers_1.isFullBlock; } }));
Object.defineProperty(exports, "isFullDatabase", ({ enumerable: true, get: function () { return helpers_1.isFullDatabase; } }));
Object.defineProperty(exports, "isFullPage", ({ enumerable: true, get: function () { return helpers_1.isFullPage; } }));
Object.defineProperty(exports, "isFullUser", ({ enumerable: true, get: function () { return helpers_1.isFullUser; } }));
Object.defineProperty(exports, "isFullComment", ({ enumerable: true, get: function () { return helpers_1.isFullComment; } }));
Object.defineProperty(exports, "isFullPageOrDatabase", ({ enumerable: true, get: function () { return helpers_1.isFullPageOrDatabase; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@notionhq/client/build/src/logging.js":
/*!************************************************************!*\
  !*** ./node_modules/@notionhq/client/build/src/logging.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.logLevelSeverity = exports.makeConsoleLogger = exports.LogLevel = void 0;
const utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/@notionhq/client/build/src/utils.js");
var LogLevel;
(function (LogLevel) {
    LogLevel["DEBUG"] = "debug";
    LogLevel["INFO"] = "info";
    LogLevel["WARN"] = "warn";
    LogLevel["ERROR"] = "error";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
function makeConsoleLogger(name) {
    return (level, message, extraInfo) => {
        console[level](`${name} ${level}:`, message, extraInfo);
    };
}
exports.makeConsoleLogger = makeConsoleLogger;
/**
 * Transforms a log level into a comparable (numerical) value ordered by severity.
 */
function logLevelSeverity(level) {
    switch (level) {
        case LogLevel.DEBUG:
            return 20;
        case LogLevel.INFO:
            return 40;
        case LogLevel.WARN:
            return 60;
        case LogLevel.ERROR:
            return 80;
        default:
            return (0, utils_1.assertNever)(level);
    }
}
exports.logLevelSeverity = logLevelSeverity;
//# sourceMappingURL=logging.js.map

/***/ }),

/***/ "./node_modules/@notionhq/client/build/src/utils.js":
/*!**********************************************************!*\
  !*** ./node_modules/@notionhq/client/build/src/utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isObject = exports.pick = exports.assertNever = void 0;
/**
 * Utility for enforcing exhaustiveness checks in the type system.
 *
 * @see https://basarat.gitbook.io/typescript/type-system/discriminated-unions#throw-in-exhaustive-checks
 *
 * @param value The variable with no remaining values
 */
function assertNever(value) {
    throw new Error(`Unexpected value should never occur: ${value}`);
}
exports.assertNever = assertNever;
function pick(base, keys) {
    const entries = keys.map(key => [key, base === null || base === void 0 ? void 0 : base[key]]);
    return Object.fromEntries(entries);
}
exports.pick = pick;
function isObject(o) {
    return typeof o === "object" && o !== null;
}
exports.isObject = isObject;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {



// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof __webpack_require__.g !== 'undefined') { return __webpack_require__.g; }
	throw new Error('unable to locate global object');
}

var globalObject = getGlobal();

module.exports = exports = globalObject.fetch;

// Needed for TypeScript and Webpack.
if (globalObject.fetch) {
	exports["default"] = globalObject.fetch.bind(globalObject);
}

exports.Headers = globalObject.Headers;
exports.Request = globalObject.Request;
exports.Response = globalObject.Response;


/***/ }),

/***/ "./node_modules/@notionhq/client/build/package.json":
/*!**********************************************************!*\
  !*** ./node_modules/@notionhq/client/build/package.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"@notionhq/client","version":"2.2.13","description":"A simple and easy to use client for the Notion API","engines":{"node":">=12"},"homepage":"https://developers.notion.com/docs/getting-started","bugs":{"url":"https://github.com/makenotion/notion-sdk-js/issues"},"repository":{"type":"git","url":"https://github.com/makenotion/notion-sdk-js/"},"keywords":["notion","notionapi","rest","notion-api"],"main":"./build/src","types":"./build/src/index.d.ts","scripts":{"prepare":"npm run build","prepublishOnly":"npm run checkLoggedIn && npm run lint && npm run test","build":"tsc","prettier":"prettier --write .","lint":"prettier --check . && eslint . --ext .ts && cspell \'**/*\' ","test":"jest ./test","check-links":"git ls-files | grep md$ | xargs -n 1 markdown-link-check","prebuild":"npm run clean","clean":"rm -rf ./build","checkLoggedIn":"./scripts/verifyLoggedIn.sh"},"author":"","license":"MIT","files":["build/package.json","build/src/**"],"dependencies":{"@types/node-fetch":"^2.5.10","node-fetch":"^2.6.1"},"devDependencies":{"@types/jest":"^28.1.4","@typescript-eslint/eslint-plugin":"^5.39.0","@typescript-eslint/parser":"^5.39.0","cspell":"^5.4.1","eslint":"^7.24.0","jest":"^28.1.2","markdown-link-check":"^3.8.7","prettier":"^2.8.8","ts-jest":"^28.0.5","typescript":"^4.8.4"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/ts/option.ts ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @notionhq/client */ "./node_modules/@notionhq/client/build/src/index.js");

let save = document.getElementById("save");
let reset = document.getElementById("reset");
checkPlaceHolder();
save.addEventListener("click", () => {
    save.style.backgroundColor = "#3264B7";
    save.setAttribute("disabled", "disabled");
    var nToken = document.getElementById("nToken").value;
    var pageID = document.getElementById("pageID").value;
    createDatabase(nToken, pageID);
});
reset.addEventListener("click", () => {
    resetM();
});
function checkPlaceHolder() {
    chrome.storage.local.get(["nToken", "pageID"], (data) => {
        const nTokenInput = document.getElementById("nToken");
        const pageIDInput = document.getElementById("pageID");
        if (!nTokenInput || !pageIDInput)
            return;
        if (data.nToken === undefined || data.pageID === undefined) {
            nTokenInput.value = ''; // 清空输入框
            pageIDInput.value = ''; // 清空输入框
            reset.style.backgroundColor = "#cecece";
            reset.setAttribute("disabled", "disabled");
            save.style.backgroundColor = "#4285f4";
            save.removeAttribute("disabled");
        }
        else {
            nTokenInput.value = data.nToken; // 设置输入框的值
            pageIDInput.value = data.pageID; // 设置输入框的值
            save.style.backgroundColor = "#cecece";
            save.setAttribute("disabled", "disabled");
            reset.style.backgroundColor = "#4285f4";
            reset.removeAttribute("disabled");
        }
    });
}
function createDatabase(nToken, pageID) {
    const notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.Client({ auth: nToken });
    notion.databases.create({
        parent: { type: "page_id", page_id: pageID },
        title: [{ type: "text", text: { content: "BookList", link: null } }],
        properties: {
            "context": { "title": {} },
            "url": { "url": {} },
            "date": { "date": {} }
        }
    })
        .then((response) => {
        chrome.storage.local.set({ "databaseID": response.id, nToken: nToken, pageID: pageID }, () => {
            checkPlaceHolder();
            alert("创建Database并保存成功!");
        });
    })
        .catch((error) => {
        console.error(error);
        checkPlaceHolder();
        alert("创建Database失败: " + error.message);
    });
}
function resetM() {
    chrome.storage.local.remove(["nToken", "pageID"], () => {
        checkPlaceHolder();
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvb3B0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBa0IsbUJBQU8sQ0FBQyx1RUFBVztBQUNyQyxpQkFBaUIsbUJBQU8sQ0FBQyxxRUFBVTtBQUNuQyxnQkFBZ0IsbUJBQU8sQ0FBQyxtRUFBUztBQUNqQyx3QkFBd0IsbUJBQU8sQ0FBQyxtRkFBaUI7QUFDakQscUJBQXFCLG1CQUFPLENBQUMsd0RBQVk7QUFDekMsdUJBQXVCLG1CQUFPLENBQUMsMkVBQWlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJB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QTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2F2ZV9wYWdlX2NvbnRlbnRfZ2x1Z2luLy4vbm9kZV9tb2R1bGVzL0Bub3Rpb25ocS9jbGllbnQvYnVpbGQvc3JjL0NsaWVudC5qcyIsIndlYnBhY2s6Ly9zYXZlX3BhZ2VfY29udGVudF9nbHVnaW4vLi9ub2RlX21vZHVsZXMvQG5vdGlvbmhxL2NsaWVudC9idWlsZC9zcmMvYXBpLWVuZHBvaW50cy5qcyIsIndlYnBhY2s6Ly9zYXZlX3BhZ2VfY29udGVudF9nbHVnaW4vLi9ub2RlX21vZHVsZXMvQG5vdGlvbmhxL2NsaWVudC9idWlsZC9zcmMvZXJyb3JzLmpzIiwid2VicGFjazovL3NhdmVfcGFnZV9jb250ZW50X2dsdWdpbi8uL25vZGVfbW9kdWxlcy9Abm90aW9uaHEvY2xpZW50L2J1aWxkL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL3NhdmVfcGFnZV9jb250ZW50X2dsdWdpbi8uL25vZGVfbW9kdWxlcy9Abm90aW9uaHEvY2xpZW50L2J1aWxkL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYXZlX3BhZ2VfY29udGVudF9nbHVnaW4vLi9ub2RlX21vZHVsZXMvQG5vdGlvbmhxL2NsaWVudC9idWlsZC9zcmMvbG9nZ2luZy5qcyIsIndlYnBhY2s6Ly9zYXZlX3BhZ2VfY29udGVudF9nbHVnaW4vLi9ub2RlX21vZHVsZXMvQG5vdGlvbmhxL2NsaWVudC9idWlsZC9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vc2F2ZV9wYWdlX2NvbnRlbnRfZ2x1Z2luLy4vbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9zYXZlX3BhZ2VfY29udGVudF9nbHVnaW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2F2ZV9wYWdlX2NvbnRlbnRfZ2x1Z2luL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc2F2ZV9wYWdlX2NvbnRlbnRfZ2x1Z2luL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2F2ZV9wYWdlX2NvbnRlbnRfZ2x1Z2luLy4vc3JjL3RzL29wdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfQ2xpZW50X2F1dGgsIF9DbGllbnRfbG9nTGV2ZWwsIF9DbGllbnRfbG9nZ2VyLCBfQ2xpZW50X3ByZWZpeFVybCwgX0NsaWVudF90aW1lb3V0TXMsIF9DbGllbnRfbm90aW9uVmVyc2lvbiwgX0NsaWVudF9mZXRjaCwgX0NsaWVudF9hZ2VudCwgX0NsaWVudF91c2VyQWdlbnQ7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBsb2dnaW5nXzEgPSByZXF1aXJlKFwiLi9sb2dnaW5nXCIpO1xuY29uc3QgZXJyb3JzXzEgPSByZXF1aXJlKFwiLi9lcnJvcnNcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5jb25zdCBhcGlfZW5kcG9pbnRzXzEgPSByZXF1aXJlKFwiLi9hcGktZW5kcG9pbnRzXCIpO1xuY29uc3Qgbm9kZV9mZXRjaF8xID0gcmVxdWlyZShcIm5vZGUtZmV0Y2hcIik7XG5jb25zdCBwYWNrYWdlX2pzb25fMSA9IHJlcXVpcmUoXCIuLi9wYWNrYWdlLmpzb25cIik7XG5jbGFzcyBDbGllbnQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2Y7XG4gICAgICAgIF9DbGllbnRfYXV0aC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX0NsaWVudF9sb2dMZXZlbC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX0NsaWVudF9sb2dnZXIuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9DbGllbnRfcHJlZml4VXJsLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfQ2xpZW50X3RpbWVvdXRNcy5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX0NsaWVudF9ub3Rpb25WZXJzaW9uLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfQ2xpZW50X2ZldGNoLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfQ2xpZW50X2FnZW50LnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfQ2xpZW50X3VzZXJBZ2VudC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgLypcbiAgICAgICAgICogTm90aW9uIEFQSSBlbmRwb2ludHNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYmxvY2tzID0ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZXRyaWV2ZSBibG9ja1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXRyaWV2ZTogKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogYXBpX2VuZHBvaW50c18xLmdldEJsb2NrLnBhdGgoYXJncyksXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpX2VuZHBvaW50c18xLmdldEJsb2NrLm1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICgwLCB1dGlsc18xLnBpY2spKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS5nZXRCbG9jay5xdWVyeVBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6ICgwLCB1dGlsc18xLnBpY2spKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS5nZXRCbG9jay5ib2R5UGFyYW1zKSxcbiAgICAgICAgICAgICAgICAgICAgYXV0aDogYXJncyA9PT0gbnVsbCB8fCBhcmdzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhcmdzLmF1dGgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBVcGRhdGUgYmxvY2tcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdXBkYXRlOiAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICBwYXRoOiBhcGlfZW5kcG9pbnRzXzEudXBkYXRlQmxvY2sucGF0aChhcmdzKSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBhcGlfZW5kcG9pbnRzXzEudXBkYXRlQmxvY2subWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogKDAsIHV0aWxzXzEucGljaykoYXJncywgYXBpX2VuZHBvaW50c18xLnVwZGF0ZUJsb2NrLnF1ZXJ5UGFyYW1zKSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogKDAsIHV0aWxzXzEucGljaykoYXJncywgYXBpX2VuZHBvaW50c18xLnVwZGF0ZUJsb2NrLmJvZHlQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICBhdXRoOiBhcmdzID09PSBudWxsIHx8IGFyZ3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFyZ3MuYXV0aCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIERlbGV0ZSBibG9ja1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkZWxldGU6IChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGFwaV9lbmRwb2ludHNfMS5kZWxldGVCbG9jay5wYXRoKGFyZ3MpLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IGFwaV9lbmRwb2ludHNfMS5kZWxldGVCbG9jay5tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAoMCwgdXRpbHNfMS5waWNrKShhcmdzLCBhcGlfZW5kcG9pbnRzXzEuZGVsZXRlQmxvY2sucXVlcnlQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiAoMCwgdXRpbHNfMS5waWNrKShhcmdzLCBhcGlfZW5kcG9pbnRzXzEuZGVsZXRlQmxvY2suYm9keVBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgIGF1dGg6IGFyZ3MgPT09IG51bGwgfHwgYXJncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXJncy5hdXRoLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogQXBwZW5kIGJsb2NrIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgYXBwZW5kOiAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGFwaV9lbmRwb2ludHNfMS5hcHBlbmRCbG9ja0NoaWxkcmVuLnBhdGgoYXJncyksXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IGFwaV9lbmRwb2ludHNfMS5hcHBlbmRCbG9ja0NoaWxkcmVuLm1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAoMCwgdXRpbHNfMS5waWNrKShhcmdzLCBhcGlfZW5kcG9pbnRzXzEuYXBwZW5kQmxvY2tDaGlsZHJlbi5xdWVyeVBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiAoMCwgdXRpbHNfMS5waWNrKShhcmdzLCBhcGlfZW5kcG9pbnRzXzEuYXBwZW5kQmxvY2tDaGlsZHJlbi5ib2R5UGFyYW1zKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGg6IGFyZ3MgPT09IG51bGwgfHwgYXJncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXJncy5hdXRoLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFJldHJpZXZlIGJsb2NrIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgbGlzdDogKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBhcGlfZW5kcG9pbnRzXzEubGlzdEJsb2NrQ2hpbGRyZW4ucGF0aChhcmdzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpX2VuZHBvaW50c18xLmxpc3RCbG9ja0NoaWxkcmVuLm1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAoMCwgdXRpbHNfMS5waWNrKShhcmdzLCBhcGlfZW5kcG9pbnRzXzEubGlzdEJsb2NrQ2hpbGRyZW4ucXVlcnlQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogKDAsIHV0aWxzXzEucGljaykoYXJncywgYXBpX2VuZHBvaW50c18xLmxpc3RCbG9ja0NoaWxkcmVuLmJvZHlQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aDogYXJncyA9PT0gbnVsbCB8fCBhcmdzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhcmdzLmF1dGgsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRhdGFiYXNlcyA9IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogTGlzdCBkYXRhYmFzZXNcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIGBzZWFyY2hgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGxpc3Q6IChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGFwaV9lbmRwb2ludHNfMS5saXN0RGF0YWJhc2VzLnBhdGgoKSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBhcGlfZW5kcG9pbnRzXzEubGlzdERhdGFiYXNlcy5tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAoMCwgdXRpbHNfMS5waWNrKShhcmdzLCBhcGlfZW5kcG9pbnRzXzEubGlzdERhdGFiYXNlcy5xdWVyeVBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6ICgwLCB1dGlsc18xLnBpY2spKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS5saXN0RGF0YWJhc2VzLmJvZHlQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICBhdXRoOiBhcmdzID09PSBudWxsIHx8IGFyZ3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFyZ3MuYXV0aCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJldHJpZXZlIGEgZGF0YWJhc2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmV0cmlldmU6IChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGFwaV9lbmRwb2ludHNfMS5nZXREYXRhYmFzZS5wYXRoKGFyZ3MpLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IGFwaV9lbmRwb2ludHNfMS5nZXREYXRhYmFzZS5tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAoMCwgdXRpbHNfMS5waWNrKShhcmdzLCBhcGlfZW5kcG9pbnRzXzEuZ2V0RGF0YWJhc2UucXVlcnlQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiAoMCwgdXRpbHNfMS5waWNrKShhcmdzLCBhcGlfZW5kcG9pbnRzXzEuZ2V0RGF0YWJhc2UuYm9keVBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgIGF1dGg6IGFyZ3MgPT09IG51bGwgfHwgYXJncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXJncy5hdXRoLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUXVlcnkgYSBkYXRhYmFzZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBxdWVyeTogKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogYXBpX2VuZHBvaW50c18xLnF1ZXJ5RGF0YWJhc2UucGF0aChhcmdzKSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBhcGlfZW5kcG9pbnRzXzEucXVlcnlEYXRhYmFzZS5tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAoMCwgdXRpbHNfMS5waWNrKShhcmdzLCBhcGlfZW5kcG9pbnRzXzEucXVlcnlEYXRhYmFzZS5xdWVyeVBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6ICgwLCB1dGlsc18xLnBpY2spKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS5xdWVyeURhdGFiYXNlLmJvZHlQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICBhdXRoOiBhcmdzID09PSBudWxsIHx8IGFyZ3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFyZ3MuYXV0aCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENyZWF0ZSBhIGRhdGFiYXNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNyZWF0ZTogKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogYXBpX2VuZHBvaW50c18xLmNyZWF0ZURhdGFiYXNlLnBhdGgoKSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBhcGlfZW5kcG9pbnRzXzEuY3JlYXRlRGF0YWJhc2UubWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogKDAsIHV0aWxzXzEucGljaykoYXJncywgYXBpX2VuZHBvaW50c18xLmNyZWF0ZURhdGFiYXNlLnF1ZXJ5UGFyYW1zKSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogKDAsIHV0aWxzXzEucGljaykoYXJncywgYXBpX2VuZHBvaW50c18xLmNyZWF0ZURhdGFiYXNlLmJvZHlQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICBhdXRoOiBhcmdzID09PSBudWxsIHx8IGFyZ3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFyZ3MuYXV0aCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVwZGF0ZSBhIGRhdGFiYXNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHVwZGF0ZTogKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogYXBpX2VuZHBvaW50c18xLnVwZGF0ZURhdGFiYXNlLnBhdGgoYXJncyksXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpX2VuZHBvaW50c18xLnVwZGF0ZURhdGFiYXNlLm1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICgwLCB1dGlsc18xLnBpY2spKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS51cGRhdGVEYXRhYmFzZS5xdWVyeVBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6ICgwLCB1dGlsc18xLnBpY2spKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS51cGRhdGVEYXRhYmFzZS5ib2R5UGFyYW1zKSxcbiAgICAgICAgICAgICAgICAgICAgYXV0aDogYXJncyA9PT0gbnVsbCB8fCBhcmdzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhcmdzLmF1dGgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnBhZ2VzID0ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDcmVhdGUgYSBwYWdlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNyZWF0ZTogKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogYXBpX2VuZHBvaW50c18xLmNyZWF0ZVBhZ2UucGF0aCgpLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IGFwaV9lbmRwb2ludHNfMS5jcmVhdGVQYWdlLm1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICgwLCB1dGlsc18xLnBpY2spKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS5jcmVhdGVQYWdlLnF1ZXJ5UGFyYW1zKSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogKDAsIHV0aWxzXzEucGljaykoYXJncywgYXBpX2VuZHBvaW50c18xLmNyZWF0ZVBhZ2UuYm9keVBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgIGF1dGg6IGFyZ3MgPT09IG51bGwgfHwgYXJncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXJncy5hdXRoLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmV0cmlldmUgYSBwYWdlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJldHJpZXZlOiAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICBwYXRoOiBhcGlfZW5kcG9pbnRzXzEuZ2V0UGFnZS5wYXRoKGFyZ3MpLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IGFwaV9lbmRwb2ludHNfMS5nZXRQYWdlLm1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICgwLCB1dGlsc18xLnBpY2spKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS5nZXRQYWdlLnF1ZXJ5UGFyYW1zKSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogKDAsIHV0aWxzXzEucGljaykoYXJncywgYXBpX2VuZHBvaW50c18xLmdldFBhZ2UuYm9keVBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgIGF1dGg6IGFyZ3MgPT09IG51bGwgfHwgYXJncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXJncy5hdXRoLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXBkYXRlIHBhZ2UgcHJvcGVydGllc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB1cGRhdGU6IChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGFwaV9lbmRwb2ludHNfMS51cGRhdGVQYWdlLnBhdGgoYXJncyksXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpX2VuZHBvaW50c18xLnVwZGF0ZVBhZ2UubWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogKDAsIHV0aWxzXzEucGljaykoYXJncywgYXBpX2VuZHBvaW50c18xLnVwZGF0ZVBhZ2UucXVlcnlQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiAoMCwgdXRpbHNfMS5waWNrKShhcmdzLCBhcGlfZW5kcG9pbnRzXzEudXBkYXRlUGFnZS5ib2R5UGFyYW1zKSxcbiAgICAgICAgICAgICAgICAgICAgYXV0aDogYXJncyA9PT0gbnVsbCB8fCBhcmdzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhcmdzLmF1dGgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFJldHJpZXZlIHBhZ2UgcHJvcGVydHlcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICByZXRyaWV2ZTogKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBhcGlfZW5kcG9pbnRzXzEuZ2V0UGFnZVByb3BlcnR5LnBhdGgoYXJncyksXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IGFwaV9lbmRwb2ludHNfMS5nZXRQYWdlUHJvcGVydHkubWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICgwLCB1dGlsc18xLnBpY2spKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS5nZXRQYWdlUHJvcGVydHkucXVlcnlQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogKDAsIHV0aWxzXzEucGljaykoYXJncywgYXBpX2VuZHBvaW50c18xLmdldFBhZ2VQcm9wZXJ0eS5ib2R5UGFyYW1zKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGg6IGFyZ3MgPT09IG51bGwgfHwgYXJncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXJncy5hdXRoLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51c2VycyA9IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmV0cmlldmUgYSB1c2VyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJldHJpZXZlOiAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICBwYXRoOiBhcGlfZW5kcG9pbnRzXzEuZ2V0VXNlci5wYXRoKGFyZ3MpLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IGFwaV9lbmRwb2ludHNfMS5nZXRVc2VyLm1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICgwLCB1dGlsc18xLnBpY2spKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS5nZXRVc2VyLnF1ZXJ5UGFyYW1zKSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogKDAsIHV0aWxzXzEucGljaykoYXJncywgYXBpX2VuZHBvaW50c18xLmdldFVzZXIuYm9keVBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgIGF1dGg6IGFyZ3MgPT09IG51bGwgfHwgYXJncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXJncy5hdXRoLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogTGlzdCBhbGwgdXNlcnNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbGlzdDogKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogYXBpX2VuZHBvaW50c18xLmxpc3RVc2Vycy5wYXRoKCksXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpX2VuZHBvaW50c18xLmxpc3RVc2Vycy5tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAoMCwgdXRpbHNfMS5waWNrKShhcmdzLCBhcGlfZW5kcG9pbnRzXzEubGlzdFVzZXJzLnF1ZXJ5UGFyYW1zKSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogKDAsIHV0aWxzXzEucGljaykoYXJncywgYXBpX2VuZHBvaW50c18xLmxpc3RVc2Vycy5ib2R5UGFyYW1zKSxcbiAgICAgICAgICAgICAgICAgICAgYXV0aDogYXJncyA9PT0gbnVsbCB8fCBhcmdzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhcmdzLmF1dGgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgZGV0YWlscyBhYm91dCBib3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbWU6IChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGFwaV9lbmRwb2ludHNfMS5nZXRTZWxmLnBhdGgoKSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBhcGlfZW5kcG9pbnRzXzEuZ2V0U2VsZi5tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAoMCwgdXRpbHNfMS5waWNrKShhcmdzLCBhcGlfZW5kcG9pbnRzXzEuZ2V0U2VsZi5xdWVyeVBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6ICgwLCB1dGlsc18xLnBpY2spKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS5nZXRTZWxmLmJvZHlQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICBhdXRoOiBhcmdzID09PSBudWxsIHx8IGFyZ3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFyZ3MuYXV0aCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29tbWVudHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENyZWF0ZSBhIGNvbW1lbnRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY3JlYXRlOiAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICBwYXRoOiBhcGlfZW5kcG9pbnRzXzEuY3JlYXRlQ29tbWVudC5wYXRoKCksXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpX2VuZHBvaW50c18xLmNyZWF0ZUNvbW1lbnQubWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogKDAsIHV0aWxzXzEucGljaykoYXJncywgYXBpX2VuZHBvaW50c18xLmNyZWF0ZUNvbW1lbnQucXVlcnlQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiAoMCwgdXRpbHNfMS5waWNrKShhcmdzLCBhcGlfZW5kcG9pbnRzXzEuY3JlYXRlQ29tbWVudC5ib2R5UGFyYW1zKSxcbiAgICAgICAgICAgICAgICAgICAgYXV0aDogYXJncyA9PT0gbnVsbCB8fCBhcmdzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhcmdzLmF1dGgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBMaXN0IGNvbW1lbnRzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGxpc3Q6IChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGFwaV9lbmRwb2ludHNfMS5saXN0Q29tbWVudHMucGF0aCgpLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IGFwaV9lbmRwb2ludHNfMS5saXN0Q29tbWVudHMubWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogKDAsIHV0aWxzXzEucGljaykoYXJncywgYXBpX2VuZHBvaW50c18xLmxpc3RDb21tZW50cy5xdWVyeVBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6ICgwLCB1dGlsc18xLnBpY2spKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS5saXN0Q29tbWVudHMuYm9keVBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgIGF1dGg6IGFyZ3MgPT09IG51bGwgfHwgYXJncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXJncy5hdXRoLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlYXJjaFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zZWFyY2ggPSAoYXJncykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgcGF0aDogYXBpX2VuZHBvaW50c18xLnNlYXJjaC5wYXRoKCksXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBhcGlfZW5kcG9pbnRzXzEuc2VhcmNoLm1ldGhvZCxcbiAgICAgICAgICAgICAgICBxdWVyeTogKDAsIHV0aWxzXzEucGljaykoYXJncywgYXBpX2VuZHBvaW50c18xLnNlYXJjaC5xdWVyeVBhcmFtcyksXG4gICAgICAgICAgICAgICAgYm9keTogKDAsIHV0aWxzXzEucGljaykoYXJncywgYXBpX2VuZHBvaW50c18xLnNlYXJjaC5ib2R5UGFyYW1zKSxcbiAgICAgICAgICAgICAgICBhdXRoOiBhcmdzID09PSBudWxsIHx8IGFyZ3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFyZ3MuYXV0aCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9hdXRoID0ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgdG9rZW5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdG9rZW46IChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGFwaV9lbmRwb2ludHNfMS5vYXV0aFRva2VuLnBhdGgoKSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBhcGlfZW5kcG9pbnRzXzEub2F1dGhUb2tlbi5tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAoMCwgdXRpbHNfMS5waWNrKShhcmdzLCBhcGlfZW5kcG9pbnRzXzEub2F1dGhUb2tlbi5xdWVyeVBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6ICgwLCB1dGlsc18xLnBpY2spKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS5vYXV0aFRva2VuLmJvZHlQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICBhdXRoOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRfaWQ6IGFyZ3MuY2xpZW50X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50X3NlY3JldDogYXJncy5jbGllbnRfc2VjcmV0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ2xpZW50X2F1dGgsIG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hdXRoLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0NsaWVudF9sb2dMZXZlbCwgKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvZ0xldmVsKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBsb2dnaW5nXzEuTG9nTGV2ZWwuV0FSTiwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DbGllbnRfbG9nZ2VyLCAoX2IgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9nZ2VyKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAoMCwgbG9nZ2luZ18xLm1ha2VDb25zb2xlTG9nZ2VyKShwYWNrYWdlX2pzb25fMS5uYW1lKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DbGllbnRfcHJlZml4VXJsLCAoKF9jID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmJhc2VVcmwpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IFwiaHR0cHM6Ly9hcGkubm90aW9uLmNvbVwiKSArIFwiL3YxL1wiLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0NsaWVudF90aW1lb3V0TXMsIChfZCA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy50aW1lb3V0TXMpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IDYwMDAwLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0NsaWVudF9ub3Rpb25WZXJzaW9uLCAoX2UgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubm90aW9uVmVyc2lvbikgIT09IG51bGwgJiYgX2UgIT09IHZvaWQgMCA/IF9lIDogQ2xpZW50LmRlZmF1bHROb3Rpb25WZXJzaW9uLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0NsaWVudF9mZXRjaCwgKF9mID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZldGNoKSAhPT0gbnVsbCAmJiBfZiAhPT0gdm9pZCAwID8gX2YgOiBub2RlX2ZldGNoXzEuZGVmYXVsdCwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DbGllbnRfYWdlbnQsIG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZ2VudCwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DbGllbnRfdXNlckFnZW50LCBgbm90aW9uaHEtY2xpZW50LyR7cGFja2FnZV9qc29uXzEudmVyc2lvbn1gLCBcImZcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXRoXG4gICAgICogQHBhcmFtIG1ldGhvZFxuICAgICAqIEBwYXJhbSBxdWVyeVxuICAgICAqIEBwYXJhbSBib2R5XG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBhc3luYyByZXF1ZXN0KHsgcGF0aCwgbWV0aG9kLCBxdWVyeSwgYm9keSwgYXV0aCwgfSkge1xuICAgICAgICB0aGlzLmxvZyhsb2dnaW5nXzEuTG9nTGV2ZWwuSU5GTywgXCJyZXF1ZXN0IHN0YXJ0XCIsIHsgbWV0aG9kLCBwYXRoIH0pO1xuICAgICAgICAvLyBJZiB0aGUgYm9keSBpcyBlbXB0eSwgZG9uJ3Qgc2VuZCB0aGUgYm9keSBpbiB0aGUgSFRUUCByZXF1ZXN0XG4gICAgICAgIGNvbnN0IGJvZHlBc0pzb25TdHJpbmcgPSAhYm9keSB8fCBPYmplY3QuZW50cmllcyhib2R5KS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICA6IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NsaWVudF9wcmVmaXhVcmwsIFwiZlwiKX0ke3BhdGh9YCk7XG4gICAgICAgIGlmIChxdWVyeSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocXVlcnkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKHZhbCA9PiB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIGRlY29kZVVSSUNvbXBvbmVudCh2YWwpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEFsbG93IGJvdGggY2xpZW50IElEIC8gY2xpZW50IHNlY3JldCBiYXNlZCBhdXRoIGFzIHdlbGwgYXMgdG9rZW4gYmFzZWQgYXV0aC5cbiAgICAgICAgbGV0IGF1dGhvcml6YXRpb25IZWFkZXI7XG4gICAgICAgIGlmICh0eXBlb2YgYXV0aCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgLy8gQ2xpZW50IElEIGFuZCBzZWNyZXQgYmFzZWQgYXV0aCBpcyAqKk9OTFkqKiBzdXBwb3J0ZWQgd2hlbiB1c2luZyB0aGVcbiAgICAgICAgICAgIC8vIGAvb2F1dGgvdG9rZW5gIGVuZHBvaW50LiBJZiB0aGlzIGlzIHRoZSBjYXNlLCBoYW5kbGUgZm9ybWF0dGluZyB0aGVcbiAgICAgICAgICAgIC8vIGF1dGhvcml6YXRpb24gaGVhZGVyIGFzIHJlcXVpcmVkIGJ5IGBCYXNpY2AgYXV0aC5cbiAgICAgICAgICAgIGNvbnN0IHVuZW5jb2RlZENyZWRlbnRpYWwgPSBgJHthdXRoLmNsaWVudF9pZH06JHthdXRoLmNsaWVudF9zZWNyZXR9YDtcbiAgICAgICAgICAgIGNvbnN0IGVuY29kZWRDcmVkZW50aWFsID0gQnVmZmVyLmZyb20odW5lbmNvZGVkQ3JlZGVudGlhbCkudG9TdHJpbmcoXCJiYXNlNjRcIik7XG4gICAgICAgICAgICBhdXRob3JpemF0aW9uSGVhZGVyID0geyBhdXRob3JpemF0aW9uOiBgQmFzaWMgJHtlbmNvZGVkQ3JlZGVudGlhbH1gIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgZm9ybWF0IGF1dGhvcml6YXRpb24gaGVhZGVyIGFzIGBCZWFyZXJgIHRva2VuIGF1dGguXG4gICAgICAgICAgICBhdXRob3JpemF0aW9uSGVhZGVyID0gdGhpcy5hdXRoQXNIZWFkZXJzKGF1dGgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgICAgICAuLi5hdXRob3JpemF0aW9uSGVhZGVyLFxuICAgICAgICAgICAgXCJOb3Rpb24tVmVyc2lvblwiOiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DbGllbnRfbm90aW9uVmVyc2lvbiwgXCJmXCIpLFxuICAgICAgICAgICAgXCJ1c2VyLWFnZW50XCI6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NsaWVudF91c2VyQWdlbnQsIFwiZlwiKSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGJvZHlBc0pzb25TdHJpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGVycm9yc18xLlJlcXVlc3RUaW1lb3V0RXJyb3IucmVqZWN0QWZ0ZXJUaW1lb3V0KF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NsaWVudF9mZXRjaCwgXCJmXCIpLmNhbGwodGhpcywgdXJsLnRvU3RyaW5nKCksIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZC50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgICAgICAgYm9keTogYm9keUFzSnNvblN0cmluZyxcbiAgICAgICAgICAgICAgICBhZ2VudDogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2xpZW50X2FnZW50LCBcImZcIiksXG4gICAgICAgICAgICB9KSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2xpZW50X3RpbWVvdXRNcywgXCJmXCIpKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoMCwgZXJyb3JzXzEuYnVpbGRSZXF1ZXN0RXJyb3IpKHJlc3BvbnNlLCByZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VKc29uID0gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgdGhpcy5sb2cobG9nZ2luZ18xLkxvZ0xldmVsLklORk8sIGByZXF1ZXN0IHN1Y2Nlc3NgLCB7IG1ldGhvZCwgcGF0aCB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZUpzb247XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoISgwLCBlcnJvcnNfMS5pc05vdGlvbkNsaWVudEVycm9yKShlcnJvcikpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExvZyB0aGUgZXJyb3IgaWYgaXQncyBvbmUgb2Ygb3VyIGtub3duIGVycm9yIHR5cGVzXG4gICAgICAgICAgICB0aGlzLmxvZyhsb2dnaW5nXzEuTG9nTGV2ZWwuV0FSTiwgYHJlcXVlc3QgZmFpbGAsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBlcnJvci5jb2RlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICgoMCwgZXJyb3JzXzEuaXNIVFRQUmVzcG9uc2VFcnJvcikoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIHJlc3BvbnNlIGJvZHkgbWF5IGNvbnRhaW4gc2Vuc2l0aXZlIGluZm9ybWF0aW9uIHNvIGl0IGlzIGxvZ2dlZCBzZXBhcmF0ZWx5IGF0IHRoZSBERUJVRyBsZXZlbFxuICAgICAgICAgICAgICAgIHRoaXMubG9nKGxvZ2dpbmdfMS5Mb2dMZXZlbC5ERUJVRywgYGZhaWxlZCByZXNwb25zZSBib2R5YCwge1xuICAgICAgICAgICAgICAgICAgICBib2R5OiBlcnJvci5ib2R5LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRW1pdHMgYSBsb2cgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsZXZlbCBUaGUgbGV2ZWwgZm9yIHRoaXMgbWVzc2FnZVxuICAgICAqIEBwYXJhbSBhcmdzIEFyZ3VtZW50cyB0byBzZW5kIHRvIHRoZSBjb25zb2xlXG4gICAgICovXG4gICAgbG9nKGxldmVsLCBtZXNzYWdlLCBleHRyYUluZm8pIHtcbiAgICAgICAgaWYgKCgwLCBsb2dnaW5nXzEubG9nTGV2ZWxTZXZlcml0eSkobGV2ZWwpID49ICgwLCBsb2dnaW5nXzEubG9nTGV2ZWxTZXZlcml0eSkoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2xpZW50X2xvZ0xldmVsLCBcImZcIikpKSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DbGllbnRfbG9nZ2VyLCBcImZcIikuY2FsbCh0aGlzLCBsZXZlbCwgbWVzc2FnZSwgZXh0cmFJbmZvKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm1zIGFuIEFQSSBrZXkgb3IgYWNjZXNzIHRva2VuIGludG8gYSBoZWFkZXJzIG9iamVjdCBzdWl0YWJsZSBmb3IgYW4gSFRUUCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgdXNlcyB0aGUgaW5zdGFuY2UncyB2YWx1ZSBhcyB0aGUgZGVmYXVsdCB3aGVuIHRoZSBpbnB1dCBpcyB1bmRlZmluZWQuIElmIG5laXRoZXIgYXJlIGRlZmluZWQsIGl0IHJldHVybnNcbiAgICAgKiBhbiBlbXB0eSBvYmplY3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhdXRoIEFQSSBrZXkgb3IgYWNjZXNzIHRva2VuXG4gICAgICogQHJldHVybnMgaGVhZGVycyBrZXktdmFsdWUgb2JqZWN0XG4gICAgICovXG4gICAgYXV0aEFzSGVhZGVycyhhdXRoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcbiAgICAgICAgY29uc3QgYXV0aEhlYWRlclZhbHVlID0gYXV0aCAhPT0gbnVsbCAmJiBhdXRoICE9PSB2b2lkIDAgPyBhdXRoIDogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2xpZW50X2F1dGgsIFwiZlwiKTtcbiAgICAgICAgaWYgKGF1dGhIZWFkZXJWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBoZWFkZXJzW1wiYXV0aG9yaXphdGlvblwiXSA9IGBCZWFyZXIgJHthdXRoSGVhZGVyVmFsdWV9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBDbGllbnQ7XG5fQ2xpZW50X2F1dGggPSBuZXcgV2Vha01hcCgpLCBfQ2xpZW50X2xvZ0xldmVsID0gbmV3IFdlYWtNYXAoKSwgX0NsaWVudF9sb2dnZXIgPSBuZXcgV2Vha01hcCgpLCBfQ2xpZW50X3ByZWZpeFVybCA9IG5ldyBXZWFrTWFwKCksIF9DbGllbnRfdGltZW91dE1zID0gbmV3IFdlYWtNYXAoKSwgX0NsaWVudF9ub3Rpb25WZXJzaW9uID0gbmV3IFdlYWtNYXAoKSwgX0NsaWVudF9mZXRjaCA9IG5ldyBXZWFrTWFwKCksIF9DbGllbnRfYWdlbnQgPSBuZXcgV2Vha01hcCgpLCBfQ2xpZW50X3VzZXJBZ2VudCA9IG5ldyBXZWFrTWFwKCk7XG5DbGllbnQuZGVmYXVsdE5vdGlvblZlcnNpb24gPSBcIjIwMjItMDYtMjhcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNsaWVudC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbi8vIGNzcGVsbDpkaXNhYmxlLWZpbGVcbi8vIE5vdGU6IFRoaXMgaXMgYSBnZW5lcmF0ZWQgZmlsZS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMub2F1dGhUb2tlbiA9IGV4cG9ydHMubGlzdENvbW1lbnRzID0gZXhwb3J0cy5jcmVhdGVDb21tZW50ID0gZXhwb3J0cy5zZWFyY2ggPSBleHBvcnRzLmNyZWF0ZURhdGFiYXNlID0gZXhwb3J0cy5saXN0RGF0YWJhc2VzID0gZXhwb3J0cy5xdWVyeURhdGFiYXNlID0gZXhwb3J0cy51cGRhdGVEYXRhYmFzZSA9IGV4cG9ydHMuZ2V0RGF0YWJhc2UgPSBleHBvcnRzLmFwcGVuZEJsb2NrQ2hpbGRyZW4gPSBleHBvcnRzLmxpc3RCbG9ja0NoaWxkcmVuID0gZXhwb3J0cy5kZWxldGVCbG9jayA9IGV4cG9ydHMudXBkYXRlQmxvY2sgPSBleHBvcnRzLmdldEJsb2NrID0gZXhwb3J0cy5nZXRQYWdlUHJvcGVydHkgPSBleHBvcnRzLnVwZGF0ZVBhZ2UgPSBleHBvcnRzLmdldFBhZ2UgPSBleHBvcnRzLmNyZWF0ZVBhZ2UgPSBleHBvcnRzLmxpc3RVc2VycyA9IGV4cG9ydHMuZ2V0VXNlciA9IGV4cG9ydHMuZ2V0U2VsZiA9IHZvaWQgMDtcbmV4cG9ydHMuZ2V0U2VsZiA9IHtcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgcGF0aFBhcmFtczogW10sXG4gICAgcXVlcnlQYXJhbXM6IFtdLFxuICAgIGJvZHlQYXJhbXM6IFtdLFxuICAgIHBhdGg6ICgpID0+IGB1c2Vycy9tZWAsXG59O1xuZXhwb3J0cy5nZXRVc2VyID0ge1xuICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICBwYXRoUGFyYW1zOiBbXCJ1c2VyX2lkXCJdLFxuICAgIHF1ZXJ5UGFyYW1zOiBbXSxcbiAgICBib2R5UGFyYW1zOiBbXSxcbiAgICBwYXRoOiAocCkgPT4gYHVzZXJzLyR7cC51c2VyX2lkfWAsXG59O1xuZXhwb3J0cy5saXN0VXNlcnMgPSB7XG4gICAgbWV0aG9kOiBcImdldFwiLFxuICAgIHBhdGhQYXJhbXM6IFtdLFxuICAgIHF1ZXJ5UGFyYW1zOiBbXCJzdGFydF9jdXJzb3JcIiwgXCJwYWdlX3NpemVcIl0sXG4gICAgYm9keVBhcmFtczogW10sXG4gICAgcGF0aDogKCkgPT4gYHVzZXJzYCxcbn07XG5leHBvcnRzLmNyZWF0ZVBhZ2UgPSB7XG4gICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICBwYXRoUGFyYW1zOiBbXSxcbiAgICBxdWVyeVBhcmFtczogW10sXG4gICAgYm9keVBhcmFtczogW1wicGFyZW50XCIsIFwicHJvcGVydGllc1wiLCBcImljb25cIiwgXCJjb3ZlclwiLCBcImNvbnRlbnRcIiwgXCJjaGlsZHJlblwiXSxcbiAgICBwYXRoOiAoKSA9PiBgcGFnZXNgLFxufTtcbmV4cG9ydHMuZ2V0UGFnZSA9IHtcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgcGF0aFBhcmFtczogW1wicGFnZV9pZFwiXSxcbiAgICBxdWVyeVBhcmFtczogW1wiZmlsdGVyX3Byb3BlcnRpZXNcIl0sXG4gICAgYm9keVBhcmFtczogW10sXG4gICAgcGF0aDogKHApID0+IGBwYWdlcy8ke3AucGFnZV9pZH1gLFxufTtcbmV4cG9ydHMudXBkYXRlUGFnZSA9IHtcbiAgICBtZXRob2Q6IFwicGF0Y2hcIixcbiAgICBwYXRoUGFyYW1zOiBbXCJwYWdlX2lkXCJdLFxuICAgIHF1ZXJ5UGFyYW1zOiBbXSxcbiAgICBib2R5UGFyYW1zOiBbXCJwcm9wZXJ0aWVzXCIsIFwiaWNvblwiLCBcImNvdmVyXCIsIFwiYXJjaGl2ZWRcIl0sXG4gICAgcGF0aDogKHApID0+IGBwYWdlcy8ke3AucGFnZV9pZH1gLFxufTtcbmV4cG9ydHMuZ2V0UGFnZVByb3BlcnR5ID0ge1xuICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICBwYXRoUGFyYW1zOiBbXCJwYWdlX2lkXCIsIFwicHJvcGVydHlfaWRcIl0sXG4gICAgcXVlcnlQYXJhbXM6IFtcInN0YXJ0X2N1cnNvclwiLCBcInBhZ2Vfc2l6ZVwiXSxcbiAgICBib2R5UGFyYW1zOiBbXSxcbiAgICBwYXRoOiAocCkgPT4gYHBhZ2VzLyR7cC5wYWdlX2lkfS9wcm9wZXJ0aWVzLyR7cC5wcm9wZXJ0eV9pZH1gLFxufTtcbmV4cG9ydHMuZ2V0QmxvY2sgPSB7XG4gICAgbWV0aG9kOiBcImdldFwiLFxuICAgIHBhdGhQYXJhbXM6IFtcImJsb2NrX2lkXCJdLFxuICAgIHF1ZXJ5UGFyYW1zOiBbXSxcbiAgICBib2R5UGFyYW1zOiBbXSxcbiAgICBwYXRoOiAocCkgPT4gYGJsb2Nrcy8ke3AuYmxvY2tfaWR9YCxcbn07XG5leHBvcnRzLnVwZGF0ZUJsb2NrID0ge1xuICAgIG1ldGhvZDogXCJwYXRjaFwiLFxuICAgIHBhdGhQYXJhbXM6IFtcImJsb2NrX2lkXCJdLFxuICAgIHF1ZXJ5UGFyYW1zOiBbXSxcbiAgICBib2R5UGFyYW1zOiBbXG4gICAgICAgIFwiZW1iZWRcIixcbiAgICAgICAgXCJ0eXBlXCIsXG4gICAgICAgIFwiYXJjaGl2ZWRcIixcbiAgICAgICAgXCJib29rbWFya1wiLFxuICAgICAgICBcImltYWdlXCIsXG4gICAgICAgIFwidmlkZW9cIixcbiAgICAgICAgXCJwZGZcIixcbiAgICAgICAgXCJmaWxlXCIsXG4gICAgICAgIFwiYXVkaW9cIixcbiAgICAgICAgXCJjb2RlXCIsXG4gICAgICAgIFwiZXF1YXRpb25cIixcbiAgICAgICAgXCJkaXZpZGVyXCIsXG4gICAgICAgIFwiYnJlYWRjcnVtYlwiLFxuICAgICAgICBcInRhYmxlX29mX2NvbnRlbnRzXCIsXG4gICAgICAgIFwibGlua190b19wYWdlXCIsXG4gICAgICAgIFwidGFibGVfcm93XCIsXG4gICAgICAgIFwiaGVhZGluZ18xXCIsXG4gICAgICAgIFwiaGVhZGluZ18yXCIsXG4gICAgICAgIFwiaGVhZGluZ18zXCIsXG4gICAgICAgIFwicGFyYWdyYXBoXCIsXG4gICAgICAgIFwiYnVsbGV0ZWRfbGlzdF9pdGVtXCIsXG4gICAgICAgIFwibnVtYmVyZWRfbGlzdF9pdGVtXCIsXG4gICAgICAgIFwicXVvdGVcIixcbiAgICAgICAgXCJ0b19kb1wiLFxuICAgICAgICBcInRvZ2dsZVwiLFxuICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgIFwiY2FsbG91dFwiLFxuICAgICAgICBcInN5bmNlZF9ibG9ja1wiLFxuICAgICAgICBcInRhYmxlXCIsXG4gICAgXSxcbiAgICBwYXRoOiAocCkgPT4gYGJsb2Nrcy8ke3AuYmxvY2tfaWR9YCxcbn07XG5leHBvcnRzLmRlbGV0ZUJsb2NrID0ge1xuICAgIG1ldGhvZDogXCJkZWxldGVcIixcbiAgICBwYXRoUGFyYW1zOiBbXCJibG9ja19pZFwiXSxcbiAgICBxdWVyeVBhcmFtczogW10sXG4gICAgYm9keVBhcmFtczogW10sXG4gICAgcGF0aDogKHApID0+IGBibG9ja3MvJHtwLmJsb2NrX2lkfWAsXG59O1xuZXhwb3J0cy5saXN0QmxvY2tDaGlsZHJlbiA9IHtcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgcGF0aFBhcmFtczogW1wiYmxvY2tfaWRcIl0sXG4gICAgcXVlcnlQYXJhbXM6IFtcInN0YXJ0X2N1cnNvclwiLCBcInBhZ2Vfc2l6ZVwiXSxcbiAgICBib2R5UGFyYW1zOiBbXSxcbiAgICBwYXRoOiAocCkgPT4gYGJsb2Nrcy8ke3AuYmxvY2tfaWR9L2NoaWxkcmVuYCxcbn07XG5leHBvcnRzLmFwcGVuZEJsb2NrQ2hpbGRyZW4gPSB7XG4gICAgbWV0aG9kOiBcInBhdGNoXCIsXG4gICAgcGF0aFBhcmFtczogW1wiYmxvY2tfaWRcIl0sXG4gICAgcXVlcnlQYXJhbXM6IFtdLFxuICAgIGJvZHlQYXJhbXM6IFtcImNoaWxkcmVuXCIsIFwiYWZ0ZXJcIl0sXG4gICAgcGF0aDogKHApID0+IGBibG9ja3MvJHtwLmJsb2NrX2lkfS9jaGlsZHJlbmAsXG59O1xuZXhwb3J0cy5nZXREYXRhYmFzZSA9IHtcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgcGF0aFBhcmFtczogW1wiZGF0YWJhc2VfaWRcIl0sXG4gICAgcXVlcnlQYXJhbXM6IFtdLFxuICAgIGJvZHlQYXJhbXM6IFtdLFxuICAgIHBhdGg6IChwKSA9PiBgZGF0YWJhc2VzLyR7cC5kYXRhYmFzZV9pZH1gLFxufTtcbmV4cG9ydHMudXBkYXRlRGF0YWJhc2UgPSB7XG4gICAgbWV0aG9kOiBcInBhdGNoXCIsXG4gICAgcGF0aFBhcmFtczogW1wiZGF0YWJhc2VfaWRcIl0sXG4gICAgcXVlcnlQYXJhbXM6IFtdLFxuICAgIGJvZHlQYXJhbXM6IFtcbiAgICAgICAgXCJ0aXRsZVwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgIFwiaWNvblwiLFxuICAgICAgICBcImNvdmVyXCIsXG4gICAgICAgIFwicHJvcGVydGllc1wiLFxuICAgICAgICBcImlzX2lubGluZVwiLFxuICAgICAgICBcImFyY2hpdmVkXCIsXG4gICAgXSxcbiAgICBwYXRoOiAocCkgPT4gYGRhdGFiYXNlcy8ke3AuZGF0YWJhc2VfaWR9YCxcbn07XG5leHBvcnRzLnF1ZXJ5RGF0YWJhc2UgPSB7XG4gICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICBwYXRoUGFyYW1zOiBbXCJkYXRhYmFzZV9pZFwiXSxcbiAgICBxdWVyeVBhcmFtczogW1wiZmlsdGVyX3Byb3BlcnRpZXNcIl0sXG4gICAgYm9keVBhcmFtczogW1wic29ydHNcIiwgXCJmaWx0ZXJcIiwgXCJzdGFydF9jdXJzb3JcIiwgXCJwYWdlX3NpemVcIiwgXCJhcmNoaXZlZFwiXSxcbiAgICBwYXRoOiAocCkgPT4gYGRhdGFiYXNlcy8ke3AuZGF0YWJhc2VfaWR9L3F1ZXJ5YCxcbn07XG5leHBvcnRzLmxpc3REYXRhYmFzZXMgPSB7XG4gICAgbWV0aG9kOiBcImdldFwiLFxuICAgIHBhdGhQYXJhbXM6IFtdLFxuICAgIHF1ZXJ5UGFyYW1zOiBbXCJzdGFydF9jdXJzb3JcIiwgXCJwYWdlX3NpemVcIl0sXG4gICAgYm9keVBhcmFtczogW10sXG4gICAgcGF0aDogKCkgPT4gYGRhdGFiYXNlc2AsXG59O1xuZXhwb3J0cy5jcmVhdGVEYXRhYmFzZSA9IHtcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgIHBhdGhQYXJhbXM6IFtdLFxuICAgIHF1ZXJ5UGFyYW1zOiBbXSxcbiAgICBib2R5UGFyYW1zOiBbXG4gICAgICAgIFwicGFyZW50XCIsXG4gICAgICAgIFwicHJvcGVydGllc1wiLFxuICAgICAgICBcImljb25cIixcbiAgICAgICAgXCJjb3ZlclwiLFxuICAgICAgICBcInRpdGxlXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgXCJpc19pbmxpbmVcIixcbiAgICBdLFxuICAgIHBhdGg6ICgpID0+IGBkYXRhYmFzZXNgLFxufTtcbmV4cG9ydHMuc2VhcmNoID0ge1xuICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgcGF0aFBhcmFtczogW10sXG4gICAgcXVlcnlQYXJhbXM6IFtdLFxuICAgIGJvZHlQYXJhbXM6IFtcInNvcnRcIiwgXCJxdWVyeVwiLCBcInN0YXJ0X2N1cnNvclwiLCBcInBhZ2Vfc2l6ZVwiLCBcImZpbHRlclwiXSxcbiAgICBwYXRoOiAoKSA9PiBgc2VhcmNoYCxcbn07XG5leHBvcnRzLmNyZWF0ZUNvbW1lbnQgPSB7XG4gICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICBwYXRoUGFyYW1zOiBbXSxcbiAgICBxdWVyeVBhcmFtczogW10sXG4gICAgYm9keVBhcmFtczogW1wicGFyZW50XCIsIFwicmljaF90ZXh0XCIsIFwiZGlzY3Vzc2lvbl9pZFwiXSxcbiAgICBwYXRoOiAoKSA9PiBgY29tbWVudHNgLFxufTtcbmV4cG9ydHMubGlzdENvbW1lbnRzID0ge1xuICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICBwYXRoUGFyYW1zOiBbXSxcbiAgICBxdWVyeVBhcmFtczogW1wiYmxvY2tfaWRcIiwgXCJzdGFydF9jdXJzb3JcIiwgXCJwYWdlX3NpemVcIl0sXG4gICAgYm9keVBhcmFtczogW10sXG4gICAgcGF0aDogKCkgPT4gYGNvbW1lbnRzYCxcbn07XG5leHBvcnRzLm9hdXRoVG9rZW4gPSB7XG4gICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICBwYXRoUGFyYW1zOiBbXSxcbiAgICBxdWVyeVBhcmFtczogW10sXG4gICAgYm9keVBhcmFtczogW1wiZ3JhbnRfdHlwZVwiLCBcImNvZGVcIiwgXCJyZWRpcmVjdF91cmlcIiwgXCJleHRlcm5hbF9hY2NvdW50XCJdLFxuICAgIHBhdGg6ICgpID0+IGBvYXV0aC90b2tlbmAsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBpLWVuZHBvaW50cy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYnVpbGRSZXF1ZXN0RXJyb3IgPSBleHBvcnRzLkFQSVJlc3BvbnNlRXJyb3IgPSBleHBvcnRzLlVua25vd25IVFRQUmVzcG9uc2VFcnJvciA9IGV4cG9ydHMuaXNIVFRQUmVzcG9uc2VFcnJvciA9IGV4cG9ydHMuUmVxdWVzdFRpbWVvdXRFcnJvciA9IGV4cG9ydHMuaXNOb3Rpb25DbGllbnRFcnJvciA9IGV4cG9ydHMuQ2xpZW50RXJyb3JDb2RlID0gZXhwb3J0cy5BUElFcnJvckNvZGUgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG4vKipcbiAqIEVycm9yIGNvZGVzIHJldHVybmVkIGluIHJlc3BvbnNlcyBmcm9tIHRoZSBBUEkuXG4gKi9cbnZhciBBUElFcnJvckNvZGU7XG4oZnVuY3Rpb24gKEFQSUVycm9yQ29kZSkge1xuICAgIEFQSUVycm9yQ29kZVtcIlVuYXV0aG9yaXplZFwiXSA9IFwidW5hdXRob3JpemVkXCI7XG4gICAgQVBJRXJyb3JDb2RlW1wiUmVzdHJpY3RlZFJlc291cmNlXCJdID0gXCJyZXN0cmljdGVkX3Jlc291cmNlXCI7XG4gICAgQVBJRXJyb3JDb2RlW1wiT2JqZWN0Tm90Rm91bmRcIl0gPSBcIm9iamVjdF9ub3RfZm91bmRcIjtcbiAgICBBUElFcnJvckNvZGVbXCJSYXRlTGltaXRlZFwiXSA9IFwicmF0ZV9saW1pdGVkXCI7XG4gICAgQVBJRXJyb3JDb2RlW1wiSW52YWxpZEpTT05cIl0gPSBcImludmFsaWRfanNvblwiO1xuICAgIEFQSUVycm9yQ29kZVtcIkludmFsaWRSZXF1ZXN0VVJMXCJdID0gXCJpbnZhbGlkX3JlcXVlc3RfdXJsXCI7XG4gICAgQVBJRXJyb3JDb2RlW1wiSW52YWxpZFJlcXVlc3RcIl0gPSBcImludmFsaWRfcmVxdWVzdFwiO1xuICAgIEFQSUVycm9yQ29kZVtcIlZhbGlkYXRpb25FcnJvclwiXSA9IFwidmFsaWRhdGlvbl9lcnJvclwiO1xuICAgIEFQSUVycm9yQ29kZVtcIkNvbmZsaWN0RXJyb3JcIl0gPSBcImNvbmZsaWN0X2Vycm9yXCI7XG4gICAgQVBJRXJyb3JDb2RlW1wiSW50ZXJuYWxTZXJ2ZXJFcnJvclwiXSA9IFwiaW50ZXJuYWxfc2VydmVyX2Vycm9yXCI7XG4gICAgQVBJRXJyb3JDb2RlW1wiU2VydmljZVVuYXZhaWxhYmxlXCJdID0gXCJzZXJ2aWNlX3VuYXZhaWxhYmxlXCI7XG59KShBUElFcnJvckNvZGUgPSBleHBvcnRzLkFQSUVycm9yQ29kZSB8fCAoZXhwb3J0cy5BUElFcnJvckNvZGUgPSB7fSkpO1xuLyoqXG4gKiBFcnJvciBjb2RlcyBnZW5lcmF0ZWQgZm9yIGNsaWVudCBlcnJvcnMuXG4gKi9cbnZhciBDbGllbnRFcnJvckNvZGU7XG4oZnVuY3Rpb24gKENsaWVudEVycm9yQ29kZSkge1xuICAgIENsaWVudEVycm9yQ29kZVtcIlJlcXVlc3RUaW1lb3V0XCJdID0gXCJub3Rpb25ocV9jbGllbnRfcmVxdWVzdF90aW1lb3V0XCI7XG4gICAgQ2xpZW50RXJyb3JDb2RlW1wiUmVzcG9uc2VFcnJvclwiXSA9IFwibm90aW9uaHFfY2xpZW50X3Jlc3BvbnNlX2Vycm9yXCI7XG59KShDbGllbnRFcnJvckNvZGUgPSBleHBvcnRzLkNsaWVudEVycm9yQ29kZSB8fCAoZXhwb3J0cy5DbGllbnRFcnJvckNvZGUgPSB7fSkpO1xuLyoqXG4gKiBCYXNlIGVycm9yIHR5cGUuXG4gKi9cbmNsYXNzIE5vdGlvbkNsaWVudEVycm9yQmFzZSBleHRlbmRzIEVycm9yIHtcbn1cbi8qKlxuICogQHBhcmFtIGVycm9yIGFueSB2YWx1ZSwgdXN1YWxseSBhIGNhdWdodCBlcnJvci5cbiAqIEByZXR1cm5zIGB0cnVlYCBpZiBlcnJvciBpcyBhIGBOb3Rpb25DbGllbnRFcnJvcmAuXG4gKi9cbmZ1bmN0aW9uIGlzTm90aW9uQ2xpZW50RXJyb3IoZXJyb3IpIHtcbiAgICByZXR1cm4gKDAsIHV0aWxzXzEuaXNPYmplY3QpKGVycm9yKSAmJiBlcnJvciBpbnN0YW5jZW9mIE5vdGlvbkNsaWVudEVycm9yQmFzZTtcbn1cbmV4cG9ydHMuaXNOb3Rpb25DbGllbnRFcnJvciA9IGlzTm90aW9uQ2xpZW50RXJyb3I7XG4vKipcbiAqIE5hcnJvd3MgZG93biB0aGUgdHlwZXMgb2YgYSBOb3Rpb25DbGllbnRFcnJvci5cbiAqIEBwYXJhbSBlcnJvciBhbnkgdmFsdWUsIHVzdWFsbHkgYSBjYXVnaHQgZXJyb3IuXG4gKiBAcGFyYW0gY29kZXMgYW4gb2JqZWN0IG1hcHBpbmcgZnJvbSBwb3NzaWJsZSBlcnJvciBjb2RlcyB0byBgdHJ1ZWBcbiAqIEByZXR1cm5zIGB0cnVlYCBpZiBlcnJvciBpcyBhIGBOb3Rpb25DbGllbnRFcnJvcmAgd2l0aCBhIGNvZGUgaW4gYGNvZGVzYC5cbiAqL1xuZnVuY3Rpb24gaXNOb3Rpb25DbGllbnRFcnJvcldpdGhDb2RlKGVycm9yLCBjb2Rlcykge1xuICAgIHJldHVybiBpc05vdGlvbkNsaWVudEVycm9yKGVycm9yKSAmJiBlcnJvci5jb2RlIGluIGNvZGVzO1xufVxuLyoqXG4gKiBFcnJvciB0aHJvd24gYnkgdGhlIGNsaWVudCBpZiBhIHJlcXVlc3QgdGltZXMgb3V0LlxuICovXG5jbGFzcyBSZXF1ZXN0VGltZW91dEVycm9yIGV4dGVuZHMgTm90aW9uQ2xpZW50RXJyb3JCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlID0gXCJSZXF1ZXN0IHRvIE5vdGlvbiBBUEkgaGFzIHRpbWVkIG91dFwiKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmNvZGUgPSBDbGllbnRFcnJvckNvZGUuUmVxdWVzdFRpbWVvdXQ7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiUmVxdWVzdFRpbWVvdXRFcnJvclwiO1xuICAgIH1cbiAgICBzdGF0aWMgaXNSZXF1ZXN0VGltZW91dEVycm9yKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBpc05vdGlvbkNsaWVudEVycm9yV2l0aENvZGUoZXJyb3IsIHtcbiAgICAgICAgICAgIFtDbGllbnRFcnJvckNvZGUuUmVxdWVzdFRpbWVvdXRdOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIHJlamVjdEFmdGVyVGltZW91dChwcm9taXNlLCB0aW1lb3V0TVMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgUmVxdWVzdFRpbWVvdXRFcnJvcigpKTtcbiAgICAgICAgICAgIH0sIHRpbWVvdXRNUyk7XG4gICAgICAgICAgICBwcm9taXNlXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAgICAgICAgICAgICAuY2F0Y2gocmVqZWN0KVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0SWQpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5SZXF1ZXN0VGltZW91dEVycm9yID0gUmVxdWVzdFRpbWVvdXRFcnJvcjtcbmNsYXNzIEhUVFBSZXNwb25zZUVycm9yIGV4dGVuZHMgTm90aW9uQ2xpZW50RXJyb3JCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihhcmdzKSB7XG4gICAgICAgIHN1cGVyKGFyZ3MubWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiSFRUUFJlc3BvbnNlRXJyb3JcIjtcbiAgICAgICAgY29uc3QgeyBjb2RlLCBzdGF0dXMsIGhlYWRlcnMsIHJhd0JvZHlUZXh0IH0gPSBhcmdzO1xuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gaGVhZGVycztcbiAgICAgICAgdGhpcy5ib2R5ID0gcmF3Qm9keVRleHQ7XG4gICAgfVxufVxuY29uc3QgaHR0cFJlc3BvbnNlRXJyb3JDb2RlcyA9IHtcbiAgICBbQ2xpZW50RXJyb3JDb2RlLlJlc3BvbnNlRXJyb3JdOiB0cnVlLFxuICAgIFtBUElFcnJvckNvZGUuVW5hdXRob3JpemVkXTogdHJ1ZSxcbiAgICBbQVBJRXJyb3JDb2RlLlJlc3RyaWN0ZWRSZXNvdXJjZV06IHRydWUsXG4gICAgW0FQSUVycm9yQ29kZS5PYmplY3ROb3RGb3VuZF06IHRydWUsXG4gICAgW0FQSUVycm9yQ29kZS5SYXRlTGltaXRlZF06IHRydWUsXG4gICAgW0FQSUVycm9yQ29kZS5JbnZhbGlkSlNPTl06IHRydWUsXG4gICAgW0FQSUVycm9yQ29kZS5JbnZhbGlkUmVxdWVzdFVSTF06IHRydWUsXG4gICAgW0FQSUVycm9yQ29kZS5JbnZhbGlkUmVxdWVzdF06IHRydWUsXG4gICAgW0FQSUVycm9yQ29kZS5WYWxpZGF0aW9uRXJyb3JdOiB0cnVlLFxuICAgIFtBUElFcnJvckNvZGUuQ29uZmxpY3RFcnJvcl06IHRydWUsXG4gICAgW0FQSUVycm9yQ29kZS5JbnRlcm5hbFNlcnZlckVycm9yXTogdHJ1ZSxcbiAgICBbQVBJRXJyb3JDb2RlLlNlcnZpY2VVbmF2YWlsYWJsZV06IHRydWUsXG59O1xuZnVuY3Rpb24gaXNIVFRQUmVzcG9uc2VFcnJvcihlcnJvcikge1xuICAgIGlmICghaXNOb3Rpb25DbGllbnRFcnJvcldpdGhDb2RlKGVycm9yLCBodHRwUmVzcG9uc2VFcnJvckNvZGVzKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0cy5pc0hUVFBSZXNwb25zZUVycm9yID0gaXNIVFRQUmVzcG9uc2VFcnJvcjtcbi8qKlxuICogRXJyb3IgdGhyb3duIGlmIGFuIEFQSSBjYWxsIHJlc3BvbmRzIHdpdGggYW4gdW5rbm93biBlcnJvciBjb2RlLCBvciBkb2VzIG5vdCByZXNwb25kIHdpdGhcbiAqIGEgcHJvcGVydHktZm9ybWF0dGVkIGVycm9yLlxuICovXG5jbGFzcyBVbmtub3duSFRUUFJlc3BvbnNlRXJyb3IgZXh0ZW5kcyBIVFRQUmVzcG9uc2VFcnJvciB7XG4gICAgY29uc3RydWN0b3IoYXJncykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIC4uLmFyZ3MsXG4gICAgICAgICAgICBjb2RlOiBDbGllbnRFcnJvckNvZGUuUmVzcG9uc2VFcnJvcixcbiAgICAgICAgICAgIG1lc3NhZ2U6IChfYSA9IGFyZ3MubWVzc2FnZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogYFJlcXVlc3QgdG8gTm90aW9uIEFQSSBmYWlsZWQgd2l0aCBzdGF0dXM6ICR7YXJncy5zdGF0dXN9YCxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiVW5rbm93bkhUVFBSZXNwb25zZUVycm9yXCI7XG4gICAgfVxuICAgIHN0YXRpYyBpc1Vua25vd25IVFRQUmVzcG9uc2VFcnJvcihlcnJvcikge1xuICAgICAgICByZXR1cm4gaXNOb3Rpb25DbGllbnRFcnJvcldpdGhDb2RlKGVycm9yLCB7XG4gICAgICAgICAgICBbQ2xpZW50RXJyb3JDb2RlLlJlc3BvbnNlRXJyb3JdOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLlVua25vd25IVFRQUmVzcG9uc2VFcnJvciA9IFVua25vd25IVFRQUmVzcG9uc2VFcnJvcjtcbmNvbnN0IGFwaUVycm9yQ29kZXMgPSB7XG4gICAgW0FQSUVycm9yQ29kZS5VbmF1dGhvcml6ZWRdOiB0cnVlLFxuICAgIFtBUElFcnJvckNvZGUuUmVzdHJpY3RlZFJlc291cmNlXTogdHJ1ZSxcbiAgICBbQVBJRXJyb3JDb2RlLk9iamVjdE5vdEZvdW5kXTogdHJ1ZSxcbiAgICBbQVBJRXJyb3JDb2RlLlJhdGVMaW1pdGVkXTogdHJ1ZSxcbiAgICBbQVBJRXJyb3JDb2RlLkludmFsaWRKU09OXTogdHJ1ZSxcbiAgICBbQVBJRXJyb3JDb2RlLkludmFsaWRSZXF1ZXN0VVJMXTogdHJ1ZSxcbiAgICBbQVBJRXJyb3JDb2RlLkludmFsaWRSZXF1ZXN0XTogdHJ1ZSxcbiAgICBbQVBJRXJyb3JDb2RlLlZhbGlkYXRpb25FcnJvcl06IHRydWUsXG4gICAgW0FQSUVycm9yQ29kZS5Db25mbGljdEVycm9yXTogdHJ1ZSxcbiAgICBbQVBJRXJyb3JDb2RlLkludGVybmFsU2VydmVyRXJyb3JdOiB0cnVlLFxuICAgIFtBUElFcnJvckNvZGUuU2VydmljZVVuYXZhaWxhYmxlXTogdHJ1ZSxcbn07XG4vKipcbiAqIEEgcmVzcG9uc2UgZnJvbSB0aGUgQVBJIGluZGljYXRpbmcgYSBwcm9ibGVtLlxuICogVXNlIHRoZSBgY29kZWAgcHJvcGVydHkgdG8gaGFuZGxlIHZhcmlvdXMga2luZHMgb2YgZXJyb3JzLiBBbGwgaXRzIHBvc3NpYmxlIHZhbHVlcyBhcmUgaW4gYEFQSUVycm9yQ29kZWAuXG4gKi9cbmNsYXNzIEFQSVJlc3BvbnNlRXJyb3IgZXh0ZW5kcyBIVFRQUmVzcG9uc2VFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiQVBJUmVzcG9uc2VFcnJvclwiO1xuICAgIH1cbiAgICBzdGF0aWMgaXNBUElSZXNwb25zZUVycm9yKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBpc05vdGlvbkNsaWVudEVycm9yV2l0aENvZGUoZXJyb3IsIGFwaUVycm9yQ29kZXMpO1xuICAgIH1cbn1cbmV4cG9ydHMuQVBJUmVzcG9uc2VFcnJvciA9IEFQSVJlc3BvbnNlRXJyb3I7XG5mdW5jdGlvbiBidWlsZFJlcXVlc3RFcnJvcihyZXNwb25zZSwgYm9keVRleHQpIHtcbiAgICBjb25zdCBhcGlFcnJvclJlc3BvbnNlQm9keSA9IHBhcnNlQVBJRXJyb3JSZXNwb25zZUJvZHkoYm9keVRleHQpO1xuICAgIGlmIChhcGlFcnJvclJlc3BvbnNlQm9keSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBuZXcgQVBJUmVzcG9uc2VFcnJvcih7XG4gICAgICAgICAgICBjb2RlOiBhcGlFcnJvclJlc3BvbnNlQm9keS5jb2RlLFxuICAgICAgICAgICAgbWVzc2FnZTogYXBpRXJyb3JSZXNwb25zZUJvZHkubWVzc2FnZSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgIHJhd0JvZHlUZXh0OiBib2R5VGV4dCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgVW5rbm93bkhUVFBSZXNwb25zZUVycm9yKHtcbiAgICAgICAgbWVzc2FnZTogdW5kZWZpbmVkLFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgcmF3Qm9keVRleHQ6IGJvZHlUZXh0LFxuICAgIH0pO1xufVxuZXhwb3J0cy5idWlsZFJlcXVlc3RFcnJvciA9IGJ1aWxkUmVxdWVzdEVycm9yO1xuZnVuY3Rpb24gcGFyc2VBUElFcnJvclJlc3BvbnNlQm9keShib2R5KSB7XG4gICAgaWYgKHR5cGVvZiBib2R5ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHBhcnNlZDtcbiAgICB0cnkge1xuICAgICAgICBwYXJzZWQgPSBKU09OLnBhcnNlKGJvZHkpO1xuICAgIH1cbiAgICBjYXRjaCAocGFyc2VFcnJvcikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghKDAsIHV0aWxzXzEuaXNPYmplY3QpKHBhcnNlZCkgfHxcbiAgICAgICAgdHlwZW9mIHBhcnNlZFtcIm1lc3NhZ2VcIl0gIT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgIWlzQVBJRXJyb3JDb2RlKHBhcnNlZFtcImNvZGVcIl0pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucGFyc2VkLFxuICAgICAgICBjb2RlOiBwYXJzZWRbXCJjb2RlXCJdLFxuICAgICAgICBtZXNzYWdlOiBwYXJzZWRbXCJtZXNzYWdlXCJdLFxuICAgIH07XG59XG5mdW5jdGlvbiBpc0FQSUVycm9yQ29kZShjb2RlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBjb2RlID09PSBcInN0cmluZ1wiICYmIGNvZGUgaW4gYXBpRXJyb3JDb2Rlcztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9ycy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaXNGdWxsQ29tbWVudCA9IGV4cG9ydHMuaXNGdWxsVXNlciA9IGV4cG9ydHMuaXNGdWxsUGFnZU9yRGF0YWJhc2UgPSBleHBvcnRzLmlzRnVsbERhdGFiYXNlID0gZXhwb3J0cy5pc0Z1bGxQYWdlID0gZXhwb3J0cy5pc0Z1bGxCbG9jayA9IGV4cG9ydHMuY29sbGVjdFBhZ2luYXRlZEFQSSA9IGV4cG9ydHMuaXRlcmF0ZVBhZ2luYXRlZEFQSSA9IHZvaWQgMDtcbi8qKlxuICogUmV0dXJucyBhbiBhc3luYyBpdGVyYXRvciBvdmVyIHRoZSByZXN1bHRzIG9mIGFueSBwYWdpbmF0ZWQgTm90aW9uIEFQSS5cbiAqXG4gKiBFeGFtcGxlIChnaXZlbiBhIG5vdGlvbiBDbGllbnQgY2FsbGVkIGBub3Rpb25gKTpcbiAqXG4gKiBgYGBcbiAqIGZvciBhd2FpdCAoY29uc3QgYmxvY2sgb2YgaXRlcmF0ZVBhZ2luYXRlZEFQSShub3Rpb24uYmxvY2tzLmNoaWxkcmVuLmxpc3QsIHtcbiAqICAgYmxvY2tfaWQ6IHBhcmVudEJsb2NrSWQsXG4gKiB9KSkge1xuICogICAvLyBEbyBzb21ldGhpbmcgd2l0aCBibG9jay5cbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBsaXN0Rm4gQSBib3VuZCBmdW5jdGlvbiBvbiB0aGUgTm90aW9uIGNsaWVudCB0aGF0IHJlcHJlc2VudHMgYSBjb25mb3JtaW5nIHBhZ2luYXRlZFxuICogICBBUEkuIEV4YW1wbGU6IGBub3Rpb24uYmxvY2tzLmNoaWxkcmVuLmxpc3RgLlxuICogQHBhcmFtIGZpcnN0UGFnZUFyZ3MgQXJndW1lbnRzIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgQVBJIG9uIHRoZSBmaXJzdCBhbmQgc3Vic2VxdWVudFxuICogICBjYWxscyB0byB0aGUgQVBJLiBBbnkgbmVjZXNzYXJ5IGBuZXh0X2N1cnNvcmAgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHBvcHVsYXRlZCBieVxuICogICB0aGlzIGZ1bmN0aW9uLiBFeGFtcGxlOiBgeyBibG9ja19pZDogXCI8bXkgYmxvY2sgaWQ+XCIgfWBcbiAqL1xuYXN5bmMgZnVuY3Rpb24qIGl0ZXJhdGVQYWdpbmF0ZWRBUEkobGlzdEZuLCBmaXJzdFBhZ2VBcmdzKSB7XG4gICAgbGV0IG5leHRDdXJzb3IgPSBmaXJzdFBhZ2VBcmdzLnN0YXJ0X2N1cnNvcjtcbiAgICBkbyB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbGlzdEZuKHtcbiAgICAgICAgICAgIC4uLmZpcnN0UGFnZUFyZ3MsXG4gICAgICAgICAgICBzdGFydF9jdXJzb3I6IG5leHRDdXJzb3IsXG4gICAgICAgIH0pO1xuICAgICAgICB5aWVsZCogcmVzcG9uc2UucmVzdWx0cztcbiAgICAgICAgbmV4dEN1cnNvciA9IHJlc3BvbnNlLm5leHRfY3Vyc29yO1xuICAgIH0gd2hpbGUgKG5leHRDdXJzb3IpO1xufVxuZXhwb3J0cy5pdGVyYXRlUGFnaW5hdGVkQVBJID0gaXRlcmF0ZVBhZ2luYXRlZEFQSTtcbi8qKlxuICogQ29sbGVjdCBhbGwgb2YgdGhlIHJlc3VsdHMgb2YgcGFnaW5hdGluZyBhbiBBUEkgaW50byBhbiBpbi1tZW1vcnkgYXJyYXkuXG4gKlxuICogRXhhbXBsZSAoZ2l2ZW4gYSBub3Rpb24gQ2xpZW50IGNhbGxlZCBgbm90aW9uYCk6XG4gKlxuICogYGBgXG4gKiBjb25zdCBibG9ja3MgPSBhd2FpdCBjb2xsZWN0UGFnaW5hdGVkQVBJKG5vdGlvbi5ibG9ja3MuY2hpbGRyZW4ubGlzdCwge1xuICogICBibG9ja19pZDogcGFyZW50QmxvY2tJZCxcbiAqIH0pXG4gKiAvLyBEbyBzb21ldGhpbmcgd2l0aCBibG9ja3MuXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gbGlzdEZuIEEgYm91bmQgZnVuY3Rpb24gb24gdGhlIE5vdGlvbiBjbGllbnQgdGhhdCByZXByZXNlbnRzIGEgY29uZm9ybWluZyBwYWdpbmF0ZWRcbiAqICAgQVBJLiBFeGFtcGxlOiBgbm90aW9uLmJsb2Nrcy5jaGlsZHJlbi5saXN0YC5cbiAqIEBwYXJhbSBmaXJzdFBhZ2VBcmdzIEFyZ3VtZW50cyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIEFQSSBvbiB0aGUgZmlyc3QgYW5kIHN1YnNlcXVlbnRcbiAqICAgY2FsbHMgdG8gdGhlIEFQSS4gQW55IG5lY2Vzc2FyeSBgbmV4dF9jdXJzb3JgIHdpbGwgYmUgYXV0b21hdGljYWxseSBwb3B1bGF0ZWQgYnlcbiAqICAgdGhpcyBmdW5jdGlvbi4gRXhhbXBsZTogYHsgYmxvY2tfaWQ6IFwiPG15IGJsb2NrIGlkPlwiIH1gXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNvbGxlY3RQYWdpbmF0ZWRBUEkobGlzdEZuLCBmaXJzdFBhZ2VBcmdzKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgIGZvciBhd2FpdCAoY29uc3QgaXRlbSBvZiBpdGVyYXRlUGFnaW5hdGVkQVBJKGxpc3RGbiwgZmlyc3RQYWdlQXJncykpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbn1cbmV4cG9ydHMuY29sbGVjdFBhZ2luYXRlZEFQSSA9IGNvbGxlY3RQYWdpbmF0ZWRBUEk7XG4vKipcbiAqIEByZXR1cm5zIGB0cnVlYCBpZiBgcmVzcG9uc2VgIGlzIGEgZnVsbCBgQmxvY2tPYmplY3RSZXNwb25zZWAuXG4gKi9cbmZ1bmN0aW9uIGlzRnVsbEJsb2NrKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIFwidHlwZVwiIGluIHJlc3BvbnNlO1xufVxuZXhwb3J0cy5pc0Z1bGxCbG9jayA9IGlzRnVsbEJsb2NrO1xuLyoqXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgYHJlc3BvbnNlYCBpcyBhIGZ1bGwgYFBhZ2VPYmplY3RSZXNwb25zZWAuXG4gKi9cbmZ1bmN0aW9uIGlzRnVsbFBhZ2UocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gXCJ1cmxcIiBpbiByZXNwb25zZTtcbn1cbmV4cG9ydHMuaXNGdWxsUGFnZSA9IGlzRnVsbFBhZ2U7XG4vKipcbiAqIEByZXR1cm5zIGB0cnVlYCBpZiBgcmVzcG9uc2VgIGlzIGEgZnVsbCBgRGF0YWJhc2VPYmplY3RSZXNwb25zZWAuXG4gKi9cbmZ1bmN0aW9uIGlzRnVsbERhdGFiYXNlKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIFwidGl0bGVcIiBpbiByZXNwb25zZTtcbn1cbmV4cG9ydHMuaXNGdWxsRGF0YWJhc2UgPSBpc0Z1bGxEYXRhYmFzZTtcbi8qKlxuICogQHJldHVybnMgYHRydWVgIGlmIGByZXNwb25zZWAgaXMgYSBmdWxsIGBEYXRhYmFzZU9iamVjdFJlc3BvbnNlYCBvciBhIGZ1bGxcbiAqIGBQYWdlT2JqZWN0UmVzcG9uc2VgLlxuICovXG5mdW5jdGlvbiBpc0Z1bGxQYWdlT3JEYXRhYmFzZShyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5vYmplY3QgPT09IFwiZGF0YWJhc2VcIikge1xuICAgICAgICByZXR1cm4gaXNGdWxsRGF0YWJhc2UocmVzcG9uc2UpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGlzRnVsbFBhZ2UocmVzcG9uc2UpO1xuICAgIH1cbn1cbmV4cG9ydHMuaXNGdWxsUGFnZU9yRGF0YWJhc2UgPSBpc0Z1bGxQYWdlT3JEYXRhYmFzZTtcbi8qKlxuICogQHJldHVybnMgYHRydWVgIGlmIGByZXNwb25zZWAgaXMgYSBmdWxsIGBVc2VyT2JqZWN0UmVzcG9uc2VgLlxuICovXG5mdW5jdGlvbiBpc0Z1bGxVc2VyKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIFwidHlwZVwiIGluIHJlc3BvbnNlO1xufVxuZXhwb3J0cy5pc0Z1bGxVc2VyID0gaXNGdWxsVXNlcjtcbi8qKlxuICogQHJldHVybnMgYHRydWVgIGlmIGByZXNwb25zZWAgaXMgYSBmdWxsIGBDb21tZW50T2JqZWN0UmVzcG9uc2VgLlxuICovXG5mdW5jdGlvbiBpc0Z1bGxDb21tZW50KHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIFwiY3JlYXRlZF9ieVwiIGluIHJlc3BvbnNlO1xufVxuZXhwb3J0cy5pc0Z1bGxDb21tZW50ID0gaXNGdWxsQ29tbWVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlbHBlcnMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlzRnVsbFBhZ2VPckRhdGFiYXNlID0gZXhwb3J0cy5pc0Z1bGxDb21tZW50ID0gZXhwb3J0cy5pc0Z1bGxVc2VyID0gZXhwb3J0cy5pc0Z1bGxQYWdlID0gZXhwb3J0cy5pc0Z1bGxEYXRhYmFzZSA9IGV4cG9ydHMuaXNGdWxsQmxvY2sgPSBleHBvcnRzLml0ZXJhdGVQYWdpbmF0ZWRBUEkgPSBleHBvcnRzLmNvbGxlY3RQYWdpbmF0ZWRBUEkgPSBleHBvcnRzLmlzTm90aW9uQ2xpZW50RXJyb3IgPSBleHBvcnRzLlJlcXVlc3RUaW1lb3V0RXJyb3IgPSBleHBvcnRzLlVua25vd25IVFRQUmVzcG9uc2VFcnJvciA9IGV4cG9ydHMuQVBJUmVzcG9uc2VFcnJvciA9IGV4cG9ydHMuQ2xpZW50RXJyb3JDb2RlID0gZXhwb3J0cy5BUElFcnJvckNvZGUgPSBleHBvcnRzLkxvZ0xldmVsID0gZXhwb3J0cy5DbGllbnQgPSB2b2lkIDA7XG52YXIgQ2xpZW50XzEgPSByZXF1aXJlKFwiLi9DbGllbnRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDbGllbnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIENsaWVudF8xLmRlZmF1bHQ7IH0gfSk7XG52YXIgbG9nZ2luZ18xID0gcmVxdWlyZShcIi4vbG9nZ2luZ1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkxvZ0xldmVsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBsb2dnaW5nXzEuTG9nTGV2ZWw7IH0gfSk7XG52YXIgZXJyb3JzXzEgPSByZXF1aXJlKFwiLi9lcnJvcnNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBUElFcnJvckNvZGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVycm9yc18xLkFQSUVycm9yQ29kZTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkNsaWVudEVycm9yQ29kZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZXJyb3JzXzEuQ2xpZW50RXJyb3JDb2RlOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQVBJUmVzcG9uc2VFcnJvclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZXJyb3JzXzEuQVBJUmVzcG9uc2VFcnJvcjsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlVua25vd25IVFRQUmVzcG9uc2VFcnJvclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZXJyb3JzXzEuVW5rbm93bkhUVFBSZXNwb25zZUVycm9yOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUmVxdWVzdFRpbWVvdXRFcnJvclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZXJyb3JzXzEuUmVxdWVzdFRpbWVvdXRFcnJvcjsgfSB9KTtcbi8vIEVycm9yIGhlbHBlcnNcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzTm90aW9uQ2xpZW50RXJyb3JcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVycm9yc18xLmlzTm90aW9uQ2xpZW50RXJyb3I7IH0gfSk7XG52YXIgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNvbGxlY3RQYWdpbmF0ZWRBUElcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGhlbHBlcnNfMS5jb2xsZWN0UGFnaW5hdGVkQVBJOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXRlcmF0ZVBhZ2luYXRlZEFQSVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaGVscGVyc18xLml0ZXJhdGVQYWdpbmF0ZWRBUEk7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc0Z1bGxCbG9ja1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaGVscGVyc18xLmlzRnVsbEJsb2NrOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNGdWxsRGF0YWJhc2VcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGhlbHBlcnNfMS5pc0Z1bGxEYXRhYmFzZTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzRnVsbFBhZ2VcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGhlbHBlcnNfMS5pc0Z1bGxQYWdlOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNGdWxsVXNlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaGVscGVyc18xLmlzRnVsbFVzZXI7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc0Z1bGxDb21tZW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBoZWxwZXJzXzEuaXNGdWxsQ29tbWVudDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzRnVsbFBhZ2VPckRhdGFiYXNlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBoZWxwZXJzXzEuaXNGdWxsUGFnZU9yRGF0YWJhc2U7IH0gfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG9nTGV2ZWxTZXZlcml0eSA9IGV4cG9ydHMubWFrZUNvbnNvbGVMb2dnZXIgPSBleHBvcnRzLkxvZ0xldmVsID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xudmFyIExvZ0xldmVsO1xuKGZ1bmN0aW9uIChMb2dMZXZlbCkge1xuICAgIExvZ0xldmVsW1wiREVCVUdcIl0gPSBcImRlYnVnXCI7XG4gICAgTG9nTGV2ZWxbXCJJTkZPXCJdID0gXCJpbmZvXCI7XG4gICAgTG9nTGV2ZWxbXCJXQVJOXCJdID0gXCJ3YXJuXCI7XG4gICAgTG9nTGV2ZWxbXCJFUlJPUlwiXSA9IFwiZXJyb3JcIjtcbn0pKExvZ0xldmVsID0gZXhwb3J0cy5Mb2dMZXZlbCB8fCAoZXhwb3J0cy5Mb2dMZXZlbCA9IHt9KSk7XG5mdW5jdGlvbiBtYWtlQ29uc29sZUxvZ2dlcihuYW1lKSB7XG4gICAgcmV0dXJuIChsZXZlbCwgbWVzc2FnZSwgZXh0cmFJbmZvKSA9PiB7XG4gICAgICAgIGNvbnNvbGVbbGV2ZWxdKGAke25hbWV9ICR7bGV2ZWx9OmAsIG1lc3NhZ2UsIGV4dHJhSW5mbyk7XG4gICAgfTtcbn1cbmV4cG9ydHMubWFrZUNvbnNvbGVMb2dnZXIgPSBtYWtlQ29uc29sZUxvZ2dlcjtcbi8qKlxuICogVHJhbnNmb3JtcyBhIGxvZyBsZXZlbCBpbnRvIGEgY29tcGFyYWJsZSAobnVtZXJpY2FsKSB2YWx1ZSBvcmRlcmVkIGJ5IHNldmVyaXR5LlxuICovXG5mdW5jdGlvbiBsb2dMZXZlbFNldmVyaXR5KGxldmVsKSB7XG4gICAgc3dpdGNoIChsZXZlbCkge1xuICAgICAgICBjYXNlIExvZ0xldmVsLkRFQlVHOlxuICAgICAgICAgICAgcmV0dXJuIDIwO1xuICAgICAgICBjYXNlIExvZ0xldmVsLklORk86XG4gICAgICAgICAgICByZXR1cm4gNDA7XG4gICAgICAgIGNhc2UgTG9nTGV2ZWwuV0FSTjpcbiAgICAgICAgICAgIHJldHVybiA2MDtcbiAgICAgICAgY2FzZSBMb2dMZXZlbC5FUlJPUjpcbiAgICAgICAgICAgIHJldHVybiA4MDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAoMCwgdXRpbHNfMS5hc3NlcnROZXZlcikobGV2ZWwpO1xuICAgIH1cbn1cbmV4cG9ydHMubG9nTGV2ZWxTZXZlcml0eSA9IGxvZ0xldmVsU2V2ZXJpdHk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2dnaW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc09iamVjdCA9IGV4cG9ydHMucGljayA9IGV4cG9ydHMuYXNzZXJ0TmV2ZXIgPSB2b2lkIDA7XG4vKipcbiAqIFV0aWxpdHkgZm9yIGVuZm9yY2luZyBleGhhdXN0aXZlbmVzcyBjaGVja3MgaW4gdGhlIHR5cGUgc3lzdGVtLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9iYXNhcmF0LmdpdGJvb2suaW8vdHlwZXNjcmlwdC90eXBlLXN5c3RlbS9kaXNjcmltaW5hdGVkLXVuaW9ucyN0aHJvdy1pbi1leGhhdXN0aXZlLWNoZWNrc1xuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFyaWFibGUgd2l0aCBubyByZW1haW5pbmcgdmFsdWVzXG4gKi9cbmZ1bmN0aW9uIGFzc2VydE5ldmVyKHZhbHVlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIHZhbHVlIHNob3VsZCBuZXZlciBvY2N1cjogJHt2YWx1ZX1gKTtcbn1cbmV4cG9ydHMuYXNzZXJ0TmV2ZXIgPSBhc3NlcnROZXZlcjtcbmZ1bmN0aW9uIHBpY2soYmFzZSwga2V5cykge1xuICAgIGNvbnN0IGVudHJpZXMgPSBrZXlzLm1hcChrZXkgPT4gW2tleSwgYmFzZSA9PT0gbnVsbCB8fCBiYXNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBiYXNlW2tleV1dKTtcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKGVudHJpZXMpO1xufVxuZXhwb3J0cy5waWNrID0gcGljaztcbmZ1bmN0aW9uIGlzT2JqZWN0KG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiYgbyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWdsb2JhbFxudmFyIGdldEdsb2JhbCA9IGZ1bmN0aW9uICgpIHtcblx0Ly8gdGhlIG9ubHkgcmVsaWFibGUgbWVhbnMgdG8gZ2V0IHRoZSBnbG9iYWwgb2JqZWN0IGlzXG5cdC8vIGBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpYFxuXHQvLyBIb3dldmVyLCB0aGlzIGNhdXNlcyBDU1AgdmlvbGF0aW9ucyBpbiBDaHJvbWUgYXBwcy5cblx0aWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gc2VsZjsgfVxuXHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIHdpbmRvdzsgfVxuXHRpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGdsb2JhbDsgfVxuXHR0aHJvdyBuZXcgRXJyb3IoJ3VuYWJsZSB0byBsb2NhdGUgZ2xvYmFsIG9iamVjdCcpO1xufVxuXG52YXIgZ2xvYmFsT2JqZWN0ID0gZ2V0R2xvYmFsKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGdsb2JhbE9iamVjdC5mZXRjaDtcblxuLy8gTmVlZGVkIGZvciBUeXBlU2NyaXB0IGFuZCBXZWJwYWNrLlxuaWYgKGdsb2JhbE9iamVjdC5mZXRjaCkge1xuXHRleHBvcnRzLmRlZmF1bHQgPSBnbG9iYWxPYmplY3QuZmV0Y2guYmluZChnbG9iYWxPYmplY3QpO1xufVxuXG5leHBvcnRzLkhlYWRlcnMgPSBnbG9iYWxPYmplY3QuSGVhZGVycztcbmV4cG9ydHMuUmVxdWVzdCA9IGdsb2JhbE9iamVjdC5SZXF1ZXN0O1xuZXhwb3J0cy5SZXNwb25zZSA9IGdsb2JhbE9iamVjdC5SZXNwb25zZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IENsaWVudCB9IGZyb20gJ0Bub3Rpb25ocS9jbGllbnQnO1xubGV0IHNhdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhdmVcIik7XG5sZXQgcmVzZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0XCIpO1xuY2hlY2tQbGFjZUhvbGRlcigpO1xuc2F2ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNhdmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMzI2NEI3XCI7XG4gICAgc2F2ZS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgIHZhciBuVG9rZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5Ub2tlblwiKS52YWx1ZTtcbiAgICB2YXIgcGFnZUlEID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlSURcIikudmFsdWU7XG4gICAgY3JlYXRlRGF0YWJhc2UoblRva2VuLCBwYWdlSUQpO1xufSk7XG5yZXNldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlc2V0TSgpO1xufSk7XG5mdW5jdGlvbiBjaGVja1BsYWNlSG9sZGVyKCkge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbXCJuVG9rZW5cIiwgXCJwYWdlSURcIl0sIChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IG5Ub2tlbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuVG9rZW5cIik7XG4gICAgICAgIGNvbnN0IHBhZ2VJRElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlSURcIik7XG4gICAgICAgIGlmICghblRva2VuSW5wdXQgfHwgIXBhZ2VJRElucHV0KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5uVG9rZW4gPT09IHVuZGVmaW5lZCB8fCBkYXRhLnBhZ2VJRCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuVG9rZW5JbnB1dC52YWx1ZSA9ICcnOyAvLyDmuIXnqbrovpPlhaXmoYZcbiAgICAgICAgICAgIHBhZ2VJRElucHV0LnZhbHVlID0gJyc7IC8vIOa4heepuui+k+WFpeahhlxuICAgICAgICAgICAgcmVzZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjY2VjZWNlXCI7XG4gICAgICAgICAgICByZXNldC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgc2F2ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM0Mjg1ZjRcIjtcbiAgICAgICAgICAgIHNhdmUucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuVG9rZW5JbnB1dC52YWx1ZSA9IGRhdGEublRva2VuOyAvLyDorr7nva7ovpPlhaXmoYbnmoTlgLxcbiAgICAgICAgICAgIHBhZ2VJRElucHV0LnZhbHVlID0gZGF0YS5wYWdlSUQ7IC8vIOiuvue9rui+k+WFpeahhueahOWAvFxuICAgICAgICAgICAgc2F2ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNjZWNlY2VcIjtcbiAgICAgICAgICAgIHNhdmUuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIHJlc2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzQyODVmNFwiO1xuICAgICAgICAgICAgcmVzZXQucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZURhdGFiYXNlKG5Ub2tlbiwgcGFnZUlEKSB7XG4gICAgY29uc3Qgbm90aW9uID0gbmV3IENsaWVudCh7IGF1dGg6IG5Ub2tlbiB9KTtcbiAgICBub3Rpb24uZGF0YWJhc2VzLmNyZWF0ZSh7XG4gICAgICAgIHBhcmVudDogeyB0eXBlOiBcInBhZ2VfaWRcIiwgcGFnZV9pZDogcGFnZUlEIH0sXG4gICAgICAgIHRpdGxlOiBbeyB0eXBlOiBcInRleHRcIiwgdGV4dDogeyBjb250ZW50OiBcIkJvb2tMaXN0XCIsIGxpbms6IG51bGwgfSB9XSxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgXCJjb250ZXh0XCI6IHsgXCJ0aXRsZVwiOiB7fSB9LFxuICAgICAgICAgICAgXCJ1cmxcIjogeyBcInVybFwiOiB7fSB9LFxuICAgICAgICAgICAgXCJkYXRlXCI6IHsgXCJkYXRlXCI6IHt9IH1cbiAgICAgICAgfVxuICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBcImRhdGFiYXNlSURcIjogcmVzcG9uc2UuaWQsIG5Ub2tlbjogblRva2VuLCBwYWdlSUQ6IHBhZ2VJRCB9LCAoKSA9PiB7XG4gICAgICAgICAgICBjaGVja1BsYWNlSG9sZGVyKCk7XG4gICAgICAgICAgICBhbGVydChcIuWIm+W7ukRhdGFiYXNl5bm25L+d5a2Y5oiQ5YqfIVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgY2hlY2tQbGFjZUhvbGRlcigpO1xuICAgICAgICBhbGVydChcIuWIm+W7ukRhdGFiYXNl5aSx6LSlOiBcIiArIGVycm9yLm1lc3NhZ2UpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcmVzZXRNKCkge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShbXCJuVG9rZW5cIiwgXCJwYWdlSURcIl0sICgpID0+IHtcbiAgICAgICAgY2hlY2tQbGFjZUhvbGRlcigpO1xuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9