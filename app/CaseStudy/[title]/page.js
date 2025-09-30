'use client'
import React from 'react'
import { useRouter, useParams } from 'next/navigation'
import Case1 from './components/Case1';
import Case2 from './components/Case2';
import Case3 from './components/Case3';
import Case4 from './components/Case4';
import Case5 from './components/Case5';


const page = () => {
    const params = useParams();
    const title = params.title
    if (title == 'case1') {
        return <Case1 />
    }else if (title == 'case2'){
        return <Case2 />
    }else if (title == 'case3'){
        return <Case3 />
    }else if (title == 'case4'){
        return <Case4 />
    }else if (title == 'case5'){
        return <Case5 />
    }

    else {

        return (
            <div>
                hello
            </div>
        )
    }
}

export default page
