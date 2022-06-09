/*
 * posthog doc: https://posthog.com/docs/integrate/client/js
 */

import posthog from 'posthog-js';

type Config = {
  token: string;
  enabled: boolean;
  options: posthog.Config;
};

export default function postHog(config: Config) {
  let isPostHogLoaded = false;

  return {
    name: 'posthog',

    initialize: (): void => {
      if (config.enabled) {
        posthog.init(config.token, {
          loaded: () => (isPostHogLoaded = true),
          ...config.options,
        });
      }
    },

    track: ({ payload }: any): void => {
      posthog.capture(payload.event, payload.properties);
    },

    page: ({ payload }: any): void => {
      posthog.capture('$pageview', payload.properties);
    },

    identify: (id: string): void => {
      posthog.identify(id);
    },

    reset: (resetDeviceId = false): void => {
      posthog.reset(resetDeviceId);
    },

    loaded: (): boolean => {
      return isPostHogLoaded;
    },

    // Custom PostHog's functions to expose to analytics instance
    methods: {
      /**
       * Super Properties are properties associated with events that are set once and then sent with every capture call, be it a $pageview, an autocaptured button click, or anything else.
       * They are set using posthog.register, which takes a properties object as a parameter, and they persist across sessions.
       */
      register: ({ payload }: any) => {
        posthog.register(payload.properties);
      },

      /**
       * An object with properties to be set on the user that will be associated with the user who triggered the event.
       */

      trackAndSet: ({ payload }: any): void => {
        posthog.capture(payload.event, { $set: payload.properties });
      },
      /**
       * An object with properties to be set on the user that will be associated with the user who triggered the event, except that it will only set the property if the user doesn't already have that property set.
       */

      trackAndSetOnce: ({ payload }: any): void => {
        posthog.capture(payload.event, { $set_once: payload.properties });
      },

      /**
       * The argument callback(flags: string[]) will be called when the feature flags are loaded.
       * In case the flags are already loaded, it'll be called immediately. Additionally, it will also be called when the flags are re-loaded e.g. after calling identify or reloadFeatureFlags.
       */
      onFeatureFlags: (callback: (flags?: string[]) => any): void => {
        posthog.onFeatureFlags(callback);
      },

      isFeatureEnabled: (flagName: string, shouldSendEvent = true): void => {
        posthog.isFeatureEnabled(flagName, { send_event: shouldSendEvent });
      },

      reloadFeatureFlags: (): void => {
        posthog.reloadFeatureFlags();
      },

      getDistinctId: (): string => posthog.get_distinct_id(),
    },
  };
}
