import React, {useState} from 'react'
import './Main.css';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
const Main = () => {

    const [symbol, setSymbol] = useState('')
    const [symbolName, setSymbolName] = useState('')
    const [tableSym, setTableSym] = useState("")
    const [tableSymName, setTableSymName] = useState("")
    const [cartArray, setCartArray] = useState([])


    const handleSumit = (e) =>{
        e.preventDefault()
        console.log(cartArray.length)
        let cart = {}
        cart.srNo = cartArray.length +1
        cart.sym = symbol;
        cart.symName = symbolName;
        
        cartArray.push(cart)

        console.log('sucessss')
        setSymbolName("")
        setSymbol("")
    }


    return (
        <div className='main'>
            {/* header */}
            <div className="main__header">
                <SearchIcon />
                <h6>Search transactions, invoices or help</h6>
            </div>

            
            <div className="main__body">
                {/* input */}
                <div className="main__input">
                    <div className="main__inputHeader">
                        <h5>Unit Master</h5>
                    </div>

                    <div className="main__inputForm">
                        <form >
                            <div className="main__FormInput1">
                                <label htmlFor="Symbol">Symbol</label>
                                <input value={symbol} onChange={(e) => setSymbol(e.target.value)} />
                            </div>
                            <div className="main__FormInput2">
                                <label htmlFor="FormalName">Formal name</label>
                                <input value={symbolName} onChange={(e) => setSymbolName(e.target.value)} />
                            </div>
                            <div className='main__FormButton'>
                                <button  type="submit" onClick={handleSumit}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* output */}
                <div className="main__output">

                    <div className="main__inputHeader">
                        <h5>Unit List</h5>
                    </div>


                    <div className='main__outputTable'>
                        <div className="main__outputTableHeader">
                            <div className="div1">sr no </div>
                            <div className="div2">Symbol</div>
                            <div className="div3">Formal Name</div>
                            <div className="div4">Actions</div>
                        </div>

                            {cartArray.map((item) => (
                                <div className="main__outputTableContent">
                                    <div className="div1">{item.srNo}</div>
                                    <div className="div2">{item.sym}</div>
                                    <div className="div3">{item.symName}</div>
                                    <div className="div4"><DeleteIcon /></div>
                                </div>
                            ))}

                    </div>



                    {/* {cartArray.map((item) => (
                        <div>
                            <h5>{item.srNo}</h5>
                            <h5>{item.sym}</h5>
                            <h5>{item.symName}</h5>
                        </div>
                    ))}
                     */}
                </div>
                
                <h4>{console.log(cartArray)}</h4>


            </div>
        </div>
    )
}

export default Main

