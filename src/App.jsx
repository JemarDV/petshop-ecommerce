import Logo from './components/Logo.jsx'

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 p-6 text-center">
      <h1 className="text-5xl">
        <Logo />
      </h1>
      <p className="text-slate-600">Todo para tu mascota, en un solo lugar 🐾</p>
    </main>
  )
}

export default App
