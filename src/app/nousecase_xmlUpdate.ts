import xml2js from 'xml2js';
import fs from 'fs';
// import FileInput from './fileInput';


export default function updateXmlFile(file1: string, file2:string) {
  const parser = new xml2js.Parser();
  const builder = new xml2js.Builder();

  parser.parseString('../app/fileXML/indesignDefault.xml', (err, result) => {
    if (err) {
      console.error('Error parsing XML:', err);
      return;
    }

    const elementToUpdate1 = result.root.scriptFile[0];
    elementToUpdate1.url = {file1};
    console.log(elementToUpdate1.url);
    const elementToUpdate2 = result.root.value[0];
    elementToUpdate2.url = {file2};
    console.log(elementToUpdate2.url);


    const updatedXml = builder.buildObject(result);

    fs.writeFileSync('../app/fileXML/updatedXML/indesignDefault.xml', updatedXml, 'utf-8');
  });
};
