"use client";
import React, { useState, useEffect } from 'react';
import FileInput from './fileInput';
import Image from 'next/image';
import XmlPostComponent from './xmlPost';

export default function Home() {

  const [title, setTitle] = useState('Experience the Power of Automation.');
  const titles = [
    'Simplify Your Workflow.',
    'Automate your tasks with ease.',
    'Streamline your workflow effortlessly.',
    'Your productivity partner.'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * titles.length);
      setTitle(titles[randomIndex]);
    }, 5000);

    return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // const [file1, setFile1] = useState('');
  // const [file2, setFile2] = useState('');

  // const handleFileChange = (newUrl: string, index: number) => {
  //   if (index === 1) {
  //     setFile1(newUrl);
  //   } else {
  //     setFile2(newUrl);
  //   }

  //   updateXmlFile(file1, file2);
  // };
  

  // const handleDownload = () => {
  //   openTerminalWithCurl('./app/fileXML/updatedXML/indesignDefault.xml');
  // };



  return (
    <main className=''>
        
      <div className='heroBlock'>

        <div className='heroBlockAside_l'>
          <div className='hLogo'>
            <Image src='../hogarthWordmark.svg' width={118} height={17} alt='hogarthWordmark'/>
          </div>
          <div className='bannerTitle'>
            <h2 className='fadeIn'>{title}</h2>
          </div>
        </div>
        
        <div className='heroBlockAside_r'>
        <div className='formBlock'>
          <div className='brandAutomation'>
          <Image src='/rolex_logo.png' width={128} height={71} alt='rolex_logo'/>

          </div>

    <div className='formTitle'>


        <h2>Rolex Automation</h2>
        <p>Upload your INDD & JSX Files to Automate</p>
        </div>
     
          <FileInput />
          <XmlPostComponent />
          {/* <button className='buttonCTA' onClick={handleDialogueClick}>Click to Automate</button> */}
          {/* <button className={styles.buttonBlock} onClick={handleDownload}>Open Terminal</button> */}
          {/* {showDialog && (
        <div className="dialog">
          <p>Thanks for your interest! <br />  Our innovation is inprogess.</p>
          <button onClick={handleDialogueClose} className='buttonCTA'>Close </button>
        </div>
      )} */}
        </div>
       
        </div>


      </div>
      <p className='copyText'>&#169; Hogarth Worldwide</p>
    </main> 
  );
}
