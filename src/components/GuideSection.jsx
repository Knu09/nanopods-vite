export function GuideSection() {
    return (
        <div className="container max-w-[1000px] mx-auto pt-12 px-5">
            <div className="bg-[#f5f5f5] py-8 px-10 max-sm:px-5 rounded-lg shadow-[4px_5px_6px_0_rgba(0,0,0,.4)]">
                {/*  GUIDE SECTION HEADER  */}
                <div className="text-primary-black">
                    <h2 className="uppercase font-poppins font-semibold text-upperHeader">Effortless Usability</h2>
                    <h1 className="font-poppins font-bold max-sm:text-3xl text-5xl">How to Use</h1>
                </div>
                {/* GUIDE SECTION VIDEO */}
                <div className="py-8">
                    <iframe className=" aspect-video w-full" src="https://www.youtube.com/embed/gacaNEgEfSQ?si=HJlmU-drpoq2eUNy"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                {/* GUIDE SECTION DETAILS */}
                <article className="leading-8 max-sm:text-start">
                    <p className="">Using <b>NanoPods</b> has a 3 quick steps. Follow these easy steps to get started:</p>
                    <ol role="list" className="list-decimal pl-5 my-5">
                        <li><b>Connect</b>: Open the charging case near your device and wait for the pop-up to appear. Tap "Connect" and you're ready to go.</li>
                        <li><b>Control</b>: Use the intuitive touch controls on the NanoPods to play, pause, skip tracks, and answer calls. Customize your settings in the Bluetooth menu.</li>
                        <li><b>Charge</b>: Place your NanoPods back in the case for a quick charge. The LED indicator will show you the battery status.</li>
                    </ol>
                    <p>With these steps, you' re all set to enjoy the exceptional audio experience that <b>NanoPods</b> provide.</p>
                </article>
            </div>
        </div>
    )
}