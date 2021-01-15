import Pattern from "../Icons/patterns/10X5";
import './footer.css';

export default function Footer (){
    return(
        <div class='footer'>
            <div class='row'>
                <div class='col-md ml-5 mt-5 footerbox'>
                </div>
                <div class='col-md ml-5 mt-5'>
                    <Pattern fill="#FFF" width="auto"/>
                </div>
                <div class='col-md footerbox p0'>
                </div>
            </div>
        </div>
    )
}