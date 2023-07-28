import { useState } from "react"

export function Newtodo({onSubmit}) {
    const [newitem, setnewitem] = useState("")

    function handlesubmit(e) {
        e.preventDefault()
        if (newitem === "")
            return
        onSubmit(newitem)

        setnewitem("")
    }

    return (
        <form onSubmit={handlesubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input
                    value={newitem}
                    onChange={e => setnewitem(e.target.value)}
                    type="text" 
                    id="item"
                />
            </div>
            <button className="btn">Add</button>
        </form>
    )
}
