import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'

// const Loading = React.lazy(() => import('./components/Loading/index.jsx'))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/:name" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
)
