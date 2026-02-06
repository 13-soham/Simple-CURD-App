import { useEffect, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import NoteCard from '../components/NoteCard';
import Form from '../components/Form';

const NotePage = () => {
    const [Heading, setHeading] = useState("");
    const [Photo, setPhoto] = useState("");
    const [Text, setText] = useState("");
    const [AllData, setAllData] = useState(JSON.parse(localStorage.getItem("myNotes")) || []);
    const [EditId, setEditId] = useState(null);
    const [isExpand, setisExpand] = useState(null);
    const [imp, setimp] = useState(false);

    useEffect(()=>{
        localStorage.setItem("myNotes", JSON.stringify(AllData));
    }, [AllData]);

    function submitHandler(e) {
        e.preventDefault();
        if(Heading.trim() === "" ){
            alert("Enter Proper Heading");
            return;
        }
        if(EditId){
            // means updation happning
            let updateData = [...AllData];
            updateData[EditId] = { Heading, Photo, Text, imp };
            setAllData(updateData);
            setEditId(null);
        }
        else{
            let newData = [...AllData, { Heading, Photo, Text, imp }];
            setAllData(newData);
        }
        // console.log(newData);
        setHeading("");
        setPhoto("");
        setText("");
    }

    function toggle(id){
        // starting val is null as isExpand is null, so else statement runs 1st
        // later on when we again clicks there now val == id, and if statement runs and close the expand portion
        setisExpand(val => (val === id ? null : id));
    }

    function deleteHandler(id){
        let newData = [...AllData];
        newData.splice(id, 1);
        setAllData(newData);
    }

    function editHandler(id){
        let data = AllData[id];
        setHeading(data.Heading);
        setPhoto(data.Photo);
        setText(data.Text);

        setEditId(id);
    }

    return (
        <div className='w-full min-h-[calc(100vh-170px)] flex justify-between bg-amber-200 mt-10'>
            <Form 
                submitHandler={submitHandler}
                Heading={Heading}
                setHeading={setHeading}
                Photo={Photo}
                setPhoto={setPhoto}
                Text={Text}
                setText={setText}
                imp={imp}
                setimp={setimp}
            />

            <div className='m-5 px-7 py-10 h-130 w-3/4 bg-gray-900 overflow-auto scrollbar-hide'>
                <h1 className='text-white text-3xl text-center mb-5'>Your Notes</h1>
                <div className='h-full w-full flex flex-wrap gap-5'>

                    {AllData.map((elem, idx) => (
                        // ()=>() means implicit return
                        <NoteCard 
                            elem={elem} 
                            key={idx}
                            idx={idx}
                            isExpand={isExpand}
                            setisExpand={setisExpand}
                            toggle={toggle}
                            editHandler={editHandler}
                            deleteHandler={deleteHandler}
                            imp={imp}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default NotePage;