import { FormEvent, useState } from 'react';
import logo from '../../public/icon/32.png'
import './App.css';

function App() {
  const [word, setWord] = useState("")

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!word.length) return;
    let url = `https://dictionary.cambridge.org/dictionary/english/${word}`;
    window.open(url, "_blank");
    setWord("")
    window.close();
  }

  return (
    <>
      <div>
        <nav>
          <div>
            <img width={32} height={32} src={logo} alt="cambridge dictionary icon" />
          </div>
          <div>The Cambridge Dictionary</div>
        </nav>
        <hr />
        <main>
          <form onSubmit={onSubmit}>
            <input type="text" value={word} onChange={(e) => setWord(e.target.value)} required />
            <div className='my-3'>
              <button type='submit'>search</button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

export default App;
