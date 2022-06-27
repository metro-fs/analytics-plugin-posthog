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

    identify: ({
      payload,
    }: {
      payload: {
        userId: string;
        $set?: object;
        $set_once?: object;
      };
    }): void => {
      const { userId, $set, $set_once } = payload;

      if (userId) {
        posthog.identify(payload.userId, $set, $set_once);
      }
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
       * @param {function} callback
       */
      onFeatureFlags: (callback: (flags?: string[]) => any): void => {
        posthog.onFeatureFlags(callback);
      },

      /**
       * Checks is the feature flag enabled
       * @param {string} flagName The name of the feature flag
       * @param {boolean} shouldSendEvent Whether to send an event when the flag is checked
       * @returns {boolean} Whether the flag is enabled
       */
      isFeatureEnabled: (flagName: string, shouldSendEvent: boolean = true): boolean =>
        posthog.isFeatureEnabled(flagName, { send_event: shouldSendEvent }),

      reloadFeatureFlags: (): void => {
        posthog.reloadFeatureFlags();
      },

      /**
       * Returns the distinct id of the current user.
       * @returns {string}
       */
      getDistinctId: (): string => posthog.get_distinct_id(),

      startSessionRecording: (): void => {
        posthog.startSessionRecording();
      },
    },
  };
}
