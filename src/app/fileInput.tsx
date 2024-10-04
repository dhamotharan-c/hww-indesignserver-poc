"use client";

import React, { useState } from 'react';

interface FileInfo {
  name: string; 
  type: string; 
  filePath: string | null; 
}

export default function FileInput() {
  const [file1, setFile1] = useState<FileInfo | null>(null);
  const [file2, setFile2] = useState<FileInfo | null>(null);
  

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const selectedFile = event.target.files?.[0];
      if (selectedFile) {
        const reader = new FileReader();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        reader.onload = (e: ProgressEvent<FileReader>) => {
          const fileInfo: FileInfo = {
            name: selectedFile.name,
            type: selectedFile.type,
            filePath: URL.createObjectURL(selectedFile),
            // dataURL: e.target.result as string,
          };
          if (index === 1) {
            setFile1(fileInfo);
          } else {
            setFile2(fileInfo);
          }
          
          
          
        };
        reader.readAsDataURL(selectedFile);
      }
    };
 

  return (
    <div className="fileInputBlock">
            <div className="fileUpload">
          <input type="file" id="file-input-1" accept=".indd" className="upload" onChange={(event) => handleFileChange(event, 1)}/>
          <span>Load your inDesign File</span>
      </div>
      <p>Selected inDesign File: {file1?.name} </p>

      <div className="fileUpload">
          <input type="file" id="file-input-2" accept=".jsx" className="upload" onChange={(event) => handleFileChange(event, 2)}/>
          <span>Load your Script File</span>
      </div>
      <p>Selected Script File: {file2?.name}  </p>

      <div className="fileUpload">
        
          <input type="file" directory="" webkitdirectory="" multiple id="file-input-3" accept=""  className="upload" onChange={(event) => handleFileChange(event, 2)} />
          <span>Choose your Output Path</span>
      </div>
    <p></p>
    {/* <input directory="" webkitdirectory="" type="file" /> */}

      {/* <input type="file" id="file-input-1" accept=".jsx" />
      <p> Selected CSV File Name & Path:{file1?.name} / {file1?.filePath} </p>
      <input type="file" id="file-input-2" accept=".indd" />
      <p> File 2  Name & Path:{file2?.name} / {file2?.filePath} </p> */}
    </div>
  );
}