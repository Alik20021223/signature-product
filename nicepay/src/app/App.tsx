import { usePayStore } from "@entities/pay/store"
import { RouterProvider } from 'react-router-dom';
import { Suspense } from "react"
import { router } from "./router";
import { Toaster } from "@shadcn/Sonner/sonner";
import { Info, ShieldAlert, TriangleAlert, Zap } from 'lucide-react';

function App() {

  const { activeLang } = usePayStore()

  return (
    <>
      <div
        dir={activeLang.tag === 'ae' ? 'rtl' : 'ltr'}
        className="mx-auto max-w-2xl mb-14 sm:mb-0 min-h-screen"
      >
        <Suspense fallback={null}>
          <RouterProvider router={router} />
          <Toaster
            position='top-right'
            closeButton
            icons={{
              success: <Zap className='text-green-500' size={16} />,
              info: <Info className='text-blue-500' size={16} />,
              warning: <TriangleAlert className='text-yellow-600' size={16} />,
              error: <ShieldAlert className='text-red-500' size={16} />,
            }}
          />
        </Suspense>

      </div>
    </>
  )
}

export default App
