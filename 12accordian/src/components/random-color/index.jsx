import { useEffect, useState } from "react"




export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000')

    function handleCreateRandomRgbColor() {
        const r = Math.floor((Math.random() * 256) + 1)
        const g = Math.floor((Math.random() * 256) + 1)
        const b = Math.floor((Math.random() * 256) + 1)

        setColor(`rgb(${r},${g},${b})`)

    }

    function handleCreateRandomHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#'

        for (let i = 0; i < 6; i++) {

            hexColor += hex[Math.floor(Math.random() * hex.length)]

        }
        setColor(hexColor)
    }

    useEffect(() => {
        if (typeOfColor === 'rgb') handleCreateRandomRgbColor()
        else handleCreateRandomHexColor()
    }, [typeOfColor])




    return (
        <div style={
            {
                width: '100vw',
                height: '100vh',
                background: color,
                //margin: 0,
                //padding: 0,
            }
        }
        >
            <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>

            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>

            <button onClick={() => typeOfColor === 'hex' ? handleCreateRandomHexColor() : handleCreateRandomRgbColor()}>
                Generate Random Color</button>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: '#fff',
                fontSize: '60px',
                marginTop: '50px',
                flexDirection: "column",
                gap: '20px'

            }}>
                <h4>{typeOfColor === 'rgb' ? 'RGB Color' : 'Hex Color'}</h4>
                <h3>{color}</h3>
            </div>
        </div>
    )

}