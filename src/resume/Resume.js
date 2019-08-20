import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import resumeFile from './resume2.pdf';
import { Button } from 'react-bootstrap';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends React.Component {
   state = {
    file: resumeFile,
    numPages: 0,
    pageNumber: 1
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
  nextPage = () => {
    const currentPageNumber = this.state.pageNumber;
    let nextPageNumber;
    if (currentPageNumber + 1 > this.state.numPages) {
      nextPageNumber = 1;
    } else {
      nextPageNumber = currentPageNumber + 1;
    }
    this.setState({
pageNumber: nextPageNumber
    });
  }

   previousPage = () => {
    const currentPageNumber = this.state.pageNumber;
    let previousPageNumber;
    if (currentPageNumber - 1 < this.state.numPages) {
      previousPageNumber = 1;
    } else {
      previousPageNumber = currentPageNumber -1;
    }
    this.setState({
pageNumber: previousPageNumber
    });
  }
   
 render() {
   const { pageNumber, numPages } = this.state;

   let button;
   if(pageNumber === 1){
     button = <Button onClick={this.nextPage}>Next</Button>;
   }
   else{
     button = <Button onClick={this.previousPage}>Prev</Button>;
   }
    
   return (
<div >
<br/> <br/> <br/><br/><br/><br/>
<div className="transbox">
<h1 className="title">Resume</h1>
</div>
<div className="resumeContainer">

     <Container>
       <br />
      {button}
       <Grid textAlign="center">
         <Grid.Column textAlign="center" onClick={this.nextPage}>
           <Document file={this.state.file} 
                     onLoadSuccess={this.onDocumentLoadSuccess} 
                     noData={<h4>No file to show</h4>}>
             <Page pageNumber={pageNumber} />
           </Document>
           {this.state.file ? <p>Page {pageNumber} of {numPages}</p> : null}
         </Grid.Column>
       </Grid>
       
     </Container>
     </div>
     </div>
   );
 }
}

export default Resume;
