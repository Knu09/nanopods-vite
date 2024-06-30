import Input from "./Input"
import Button from "./Button"
const Contact = () => {
    return (
        <div className="flex flex-col items-center text-center container max-w-[500px] mx-auto py-20 px-5 text-primary-black">
            <h1 className="font-poppins font-bold max-sm:text-3xl text-5xl">
                Stay in touch
            </h1>
            <p className="my-5 max-sm:my-5 text-md">
                Subscribe to our newsletter so we can spam you with offers and
                discounts
            </p>
            <Input />
            <Input />
            <Button text={'GET STARTED'} />
        </div>
    )
}

export default Contact
