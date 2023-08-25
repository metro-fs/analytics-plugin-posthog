# Changelog

## 1.0.0 (2023-08-25)


### Features

* **#3:** added properties to identify method ([411d609](https://github.com/cashrent/analytics-plugin-posthog/commit/411d609918eeb3372348dd965c788626b51ec9cc))
* added dependabot to repo ([e96ad15](https://github.com/cashrent/analytics-plugin-posthog/commit/e96ad151e4dc867607eadece07798b111e08a4b0))
* added getFeatureFlag method ([a3fff5a](https://github.com/cashrent/analytics-plugin-posthog/commit/a3fff5adb27c47516f6cc62f48d6583b21c1b494))
* **custom methods:** added getDistinctId method ([dc88a18](https://github.com/cashrent/analytics-plugin-posthog/commit/dc88a18184f649022f84a423c28fe9a856907564))
* made properties from PostHogConfig optional ([3fb8af3](https://github.com/cashrent/analytics-plugin-posthog/commit/3fb8af32ffdaa9c5f4fbeb2fd0253d0000740e91))
* **plugin-core:** added core plugin files for v.1.0.0 ([b3c2e6a](https://github.com/cashrent/analytics-plugin-posthog/commit/b3c2e6a44f7ede4fa1b8e667af96312e0d44cbd9))
* **recordings:** added startSessionRecording and JSDocs ([2c28c3d](https://github.com/cashrent/analytics-plugin-posthog/commit/2c28c3daeb4c40c4a651e65971a50b504824c8c4))
* set up fist version ([4325122](https://github.com/cashrent/analytics-plugin-posthog/commit/4325122d775a77b221924a3bd3408171821a755f))
* updated readme ([96fde9f](https://github.com/cashrent/analytics-plugin-posthog/commit/96fde9f99f4f33dbe0b07c218af9bd05f8ac3ba5))


### Bug Fixes

* **feature flags:** fixed feature flag status not being returned ([3fe6ff0](https://github.com/cashrent/analytics-plugin-posthog/commit/3fe6ff0d99259e2c870c33d0a0ac0761dae9ef15))
* **identify method:** proper arguments structure in identify method ([a28af28](https://github.com/cashrent/analytics-plugin-posthog/commit/a28af28fa6a87ddc2318d5309afe57f12f62c2a4))
* **identify:** send only userId, not the whole payload ([2a2f1e5](https://github.com/cashrent/analytics-plugin-posthog/commit/2a2f1e5f0f9a7b9e222dcc12e947c28d493d038d))


### Reverts

* downgraded posthog version because of TS errors ([e6602eb](https://github.com/cashrent/analytics-plugin-posthog/commit/e6602ebbd153bbfb2bb866b0c7ec077284e596d0))
