import React, {FC, Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";

import './styles/index.scss'
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";
export const App: FC = () => {
    const {theme, toggleTheme} = useTheme()

    return <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>
            Toggle
        </button>
        <Link to='/'>Главная</Link>
        <Link to='/about'>О сайте</Link>
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                <Route path={'/about'} element={<AboutPageLazy />} />
                <Route path={'/'} element={<MainPageLazy />}></Route>
            </Routes>
        </Suspense>
    </div>
}
