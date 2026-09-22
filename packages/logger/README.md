# 🪵 @yuva-devlab/logger

Lightweight, zero-dependency, isomorphic TypeScript logger and Express HTTP request logging middleware for the Yuva DevLab ecosystem.

## Features

- 🎨 **Colored Console Output**: Distinct terminal colors for `DEBUG`, `INFO`, `WARN`, and `ERROR` levels with ISO-8601 timestamps.
- 🏷️ **Context Support**: Tag logs with component or service contexts (e.g., `[AuthService]`, `[HTTP]`).
- 📁 **File Persistence**: Optional disk persistence using asynchronous Node.js file streams (`LOG_PERSIST=true`).
- 🌐 **HTTP Request Middleware**: Ready-to-use Express middleware tracking request methods, URLs, status codes, and execution durations.
- ⚙️ **Environment Aware**: Configurable through standard environment variables or explicit config options.
- 📦 **Dual ESM & CJS Build**: Works seamlessly across both modern ESM runtimes and legacy CommonJS environments.

---

## Installation

```bash
pnpm add @yuva-devlab/logger
# or
npm install @yuva-devlab/logger
```

---

## Quick Start

### Basic Logger

```typescript
import { Logger } from "@yuva-devlab/logger";

const logger = new Logger("AuthService");

logger.info("User logged in successfully", { userId: "user_123" });
logger.warn("Rate limit threshold approached", { ip: "192.168.1.1" });
logger.error("Failed to authenticate user", new Error("Token expired"));
logger.debug("Decoded JWT payload", { sub: "user_123" });
```

### Configured Logger (with Environment Variables)

```typescript
import { createLogger } from "@yuva-devlab/logger";

const logger = createLogger({
  level: "info",
  enabled: true,
  file: "./logs/app.log",
});

logger.info("Application initialized");
```

### Express Request Logger Middleware

```typescript
import express from "express";
import { requestLogger, Logger } from "@yuva-devlab/logger";

const app = express();
const httpLogger = new Logger("HTTP");

// Attach the middleware
app.use(requestLogger(httpLogger));

app.get("/api/users", (req, res) => {
  res.json([{ id: 1, name: "Alice" }]);
});

app.listen(3000, () => {
  httpLogger.info("Server started on port 3000");
});
```

---

## Environment Variables

| Variable      | Type      | Default     | Description                                                         |
| :------------ | :-------- | :---------- | :------------------------------------------------------------------ |
| `LOG_ENABLED` | `boolean` | `true`      | Enable or disable all log output (`"false"` to mute).               |
| `LOG_LEVEL`   | `string`  | `"info"`    | Minimum log level (`"debug"`, `"info"`, `"warn"`, `"error"`).       |
| `LOG_PERSIST` | `boolean` | `false`     | When `"true"`, appends log output to disk file.                     |
| `LOG_FILE`    | `string`  | `undefined` | File path to write log entries to (required if `LOG_PERSIST=true`). |

---

## API Reference

### `Logger`

- `constructor(context?: string)`
- `log(message: any, ...optionalParams: any[]): void`
- `info(message: any, ...optionalParams: any[]): void`
- `warn(message: any, ...optionalParams: any[]): void`
- `error(message: any, ...optionalParams: any[]): void`
- `debug(message: any, ...optionalParams: any[]): void` (suppressed automatically in `NODE_ENV === "production"`)

### `createLogger(config?: LoggerConfig): Logger`

Creates a configured logger honoring runtime configuration and environment variables.

### `loggerWithConfig(base: Logger, config?: LoggerConfig): Logger`

Wraps an existing logger instance to respect runtime level gating and file persistence.

### `requestLogger(loggerInstance?: Logger): ExpressMiddleware`

Express middleware logging incoming HTTP requests upon completion with status code-based log levels.

---

## License

MIT © Yuva DevLab
