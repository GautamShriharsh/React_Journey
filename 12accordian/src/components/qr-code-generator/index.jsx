import { useState } from "react"
import { QRCode } from 'react-qr-code'
import './styles.css'


export default function QRCodeGenerator() {

    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')

    function handleGenerateQRCode(){
        setQrCode(input)
        setInput('')
    }
    
    
    return (
        <div className="qr-container">
            <h1>QR Code Generator</h1>
            <div>
                <input onChange={(e) => setInput(e.target.value)}
                    type="text" name="qr-code" 
                    value={input}
                    placeholder="Enter your value here" />
                <button
                    disabled={input && input.trim() !== '' ? false : true}
                    onClick={() => handleGenerateQRCode()}
                >Generate</button>
            </div>
            <div>
                <QRCode
                    id="qr-code-value"
                    value={qrCode}
                    size={400}
                    bgColor='#fff'
                />
            </div>
        </div>
    )
}