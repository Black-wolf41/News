import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import MakeNews from "./components/MakeNews-com";
//import Done from "./components/Done-com";
//import Footer from "./components/Footer-com";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

const title = <nav class="navbar navbar-dark bg-dark">
                    <form class="form-inline">
                        <a class="navbar-brand"  href="#">Главная</a>
                        <a class="navbar-brand" href="#">Блог Компании</a>
                        <a class="navbar-brand" href="#">Что-то</a>
                        <a class="navbar-brand" href="#">Ещё что-то</a>
                        <a class="navbar-brand" href="#">Регистрация</a>
                        <a class="navbar-brand">/</a>
                        <a class="navbar-brand" href="#">Авторизация</a>
                    </form>
              </nav>
const hr =  <footer class="page-footer font-small bg-dark text-white">
                <div class="footer-copyright text-center py-3">© 2020 Copyright: ПАО "Утконосий бог"
                </div>
            </footer>
const dataToNews = [
    {text: "родился", bol: false, type: "radio"},
    {text: "умер", bol: false, type: "radio"},
    {text: "воскрес", bol: false, type: "radio"},
    {text: "умер снова", bol: false, type: "radio"},
];

const dataToDONE = [
    {type: "checkbox", text: "Зеленский"},
    {type: "checkbox", text: "Трамп"},
    {type: "checkbox", text: "Путин"},
    {type: "checkbox", text: "Лукашенко"},
];
const el = (
        <div>
            {title}
            <MakeNews dataNews={dataToNews}/>
            {hr}
        </div>
    )
ReactDOM.render(el, document.getElementById("root"));