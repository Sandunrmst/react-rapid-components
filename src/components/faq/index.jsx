import { useState } from "react"
import faqData from "./data"
import './styles.css'


const Faqs = () => {
    const [selected, setSelected] = useState(null)
    const singaleSelection = (getCurrentId)=>{
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }
  return (
    <div className="wrapper">
        <div className="faq">
        { faqData && faqData.length > 0 ? faqData.map(item => <div key={item.id} className="item">
            <div onClick={()=>singaleSelection(item.id)} className="title">
                <h3>{item.question}</h3>
                <span>+</span>
            </div>
            {selected === item.id ? (<div className="content">{item.answer}</div>) : null}
        </div>)
        : <div> No data </div> 
        }
        </div>
    </div>
  )
}

export default Faqs