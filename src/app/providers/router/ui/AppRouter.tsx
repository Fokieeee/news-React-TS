import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routConfig } from "shared/config/routeConfig/routeConfig"

export const AppRouter = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Object.values(routConfig).map(({element, path}) => {
            <Route 
            key={path}
            path={path}
            element={element}
            />
          })}
        </Routes>
      </Suspense>
    </div>
  )
}
