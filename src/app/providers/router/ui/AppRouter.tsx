import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                          <Suspense fallback={<div>Загрузка</div>}>
                            <div className='page-wrapper'>
                              {element}
                            </div>
                          </Suspense>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

