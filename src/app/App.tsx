import React, {FC, Suspense} from "react";
import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "./providers/router";
import './styles/index.scss'
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";


export const App: FC = () => {
    const {theme} = useTheme()

    return <div className={classNames('app', {}, [theme])}>
        <Suspense fallback=''>
            <Navbar />
            <div className='content-page'>
                <Sidebar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
}
