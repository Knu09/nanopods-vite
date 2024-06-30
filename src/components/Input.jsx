const Input = () => {
    return (
        <label htmlFor="name" className="block w-full mb-5">
            <input
                className="block w-full py-3 px-8 rounded-md border border-[#21212199] focus:ring-1 focus:ring-primary-black bg-transparent"
                id="name"
                placeholder="Name"
                type="text"
            />
        </label>
    )
}

export default Input
