import React from 'react'

const NoteCard = ({ elem, idx, isExpand, setisExpand, editHandler, deleteHandler, toggle}) => {
    return (
        <>
            <div key={idx} className={`min-h-72 h-fit w-72 ${elem.imp ? "border-2 border-blue-500 shadow-lg bg-rose-400" : "bg-rose-300"} rounded-md`}>
                <div className='m-2 flex items-center justify-end gap-3'>
                    <i onClick={() => editHandler(idx)} className="ri-pencil-line text-xl"></i>
                    <i onClick={() => deleteHandler(idx)} className="ri-delete-bin-line text-xl"></i>
                </div>
                <div className='m-2 h-44 rounded-md overflow-hidden bg-red-700'>
                    <img src={elem.Photo || "https://plus.unsplash.com/premium_photo-1765617563207-e844930b8308?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"} alt="null" className='h-full w-full object-cover overflow-hidden' />
                </div>
                <h1 className='text-3xl m-2 font-bold font-[poppins]'>{elem.Heading}</h1>
                <div onClick={() => toggle(idx)} className='flex m-2 items-center justify-end'>
                    {idx === isExpand ? (
                        <div className={`h-40 w-full ${elem.imp ? "shadow-lg bg-rose-400" : "bg-rose-300"} overflow-auto scrollbar-hide`}>
                            <div onClick={(e) => {
                                e.stopPropagation();
                                setisExpand(null);
                            }} className='flex m-2 items-center justify-end'><i className="ri-skip-up-line text-2xl"></i></div>
                            <p className='text-md m-2'>{elem.Text ? elem.Text : "No description avalible"}</p>
                        </div>
                    ) : (
                        <i className="ri-skip-down-line text-2xl"></i>
                    )}
                </div>
            </div>
        </>
    )
}

export default NoteCard