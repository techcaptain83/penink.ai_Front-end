export default function NotFound(){
    return(
        <div>
            <div className="w-fit mx-auto py-10 text-center" >

            <h1 className="text-4xl font-bold">Page not found!</h1>
            <p className="text-blackish">It seems like this page doesn't exist</p>
            <button className="text-white py-3  px-6 bg-primary  rounded-md mt-10" onClick={() =>  history.back()}>Go back</button>
            </div>

        </div>
    )

}