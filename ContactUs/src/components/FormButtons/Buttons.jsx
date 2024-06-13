import "./Buttons.css"


function Buttons(){

    function viaCall() {
        console.log("i am on the call button");
    
      }
      function viaEmail(){
        console.log("I am on the Email button");
      }
    return(

        <div className="btns">
            <div className="btn1">
        
                <button type="button" id="callbtn" onClick={viaCall}>Via Phone</button>
                <button type="button" onClick={viaEmail}>Via Email</button>
                
            </div>
            <div className="btn2">
                <button > Via Contact Form</button>
            </div>
        </div>
    )
}

export default Buttons