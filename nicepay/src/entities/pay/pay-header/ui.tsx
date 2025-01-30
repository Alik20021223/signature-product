

interface PayHeaderProps {
    name: string,
    price: string,
    comissia?: string
}

const PayHeader: React.FC<PayHeaderProps> = ({ name, price, comissia }) => {
    return (
        <>
            <div className="relative md:bg-white/60 dark:md:bg-white/10 md:rounded-2xl py-6 px-4 md:px-7 md:py-5 overflow-hidden mb-4">
                <div className="flex justify-between items-center">
                    <div className="text-center">
                        <div className="text-xl md:text-2xl leading-none font-bold text-black dark:text-white">
                            {name}
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-bold text-black dark:text-white leading-none">
                            {price}
                        </div>
                        {comissia ? <div className="text-xs text-black/30 dark:text-white/40 mt-2">
                            Комиссия: {comissia} ₽
                        </div> : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PayHeader