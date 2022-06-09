# @metro-fs/analytics-plugin-posthog

## Important note for the initial release
If your project is using Typescript, you'll get an error when trying to use custom methods defined in this plugin: `Property 'posthog' does not exist on type 'Plugins'`.
Custom methods are working fine, base library needs a change in typing for the `plugins` array.  
You can track the issue [HERE](https://github.com/DavidWells/analytics/issues/266).

## What's that
This is a small plugin for [DavidWells/analytics](https://github.com/DavidWells/analytics) library. It handles all basic `analytics` library methods (`initialize`, `page`, `track`, `identify`, `loaded`), plus it adds couple custom methods that PostHog's API provides: `register`, `trackAndSet`, `trackAndSetOnce`, `onFeatureFlags`, `isFeatureEnabled`, `reloadFeatureFlags`, `getDistinctId`.
## Installation
1. `npm i @metro-fs/analytics-plugin-posthog`
2. In `analytics` init, add PostHog in the plugins array. Example config:
```js
import Analytics from 'analytics';
import postHog from '@metro-fs/analytics-plugin-posthog';

const analytics = Analytics({
  app: 'example',
  plugins: [
    postHog({
      token: POSTHOG_TOKEN,
      enabled: true,
      options: {
        api_host: POSTHOG_API_HOST,
        debug: process.env.NODE_ENV === 'dev',
        persistence: 'memory',
        disable_cookie: true,
        disable_session_recording: true,
      },
    }),
  ],
});

export default analytics;
``` 

## Usage
Just use the analytics library as usually, e.g. `analytics.track(eventName, eventValue);`.  
If you want to use custom PostHog methods, use: `analytics.plugins.posthog.onFeatureFlags(this.onFeatureFlagsReady)`. Please remember about the TypeScript issue mentioned earlier.