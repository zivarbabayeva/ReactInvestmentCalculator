import { useState } from "react"
export default function UserInput({formData,onChange}) {
    
    return
    <section id="user-input">
        <div className="input-group" >
            <div>
                <label>Initial Investment</label>
                <input type="number" value={formData.initialInvestment} onChange={(event)=>onChange("initialInvestment",event.target.value)} />
            </div>
            <div>
                <label>Annual Investment</label>
                <input type="number" value={formData.annualInvestment} onChange={(event)=>onChange("annualInvestment",event.target.value)} />
            </div>
        </div>
        <div className="input-group" >
            <div>
                <label>ExpectedReturn</label>
                <input type="number" value={formData.expectedReturn} onChange={(event)=>onChange("expectedReturn",event.target.value)} />
            </div>
            <div>
                <label>duration</label>
                <input type="number" value={formData.duration} onChange={(event)=>onChange("duration",event.target.value)}/>
            </div>
        </div>
    </section>
}