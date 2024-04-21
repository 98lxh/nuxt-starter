// import { NuxtLayout, NuxtPage } from "~/composables/nuxt"

function App() {
  const { initDarkMode } = useDarkMode()
  onMounted(() => initDarkMode())

  return (
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  )
}

export default App;
