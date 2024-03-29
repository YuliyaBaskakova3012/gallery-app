import { useEffect } from "react";

const AboutMe = () => {

  useEffect(()=>{
    document.title="Обо мне";
  })

  return (
    <div className="row" style={{ "height": "100%", "width": "100%", "margin": "0"}} >
      <div className="col-md-4" style={{"padding": "0px"}}/>
      <div className="col-sm-12 col-md-4" style={{"padding": "10px"}}>
        <div className="card" style={{"height": "100%"}}>
          <div className="card-body">
            <h3 className="card-title text-center">Юлия Баскакова</h3>
            <h4 className="text-center">Frontend разработчик</h4>
            <ul>
              <h5>Знания и навыки:</h5>
              <li>JavaScript (ES6)</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>React</li>
              <li>Redux</li>
              <li>Git</li>
              <li>TypeScript</li>
              <li>Понимание клиент-серверного взаимодействия</li>
              <li>Flexbox и Grid</li>
              <li>Препроцессоры Sass/SCSS</li>
              <li>Redux-Thunk</li>
              <li>Redux-Saga</li>
              <li>Настройка Webpack</li>
              <li>Next.js</li>
              <li>Axios</li>
              <li>Lodash</li>
            </ul>
            <p className="card-text"><strong>GitHub:</strong> <a href="https://github.com/YuliyaBaskakova3012">https://github.com/YuliyaBaskakova3012</a></p>
            <p className="card-text"><strong>Эл. почта:</strong> juliabaskakova3012@gmail.com </p>
          </div>
        </div>
      </div>
      <div className="col-md-4"/>
    </div>
  )
}

export default  AboutMe;
