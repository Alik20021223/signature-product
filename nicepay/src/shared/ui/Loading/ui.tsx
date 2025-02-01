import LoadingAnimation from "@assets/Animation - loading.json";
import { useLottie } from "lottie-react";

export const Loading = () => {

    const options = {
        animationData: LoadingAnimation,
        loop: true
    }

    const { View } = useLottie(options)

    return (<>{View}</>)
}
