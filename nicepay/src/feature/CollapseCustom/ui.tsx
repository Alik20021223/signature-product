import React from "react"
import { CollapseCustomTypes } from "@entities/pay/types";
import { BorrowLeft } from "@assets/BorrowLeft";

interface CollapseCustomProps {
    data: CollapseCustomTypes
}


export const CollapseCustom: React.FC<CollapseCustomProps> = ({data}) => {

    const [openCollapse, setOpenCollapse] = React.useState<boolean>(false)

    return (
        <>
            <div className="mb-3">
                <div onClick={() => setOpenCollapse(!openCollapse)} className={`${openCollapse ? 'rounded-t-2xl' : 'rounded-2xl'} flex items-center justify-between text-black dark:text-white bg-amber-400/20 border border-amber-400 px-4 font-semibold py-3 cursor-pointer`}>
                    <div>{data.titleCollapse}</div>
                    <BorrowLeft/>
                </div>
                {openCollapse ? <div className="bg-amber-400/10 rounded-b-2xl text-black dark:text-white text-sm px-4 font-bold py-5 mb-3">
                    <div className="mb-5">Откройте приложение Вашего банка</div>
                    <div className="space-y-2">
                        <div>1. {data.method_1}</div>
                        <div>2. {data.method_2}</div>
                        <div>3. {data.method_3}</div>
                    </div>
                    <div className="mb-5">4. Введите сумму → Перевести</div>
                    <div>Перевод будет отправлен аналогично переводу в другой банк!</div>
                </div> : null}
            </div>
        </>
    )
}
