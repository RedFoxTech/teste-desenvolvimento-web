import Pattern from "../assets/patterns/30x5.png";
import './footer.css';

export default function Footer (){
    return(
        <div class='footer mt-2 mr-0'>
            <div class='row footerbox'>
                <div class='col-md ml-5 mt-5 footerbox'>
                </div>
                <div class='col-md ml-5 mt-5'>
                    <img src={Pattern} className={"patt-footer"} width="auto"/>
                </div>
                <div class='col-md footerbox p0'>
                </div>
            </div>
        </div>
    )
}