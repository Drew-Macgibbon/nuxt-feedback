import { TestingSettingsType } from '@/types/testing'

export default defineStore('admin-settings', () => {
  const env = useRuntimeConfig().public
  const testingEnabled = readonly(ref(env.TEST_MODE === 'true'))
  const settings = reactive<TestingSettingsType>({
    authOn: true,
    // Add other features as needed, update type in types\testing.ts
  })

  // TODO: add all functions I want to test here
  const authStore = useAuth()
  const user = {
    email: env.TESTING_USERNAME as string,
    password: env.TESTING_PASSWORD as string,
  }
  const auth = {
    login: async () => await authStore.login(user),
    register: async () => await authStore.register(user),
  }

  function toggleFeature(featureName: keyof TestingSettingsType) {
    settings[featureName] = !settings[featureName]
  }

  return {
    testingEnabled,
    settings,
    auth,
    toggleFeature,
  }
})
