import { useRouter } from "next/router"

const LandingN0 = () => {
    const router = useRouter();

    console.log("router -==>?", router)

    return (
        <div>
            <h1>Landing n0 == {router?.query?.n0}</h1>
        </div>
    )
};
export default LandingN0;