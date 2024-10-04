"use client";

export default function XmlPostComponent() {
  const staticXmlFile = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soap="http://ns.adobe.com/InDesign/soap/"> <soapenv:Body> <soap:RunScript> <runScriptParameters><scriptLanguage>javascript</scriptLanguage> <scriptFile>/Volumes/HGPC_Digital_Test/AUTOMATION_REQUEST/InDesign_Server/Layer_Handling.jsx</scriptFile> <scriptArgs> <name>masterPath</name><value>/Volumes/HGPC_Digital_Test/AUTOMATION_REQUEST/InDesign_Server/Sample.indd</value> </scriptArgs> </runScriptParameters> </soap:RunScript> </soapenv:Body> </soapenv:Envelope>';

//   const staticXmlFile = './request_server.xml';

  const handleXMLSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('xmlFile', staticXmlFile);

      const response = await fetch('http://10.2.13.169:12345/service', {
        mode: 'no-cors',
        method: 'POST',
        body: formData,
        
      });

      if (response.ok) {
        alert('XML file uploaded successfully!');
      } 
      else {
        alert('Error uploading XML file.');
      }
    } catch (error) {
      alert('Thanks for automating.');
    }
  };
  

  return (
    <div className="cta_direct">
                  <button className="buttonCTA" onClick={handleXMLSubmit}>Click to Automate</button>

      {/* <button onClick={handleXMLSubmit}>Send XML</button> */}
    </div>
  );
};