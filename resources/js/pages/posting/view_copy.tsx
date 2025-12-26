import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import 'D:/Laravel/solar/resources/css/stylesaya.css'
import React, { useState,useEffect, useRef } from 'react';
import { FaFilter,FaPlus,FaTimes } from 'react-icons/fa'; // Import ikon filter
// import FilterPost from '@/components/filterPostsdasdaswas';
import { router } from '@inertiajs/react'


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'View Posting',
        href: '/posting/view',
    },
];

interface User {
    id: number;
    name: string;
  }
  
interface Posting {
    id_posting: number;
    content: string;
    created_at: string;
    user: User;
    description: string;
    category: string[];
  }
  
export default function viewPost({postings}: {postings: Posting[]}) {
    const [showPage, setShowPage] = useState(false);
    const [activePage, setActivePage] = useState(null);
    const pageRef =useRef<HTMLDivElement | null>(null);

    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const filterButtonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
        if (
            pageRef.current &&
            !pageRef.current.contains(e.target as Node) 
        ) {
            setActivePage(null);
        }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };

}, []);


    return (
      <AppLayout breadcrumbs={breadcrumbs}>
        {/* <Head title="Daftar Postingan"></Head> */}


          <div className="container">

            <div className='container-header'>
              <h1 className='header-title'>Daftar Postingan</h1>
              <div className='header-tool'>
                <div className="tooltip-wrapper" data-tooltip="Filter Data">
                  <button ref={filterButtonRef} className="filter-button" onClick={() => setActivePage("filter")}>
                  <FaFilter/> 
                  </button>
                </div>

                {/* <Link href="/posting/createPosting"> */}
                  <div className="tooltip-wrapper" data-tooltip="Add New Data" onClick={()=>setActivePage("add")}>
                    <button className ="add-button" >
                    <FaPlus/>
                    </button>
                  </div>
                {/* </Link> */}
            </div> 
            </div>   
            
                        {activePage && (
                <div ref={pageRef} className="drop-down-action">
                    {activePage === "obat" && <p>Page Obat</p>}
                    {activePage === "alat" && <p>Page Alat</p>}
                </div>
            )}

            {
              <div className='container-content'>
                <div className='post-grid'>
                  {postings.map((post) => (
                    <div key={post.id_posting} className='card'>
                      <div className='card-header'>
                      Diposting o/leh <strong>{post.user.name}</strong> pada{' '}
                      {new Date(post.created_at).toLocaleString()}
                      </div>
                      <div className='card-body'>
                        <p>deskripsi : <strong>{post.description}</strong></p>
                        <p>Category : {(post.category)}</p>
                      </div>
                    </div>
                  ))
                  }
                </div>

              </div>
            }
        </div>
        
        
      </AppLayout>
    );


    
  }
