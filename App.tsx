import Layout from "./layouts";

function App() {
  const { initDarkMode } = useDarkMode();
  onMounted(() => initDarkMode())

  return (
    <NuxtLayout>
      <Layout>
        <NuxtPage />
      </Layout>
    </NuxtLayout>
  )
}

export default App;
