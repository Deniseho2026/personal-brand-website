(() => {
  const endpoint = "/__manus__/logs";
  const queue = { consoleLogs: [], networkRequests: [], sessionEvents: [] };
  let flushTimer;

  const flush = () => {
    if (!queue.consoleLogs.length && !queue.networkRequests.length && !queue.sessionEvents.length) return;
    const payload = {
      consoleLogs: queue.consoleLogs.splice(0),
      networkRequests: queue.networkRequests.splice(0),
      sessionEvents: queue.sessionEvents.splice(0),
    };
    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {});
  };

  const scheduleFlush = () => {
    if (flushTimer) return;
    flushTimer = window.setTimeout(() => {
      flushTimer = undefined;
      flush();
    }, 250);
  };

  const stringify = value => {
    if (value instanceof Error) return `${value.name}: ${value.message}\n${value.stack || ""}`;
    if (typeof value === "string") return value;
    try { return JSON.stringify(value); } catch { return String(value); }
  };

  ["log", "info", "warn", "error", "debug"].forEach(method => {
    const original = console[method];
    console[method] = (...args) => {
      queue.consoleLogs.push({ level: method, args: args.map(stringify), timestamp: new Date().toISOString() });
      scheduleFlush();
      original.apply(console, args);
    };
  });

  window.addEventListener("error", event => {
    queue.consoleLogs.push({ level: "error", args: [stringify(event.error || event.message)], timestamp: new Date().toISOString() });
    scheduleFlush();
  });

  window.addEventListener("unhandledrejection", event => {
    queue.consoleLogs.push({ level: "error", args: [`Unhandled rejection: ${stringify(event.reason)}`], timestamp: new Date().toISOString() });
    scheduleFlush();
  });

  window.addEventListener("pagehide", flush);
})();
