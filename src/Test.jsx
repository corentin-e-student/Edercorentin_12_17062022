import useUser from "./hooks/useUser";


function Test() {
    const { data, isSuccess } = useUser()

    console.log(isSuccess)
    console.log(data)

    return (

        <div>
            <span> API</span>

            {isSuccess &&
            <div>
                <span>{data.data.userInfos.firstName}</span>
                -
                <span>{data.data.userInfos.lastName}</span>
            </div>
            }

        </div>
    );
}

export default Test;
