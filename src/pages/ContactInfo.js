import {poems} from "../poems"
import Link from "next/link";

export default function ContactInfo() {
    return (
    <div className="goudy">

        
        <div className="container flex flex-col text-2xl tracking-wider leading-relaxed">
             <p>Email: <a href="mailto:bobslaymaker@gmail.com">bobslaymaker@gmail.com</a></p>
             <p>Phone Number: +1-(646)-925-2509</p> 
        </div>
        
    </div>)
}