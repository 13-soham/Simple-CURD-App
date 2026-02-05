import React from 'react'

const Form = ({ Heading, setHeading, Photo, setPhoto, Text, setText, submitHandler, impHadler, imp, setimp}) => {
    return (
        <>
            <div className='m-15 w-1/4 h-1/2 bg-blue-300 p-7 rounded-md border-2 border-black'>
                <form onSubmit={(e) => submitHandler(e)} className='flex flex-col gap-5'>
                    <input value={Heading} onChange={(e) => setHeading(e.target.value)} className='px-3 py-2 outline-none border-b-2 border-emerald-800 text-xl' type="text" placeholder='Heading' />

                    <input value={Photo} onChange={(e) => setPhoto(e.target.value)} className='px-3 py-2 outline-none border-b-2  border-emerald-800' type="text" placeholder='Photo URL' />

                    <textarea value={Text} onChange={(e) => setText(e.target.value)} className='px-3 py-2 outline-none border-b-2  border-emerald-800' placeholder='write something' rows={4}></textarea>

                    <div className='flex items-center gap-2'><input type="checkbox" checked={imp} onChange={()=> setimp(!imp)} /> <p>mark as important</p></div>

                    <button className='px-3 py-5 text-center rounded-md border border-black bg-emerald-500 cursor-pointer active:scale-95 transition-all saturate-150 duration-150'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form;