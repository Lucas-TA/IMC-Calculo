import { useState } from 'react'
import Header from './components/header/Header';
import Form from './components/form/Form';
import Result from './components/result/Result';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const calcIMC = () => {
    const newHeight = (height / 100) * (height / 100)
    const res = weight / newHeight
    const fixedRes = Math.round(res)
      if (fixedRes > 40) {
        return <span><b>IMC:</b> {fixedRes} <b>Classificação:</b> Obesidade Grau III</span>
      } else if (fixedRes >= 35.0 && res <= 39.9) {
        return <span><b>IMC:</b> {fixedRes} <b>Classificação:</b> Obesidade Grau II</span>
      } else if (fixedRes >= 30 && res <= 34.9) {
        return <span><b>IMC:</b> {fixedRes} <b>Classificação:</b> Obesidade Grau I</span>
      } else if (fixedRes >= 25 && res <= 29.9) {
        return <span><b>IMC:</b> {fixedRes} <b>Classificação:</b> Sobrepeso</span>
      } else if (fixedRes >= 18.6 && res <= 24.9) {
        return <span><b>IMC:</b> {fixedRes} <b>Classificação:</b> Normal</span>
      } else if (fixedRes <= 18.5) {
        return <span><b>IMC:</b> {fixedRes} <b>Classificação:</b> Abaixo do Normal</span>
      }
      return <span>IMC indisponível</span>;
  }
  return (
    <>
      <div className="main-container">
        <Header />
        <Form setWeight={setWeight} setHeight={setHeight}/>
        <Result weight={weight} height={height} calcIMC={calcIMC}/>
      </div>
    </>
  )
}

export default App
