import { useEffect, useState } from 'react'

const NotePage = () => {
    const [Heading, setHeading] = useState("");
    const [Photo, setPhoto] = useState("");
    const [Text, setText] = useState("");
    const [AllData, setAllData] = useState([]);
    function submitHandler(e) {
        e.preventDefault();
        let newData = [...AllData, { Heading, Photo, Text }];
        setAllData(newData);
        // console.log(newData);
        setHeading("");
        setPhoto("");
        setText("");
    }

    return (
        <div className='w-full min-h-[calc(100vh-170px)] flex justify-between bg-amber-200 mt-10'>
            <div className='m-15 w-1/4 h-1/2 bg-blue-300 p-7 rounded-md border-2 border-black'>
                <form onSubmit={(e) => submitHandler(e)} className='flex flex-col gap-5'>
                    <input value={Heading} onChange={(e) => setHeading(e.target.value)} className='px-3 py-2 outline-none border-b-2 border-emerald-800 text-xl' type="text" placeholder='Heading' />

                    <input value={Photo} onChange={(e) => setPhoto(e.target.value)} className='px-3 py-2 outline-none border-b-2  border-emerald-800' type="text" placeholder='Photo URL' />

                    <textarea value={Text} onChange={(e) => setText(e.target.value)} className='px-3 py-2 outline-none border-b-2  border-emerald-800' placeholder='write something' rows={4}></textarea>

                    <button className='px-3 py-5 text-center rounded-md border border-black bg-emerald-500 cursor-pointer active:scale-95 transition-all saturate-150 duration-150'>Submit</button>
                </form>
            </div>

            <div className='m-5 px-7 py-10 h-130 w-3/4 bg-gray-900 overflow-auto'>
                <h1 className='text-white text-3xl text-center mb-5'>Your Notes</h1>
                <div className='h-full w-full flex flex-wrap gap-5'>
                    {AllData.map((elem) => {
                        return <div className='h-72 w-72 bg-rose-300 rounded-md'>
                            <div className='m-2 h-40 rounded-md overflow-hidden bg-red-700'>
                                <img src={elem.Photo} alt="null" className='h-full w-full object-cover overflow-hidden'/>
                            </div>
                            <h1 className='text-2xl m-2 font-bold font-[poppins]'>{elem.Heading}</h1>
                            <p className='text-md m-2'>{elem.Text}</p>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}

export default NotePage;


// {
//     AllData.map((elem) => {
//         return <div className='w-72 bg-rose-300 rounded-md'>
//             <div className='m-2 h-40 rounded-md overflow-hidden bg-red-700'>
//                 {/* <img src={elem.Photo} alt="null" className='h-full w-full object-cover overflow-hidden'/> */}
//             </div>
//             <h1>{elem.Heading}</h1>
//             <p>{elem.Text}</p>
//         </div>
//     })
// }