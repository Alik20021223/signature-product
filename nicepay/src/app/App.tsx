import { usePayStore } from "@entities/pay/store"
import { RouterProvider } from 'react-router-dom';
// import { PayContent } from "@widgets/pay/pay-content/ui"
import { Suspense } from "react"
import { router } from "./router";

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
        </Suspense>
      </div>
    </>
  )
}

export default App
