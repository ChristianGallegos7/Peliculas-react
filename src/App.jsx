import styles from './App.module.css'
import Movies from './Movies'
function App() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Movies</h1>
      </header>
      <main>
        <Movies/>
      </main>
    </div>
  )
}

export default App
